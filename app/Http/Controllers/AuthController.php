<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\UserRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

class AuthController extends Controller
{
    public function login()
    {
        return inertia('Auth/Login');
    }
    public function loginProcess(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($data, true)) {
            return back()->with('error', 'Login Gagal , Email atau Password Salah');
        }

        // cek apakah email sudah terverifikasi
        if (!Auth::user()->hasVerifiedEmail()) {
            return redirect()->route('verification.notice');
        }

        $role = Auth::user()->role;
        return $role->redirect();
    }
    public function register()
    {
        return inertia('Auth/Register');
    }

    public function registerProcess(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'name' => 'required|string',
            'phone' => 'required|string',
        ]);

        try {
            $repo = new UserRepository();
            $user = $repo->register(
                $request->only(['email', 'password']),
                $request->only(['name', 'phone'])
            );
            $user->sendEmailVerificationNotification();

            Auth::login($user, true);
            return redirect()->route('verification.notice');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Registration failed. Please try again.');
        }
    }
    public function forgot()
    {
        return inertia('Auth/Forgot');
    }

    public function verifyNotice()
    {
        return inertia('Auth/VerifyEmail');
    }

    public function verifyEmail(EmailVerificationRequest $request)
    {
        $request->fulfill();
        Auth::logout();
        return redirect()->route('login')->with('message', "verifikasi email sukses , silahkan login");
    }


    public function resendEmail(Request $request)
    {
        $user = Auth::user();
        $user->sendEmailVerificationNotification();
        return back()->with('message', 'Email Verifikasi berhasil dikirim');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        // Invalidate session
        $request->session()->invalidate();

        // Regenerate CSRF token
        $request->session()->regenerateToken();

        return redirect()->route('login')
            ->with('message', 'You have been logged out.');
    }
    public function changePassword(){
        return inertia('Setting/ChangePassword');
    }
    public function updatePassword(Request $request){
        $request->validate([
            'password' => 'required|current_password',
            'new_password' => 'required'
        ]);

        $user = Auth::user();
        $user->password = $request->get('new_password');
        $user->save();

        return $this->logout($request);
    }

}
