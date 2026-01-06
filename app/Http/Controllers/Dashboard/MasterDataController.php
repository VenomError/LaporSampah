<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Operator;
use App\Models\User;
use App\Enum\UserRole;
use App\Models\Member;
use App\Models\Incentive;
use Illuminate\Http\Request;
use App\Repository\UserRepository;
use App\Http\Controllers\Controller;

class MasterDataController extends Controller
{
    public function admin()
    {
        return inertia('Dashboard/MasterData/Admin');
    }

    public function adminAdd(Request $request, UserRepository $userRepo)
    {
        $userData = $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
        ]);
        try {
            $userRepo->addAdmin($userData);
            flash()->option('position', 'bottom-right')->success('Berhasil Menambahkan Admin');

            return back();
        } catch (\Throwable $th) {
            flash()->option('position', 'bottom-right')->error('Gagal Menambahkan Admin');
            return back();
        }
    }

    public function adminEdit(Request $request, User $user, UserRepository $userRepo)
    {
        $data = $request->validate([
            'email' => 'required|email|unique:users,email,' . $user->id,
            'password' => 'nullable',
        ]);
        try {
            $userRepo->update($user, $data);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    public function adminRemove(User $user, UserRepository $userRepo)
    {
        try {
            $userRepo->remove($user);
            flash()->option('position', 'bottom-right')->success('Berhasil Menghapus Admin');
            return back();
        } catch (\Throwable $th) {
            flash()->option('position', 'bottom-right')->error('Gagal Menghapus Admin');
            return back();
        }
    }

    public function operator()
    {
        return inertia('Dashboard/MasterData/Operator');
    }

    public function member()
    {
        return inertia('Dashboard/MasterData/Member');
    }

    public function incentive()
    {
        return inertia('Dashboard/MasterData/Incentive');
    }

    public function getListData(Request $request, UserRole $role = null)
    {
        $query = User::query();

        $query->when($role, fn($q) => $q->whereRole($role));

        // Filter by created_at
        $query->when($request->created_at, function ($q) use ($request) {
            $q->whereDate('created_at', $request->created_at);
        });

        // Filter by status
        $query->when($request->status, function ($q) use ($request) {
            $q->where('status', $request->status);
        });

        $users = $query->latest()->get();

        return response()->json($users);
    }

    public function getListIncentive(Request $request)
    {
        $query = Incentive::query();

        // filter date
        $query->when(
            $request->created_at,
            fn($q) => $q->whereDate('created_at', $request->created_at),
        );
        // filter status
        if ($request->filled('is_active')) {
            $query->where('is_active', $request->is_active);
        }
        $query->orderBy('is_active', 'desc');
        $incentives = $query->get();

        return response()->json($incentives);
    }

    public function memberDetail(Member $member)
    {
        // Ambil riwayat penjemputan khusus member ini
        $pickups = \App\Models\Pickup::where('member_id', $member->id)
            ->with('operator')
            ->latest()
            ->get();
        return inertia('Dashboard/MasterData/MemberDetail', [
            'member' => $member,
            'pickups' => $pickups,
            'stats' => [
                'total_weight' => $pickups->where('status', 'completed')->sum('weight'),
                'total_pickups' => $pickups->count(),
                'total_points' => $member->point,
            ],
        ]);
    }

    public function operatorDetail(Operator $operator)
    {
        $operator->load('account');
        // Ambil riwayat penjemputan yang ditugaskan ke operator ini
        $pickups = \App\Models\Pickup::where('operator_id', $operator->id)
            ->with('member')
            ->latest()
            ->get();

        return inertia('Dashboard/MasterData/OperatorDetail', [
            'operator' => $operator,
            'pickups' => $pickups,
            'stats' => [
                'total_completed' => $pickups->where('status', 'completed')->count(),
                'total_weight' => $pickups->where('status', 'completed')->sum('weight'),
                'total_assigned' => $pickups->count(),
            ],
        ]);
    }
}
