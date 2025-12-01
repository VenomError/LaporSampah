<?php

namespace App\Repository;

use App\Enum\PickUpStatus;
use App\Models\Location;
use App\Models\Member;
use App\Models\PickUp;
use App\Models\PointHistory;

class PickupRepository
{
    public function create(array $data, array|Location $locationData, Member $member)
    {
        $pickup = new PickUp();
        $pickup->fill($data);
        $pickup->member()->associate($member);
        $pickup->status = PickUpStatus::PENDING;
        $pickup->save();

        $history = new PointHistory();
        $history->member()->associate($member);
        $history->point_change = $member->point;
        $pickup->pointHistories()->save($history);

        if ($locationData instanceof Location) {
            $location = $locationData->replicate(['owner_id', 'owner_type', 'id', 'created_at', 'updated_at']);
        } else {
            $location = new Location();
            $location->fill($locationData);
        }

        $pickup->location()->save($location);

        return $pickup;
    }
}
