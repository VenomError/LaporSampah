<?php

namespace App\Models;

use App\Enum\UserRole;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Enum\Status;
use App\Models\Member;
use App\Models\Operator;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'avatar',
        'email',
        'password',
        'status',
        'email_verified_at',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $with = ['member', 'operator'];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'status' => Status::class,
            'role' => UserRole::class
        ];
    }

    protected $appends = ['color', 'is_active'];


    public function member()
    {
        return $this->hasOne(Member::class);
    }
    public function operator()
    {
        return $this->hasOne(Operator::class);
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
