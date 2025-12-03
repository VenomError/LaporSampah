<?php

namespace App\Notifications;

use App\Models\PickUp;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PickupNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(
        public PickUp $pickup,
        public string $message,
        public string $title = 'Laporan Penjemputan Sampah',
    ) {
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
            'pickup_id' => $this->pickup->id,
            'member_id' => $this->pickup->member_id,
            'operator_id' => $this->pickup->operator_id,
            'status' => $this->pickup->status->value,
            'color' => $this->pickup->color,
            'icon' => $this->pickup->icon,
            'estimate_point' => $this->pickup->estimate_point,
            'message' => $this->message,
            'title' => $this->title,
            'created_at' => now()->toDateTimeString()
        ];
    }

}
