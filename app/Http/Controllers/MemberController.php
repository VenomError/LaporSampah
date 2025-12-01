<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function home()
    {
        return inertia('Index');
    }
    public function profile()
    {
        return inertia('Profile');
    }

    public function history()
    {
        return inertia('PickUpHistory');
    }
    public function change()
    {
        return inertia('ChangePoint');
    }

    public function editProfile()
    {
        return inertia('Setting/EditProfile');
    }

    public function updateProfile(Request $request)
    {
        $data= $request->validate([
            'name' => 'required',
            'phone' => 'required',
        ]);

        $member = Auth::user()->member;
        $member->fill($data);
        $member->save();

        return back()->with('message' , 'Update Sukses');
    }

}
