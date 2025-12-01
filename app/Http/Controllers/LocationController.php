<?php

namespace App\Http\Controllers;

use App\Services\AddressService;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function getAddress(Request $request)
    {
        $request->validate([
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        $service = new AddressService($request->latitude, $request->longitude);
        $address = $service->getAddress();

        return response()->json([
            'address' => $address
        ]);

    }
}
