<?php

use App\Enum\PointReedemedStatus;
use App\Models\Incentive;
use App\Models\Member;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('point_reedmtions', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Member::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Incentive::class)->constrained()->cascadeOnDelete();

            $table->string('point_reedemed');
            $table->enum('status', PointReedemedStatus::values())->default(PointReedemedStatus::SUBMITTED);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('point_reedmtions');
    }
};
