<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PickupController extends Controller
{
    public function pickupList()
    {
        return inertia('Dashboard/Pickup/PickupList');
    }

    public function status($status)
    {
        return inertia('Dashboard/Pickup/PickupStatus');
    }
}
