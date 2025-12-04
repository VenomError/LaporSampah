<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return inertia('Dashboard/Index');
    }
    public function pointReedemtion()
    {
        return inertia('Dashboard/PointReedemtion');
    }

    public function pickupLocation()
    {
        return inertia('Dashboard/PikcupLocation');
    }

    public function memberLocation()
    {
        return inertia('Dashboard/MemberLocation');
    }
}
