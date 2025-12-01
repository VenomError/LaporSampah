<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PickUpController extends Controller
{
    public function create(){
        return inertia('PickUpCreate');
    }
}
