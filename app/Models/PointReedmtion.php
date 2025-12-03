<?php

namespace App\Models;

use App\Models\Member;
use App\Models\Incentive;
use App\Models\PointHistory;
use App\Enum\PointReedemedStatus;
use Illuminate\Database\Eloquent\Model;

class PointReedmtion extends Model
{

    protected $fillable = [
        'member_id',
        'incentive_id',
        'point_reedemed',
        'status',
    ];

    protected $casts = [
        'point_reedemed' => 'float',
        'status' => PointReedemedStatus::class,
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['color', 'icon'];

    public function member()
    {
        return $this->belongsTo(Member::class);
    }
    public function incentive()
    {
        return $this->belongsTo(Incentive::class);
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
}
