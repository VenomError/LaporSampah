<?php

use App\Http\Controllers\Api\IncentiveController;
use App\Http\Controllers\Api\MemberController;
use App\Http\Controllers\Api\OperatorController;
use App\Http\Controllers\Api\PickupController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

// users
Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
Route::post('/users/{user}', [UserController::class, 'update'])->name('users.update');

// Pickups
Route::post('/pickups/assign-operator', [PickupController::class, 'assignOperator'])->name('pickups.assign-operator');
Route::post('/pickups/{pickup}/reject', [PickupController::class, 'reject'])->name('pickups.reject');
Route::get('/pickups/count', [PickupController::class, 'getCount'])->name('pickups.count');

// operator
Route::get('/operators', [OperatorController::class, 'index'])->name('operators');
Route::post('/operators', [OperatorController::class, 'store'])->name('operators.store');
Route::delete('/operators/{operator}', [OperatorController::class, 'destroy'])->name('operators.delete');
Route::post('/operators/{operator}/toggle-status', [OperatorController::class, 'toggleStatus'])->name('operators.toggle-status');

// Member
Route::post('/members', [MemberController::class, 'store'])->name('members.store');
Route::delete('/members/{member}', [MemberController::class, 'destroy'])->name('members.destroy');
Route::post('/members/{member}/toggle-status', [MemberController::class, 'toggleStatus'])->name('members.toggle-status');

// Incentive
Route::post('/incentive', [IncentiveController::class, 'store'])->name('incentive.store');
Route::delete('/incentive/{incentive}', [IncentiveController::class, 'destroy'])->name('incentive.destroy');
Route::post('/incentive/{incentive}/toggle-status', [IncentiveController::class, 'toggleStatus'])->name('incentive.toggle-status');

// Point Redemptions
Route::prefix('redemptions')->name('redemptions.')->group(function () {
    Route::post('/list', [IncentiveController::class, 'redemptionList'])->name('list');
    Route::post('/{redemption}/update-status', [IncentiveController::class, 'updateRedemptionStatus'])->name('update-status');
});