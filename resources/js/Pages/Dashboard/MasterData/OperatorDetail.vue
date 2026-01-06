<script setup>
import { Head, Link } from "@inertiajs/vue3";
import {route} from "@route";
const props = defineProps(['operator', 'pickups', 'stats']);

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
</script>

<template>

    <Head :title="'Detail Petugas - ' + operator.name" />

    <div class="mb-8 flex items-center justify-between">
        <Link :href="route('dashboard.master-data.operator')"
            class="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors font-black uppercase text-[10px] tracking-widest">
            <i class="ti ti-arrow-narrow-left text-xl"></i> Kembali ke Daftar
        </Link>
        <div class="flex gap-2">
            <span :class="['px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm',
                operator.user?.is_active ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600']">
                {{ operator.user?.is_active ? 'Petugas Aktif' : 'Non-Aktif' }}
            </span>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">

        <div class="lg:col-span-1 space-y-6">
            <div
                class="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-center relative overflow-hidden">
                <div class="relative z-10">
                    <div
                        class="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center text-blue-600 mb-4 mx-auto border-4 border-white shadow-inner">
                        <i class="ti ti-truck-delivery text-5xl"></i>
                    </div>
                    <h3 class="text-2xl font-black text-slate-900 tracking-tighter leading-tight">{{ operator.name }}
                    </h3>
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">ID Petugas: #{{
                        operator.id }}</p>
                </div>
                <div class="mt-8 pt-8 border-t border-slate-50 space-y-4 text-left">
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Akses</p>
                        <p class="text-xs font-bold text-slate-700 truncate">{{ operator.account?.email }}</p>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Status Verifikasi
                        </p>
                        <p class="text-xs font-bold"
                            :class="operator.account?.email_verified_at ? 'text-green-600' : 'text-red-500'">
                            {{ operator.account?.email_verified_at ? 'Terverifikasi' : 'Belum Verifikasi' }}
                        </p>
                    </div>
                </div>
                <i class="ti ti-briefcase absolute -bottom-10 -right-10 text-9xl opacity-[0.03]"></i>
            </div>
        </div>

        <div class="lg:col-span-3 space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                    class="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-100 relative group overflow-hidden">
                    <div class="relative z-10">
                        <p class="text-[10px] font-black uppercase tracking-widest opacity-60">Total Penjemputan</p>
                        <h3 class="text-5xl font-black tracking-tighter mt-1">{{ stats.total_completed }}</h3>
                        <p class="text-[10px] font-bold mt-2 opacity-80 italic">Dari {{ stats.total_assigned }} tugas
                            diberikan</p>
                    </div>
                    <i
                        class="ti ti-circle-check absolute -right-4 -bottom-4 text-8xl opacity-20 group-hover:scale-110 transition-transform"></i>
                </div>

                <div
                    class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-center group hover:shadow-xl transition-all">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sampah Terkumpul</p>
                    <h3
                        class="text-4xl font-black text-slate-900 tracking-tighter mt-1 group-hover:text-blue-600 transition-colors">
                        {{ stats.total_weight }} <span class="text-lg italic text-slate-300">KG</span>
                    </h3>
                </div>

                <div
                    class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efektivitas Kerja</p>
                    <h3 class="text-4xl font-black text-slate-900 tracking-tighter mt-1">
                        {{ stats.total_assigned > 0 ? Math.round((stats.total_completed / stats.total_assigned) * 100) :
                        0 }}%
                    </h3>
                </div>
            </div>

            <div class="bg-white rounded-[3rem] p-8 md:p-10 border border-slate-100 shadow-sm">
                <div class="flex items-center justify-between mb-8">
                    <h3 class="text-xl font-black text-slate-900 tracking-tight">Riwayat Penugasan</h3>
                    <div class="h-1 w-12 bg-blue-500 rounded-full"></div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left border-separate border-spacing-y-3">
                        <thead>
                            <tr class="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <th class="px-6 py-2">ID</th>
                                <th class="px-6 py-2">Warga (Member)</th>
                                <th class="px-6 py-2">Tanggal Selesai</th>
                                <th class="px-6 py-2 text-center">Hasil (KG)</th>
                                <th class="px-6 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="pickup in pickups" :key="pickup.id"
                                class="bg-slate-50/50 hover:bg-blue-50/30 transition-colors group">
                                <td class="px-6 py-5 rounded-l-[1.5rem] text-xs font-black text-slate-300 italic">#{{
                                    pickup.id }}</td>
                                <td class="px-6 py-5">
                                    <span
                                        class="text-sm font-black text-slate-700 group-hover:text-blue-600 transition-colors">{{
                                        pickup.member?.name }}</span>
                                </td>
                                <td class="px-6 py-5 text-[11px] font-bold text-slate-500 uppercase">
                                    {{ pickup.status === 'completed' ? formatDate(pickup.updated_at) : '---' }}
                                </td>
                                <td class="px-6 py-5 text-center">
                                    <span
                                        class="px-3 py-1 bg-white border border-slate-100 rounded-lg text-xs font-black text-slate-900">
                                        {{ pickup.weight || 0 }}
                                    </span>
                                </td>
                                <td class="px-6 py-5 rounded-r-[1.5rem]">
                                    <span
                                        :class="['px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest',
                                            pickup.status === 'completed' ? 'bg-green-50 text-green-600' :
                                                pickup.status === 'processing' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-500']">
                                        {{ pickup.status }}
                                    </span>
                                </td>
                            </tr>
                            <tr v-if="pickups.length === 0">
                                <td colspan="5" class="py-20 text-center text-slate-300 font-bold italic">Belum ada
                                    riwayat tugas untuk petugas ini.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>