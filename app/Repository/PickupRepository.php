<?php

namespace App\Repository;

use App\Enum\PickUpStatus;
use App\Models\Location;
use App\Models\Member;
use App\Models\Operator;
use App\Models\PickUp;
use App\Models\PointHistory;
use App\Notifications\PickupNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;

class PickupRepository
{
    public function create(array $data, array|Location $locationData, Member $member)
    {
        $pickup = new PickUp();
        $pickup->fill($data);
        $pickup->member()->associate($member);
        $pickup->status = PickUpStatus::PENDING;
        $pickup->save();

        if ($locationData instanceof Location) {
            $location = $locationData->replicate(['owner_id', 'owner_type', 'id', 'created_at', 'updated_at']);
        } else {
            $location = new Location();
            $location->fill($locationData);
        }

        $pickup->location()->save($location);

        // Notification
        $user = $member->account;
        $user->notify(new PickupNotification($pickup, "Laporan Sampah anda Berhasil di Kirim"));
        return $pickup;
    }

    public function assignOperator(PickUp $pickup, Operator $operator)
    {
        $pickup->operator()->associate($operator);
        $pickup->status = PickUpStatus::PROCESSING;
        $pickup->save();

        // Notify Operator
        $operatorAccount = $operator?->account;
        if ($operatorAccount) {
            $operatorAccount->notify(new PickupNotification($pickup, "anda ditugaskan menjemput sampah , alamat : {$pickup->location->address}", "Penjemputan Sampah"));
        }

        // Notify User
        $user = $pickup?->member?->account;
        if ($user) {
            $user->notify(new PickupNotification($pickup, "laporan sampah anda sedang dalam process"));
        }

        return $pickup;
    }

    public function reject(Pickup $pickup)
    {
        $pickup->status = PickUpStatus::REJECTED;
        $pickup->save();

        $user = $pickup?->member?->account;
        if ($user) {
            $user->notify(new PickupNotification($pickup, "laporan sampah anda ditolak", "Laporan Ditolak"));
        }
        return $pickup;

    }
}
