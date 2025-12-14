<?php

namespace App\Repository;

use App\Enum\Status;
use App\Models\Member;

class MemberRepository
{
    public function toggleStatus(Member $member)
    {
        $account = $member->account;
        if ($account->status == Status::ACTIVE) {
            $account->status = Status::NONACTIVE;
        } else {
            $account->status = Status::ACTIVE;
        }

        $account->save();
        return $account;
    }
}
