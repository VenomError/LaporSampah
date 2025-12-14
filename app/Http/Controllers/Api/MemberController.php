<?php

namespace App\Http\Controllers\Api;

use App\Enum\Status;
use App\Models\Member;
use Illuminate\Http\Request;
use App\Repository\UserRepository;
use App\Http\Controllers\Controller;
use App\Repository\MemberRepository;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, UserRepository $repo)
    {
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'name' => 'required',
            'phone' => 'required',
        ]);

        try {
            $repo->register($request->only('email', 'password'), $request->only('name', 'phone'));
            flash("Operator berhasil di Tambah");
        } catch (\Throwable $th) {
            flash()->error($th->getMessage());
        } finally {
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Member $member)
    {
        if ($member->account()->delete()) {
            flash("Member Berhasil di Hapus");
        } else {
            flash()->error("Member Gagal di Hapus");
        }
        return back();
    }

    public function toggleStatus(Member $member, MemberRepository $repo)
    {
        $account = $repo->toggleStatus($member);
        if ($account->status == Status::ACTIVE) {
            flash("Account Activated");
        } else {
            flash("Account Inactivated");
        }
    }
}
