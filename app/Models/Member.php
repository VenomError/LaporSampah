<?php

namespace App\Models;

use App\Models\User;
use App\Models\Location;
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
        'point' => 'decimal:2',
    ];

    public function account()
    {
        return $this->belongsTo(User::class);
    }

    public function locations()
    {
        return $this->morphMany(Location::class, 'owner');
    }
}
