<?php

use App\Http\Controllers\LocationController;
use Illuminate\Support\Facades\Route;

include base_path('/routes/auth.php');

Route::post('/location', [LocationController::class, 'getAddress'])->name('location.getaddress');

include base_path('/routes/member.php');
include base_path('/routes/dashboard.php');

