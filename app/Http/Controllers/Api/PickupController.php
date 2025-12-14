<?php

namespace App\Http\Controllers\Api;

use App\Models\PickUp;
use App\Models\Operator;
use App\Enum\PickUpStatus;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repository\PickupRepository;
use Illuminate\Validation\ValidationException;

class PickupController extends Controller
{
    public function assignOperator(Request $request, PickupRepository $repo)
    {
        try {
            $request->validate([
                'operator_id' => 'required|exists:operators,id',
                'pickup_id' => 'required|exists:pick_ups,id'
            ]);
            $pickup = PickUp::find($request->pickup_id);
            $operator = Operator::find($request->operator_id);
            $repo->assignOperator($pickup, $operator);

            flash()
                ->option('position', 'bottom-right')
                ->success("Operator Berhasil di Tambahkan");

            return back();
        } catch (ValidationException $th) {
            flash()
                ->option('position', 'bottom-right')
                ->error($th->getMessage());
            throw $th;
        } catch (\Throwable $th) {
            flash()
                ->option('position', 'bottom-right')
                ->error($th->getMessage());
            return back();
        }
    }

    public function reject(PickUp $pickup, PickupRepository $repo)
    {
        $repo->reject($pickup);
        flash()
            ->option('position', 'bottom-right')
            ->success("Laporan Berhasil di Tolak");
        return back();
    }

    public function getCount()
    {
        $pending = PickUp::whereStatus(PickUpStatus::PENDING)->count();
        $processing = PickUp::whereStatus(PickUpStatus::PROCESSING)->count();
        $completed = PickUp::whereStatus(PickUpStatus::COMPLETED)->whereDate('created_at', now())->count();
        $rejected = PickUp::whereStatus(PickUpStatus::REJECTED)->count();
        $cancelled = PickUp::whereStatus(PickUpStatus::CANCELLED)->count();
        $pickups = compact('pending', 'processing', 'completed', 'rejected', 'cancelled');
        $data = [
            'dashboard' => 10,
            'point_reedemtion' => 2,
            'pickup' => $pickups
        ];

        return response()->json($data);
    }
}
