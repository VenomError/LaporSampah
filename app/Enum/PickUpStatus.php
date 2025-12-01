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
            self::PENDING => 'yellow',
            self::PROCESSING => 'blue',
            self::COMPLETED => 'green',
            self::REJECTED => 'red',
            self::CANCELLED => 'gray',
        };
    }
}
