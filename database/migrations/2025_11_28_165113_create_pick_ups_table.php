<?php

use App\Enum\PickUpStatus;
use App\Models\Location;
use App\Models\Member;
use App\Models\Operator;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pick_ups', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Operator::class)->nullable()->constrained()->nullOnDelete();
            $table->foreignIdFor(Member::class)->nullable()->constrained()->nullOnDelete();

            $table->decimal('weight', 8, 2)->default(0);
            $table->text('description');
            $table->enum('status', PickUpStatus::values())->default(PickUpStatus::PENDING);
            $table->text('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pick_ups');
    }
};
