<?php

namespace App\Http\Controllers;

use App\Enum\PickUpStatus;
use App\Models\PickUp;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rules\Password;

class OperatorDashboardController extends Controller
{
    /**
     * Dashboard Utama Operator
     */
    public function index()
    {
        $operatorId = auth()->user()->operator->id;

        // Ambil tugas yang sedang aktif (status processing)
        $activeTask = Pickup::with('member')
            ->where('operator_id', $operatorId)
            ->where('status', 'processing')
            ->first();

        // Statistik ringkas untuk operator
        $stats = [
            'completed_today' => Pickup::where('operator_id', $operatorId)
                ->where('status', 'completed')
                ->whereDate('updated_at', Carbon::today())
                ->count(),
            'total_weight_today' => Pickup::where('operator_id', $operatorId)
                ->where('status', 'completed')
                ->whereDate('updated_at', Carbon::today())
                ->sum('weight'),
        ];

        return inertia('Operator/Index', [
            'active_task' => $activeTask,
            'stats' => $stats,
        ]);
    }

    /**
     * Daftar Riwayat Tugas
     */
    public function pickupList(Request $request)
    {
        $operatorId = auth()->user()->operator->id;
        $status = $request->query('status' , PickUpStatus::PROCESSING->value);

        $query = PickUp::with('member')->where('operator_id', $operatorId);

        // Filter berdasarkan status jika parameter ada
        if ($status && $status !== 'all') {
            $query->where('status', $status);
        }

        $pickups = $query->latest()->paginate(10)->withQueryString();

        return inertia('Operator/Pickup/Index', [
            'pickups' => $pickups,
            'filters' => $request->only(['status']), // Kirim balik status aktif ke frontend
        ]);
    }

    /**
     * Detail Penjemputan & Halaman Input Timbangan
     */
    public function pickupDetail(Pickup $pickup)
    {
        // Pastikan operator hanya bisa buka tugas miliknya
        if ($pickup->operator_id !== auth()->user()->operator->id) {
            abort(403, 'Bukan tugas Anda.');
        }

        return inertia('Operator/Pickup/Show', [
            'pickup' => $pickup->load(['member', 'location']),
        ]);
    }

    /**
     * Selesaikan Tugas (Input Berat & Beri Poin)
     */
    public function completePickup(Request $request, Pickup $pickup)
    {
        $request->validate([
            'weight' => 'required|numeric|min:0.1',
        ]);

        // Gunakan Database Transaction agar data sinkron
        DB::transaction(function () use ($request, $pickup) {
            $weight = $request->weight;

            // 1. Hitung Poin (Misal: 1 KG = 100 Poin)
            // Di masa depan ini bisa diambil dari tabel settings
            $pointEarning = floor($weight * 100);

            // 2. Update status Pickup
            $pickup->update([
                'weight' => $weight,
                'status' => 'completed', // Pastikan Enum kamu ada status ini
                'updated_at' => now(),
            ]);

            // 3. Tambah Poin ke Member
            $member = $pickup->member;
            $member->increment('point', $pointEarning);

            // 4. Catat ke Riwayat Poin (PointHistory)
            // Sesuai model kamu yang menggunakan morphMany
            $pickup->pointHistories()->create([
                'member_id' => $member->id,
                'point' => $pointEarning,
                'description' => "Penjemputan sampah seberat {$weight} KG",
            ]);
        });

        return redirect()
            ->route('operator.dashboard')
            ->with('message', 'Tugas selesai, poin telah dikirim ke warga!');
    }

    /**
     * Profil Operator
     */
    public function profile()
    {
        return inertia('Operator/Profile', [
            'operator' => auth()->user()->operator,
            'user' => auth()->user(),
        ]);
    }

    public function history()
    {
        $operatorId = auth()->user()->operator->id;

        $pickups = PickUp::with('member')
            ->where('operator_id', $operatorId)
            ->where('status', 'completed') // Hanya yang sudah selesai
            ->latest()
            ->paginate(15);

        // Hitung total kontribusi operator
        $totalWeight = PickUp::where('operator_id', $operatorId)
            ->where('status', 'completed')
            ->sum('weight');

        return inertia('Operator/Pickup/History', [
            'pickups' => $pickups,
            'total_weight' => $totalWeight,
        ]);
    }

    public function changePassword()
    {
        return inertia('Operator/ChangePassword');
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        auth()
            ->user()
            ->update([
                'password' => $request->password,
            ]);

        sweetalert('Password berhasil diperbarui!');
        return back();
    }

    public function notification()
    {
        $notifications = auth()
            ->user()
            ->unreadNotifications()
            ->latest()
            ->get()
            ->groupBy(fn($q) => $q->created_at->translatedFormat('D, M d-Y'));
        return inertia('Operator/Notification', [
            'notifications' => $notifications,
        ]);
    }
}
