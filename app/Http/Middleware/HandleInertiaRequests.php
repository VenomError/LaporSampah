<?php

namespace App\Http\Middleware;

use App\Enum\PickUpStatus;
use App\Models\Member;
use App\Models\PickUp;
use App\Models\PointReedmtion;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'messages' => flash()->render('array'),
            'auth' => [
                'user' => $request->user(),
            ],
            'count' => $this->getNavigationCounts()
        ]);
    }

    public function getNavigationCounts(): array
    {
        return [
            'dashboard' => 10,
            'point_reedemtion' => PointReedmtion::submitted()->count(),
            'pickup' => $this->getPickupCount()
        ];
    }

    public function getPickupCount(): array
    {
        $pending = PickUp::whereStatus(PickUpStatus::PENDING)->count();
        $processing = PickUp::whereStatus(PickUpStatus::PROCESSING)->count();
        $completed = PickUp::whereStatus(PickUpStatus::COMPLETED)->whereDate('created_at', now())->count();
        $rejected = PickUp::whereStatus(PickUpStatus::REJECTED)->count();
        $cancelled = PickUp::whereStatus(PickUpStatus::CANCELLED)->count();
        return compact('pending', 'processing', 'completed', 'rejected', 'cancelled');
    }

}
