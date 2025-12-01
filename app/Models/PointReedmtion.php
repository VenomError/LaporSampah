<?php

namespace App\Models;

use App\Models\Member;
use App\Models\Incentive;
use App\Models\PointHistory;
use App\Enum\PointReedemedStatus;
use Illuminate\Database\Eloquent\Model;

class PointReedmtion extends Model
{

    protected $fillable = [
        'member_id',
        'incentive_id',
        'point_reedemed',
        'status',
    ];

    protected $casts = [
        'point_reedemed' => 'decimal',
        'status' => PointReedemedStatus::class,
    ];

    public function member(){
        return $this->belongsTo(Member::class);
    }
    public function incentive(){
        return $this->belongsTo(Incentive::class);
    }
    public function pointHistories()
    {
        return $this->morphMany(PointHistory::class, 'type');
    }
}
