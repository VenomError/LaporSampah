<?php

namespace App\Models;

use App\Enum\Status;
use Illuminate\Database\Eloquent\Model;

class Operator extends Model
{
    protected $fillable = [
        'user_id',
        'status',
    ];
    protected $casts = [
        'status' => Status::class,
    ];

    public function account()
    {
        return $this->belongsTo(User::class);
    }

    public function pickups()
    {
        return $this->hasMany(PickUp::class);
    }
}
