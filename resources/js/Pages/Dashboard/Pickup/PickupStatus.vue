<script setup>
import PickupStatusTable from "../../../Components/Table/PickupStatusTable.vue";
import { usePage, Head } from "@inertiajs/vue3";
import { computed } from "vue";

const props = usePage().props;
const status = props.status;
const today = props.today;
const total = props.total;
const icon = props.icon;
const color = props.color;

// Judul dinamis dengan gaya Bold
const displayTitle = computed(() => {
    return `Status: ${status.charAt(0).toUpperCase() + status.slice(1)}`;
});

// Mapping warna untuk border/shadow "Pop"
const shadowColor = computed(() => {
    const colors = {
        primary: 'shadow-blue-100',
        success: 'shadow-green-100',
        warning: 'shadow-orange-100',
        danger: 'shadow-red-100',
        info: 'shadow-cyan-100'
    };
    return colors[color] || 'shadow-slate-100';
});
</script>

<template>
  <Head :title="displayTitle" />
    
    <div class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1 italic">Filter Logistik</p>
            <h2 class="text-3xl font-black text-slate-900 tracking-tighter uppercase">
                {{ status }} <span class="text-green-600">Archive</span>
            </h2>
        </div>
        <div class="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <span class="w-2 h-2 rounded-full animate-pulse" :class="`bg-${color === 'primary' ? 'blue' : color}-500` || 'bg-slate-400'"></span>
            <span class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Live Monitoring</span>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      
      <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
        <div class="relative z-10">
            <div class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
              <i class="ti ti-database text-3xl"></i>
            </div>
            <p class="text-5xl font-black text-slate-900 tracking-tighter">{{ total }}</p>
            <p class="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Total Akumulasi</p>
        </div>
        <i class="ti ti-list-check absolute -bottom-6 -right-6 text-9xl text-slate-50 opacity-50 group-hover:rotate-12 transition-transform duration-500"></i>
      </div>

      <div :class="['bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative', shadowColor]">
        <div class="relative z-10">
            <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300', `bg-${color === 'primary' ? 'blue' : color}-50 text-${color === 'primary' ? 'blue' : color}-600`]">
              <i :class="['ti ti-' + icon, 'text-3xl']"></i>
            </div>
            <p class="text-5xl font-black text-slate-900 tracking-tighter">{{ today }}</p>
            <p class="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2 italic">Laporan Hari Ini</p>
        </div>
        <i :class="['ti ti-' + icon, 'absolute -bottom-6 -right-6 text-9xl opacity-5 group-hover:-rotate-12 transition-transform duration-500']"></i>
      </div>

    </div>

    <div class="bg-white rounded-[3rem] p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
        <div class="mb-8 flex items-center justify-between relative z-10">
            <div>
                <h3 class="font-black text-xl text-slate-900 tracking-tight">Records Detail</h3>
                <div class="h-1.5 w-12 bg-green-500 rounded-full mt-2"></div>
            </div>
        </div>
        
        <PickupStatusTable :status="status" />
    </div>

</template>

<style scoped>
@reference "../../../../css/app.css";

/* Helper untuk handle warna dinamis dari props jika tidak terdeteksi tailwind jit */
.bg-primary-50 { @apply bg-blue-50; }
.text-primary-600 { @apply text-blue-600; }
.bg-danger-50 { @apply bg-red-50; }
.text-danger-600 { @apply text-red-600; }
.bg-warning-50 { @apply bg-orange-50; }
.text-warning-600 { @apply text-orange-600; }
</style>