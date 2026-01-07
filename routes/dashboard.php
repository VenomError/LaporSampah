<?php

use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\MasterDataController;
use App\Http\Controllers\Dashboard\PickupController;
use App\Http\Controllers\Dashboard\SettingController;
use Illuminate\Support\Facades\Route;

// DASHBOARD ROUTE

Route::prefix('dashboard')->middleware(['dashboard', 'auth'])->name('dashboard')->group(function () {
    Route::get('/', [DashboardController::class, 'index']);
    Route::get('/point-reedemtion', [DashboardController::class, 'pointReedemtion'])->name('.point.reedemtion');
    Route::get('/pickup-location', [DashboardController::class, 'pickupLocation'])->name('.pickup.location');
    Route::get('/member-location', [DashboardController::class, 'memberLocation'])->name('.member.location');

    Route::prefix('pickup')->name('.pickup')->group(function () {
        Route::get('/list', [PickupController::class, 'pickupList'])->name('.list');
        Route::get('/list/{status}', [PickupController::class, 'status'])->name('.status');

        Route::post('/list', [PickupController::class, 'getPickup'])->name('.get-pickup'); // dashboard.pickup.get-pickup
        Route::get('/detail/{pickup}', [PickupController::class, 'show'])->name('.show'); // dashboard.pickup.show
        Route::post('/status-count', [PickupController::class, 'getPickupCount'])->name('.status-count'); // dashboard.pickup.status-count
    });
    Route::prefix('master-data')->name('.master-data')->group(function () {
        Route::get('/admin', [MasterDataController::class, 'admin'])->name('.admin');
        Route::post('/admin', [MasterDataController::class, 'adminAdd'])->name('.admin-add'); // dashboard.master-data.admin-add
        Route::post('/admin/{user}', [MasterDataController::class, 'adminEdit'])->name('.admin-update'); // dashboard.master-data.admin-remove
        Route::delete('/admin/{user}', [MasterDataController::class, 'adminRemove'])->name('.admin-remove'); // dashboard.master-data.admin-remove
        Route::get('/operator', [MasterDataController::class, 'operator'])->name('.operator');
        Route::get('/operator/{operator}', [MasterDataController::class, 'operatorDetail'])->name('.operator-detail');
        Route::get('/member', [MasterDataController::class, 'member'])->name('.member');
        Route::get('/member/{member}', [MasterDataController::class, 'memberDetail'])->name('.member-detail');
        Route::get('/incentive', [MasterDataController::class, 'incentive'])->name('.incentive');

        Route::post('/list/{role?}', [MasterDataController::class, 'getListData'])->name('.get-list');  // dashboard.master-data.get-list
        Route::post('/incentive/list', [MasterDataController::class, 'getListIncentive'])->name('.incentive.list');  // dashboard.master-data.incentive.list
    });
    Route::prefix('settings')->name('.settings')->group(function () {
        Route::get('/system', [SettingController::class, 'system'])->name('.system');
        Route::get('/account', [SettingController::class, 'account'])->name('.account');
        Route::post('/update-profile', [SettingController::class, 'updateProfile'])->name('.updateProfile');
        Route::post('/update-password', [SettingController::class, 'updatePassword'])->name('.updatePassword');
    });

});
