<?php

namespace App\Repository;

use App\Enum\PointReedemedStatus;
use App\Models\Incentive;
use App\Models\Member;
use App\Models\PointHistory;
use App\Models\PointReedmtion;
use App\Notifications\PointChangeNotification;
use Auth;

class IncentiveRepository
{
    public function create(array $data): Incentive
    {
        $incentive = new Incentive();
        $incentive->fill($data);
        $incentive->save();

        return $incentive;
    }

    public function reedemed(Incentive $incentive, Member $member): PointReedmtion
    {
        $pointReedemed = $incentive->point_required;
        if ($pointReedemed > $member->point) {
            throw new \Exception("Point Member Tidak Cukup");
        }
        $pointChange = $member->point - $pointReedemed;

        $member->point = $pointChange;
        $member->save();

        $pointReedemtion = new PointReedmtion();
        $pointReedemtion->point_reedemed = $pointReedemed;
        $pointReedemtion->status = PointReedemedStatus::SUBMITTED;
        $pointReedemtion->member()->associate($member);
        $pointReedemtion->incentive()->associate($incentive);
        $pointReedemtion->save();

        Auth::user()->notify(new PointChangeNotification($pointReedemtion, "Request Penukaran Point Anda Berhasil Terkirim dan menunggu Konfirmasi dari Admin"));

        $pointHistory = new PointHistory();
        $pointHistory->member()->associate($member);
        $pointHistory->point_change = $pointChange;

        $pointReedemtion->pointHistories()->save($pointHistory);

        return $pointReedemtion;
    }
}
