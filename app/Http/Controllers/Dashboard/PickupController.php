<?php

namespace App\Http\Controllers\Dashboard;

use App\Enum\PickUpStatus;
use App\Http\Controllers\Controller;
use App\Models\PickUp;
use Illuminate\Http\Request;

class PickupController extends Controller
{
    public function pickupList()
    {
        return inertia('Dashboard/Pickup/PickupList');
    }

    public function getPickup(Request $request)
    {
        $query = PickUp::query();
        $query->when($request->status, fn($q) => $q->whereStatus($request->status));
        $query->when(
            $request->created_at,
            fn($q) => $q->whereDate('created_at', $request->created_at),
        );
        $query->with(['operator', 'member']);
        $query->latest();
        $pickups = $query->get();
        return response()->json($pickups);
    }

    public function getPickupCount(Request $request)
    {
        $filters = $request->get('filter', []);
        $query = PickUp::query();
        $query->when($filters, fn($q) => $q->where($filters));
        $data = [];
        $data['all'] = (clone $query)->count();
        foreach (PickUpStatus::cases() as $status) {
            $data[$status->value] = (clone $query)->whereStatus($status)->count();
        }
        return response()->json($data);
    }

    public function status($status)
    {
        $status = PickUpStatus::tryFrom($status);
        $color = $status->color();
        $icon = $status->tableIcon();
        $today = PickUp::whereStatus($status)->whereToday('updated_at')->count();
        $total = PickUp::whereStatus($status)->count();
        return inertia(
            'Dashboard/Pickup/PickupStatus',
            compact('status', 'today', 'total', 'icon', 'color'),
        );
    }

    public function show(PickUp $pickup)
    {
        $pickup->load(['member', 'operator']);

        return inertia('Dashboard/Pickup/Show', [
            'pickup' => $pickup,
            // Kita kirim koordinat dalam format array untuk Leaflet
            'location' => [
                'lat' => $pickup->location->latitude, // Sesuaikan field di database kamu
                'lng' => $pickup->location->longitude,
            ],
        ]);
    }
}
