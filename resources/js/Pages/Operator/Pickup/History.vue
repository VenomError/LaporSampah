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

const props = defineProps(['pickups', 'total_weight']);

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
};
</script>

<template>
  <Head title="Riwayat Kerja" />
    
    <div class="bg-blue-600 p-8 rounded-[3rem] text-white shadow-xl shadow-blue-100 mb-8 relative overflow-hidden">
        <div class="relative z-10">
            <p class="text-[10px] font-black uppercase tracking-widest opacity-60">Total Kontribusi Anda</p>
            <h3 class="text-5xl font-black tracking-tighter mt-1">{{ total_weight }} <span class="text-xl italic opacity-70">KG</span></h3>
            <div class="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-lg text-[9px] font-black uppercase tracking-widest">
                <i class="ti ti-award"></i> Pahlawan Kebersihan
            </div>
        </div>
        <i class="ti ti-history absolute -right-6 -bottom-6 text-9xl opacity-20 rotate-12"></i>
    </div>

    <div class="mb-6 px-2">
        <h2 class="text-xl font-black text-slate-900 tracking-tight italic uppercase">Aktivitas <span class="text-blue-600">Terakhir</span></h2>
        <div class="h-1 w-10 bg-blue-500 rounded-full mt-1"></div>
    </div>

    <div class="space-y-4">
        <div v-for="pickup in pickups.data" :key="pickup.id" 
             class="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex items-center justify-between group">
            
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-slate-50 rounded-2xl flex flex-col items-center justify-center border border-slate-100 group-hover:bg-blue-50 transition-colors">
                    <span class="text-[8px] font-black text-slate-400 uppercase leading-none">ID</span>
                    <span class="text-xs font-black text-slate-900 leading-none mt-1">#{{ pickup.id }}</span>
                </div>
                <div>
                    <h4 class="font-black text-slate-900 text-sm leading-none truncate w-32 md:w-full italic">{{ pickup.member?.name }}</h4>
                    <p class="text-[9px] font-bold text-slate-400 uppercase mt-1.5 tracking-tighter">{{ formatDate(pickup.updated_at) }}</p>
                </div>
            </div>

            <div class="text-right">
                <div class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-xl font-black text-xs italic">
                    {{ pickup.weight }} KG
                </div>
            </div>
        </div>

        <div v-if="pickups.data.length === 0" class="py-20 text-center">
            <i class="ti ti-package-off text-5xl text-slate-200 mb-2"></i>
            <p class="text-xs font-bold text-slate-400 italic">Belum ada riwayat penjemputan.</p>
        </div>
    </div>

    <div v-if="pickups.links.length > 3" class="mt-8 flex justify-center gap-1">
        <template v-for="(link, k) in pickups.links" :key="k">
            <Link 
                v-if="link.url"
                :href="link.url" 
                v-html="link.label"
                class="px-4 py-2 rounded-xl text-[10px] font-black transition-all"
                :class="link.active ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-100'"
            />
        </template>
    </div>

</template>