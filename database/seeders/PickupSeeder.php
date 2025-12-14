<?php

namespace Database\Seeders;

use App\Enum\PickUpStatus;
use App\Models\Member;
use App\Models\Operator;
use App\Models\PickUp;
use App\Repository\PickupRepository;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PickupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $repo = new PickupRepository();
        $count = $this->command->ask('Jumlah Pickup', 20);
        $assign = $this->command->choice('For Assign Operator ?', ['yes', 'no'], 'no');
        if ($assign === 'yes') {
            $pickups = PickUp::inRandomOrder()->take($count)->get();
            $this->command->withProgressBar($pickups, function ($pickup) use ($repo) {
                $operator = Operator::inRandomOrder()->first();
                $repo->assignOperator($pickup, $operator);
            });
        } else {
            $this->command->withProgressBar(range(1, $count), function () use ($repo) {
                $data = [
                    'weight' => fake()->numberBetween(1, 500),
                    'description' => fake()->paragraphs(3, true),
                    'status' => fake()->randomElement(PickUpStatus::values()),
                    'image' => 'https://placehold.co/400.png',
                ];

                $location = [
                    'name' => fake()->word(),
                    'latitude' => fake()->latitude(-6.2, -2.5),
                    'longitude' => fake()->longitude(118.0, 121.0),
                    'address' => fake()->address() . ', Sulawesi Selatan',
                ];

                $member = Member::inRandomOrder()->first();
                $repo->create($data, $location, $member);
            });
        }

    }
}
