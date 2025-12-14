<?php

namespace App\Repository;

use App\Enum\UserRole;
use App\Models\Member;
use App\Models\Operator;
use App\Models\User;

class UserRepository
{
    public function sendEmailVerify(User $user)
    {
        return $user->sendEmailVerificationNotification();
    }
    public function register(array $userData, array $memberData): User
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

    public function addOperator(array $userData, array $operatorData): User
    {
        $user = new User();
        $user->fill($userData);
        $user->role = UserRole::OPERATOR;
        $user->save();

        $operator = new Operator();
        $operator->fill($operatorData);
        $operator->account()->associate($user);
        $operator->save();

        return $user;
    }

    public function addAdmin(array $userData): User
    {
        $user = new User();
        $user->fill($userData);
        $user->role = UserRole::ADMIN;
        $user->save();

        return $user;
    }

    public function remove(User $user)
    {
        return $user->delete();
    }

    public function update(User $user, array $data)
    {
        $user->fill($data);
        return $user->save();
    }
}
