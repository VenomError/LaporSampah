<?php

namespace App\Models;

use App\Models\Member;
use Illuminate\Database\Eloquent\Model;

class PointHistory extends Model
{

    protected $fillable = [
        'type_type',
        'type_id',
        'member_id',
        'point_change',
    ];
    protected $casts = [
        'point_change' => 'float',
    ];

    public function type(){
        return $this->morphTo();
    }

    public function member(){
        return $this->belongsTo(Member::class);
    }
}
