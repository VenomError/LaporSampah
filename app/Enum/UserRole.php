<?php

namespace App\Enum;

enum UserRole: string
{
    case MEMBER = 'member';
    case OPERATOR = 'operator';
    case ADMIN = 'admin';

    public static function values()
    {
        return array_column(self::cases(), 'value');
    }

    public function redirect()
    {
        return match ($this) {
            self::MEMBER => redirect('/'),
            self::OPERATOR => redirect('/operator'),
            self::ADMIN => redirect('/dashboard'),
        };
    }
}
