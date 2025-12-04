<?php

namespace App\Http\Controllers;

use App\Models\PointHistory;
use App\Models\PointReedmtion;
use App\Repository\IncentiveRepository;
use Inertia\Inertia;
use App\Models\PickUp;
use App\Models\Incentive;
use App\Enum\PickUpStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MemberController extends Controller
{
    public function home()
    {
        $pickups = PickUp::with([
            'location',
        ])
            ->where('member_id', auth()->user()->member->id)
            ->latest()
            ->get()
            ->take(5);
        $hasNotifications = auth()->user()->unreadNotifications()->exists();
        return inertia('Member/Index', [
            'pickups' => $pickups,
            'hasNotifications' => $hasNotifications
        ]);
    }
    public function profile()
    {
        return inertia('Member/Profile');
    }

    public function history()
    {
        $member = Auth::user()->member;
        $pickups = $member->pickups()->with(['location'])->latest()->paginate();
        $changeIncentive = $member->reedemtions()->with(['incentive'])->latest()->paginate();
        $pointHistory = $member->pointHistories()->with(['type'])->latest()->paginate();
        return Inertia::render('Member/PickUpHistory', [
            'pickups' => Inertia::scroll(fn() => $pickups),
            'changeIncentives' => Inertia::scroll(fn() => $changeIncentive),
            'pointHistories' => Inertia::scroll(fn() => $pointHistory),
        ]);
    }
    public function change()
    {
        $query = Incentive::orderBy('point_required')->active();

        if (request()->filled('search')) {
            $search = request('search');
            $query->where('name', 'like', "%{$search}%");
        }

        $incentives = $query->paginate()->withQueryString();

        return inertia('Member/ChangePoint', [
            'incentives' => inertia()->scroll(fn() => $incentives),
            'filters' => request()->only('search'),
        ]);
    }

    public function editProfile()
    {
        return inertia('Member/Setting/EditProfile');
    }

    public function updateProfile(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'phone' => 'required',
        ]);

        $member = Auth::user()->member;
        $member->fill($data);
        $member->save();

        return back()->with('message', 'Update Sukses');
    }

    public function location()
    {
        $locations = auth()->user()->member->locations;
        return inertia('Member/Setting/Location', [
            'locations' => $locations
        ]);
    }

    public function locationAdd(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'address' => 'required',
        ]);

        $member = auth()->user()->member;
        $member->locations()->create($data);

        return back()->with('success', 'Data Lokasi Berhasil di Tambah');
    }

    public function changeIncentive(Request $request)
    {
        $request->validate([
            'incentive_id' => 'required|exists:incentives,id'
        ]);
        $incentive = Incentive::find($request->incentive_id);
        $member = Auth::user()->member;
        try {
            $repo = new IncentiveRepository();
            $repo->reedemed($incentive, $member);
            return back()->with('success', 'Berhasil Tukar Point');
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function changeDetail(PointReedmtion $pointReedemtion)
    {
        $pointReedemtion->load(['incentive']);
        return inertia('Member/ChangeDetail', compact('pointReedemtion'));
    }

    public function pointHistoryDetail(PointHistory $pointHistory)
    {
        if ($pointHistory->type_type == "App\\Models\\PointReedmtion") {
            return redirect()->route('change.detail', ['point_reedemtion' => $pointHistory->type_id]);
        } else {
            return redirect()->route('pickup.detail', ['pickup' => $pointHistory->type_id]);
        }
    }

}
