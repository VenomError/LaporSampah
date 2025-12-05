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
        $query->when($request->created_at, fn($q) => $q->whereDate('created_at', $request->created_at));
        $query->with(['operator', 'member']);
        $query->latest();
        $pickups = $query->paginate();
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
        $today = PickUp::whereStatus($status)->whereToday('created_at')->count();
        $total = PickUp::whereStatus($status)->count();
        return inertia('Dashboard/Pickup/PickupStatus', compact(
            'status',
            'today',
            'total',
            'icon',
            'color'
        ));
    }
}
