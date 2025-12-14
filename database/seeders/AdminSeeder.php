<?php

namespace Database\Seeders;

use App\Enum\Status;
use Illuminate\Database\Seeder;
use App\Repository\UserRepository;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $repo = new UserRepository();
        if (
            $this->command->choice('Verified Email ?', [
                'Yes' => true,
                'No' => false
            ])
        ) {
            $email_verified_at = now();
        } else {
            $email_verified_at = null;
        }
        $userData = [
            'avatar' => 'https://placehold.co/400.png',
            'email' => $this->command->ask('Email', fake()->unique()->safeEmail()),
            'password' => $this->command->ask('Password', 'password'),
            'status' => Status::ACTIVE,
            'email_verified_at' => $email_verified_at,
        ];


        $repo->addAdmin($userData);
        $this->command->newLine()->info('Created Admin Success');
    }
}
