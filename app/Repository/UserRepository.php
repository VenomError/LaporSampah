<?php

namespace App\Repository;

use App\Enum\UserRole;
use App\Models\Member;
use App\Models\User;

class UserRepository
{
    public function register(array $userData, array $memberData)
    {
        $user = new User();
        $user->fill($userData);
        $user->role = UserRole::MEMBER;
        $user->save();

        $member = new Member();
        $member->fill($memberData);
        $member->user_id = $user->id;
        $member->save();

        return $user;
    }
}
