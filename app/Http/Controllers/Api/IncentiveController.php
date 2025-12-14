<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Incentive;
use App\Repository\IncentiveRepository;
use Illuminate\Http\Request;

class IncentiveController extends Controller
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
    public function store(Request $request, IncentiveRepository $repo)
    {
        $data = $request->validate([
            'name' => 'required|unique:incentives,name',
            'description' => 'required',
            'image' => 'required|image|mimes:png,jpg,jpeg,gif',
            'point_required' => 'required|numeric|gt:0',
            'is_active' => 'required|boolean',
        ]);
        try {
            if ($request->file('image')) {
                $data['image'] = $request->file('image')->store('incentive', 'public');
            }
            $repo->create($data);
            flash("Incentive Berhasil di Tambahkan");
        } catch (\Throwable $th) {
            flash("Incentive Gagal di Tambahkan", 'error');
            //throw $th;
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
    public function destroy(Incentive $incentive)
    {
        if ($incentive->delete()) {
            flash("Incentive Berhasil di Hapus");
        } else {
            flash()->error("Incentive gagal di Hapus");
        }

        return back();
    }

    public function toggleStatus(Incentive $incentive)
    {
        if ($incentive->is_active) {
            $incentive->is_active = false;
            flash("Incentive Inactivated");
        } else {
            $incentive->is_active = true;
            flash("Incentive Activated");
        }

        $incentive->save();
        return back();
    }
}
