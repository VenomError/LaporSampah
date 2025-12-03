<?php

namespace App\Enum;

enum PointReedemedStatus: string
{
    case SUBMITTED = 'submitted';
    case APPORVED = 'approved';
    case REJECTED = 'rejected';

    public static function values()
    {
        return array_column(self::cases(), 'value');
    }

    public function color()
    {
        return match ($this) {
            self::SUBMITTED => 'primary',
            self::APPORVED => 'success',
            self::REJECTED => 'danger',
        };
    }
    public function icon()
    {
        return match ($this) {
            self::SUBMITTED => 'ph ph-clock-user',
            self::APPORVED => 'ph ph-check-circle',
            self::REJECTED => 'ph ph-x-circle',
        };
    }
}
