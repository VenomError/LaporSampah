<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;


Route::prefix('dashboard')->name('dashboard')->group(function () {
    Route::get('/', function () {
        Inertia::setRootView('dashboard');
        return inertia('Dashboard/Index');
    });
});
