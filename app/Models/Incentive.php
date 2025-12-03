<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

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

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['image_url'];

    /**
     * Scope a query to only include Active
     *
     * @param  \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function getImageUrlAttribute(): string
    {
        if($this->image && Storage::disk('public')->exists($this->image)){
            return Storage::url($this->image);
        }else{
            return 'https://placehold.co/400.png?text=Not+Found';
        }
    }

}
