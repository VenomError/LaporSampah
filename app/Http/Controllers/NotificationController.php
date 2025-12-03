<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Authenticatable;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index()
    {
        $notifications = auth()->user()->unreadNotifications()->latest()->get()->groupBy(fn($q) => $q->created_at->translatedFormat('D, M d-Y'));
        return inertia('Notifications', [
            'notifications' => $notifications
        ]);
    }

}
