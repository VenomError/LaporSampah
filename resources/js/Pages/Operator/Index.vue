<script>
import OperatorLayout from "@/Layouts/OperatorLayout.vue";
export default {
    // Using the shorthand...
    layout: [OperatorLayout],
}
</script>
<script setup>
import { Head, Link } from "@inertiajs/vue3";
import {route} from "@route";
const props = defineProps(['active_task', 'stats']);
</script>

<template>

    <Head title="Beranda Operator" />

    <div class="mb-8">
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Logistik Lapangan</p>
        <h2 class="text-3xl font-black text-slate-900 tracking-tighter leading-tight">
            Halo, <span class="text-blue-600 italic">Petugas!</span> <br>
            Siap angkut hari ini?
        </h2>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-8">
        <div
            class="bg-blue-600 p-6 rounded-[2.5rem] text-white shadow-xl shadow-blue-100 relative overflow-hidden group">
            <div class="relative z-10">
                <p class="text-[9px] font-black uppercase tracking-widest opacity-60">Selesai Hari Ini</p>
                <h4 class="text-4xl font-black mt-1 tracking-tighter">{{ stats.completed_today }}</h4>
            </div>
            <i
                class="ti ti-checklist absolute -right-2 -bottom-2 text-6xl opacity-20 group-hover:rotate-12 transition-transform duration-500"></i>
        </div>

        <div class="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
            <div class="relative z-10">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Total Timbangan
                </p>
                <h4 class="text-3xl font-black text-slate-900 mt-2 tracking-tighter">
                    {{ stats.total_weight_today }} <span class="text-xs italic text-slate-400">KG</span>
                </h4>
            </div>
            <i class="ti ti-scale absolute -right-2 -bottom-2 text-6xl opacity-[0.03]"></i>
        </div>
    </div>

    <div class="mb-4 flex items-center justify-between px-2">
        <h3 class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tugas Berjalan</h3>
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
    </div>

    <div v-if="active_task"
        class="bg-white p-6 rounded-[2.8rem] border-2 border-blue-600 shadow-2xl shadow-blue-50 relative overflow-hidden">
        <div class="flex items-start justify-between mb-6">
            <div class="flex-1">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-lg mb-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span class="text-[9px] font-black text-blue-600 uppercase tracking-widest">ID #{{ active_task.id
                        }}</span>
                </div>
                <h4 class="text-2xl font-black text-slate-900 tracking-tighter leading-none italic uppercase">
                    {{ active_task.member?.name }}
                </h4>
                <p class="text-xs font-bold text-slate-400 mt-2 flex items-center gap-1">
                    <i class="ti ti-phone text-blue-500"></i> {{ active_task.member?.phone }}
                </p>
            </div>
            <div
                class="w-14 h-14 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <i class="ti ti-map-pin text-2xl"></i>
            </div>
        </div>

        <Link :href="route('operator.pickup.show', active_task.id)"
            class="block w-full py-5 bg-slate-900 text-white text-center rounded-[1.8rem] font-black uppercase tracking-[0.2em] text-[10px] shadow-xl hover:bg-blue-600 transition-all active:scale-95">
            Buka Detail & Timbang
        </Link>

        <i
            class="ti ti-truck-delivery absolute -right-8 -bottom-8 text-[12rem] opacity-[0.02] -rotate-12 pointer-events-none"></i>
    </div>

    <div v-else class="bg-slate-100/50 p-12 rounded-[3rem] border-2 border-dashed border-slate-200 text-center">
        <div
            class="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 text-slate-300 shadow-sm">
            <i class="ti ti-coffee text-3xl"></i>
        </div>
        <p class="text-xs font-black text-slate-400 uppercase tracking-widest leading-relaxed">
            Belum ada tugas aktif.<br>
            <span class="lowercase font-bold italic opacity-60">Santai sejenak sambil menunggu instruksi Admin.</span>
        </p>
    </div>

    <div class="mt-8">
        <Link :href="route('operator.pickup.index')"
            class="flex items-center justify-between p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm group">
            <div class="flex items-center gap-4">
                <div
                    class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <i class="ti ti-list-check text-xl"></i>
                </div>
                <div>
                    <p class="text-[10px] font-black text-slate-900 uppercase tracking-widest">Daftar Semua Tugas</p>
                    <p class="text-[9px] font-bold text-slate-400 uppercase italic">Lihat riwayat & antrean</p>
                </div>
            </div>
            <i class="ti ti-chevron-right text-slate-300 group-hover:translate-x-1 transition-transform"></i>
        </Link>
    </div>

</template>