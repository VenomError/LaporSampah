<?php

namespace App\Models;

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
        'point_change' => 'decimal',
    ];

    public function type(){
        return $this->morphTo();
    }
}
