<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Member;
use App\Models\Location;
use App\Models\PickUp;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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


    public function pickupLocation(Request $request)
    {
        $locations = Location::with('owner')
            ->where('owner_type', PickUp::class)
            ->when($request->status, function ($q) use ($request) {
                $q->whereHasMorph(
                    'owner',
                    [PickUp::class],
                    fn($q) => $q->where('status', $request->status)
                );
            })
            ->when($request->date, function ($q) use ($request) {
                $q->whereHasMorph(
                    'owner',
                    [PickUp::class],
                    fn($q) => $q->whereDate('created_at', $request->date)
                );
            })
            ->get();

        return inertia('Dashboard/PikcupLocation', [
            'locations' => $locations,
            'filters' => $request->only(['status', 'date']),
        ]);
    }

    public function memberLocation()
    {
        $locations = Location::where('owner_type', Member::class)->get();
        $locations->load(['owner']);
        return inertia('Dashboard/MemberLocation', compact('locations'));
    }
}
