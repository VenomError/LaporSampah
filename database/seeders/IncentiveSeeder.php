<?php

namespace Database\Seeders;

use App\Repository\IncentiveRepository;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IncentiveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $count = (int) $this->command->ask('Jumlah Incentive', 10);
        $repo = new IncentiveRepository();
        $this->command->withProgressBar(range(1, $count), function () use ($repo) {
            $repo->create([
                'name' => fake()->unique()->company(),
                'description' => fake()->paragraph,
                'image' => 'https://placehold.co/400.png',
                'point_required' => fake()->numberBetween(100, 1000),
                'is_active' => fake()->boolean(60),
            ]);
        });
    }
}
