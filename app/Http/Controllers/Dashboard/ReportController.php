<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function pickupReport()
    {
        return inertia('Dashboard/Report/PickupReport');
    }

    public function pointReedemtionReport()
    {
        return inertia('Dashboard/Report/PointReedemtionReport');
    }
}
