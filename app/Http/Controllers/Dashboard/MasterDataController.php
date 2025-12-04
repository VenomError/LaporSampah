<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
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
}
