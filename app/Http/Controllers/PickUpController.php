<?php

namespace App\Http\Controllers;

use App\Enum\PickUpStatus;
use App\Models\PickUp;
use Auth;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Repository\PickupRepository;

class PickUpController extends Controller
{
    public function create()
    {
        $locations = Auth::user()->member->locations->toArray();
        return inertia('PickUpCreate', compact('locations'));
    }

    public function createPickup(Request $request, PickupRepository $repository)
    {
        // 1. VALIDASI
        $data = $request->validate([
            // Fix: Tambahkan 'nullable' agar required_without berfungsi
            'location_id' => 'nullable|required_without:latitude|exists:locations,id',
            'latitude' => 'nullable|required_without:location_id|numeric',
            'longitude' => 'nullable|required_without:location_id|numeric',

            'weight' => 'required|numeric|gt:0',
            'description' => 'nullable|string',
            // Fix: Tambahkan rule 'image' untuk keamanan
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        DB::beginTransaction();
        try {
            // 2. LOGIKA UPLOAD IMAGE
            $imagePath = null;
            if ($request->hasFile('image')) {
                // Simpan ke folder 'storage/app/public/pickups'
                $imagePath = $request->file('image')->store('pickups', 'public');
            }

            // 3. PERSIAPAN DATA PICKUP
            $pickupData = [
                'weight' => $request->weight,
                'description' => $request->description,
                'image' => $imagePath, // Path gambar masuk sini
            ];

            // 4. PERSIAPAN DATA LOCATION (Object atau Array)
            $locationInput = null;

            if ($request->location_id) {
                // Skenario A: User pilih lokasi tersimpan -> Kirim Object Location
                $locationInput = Location::find($request->location_id);
            } else {
                // Skenario B: User pin map manual -> Kirim Array
                $locationInput = [
                    'latitude' => $request->latitude,
                    'longitude' => $request->longitude,
                    'name' => 'Pinned Location',
                ];
            }

            // 5. PANGGIL REPOSITORY
            // Kita gunakan logic repository yang sudah diperbaiki sebelumnya
            $repository->create(
                $pickupData,
                $locationInput,
                Auth::user()->member
            );

            DB::commit();
            return redirect()->route('pickup.create')
                ->with('success', 'Laporan Penjemputan Berhasil di Kirim');

        } catch (\Throwable $th) {
            DB::rollBack();

            return back()->with('error', $th->getMessage());
        }

    }
    public function detail(PickUp $pickup)
    {
        $pickup->load([
            'operator',
            'operator.account',
            'location',
        ]);
        return inertia('PickupDetail', [
            'pickup' => $pickup
        ]);
    }

    public function cancel(PickUp $pickup)
    {
        $pickup->status = PickUpStatus::CANCELLED;
        $pickup->save();

        return back()->with("success", "Pickup Berhasil di Batalkan");
    }
}
