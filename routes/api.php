<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

// users
Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
Route::post('/users/{user}', [UserController::class, 'update'])->name('users.update');
