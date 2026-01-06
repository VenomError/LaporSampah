<script>
import OperatorLayout from "@/Layouts/OperatorLayout.vue";
export default {
    // Using the shorthand...
    layout: [OperatorLayout],
}
</script>
<script setup>
import { Head, Link, router } from "@inertiajs/vue3";
import {route} from "@route";

const props = defineProps(['operator', 'user']);

const handleLogout = () => {
    router.post(route('logout'));
};
</script>

<template>
  <Head title="Profil Saya" />
    
    <div class="text-center mt-4 mb-10">
        <div class="relative inline-block group">
            <div class="w-28 h-28 bg-blue-600 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-blue-200 border-4 border-white mb-4 transition-transform group-hover:rotate-6">
                <i class="ti ti-user-bolt text-5xl"></i>
            </div>
            <div class="absolute -bottom-1 -right-1 w-10 h-10 bg-green-500 rounded-2xl border-4 border-white flex items-center justify-center text-white shadow-lg">
                <i class="ti ti-shield-check text-xl"></i>
            </div>
        </div>
        <h2 class="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">{{ operator.name }}</h2>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1 italic">ID Petugas: #{{ operator.id }}</p>
    </div>

    <div class="space-y-4 mb-10">
        <div class="bg-white p-6 rounded-[2.2rem] border border-slate-100 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                <i class="ti ti-mail text-2xl"></i>
            </div>
            <div>
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Alamat Email</p>
                <p class="text-sm font-bold text-slate-700 leading-none mt-1">{{ user.email }}</p>
            </div>
        </div>

        <div class="bg-white p-6 rounded-[2.2rem] border border-slate-100 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                <i class="ti ti-calendar-event text-2xl"></i>
            </div>
            <div>
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Terdaftar Sejak</p>
                <p class="text-sm font-bold text-slate-700 leading-none mt-1">
                    {{ new Date(operator.created_at).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }) }}
                </p>
            </div>
        </div>
    </div>

    <div class="px-2 mb-4 flex items-center gap-3">
        <div class="w-1.5 h-4 bg-blue-500 rounded-full"></div>
        <h3 class="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">Keamanan & Akses</h3>
    </div>

    <div class="bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-sm mb-10">
        <Link :href="route('operator.change-password')" class="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors">
            <div class="flex items-center gap-4">
                <i class="ti ti-lock text-xl text-slate-300"></i>
                <span class="text-xs font-bold text-slate-700">Ganti Password</span>
            </div>
            <i class="ti ti-chevron-right text-slate-300"></i>
        </Link>

    </div>

    <button 
        @click="handleLogout"
        class="w-full py-5 bg-red-50 text-red-600 rounded-[2rem] border border-red-100 font-black uppercase tracking-[0.2em] text-[10px] shadow-sm shadow-red-50 active:scale-95 active:bg-red-500 active:text-white transition-all flex items-center justify-center gap-3"
    >
        <i class="ti ti-power text-lg"></i>
        Keluar Aplikasi
    </button>

    <p class="text-center text-[9px] font-black text-slate-300 uppercase tracking-widest mt-8 mb-4 italic">
        GONSA OPS v1.0.4
    </p>

</template>