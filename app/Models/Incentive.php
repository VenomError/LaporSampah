<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Incentive extends Model
{

    protected $fillable = [
        'name',
        'description',
        'image',
        'point_required',
        'is_active',
    ];
    protected $casts = [
        'point_required' => 'float',
        'is_active' => 'boolean',
    ];
}
