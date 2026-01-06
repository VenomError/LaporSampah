<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function system()
    {
        return inertia('Dashboard/Settings/System');
    }

    public function account()
    {
        return inertia('Dashboard/Settings/Account');
    }
    public function updateProfile(Request $request)
    {
        $user = auth()->user();

        $request->validate([
            'email' => 'required|email|unique:users,email,' . $user->id,
            // Tambahkan validasi lain jika ada field name di tabel users
        ]);

        $user->update($request->only('email'));
        sweetalert('Profil berhasil diperbarui');
        return back();
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required|current_password',
            'password' => 'required|confirmed|min:8',
        ]);

        auth()
            ->user()
            ->update([
                'password' => $request->password,
            ]);
            sweetalert('Password berhasil diganti!');
        return back();
    }
}
