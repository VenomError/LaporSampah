<?php

namespace App\Http\Controllers\Dashboard;

use App\Enum\UserRole;
use App\Http\Controllers\Controller;
use App\Models\Incentive;
use App\Models\User;
use Illuminate\Http\Request;

class MasterDataController extends Controller
{
    public function admin()
    {
        return inertia('Dashboard/MasterData/Admin');
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
        $query->when($request->is_active, fn($q) => $q->where('is_active', $request->is_active));
        $query->orderBy('is_active', 'desc');
        $incentives = $query->get();

        return response()->json($incentives);
    }
}
