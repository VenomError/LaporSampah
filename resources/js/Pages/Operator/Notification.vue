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

const props = defineProps(["notifications"]);

// Helper tema warna untuk operator
const getStatusTheme = (color) => {
    const themes = {
        success: 'bg-green-50 text-green-600 border-green-100', // Selesai/Poin
        danger: 'bg-red-50 text-red-600 border-red-100',       // Pembatalan
        warning: 'bg-amber-50 text-amber-600 border-amber-100', // Urgent
    };
    return themes[color] || 'bg-blue-50 text-blue-600 border-blue-100'; // Default/Tugas Baru
};

// Ikon dinamis berdasarkan status
const getStatusIcon = (color) => {
    if (color === 'success') return 'ti-circle-check';
    if (color === 'danger') return 'ti-circle-x';
    if (color === 'warning') return 'ti-alert-triangle';
    return 'ti-bell-ringing'; // Default tugas masuk
};
</script>

<template>
    <Head title="Kabar Terbaru" />
        <div class="flex items-center gap-4 mb-8">
            <Link :href="route('operator.dashboard')" class="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 shadow-sm active:scale-90 transition-transform">
                <i class="ti ti-chevron-left text-xl"></i>
            </Link>
            <div>
                <h2 class="text-xl font-black text-slate-900 tracking-tight leading-none uppercase italic">Pusat <span class="text-blue-600">Kabar</span></h2>
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Notifikasi petugas lapangan</p>
            </div>
        </div>

        <div class="bg-white rounded-[2.8rem] border border-slate-100 shadow-sm min-h-[70vh] relative overflow-hidden">
            <div class="px-6 py-10 flex flex-col gap-8">
                
                <div v-for="(list, date) in notifications" :key="date" class="flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <p class="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] italic whitespace-nowrap">
                            {{ date }}
                        </p>
                        <div class="h-[1px] w-full bg-slate-50"></div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <div 
                            v-for="notification in list" 
                            :key="notification.id"
                            class="flex justify-between items-start p-5 bg-slate-50/50 border border-slate-100/50 rounded-3xl hover:bg-white hover:shadow-md transition-all active:scale-[0.98]"
                        >
                            <div class="flex justify-start items-start gap-4">
                                <div 
                                    class="flex-shrink-0 w-12 h-12 rounded-2xl border flex justify-center items-center shadow-sm"
                                    :class="getStatusTheme(notification.data?.color)"
                                >
                                    <i :class="['ti text-2xl', getStatusIcon(notification.data?.color)]"></i>
                                </div>

                                <div class="flex flex-col gap-1">
                                    <p class="font-black text-slate-900 leading-tight italic uppercase text-xs tracking-tight">
                                        {{ notification.data?.title }}
                                    </p>
                                    <p class="text-[11px] font-bold text-slate-500 leading-relaxed">
                                        {{ notification.data?.message }}
                                    </p>
                                </div>
                            </div>

                            <p class="text-[9px] font-black text-slate-300 whitespace-nowrap mt-1 italic">
                                {{
                                    new Date(notification.created_at).toLocaleString("id-ID", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })
                                }}
                            </p>
                        </div>
                    </div>
                </div>

                <div v-if="Object.keys(notifications).length === 0" class="py-24 flex flex-col items-center">
                    <div class="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-6 text-slate-200">
                        <i class="ti ti-bell-off text-4xl"></i>
                    </div>
                    <p class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 italic">Antrean kabar kosong</p>
                </div>
            </div>

            <i class="ti ti-message-2 absolute -right-10 -bottom-10 text-[15rem] opacity-[0.02] -rotate-12 pointer-events-none"></i>
        </div>
</template>