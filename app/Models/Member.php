<?php

namespace App\Models;

use App\Models\User;
use App\Models\PickUp;
use App\Models\Location;
use App\Models\PointHistory;
use App\Models\PointReedmtion;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{

    protected $fillable = [
        'user_id',
        'name',
        'phone',
        'point',
    ];

    protected $casts = [
        'point' => 'float',
    ];

    public function account()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function locations()
    {
        return $this->morphMany(Location::class, 'owner');
    }

    public function pickups()
    {
        return $this->hasMany(PickUp::class);
    }

    public function reedemtions()
    {
        return $this->hasMany(PointReedmtion::class);
    }

    public function pointHistories()
    {
        return $this->hasMany(PointHistory::class);
    }
}
