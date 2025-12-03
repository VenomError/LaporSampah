<?php

namespace App\Notifications;

use App\Models\PointReedmtion;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PointChangeNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(
        public PointReedmtion $pointReedmtion,
        public string $message,
        public string $title = 'Penukaran Point'
    ) {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toDatabase(object $notifiable): array
    {
        return [
            'point_reedemed' => $this->pointReedmtion->point_reedemed,
            'status' => $this->pointReedmtion->status,
            'message' => $this->message,
            'title' => $this->title,
            'icon' => $this->pointReedmtion->status->icon(),
            'color' => $this->pointReedmtion->status->color(),
            'created_at' => now()->toDateTimeString()
        ];
    }
}
