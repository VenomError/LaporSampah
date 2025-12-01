<?php

namespace App\Enum;

enum PickUpStatus: string
{
    case PENDING = 'pending';
    case PROCESSING = 'processing';
    case COMPLETED = 'completed';
    case REJECTED = 'rejected';
    case CANCELLED = 'cancelled';

    public static function values()
    {
        return array_column(self::cases(), 'value');
    }

    public function color()
    {
        return match ($this) {
            self::PENDING => 'warning',
            self::PROCESSING => 'primary',
            self::COMPLETED => 'success',
            self::REJECTED => 'danger',
            self::CANCELLED => 'secondary',
        };
    }
    public function icon()
    {
        return match ($this) {
            self::PENDING => 'ph ph-hourglass-low',
            self::PROCESSING => 'ph ph-truck',
            self::COMPLETED => 'ph ph-check-circle',
            self::REJECTED => 'ph ph-x-circle',
            self::CANCELLED => 'ph ph-prohibit',
        };
    }
}
