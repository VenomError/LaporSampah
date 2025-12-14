<?php

namespace Database\Seeders;

use App\Enum\Status;
use App\Repository\UserRepository;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userRepo = new UserRepository();
        $count = (int) $this->command->ask('jumlah member :', 20);
        $this->command->withProgressBar(range(0, $count), function () use ($userRepo) {
            if (fake()->boolean(50)) {
                $email_verified_at = now();
            } else {
                $email_verified_at = null;
            }
            $userData = [
                'avatar' => 'https://placehold.co/400.png',
                'email' => fake()->unique()->safeEmail(),
                'password' => 'password',
                'status' => fake()->randomElement(Status::values()),
                'email_verified_at' => $email_verified_at,
            ];
            $memberData = [
                'name' => fake()->name(),
                'phone' => fake()->unique()->phoneNumber(),
                'point' => 0,
            ];
            $userRepo->register($userData, $memberData);
        });
        $this->command->newLine();
        $this->command->info('Seeder Member Success');
    }
}
