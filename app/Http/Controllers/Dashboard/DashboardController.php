<?php

namespace App\Http\Controllers\Dashboard;

use App\Enum\PickUpStatus;
use App\Models\Member;
use App\Models\Location;
use App\Models\PickUp;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
  public function index()
{
    return inertia('Dashboard/Index', [
        'stats' => [
            'pending' =>Pickup::where('status', 'pending')->count(),
            'processing' =>Pickup::where('status', 'processing')->count(),
            'completed' =>Pickup::where('status', 'completed')->count(),
            'rejected' =>Pickup::where('status', 'rejected')->count(),
            'cancelled' =>Pickup::where('status', 'cancelled')->count(),
            'total_weight' =>Pickup::where('status', 'completed')->sum('weight'),
            'total_members' =>Member::count(),
            'total_points' =>Member::sum('point'),
        ],
        // Data Grafik 7 hari terakhir
        'chartData' =>Pickup::where('status', 'completed')
            ->where('updated_at', '>=', now()->subDays(7))
            ->selectRaw('DATE(updated_at) as date, SUM(weight) as total_weight')
            ->groupBy('date')
            ->orderBy('date', 'ASC')
            ->get(),
        'recent_pickups' =>Pickup::with('member')->latest()->take(6)->get()
    ]);
}
    public function pointReedemtion()
    {
        return inertia('Dashboard/PointReedemtion');
    }

    public function pickupLocation(Request $request)
    {
        $locations = Location::with('owner')
            ->where('owner_type', PickUp::class)
            ->when(
                $request->status,
                function ($q) use ($request) {
                    $q->whereHasMorph(
                        'owner',
                        [PickUp::class],
                        fn($q) => $q->where('status', $request->status),
                    );
                },
                function ($query) {
                    $query->whereHasMorph(
                        'owner',
                        [PickUp::class],
                        fn($q) => $q->where('status', PickUpStatus::PENDING),
                    );
                },
            )
            ->when($request->date, function ($q) use ($request) {
                $q->whereHasMorph(
                    'owner',
                    [PickUp::class],
                    fn($q) => $q->whereDate('created_at', $request->date),
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
