<?php

use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\MasterDataController;
use App\Http\Controllers\Dashboard\PickupController;
use App\Http\Controllers\Dashboard\ReportController;
use App\Http\Controllers\Dashboard\SettingController;
use Illuminate\Support\Facades\Route;


Route::prefix('dashboard')->middleware(['dashboard'])->name('dashboard')->group(function () {
    Route::get('/', [DashboardController::class, 'index']);
    Route::get('/point-reedemtion', [DashboardController::class, 'pointReedemtion'])->name('.point.reedemtion');
    Route::get('/pickup-location', [DashboardController::class, 'pickupLocation'])->name('.pickup.location');
    Route::get('/member-location', [DashboardController::class, 'memberLocation'])->name('.member.location');

    Route::prefix('pickup')->name('.pickup')->group(function () {
        Route::get('/list', [PickupController::class, 'pickupList'])->name('.list');
        Route::get('/list/{status}', [PickupController::class, 'status'])->name('.status');

        Route::post('/list', [PickupController::class, 'getPickup'])->name('.get-pickup'); // dashboard.pickup.get-pickup
        Route::post('/status-count', [PickupController::class, 'getPickupCount'])->name('.status-count'); // dashboard.pickup.status-count
    });
    Route::prefix('report')->name('.report')->group(function () {
        Route::get('/pickup', [ReportController::class, 'pickupReport'])->name('.pickup');
        Route::get('/point-reedemtion', [ReportController::class, 'pointReedemtionReport'])->name('.point-reedemtion');
    });
    Route::prefix('master-data')->name('.master-data')->group(function () {
        Route::get('/admin', [MasterDataController::class, 'admin'])->name('.admin');
        Route::get('/operator', [MasterDataController::class, 'operator'])->name('.operator');
        Route::get('/member', [MasterDataController::class, 'member'])->name('.member');
        Route::get('/incentive', [MasterDataController::class, 'incentive'])->name('.incentive');
    });
    Route::prefix('settings')->name('.settings')->group(function () {
        Route::get('/system', [SettingController::class, 'system'])->name('.system');
        Route::get('/account', [SettingController::class, 'account'])->name('.account');
    });




});
