<?php

namespace App\Http\Controllers\Api;

use App\Enum\Status;
use App\Http\Controllers\Controller;
use App\Models\Operator;
use App\Repository\OperatorRepository;
use Illuminate\Http\Request;

class OperatorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $operators = Operator::orderBy('name')->active()->get();
        return response()->json($operators);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, OperatorRepository $repo)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required'
        ]);
        try {
            $repo->create($request->only('email', 'password'), $request->only('name'));
            flash("Operator berhasil di Tambah");
        } catch (\Throwable $th) {
            flash()->error($th->getMessage());
        } finally {
            return back();
        }
    }

    public function toggleStatus(Operator $operator, OperatorRepository $repo)
    {
        $repo->toggleStatus($operator);
        $operator->refresh();
        if ($operator->status == Status::ACTIVE) {
            flash("Operator Activated");
        } else {
            flash("Operator Inactivated");
        }
        return back();
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
    public function destroy(Operator $operator)
    {
        if ($operator->account()->delete()) {
            flash("Operator Berhasil di Hapus");
        } else {
            flash()->error("Operator Gagal di Hapus");
        }
        return back();
    }
}
