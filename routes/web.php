<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\OperatorDashboardController;

include base_path('/routes/auth.php');

Route::post('/location', [LocationController::class, 'getAddress'])->name('location.getaddress');

include base_path('/routes/member.php');
include base_path('/routes/dashboard.php');
Route::middleware(['auth', 'role:operator'])->prefix('operator')->name('operator.')->group(function () {
    Route::get('/', [OperatorDashboardController::class, 'index'])->name('dashboard');
    Route::get('/pickup', [OperatorDashboardController::class, 'pickupList'])->name('pickup.index');
    Route::get('/pickup/{pickup}', [OperatorDashboardController::class, 'pickupDetail'])->name('pickup.show');
    Route::post('/pickup/{pickup}/complete', [OperatorDashboardController::class, 'completePickup'])->name('pickup.complete');
    Route::get('/operator/pickup-history', [OperatorDashboardController::class, 'history'])->name('pickup.history');
    Route::get('/profile', [OperatorDashboardController::class, 'profile'])->name('profile');
    Route::get('/notifcation', [OperatorDashboardController::class, 'notification'])->name('notification');
    Route::get('/profile/change-password', [OperatorDashboardController::class, 'changePassword'])->name('change-password');
    Route::post('/profile/change-password', [OperatorDashboardController::class, 'updatePassword'])->name('update-password');
    
});
Route::prefix('api')
    ->name('api.')
    // ->middleware('auth')
    ->group(function () {
        include base_path('/routes/api.php');
    });
