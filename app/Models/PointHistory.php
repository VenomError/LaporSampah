<?php

namespace App\Models;

use App\Models\Member;
use App\Models\PointReedmtion;
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

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['color', 'symbol', 'title'];

    public function type()
    {
        return $this->morphTo();
    }

    public function member()
    {
        return $this->belongsTo(Member::class);
    }

    public function getColorAttribute(): string
    {
        if ($this->type_type == 'App\\Models\\PointReedmtion') {
            return 'danger';
        } else {
            return 'success';
        }
    }
    public function getSymbolAttribute(): string
    {
        if ($this->type_type == 'App\\Models\\PointReedmtion') {
            return '-';
        } else {
            return '+';
        }
    }
    public function getTitleAttribute(): string
    {
        if ($this->type_type == 'App\\Models\\PointReedmtion') {
            return 'Penukaran Point';
        } else {
            return 'Pelaporan Sampah';
        }
    }
}
