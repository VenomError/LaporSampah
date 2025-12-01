<?php

use App\Http\Controllers\MemberController;
use App\Http\Controllers\PickUpController;
use Illuminate\Support\Facades\Route;

include base_path('/routes/auth.php');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware('role:member')->group(function () {
        Route::get('/', [MemberController::class, 'home'])->name('home');
        Route::get('/profile', [MemberController::class, 'profile'])->name('profile');
        Route::get('/profile/edit-profile', [MemberController::class, 'editProfile'])->name('profile.edit');
        Route::post('/profile/edit-profile', [MemberController::class, 'updateProfile'])->name('profile.update');
        Route::get('/history', [MemberController::class, 'history'])->name('history');
        Route::get('/change', [MemberController::class, 'change'])->name('change.point');
        Route::get('/pick-up/create', [PickUpController::class, 'create'])->name('pickup.create');
    });
});
