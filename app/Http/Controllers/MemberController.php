<?php

namespace App\Http\Controllers;

use App\Enum\PickUpStatus;
use App\Models\PickUp;
use Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;

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
        return inertia('Index', [
            'pickups' => $pickups
        ]);
    }
    public function profile()
    {
        return inertia('Profile');
    }

    public function history()
    {
        $query = PickUp::query();
        $query->with([
            'location',
        ]);
        $query->where('member_id', auth()->user()->member->id);
        $query->latest();

        $counts = [];

        foreach (PickUpStatus::cases() as $status) {
            $counts[$status->value] = [
                'color' => $status->color(),
                'count' => (clone $query)
                    ->byStatus($status)
                    ->count(),
            ];
        }
        return Inertia::render('PickUpHistory', [
            'pickups' => Inertia::scroll(fn() => (clone $query)->paginate()),
            'counts' => $counts,
            'all' => (clone $query)->count()
        ]);
    }
    public function change()
    {
        return inertia('ChangePoint');
    }

    public function editProfile()
    {
        return inertia('Setting/EditProfile');
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
        return inertia('Setting/Location', [
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

}
