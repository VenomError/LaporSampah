<?php

namespace App\Http\Controllers\Dashboard;

use App\Enum\UserRole;
use App\Http\Controllers\Controller;
use App\Models\Incentive;
use App\Models\User;
use App\Repository\UserRepository;
use Illuminate\Http\Request;

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
            'password' => 'required'
        ]);
        try {
            $userRepo->addAdmin($userData);
            flash()
                ->option('position', 'bottom-right')
                ->success('Berhasil Menambahkan Admin');

            return back();
        } catch (\Throwable $th) {
            flash()
                ->option('position', 'bottom-right')
                ->error('Gagal Menambahkan Admin');
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
            flash()
                ->option('position', 'bottom-right')
                ->success('Berhasil Menghapus Admin');
            return back();
        } catch (\Throwable $th) {
            flash()
                ->option('position', 'bottom-right')
                ->error('Gagal Menghapus Admin');
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
        $query->when($request->created_at, fn($q) => $q->whereDate('created_at', $request->created_at));
        // filter status
        if ($request->filled('is_active')) {
            $query->where('is_active', $request->is_active);
        }
        $query->orderBy('is_active', 'desc');
        $incentives = $query->get();

        return response()->json($incentives);
    }
}
