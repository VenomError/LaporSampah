<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class AddressService
{
    private array $response;

    public function __construct(
        public float $lat,
        public float $long
    ) {
        // cache key unik berdasarkan lat-long
        $cacheKey = "reverse_geocode_{$this->lat}_{$this->long}";

        // simpan cache selama 1 hari
        $this->response = Cache::remember($cacheKey, now()->addDay(), function () {
            $url = "https://nominatim.openstreetmap.org/reverse?format=json&lat={$this->lat}&lon={$this->long}";

            return Http::withHeaders([
                'User-Agent' => 'my-app/1.0 (your@email.com)'
            ])->get($url)->json();
        });
    }

    public function __get($name)
    {
        return $this->response[$name] ?? null;
    }

    public function response(): array
    {
        return $this->response;
    }

    public function getAddress(): ?string
    {
        return $this->response['display_name'] ?? null;
    }
}
