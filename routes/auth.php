<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
// =========================================
// AUTH CONTROLLER
// =========================================
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/login', [AuthController::class, 'loginProcess'])->name('login.process');
    Route::get('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/register', [AuthController::class, 'registerProcess'])->name('register.process');
    Route::get('/forgot-password', [AuthController::class, 'forgot'])->name('forgot');
});
Route::middleware('auth')->group(function () {
    Route::get('/email/verify/{id}/{hash}', [AuthController::class, 'verifyEmail'])->middleware('signed')->name('verification.verify');
    Route::get('/email/verify', [AuthController::class, 'verifyNotice'])->name('verification.notice');
    Route::any('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/change-password', [AuthController::class, 'changePassword'])->name('password.change');
    Route::post('/change-password', [AuthController::class, 'updatePassword'])->name('password.update');
    Route::post('/email/verification-notification', [AuthController::class, 'resendEmail'])->name('verification.send');
});
