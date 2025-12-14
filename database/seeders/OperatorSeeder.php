<?php

namespace Database\Seeders;

use App\Enum\Status;
use Illuminate\Database\Seeder;
use App\Repository\UserRepository;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class OperatorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userRepo = new UserRepository();
        $count = (int) $this->command->ask('jumlah operator :', 20);
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
            $operatorData = [
                'name' => fake()->name(),
                'status' => fake()->randomElement(Status::values()),
            ];
            $userRepo->addOperator($userData, $operatorData);
        });
        $this->command->newLine();
        $this->command->info('Seeder Operator Success');
    }
}
