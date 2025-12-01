<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{

    protected $fillable = [
        'owner_type',
        'owner_id',
        'name',
        'latitude',
        'longitude',
        'address',
    ];

    protected $casts = [
        'latitude' => 'float',
        'longitude' => 'float',
    ];

    public function owner()
    {
        return $this->morphTo();
    }
}
