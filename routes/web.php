<?php

use App\Http\Controllers\LocationController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PickUpController;
use Illuminate\Support\Facades\Route;

include base_path('/routes/auth.php');

Route::post('/location', [LocationController::class, 'getAddress'])->name('location.getaddress');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware('role:member')->group(function () {
        Route::get('/', [MemberController::class, 'home'])->name('home');
        Route::get('/profile', [MemberController::class, 'profile'])->name('profile');
        Route::get('/profile/edit-profile', [MemberController::class, 'editProfile'])->name('profile.edit');
        Route::post('/profile/edit-profile', [MemberController::class, 'updateProfile'])->name('profile.update');
        Route::get('/profile/location', [MemberController::class, 'location'])->name('profile.location');
        Route::post('/profile/location', [MemberController::class, 'locationAdd'])->name('profile.location.add');

        Route::get('/history', [MemberController::class, 'history'])->name('history');
        Route::get('/history/point-history/{point_history}/detail', [MemberController::class, 'pointHistoryDetail'])->name('point.history.detail');

        Route::get('/change', [MemberController::class, 'change'])->name('change.point');
        Route::post('/change', [MemberController::class, 'changeIncentive'])->name('change.incentive');
        Route::get('/change/{point_reedemtion}/detail', [MemberController::class, 'changeDetail'])->name('change.detail');

        Route::get('/pick-up/create', [PickUpController::class, 'create'])->name('pickup.create');
        Route::post('/pick-up/create', [PickUpController::class, 'createPickup'])->name('pickup.store');
        Route::get('/pick-up/{pickup}/detail', [PickUpController::class, 'detail'])->name('pickup.detail');
        Route::post('/pick-up/{pickup}/cancel', action: [PickUpController::class, 'cancel'])->name('pickup.cancel');

        Route::get('/notifications', [NotificationController::class, 'index'])->name('notifications');

    });
});
