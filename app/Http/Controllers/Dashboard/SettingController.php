<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function system()
    {

        return inertia('Dashboard/Settings/System');
    }

    public function account()
    {
        return inertia('Dashboard/Settings/Account');
    }
}
