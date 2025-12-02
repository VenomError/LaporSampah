<?php

namespace App\Models;

use App\Models\Member;
use App\Models\Location;
use App\Models\Operator;
use App\Enum\PickUpStatus;
use App\Models\PointHistory;
use Illuminate\Database\Eloquent\Model;

class PickUp extends Model
{
    protected $fillable = [
        'operator_id',
        'member_id',
        'weight',
        'description',
        'status',
        'image',
    ];
    protected $casts = [
        'weight' => 'float',
        'status' => PickUpStatus::class,
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'color',
        'icon',
        'estimate_point',
    ];


    public function operator()
    {
        return $this->belongsTo(Operator::class);
    }

    public function member()
    {
        return $this->belongsTo(Member::class);
    }
    public function location()
    {
        return $this->morphOne(Location::class, 'owner');
    }

    public function pointHistories()
    {
        return $this->morphMany(PointHistory::class, 'type');
    }

    public function getColorAttribute(): string
    {
        return $this->status->color();
    }
    public function getIconAttribute(): string
    {
        return $this->status->icon();
    }
    public function getEstimatePointAttribute(): float
    {
        return $this->weight * 10;
    }

    /**
     * Scope a query to only include byStatus
     *
     * @param  \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByStatus($query, PickUpStatus $status)
    {
        return $query->where('status', $status);
    }
}
