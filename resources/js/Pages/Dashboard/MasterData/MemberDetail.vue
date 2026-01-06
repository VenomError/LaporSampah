<script setup>
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import {route} from "@route";

const props = defineProps(['member', 'pickups', 'stats']);

// Helper format tanggal
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
};
</script>

<template>
  <Head :title="'Detail Member - ' + member.name" />
    
    <div class="mb-8 flex items-center justify-between">
        <Link :href="route('dashboard.master-data.member')" class="flex items-center gap-2 text-slate-400 hover:text-green-600 transition-colors font-black uppercase text-[10px] tracking-widest">
            <i class="ti ti-arrow-narrow-left text-xl"></i> Kembali ke Daftar
        </Link>
        <div class="px-4 py-2 bg-green-50 text-green-600 rounded-2xl text-[10px] font-black uppercase tracking-widest">
            Member Aktif
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        
        <div class="lg:col-span-1 bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
            <div class="relative z-10 flex flex-col items-center text-center">
                <div class="w-24 h-24 bg-slate-100 rounded-[2rem] flex items-center justify-center text-slate-300 mb-4 border-4 border-slate-50">
                    <i class="ti ti-user text-5xl"></i>
                </div>
                <h3 class="text-2xl font-black text-slate-900 tracking-tighter">{{ member.name }}</h3>
                <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{{ member.user?.email }}</p>
                
                <div class="mt-8 w-full space-y-4">
                    <div class="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                        <span class="text-[9px] font-black text-slate-400 uppercase">WhatsApp</span>
                        <span class="text-xs font-bold text-slate-700">{{ member.phone }}</span>
                    </div>
                    <div class="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                        <span class="text-[9px] font-black text-slate-400 uppercase">Tgl Bergabung</span>
                        <span class="text-xs font-bold text-slate-700">{{ formatDate(member.created_at) }}</span>
                    </div>
                </div>
            </div>
            <i class="ti ti-id absolute -bottom-10 -right-10 text-9xl opacity-[0.03]"></i>
        </div>

        <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-amber-500 p-8 rounded-[3rem] text-white shadow-xl shadow-amber-100 flex flex-col justify-between relative group overflow-hidden">
                <div class="relative z-10">
                    <p class="text-[10px] font-black uppercase tracking-widest opacity-60">Saldo Poin Saat Ini</p>
                    <h3 class="text-6xl font-black tracking-tighter mt-2">{{ Number(member.point).toLocaleString('id-ID') }}</h3>
                </div>
                <i class="ti ti-coins absolute -right-6 -bottom-6 text-[12rem] opacity-20 group-hover:rotate-12 transition-transform duration-700"></i>
            </div>

            <div class="grid grid-rows-2 gap-6">
                <div class="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
                    <div class="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                        <i class="ti ti-scale text-3xl"></i>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Sampah</p>
                        <h4 class="text-3xl font-black text-slate-900 leading-none">{{ stats.total_weight }} <span class="text-xs italic">KG</span></h4>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
                    <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                        <i class="ti ti-truck-delivery text-3xl"></i>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Frekuensi Jemput</p>
                        <h4 class="text-3xl font-black text-slate-900 leading-none">{{ stats.total_pickups }} <span class="text-xs italic">Kali</span></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white rounded-[3rem] p-8 md:p-10 border border-slate-100 shadow-sm">
        <div class="mb-8 flex items-center justify-between">
            <div>
                <h3 class="text-xl font-black text-slate-900 tracking-tight">Riwayat Penjemputan</h3>
                <p class="text-[10px] font-bold text-slate-400 uppercase mt-1 italic">Daftar kontribusi sampah organik & anorganik</p>
            </div>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full text-left border-separate border-spacing-y-3">
                <thead>
                    <tr class="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <th class="px-6 py-2">ID Laporan</th>
                        <th class="px-6 py-2">Tanggal</th>
                        <th class="px-6 py-2">Petugas</th>
                        <th class="px-6 py-2 text-center">Berat</th>
                        <th class="px-6 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="pickup in pickups" :key="pickup.id" class="group bg-slate-50/30 hover:bg-slate-50 transition-colors">
                        <td class="px-6 py-5 rounded-l-[1.5rem] font-black text-slate-400 text-xs italic">#{{ pickup.id }}</td>
                        <td class="px-6 py-5 text-sm font-bold text-slate-700">{{ formatDate(pickup.created_at) }}</td>
                        <td class="px-6 py-5">
                            <div class="flex items-center gap-2">
                                <span class="text-xs font-bold text-slate-700">{{ pickup.operator?.name || 'Belum Ditugaskan' }}</span>
                            </div>
                        </td>
                        <td class="px-6 py-5 text-center">
                            <span class="px-3 py-1 bg-white border border-slate-100 rounded-lg text-xs font-black text-slate-900">
                                {{ pickup.weight }} KG
                            </span>
                        </td>
                        <td class="px-6 py-5 rounded-r-[1.5rem]">
                            <span :class="['px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest', 
                                pickup.status === 'completed' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500']">
                                {{ pickup.status }}
                            </span>
                        </td>
                    </tr>
                    <tr v-if="pickups.length === 0">
                        <td colspan="5" class="py-20 text-center text-slate-300 font-bold italic">Belum ada riwayat penjemputan.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>