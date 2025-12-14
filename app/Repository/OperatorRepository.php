<?php

namespace App\Repository;

use App\Enum\Status;
use App\Models\Operator;

class OperatorRepository
{
    public function create(array $userData, array $operatorData)
    {
        $repo = new UserRepository();
        $user = $repo->addOperator($userData, $operatorData);
        return $user->operator;
    }

    public function toggleStatus(Operator $operator)
    {
        $account = $operator->account;
        if ($account->status == Status::ACTIVE) {
            $account->status = Status::NONACTIVE;
            $operator->status = Status::NONACTIVE;
        } else {
            $account->status = Status::ACTIVE;
            $operator->status = Status::ACTIVE;
        }

        $account->save();
        $operator->save();
    }
}
