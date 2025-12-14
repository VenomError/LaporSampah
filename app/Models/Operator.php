<?php

namespace App\Models;

use App\Enum\Status;
use Illuminate\Database\Eloquent\Model;

class Operator extends Model
{
    protected $fillable = [
        'user_id',
        'status',
        'name',
    ];
    protected $casts = [
        'status' => Status::class,
    ];

    protected $appends = ['color', 'is_active'];

    public function account()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function pickups()
    {
        return $this->hasMany(PickUp::class);
    }

    public function getColorAttribute()
    {
        return $this->status->color();
    }


    public function getIsActiveAttribute(): bool
    {
        return $this->status->isActive();
    }

    /**
     * Scope a query to only include active
     *
     * @param  \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', Status::ACTIVE);
    }
}
