<?php

namespace App\Models;

use App\Models\Member;
use App\Models\Location;
use App\Models\Operator;
use App\Enum\PickUpStatus;
use App\Models\PointHistory;
use Illuminate\Database\Eloquent\Model;

class PickUp extends Model
{
    protected $fillable = [
        'operator_id',
        'member_id',
        'locatio_id',
        'weight',
        'description',
        'status',
        'image',
    ];
    protected $casts = [
        'weight' => 'decimal',
        'status' => PickUpStatus::class,
    ];

    public function operator()
    {
        return $this->belongsTo(Operator::class);
    }

    public function member()
    {
        return $this->belongsTo(Member::class);
    }
    public function location()
    {
        return $this->morphOne(Location::class, 'owner');
    }

    public function pointHistories()
    {
        return $this->morphMany(PointHistory::class, 'type');
    }
}
