<?php

namespace App\Enum;

enum Status: string
{
    case ACTIVE = 'active';
    case NONACTIVE = 'non_active';

    public static function values()
    {
        return array_column(self::cases(), 'value');
    }

    public function color()
    {
        return match ($this) {
            self::ACTIVE => 'success',
            self::NONACTIVE => 'danger',
            default => 'secondary'
        };
    }
    public function isActive(): bool
    {
        return $this === self::ACTIVE;
    }

    public function isInactive(): bool
    {
        return $this === self::NONACTIVE;
    }
}
