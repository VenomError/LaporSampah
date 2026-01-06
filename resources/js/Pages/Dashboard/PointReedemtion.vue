<script setup>
import RedemptionTable from "@/Components/Table/RedemptionTable.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
  <Head title="Permintaan Penukaran Poin" />
    
    <div class="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
            <h2 class="text-3xl font-black text-slate-900 tracking-tighter uppercase">
                Redemption <span class="text-green-600">Requests</span>
            </h2>
            <p class="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest italic">
                Proses permintaan penukaran poin warga menjadi insentif
            </p>
        </div>
        
        <div class="flex items-center gap-4 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
            <div class="w-10 h-10 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
                <i class="ti ti-gift text-2xl"></i>
            </div>
            <div>
                <p class="text-[10px] font-black text-slate-400 uppercase leading-none">Status</p>
                <p class="text-sm font-black text-slate-900 mt-1 uppercase">Menunggu Proses</p>
            </div>
        </div>
    </div>

    <div class="bg-white rounded-[3rem] p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <i class="ti ti-building-store text-[15rem]"></i>
        </div>
        <RedemptionTable />
    </div>

</template>