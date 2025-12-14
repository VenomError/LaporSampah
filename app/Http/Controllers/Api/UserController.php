<?php

namespace App\Http\Controllers\Api;

use App\Enum\Status;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function show(User $user)
    {
        return response()->json($user->toArray());
    }
    public function update(Request $request, User $user)
    {
        $request->validate([
            'email' => 'required|email|unique:users,email,' . $user->id,
            'is_active' => 'required|boolean',
            'password' => 'nullable'
        ]);
        $user->email = $request->email;
        $user->status = $request->is_active ? Status::ACTIVE : Status::NONACTIVE;
        if ($request->password) {
            $user->password = $request->password;
        }
        if ($user->save()) {
            flash()->option('position', 'bottom-right')->success("data berhasil di update");
        } else {
            flash()->option('position', 'bottom-right')->error("data gagal di update");
        }

        return back();
    }
}
