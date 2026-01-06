<script setup>
import { Head, Link } from "@inertiajs/vue3";
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

import {route} from "@route";

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler);

const props = defineProps(['stats', 'chartData', 'recent_pickups']);

// Konfigurasi Chart Tren Sampah
const chartConfig = {
  labels: props.chartData.map(d => d.date),
  datasets: [{
    label: 'Berat (KG)',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: '#10b981',
    pointBackgroundColor: '#10b981',
    data: props.chartData.map(d => d.total_weight),
    fill: true,
    tension: 0.4,
  }]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: { y: { beginAtZero: true, grid: { display: false } }, x: { grid: { display: false } } }
};
</script>

<template>

  <Head title="Admin Dashboard" />

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <div
      class="bg-green-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-green-100 flex items-center justify-between overflow-hidden relative group">
      <div class="relative z-10">
        <p class="text-[10px] font-black uppercase tracking-widest opacity-60">Total Berat Sampah</p>
        <h3 class="text-5xl font-black tracking-tighter mt-1">{{ stats.total_weight }} <span
            class="text-xl italic opacity-70">KG</span></h3>
      </div>
      <i
        class="ti ti-trash-filled absolute -right-4 -bottom-4 text-9xl opacity-10 group-hover:rotate-12 transition-transform duration-500"></i>
    </div>

    <div
      class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-xl transition-all">
      <div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Warga Terdaftar</p>
        <h3 class="text-5xl font-black text-slate-900 tracking-tighter mt-1">{{ stats.total_members }}</h3>
      </div>
      <div
        class="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400 group-hover:bg-green-600 group-hover:text-white transition-all">
        <i class="ti ti-users text-3xl"></i>
      </div>
    </div>

    <div
      class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-xl transition-all">
      <div>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Poin Terdistribusi</p>
        <h3 class="text-4xl font-black text-slate-900 tracking-tighter mt-1">{{
          Number(stats.total_points).toLocaleString('id-ID') }}</h3>
      </div>
      <div
        class="w-16 h-16 bg-amber-50 rounded-3xl flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all">
        <i class="ti ti-coins text-3xl"></i>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <div class="flex items-center gap-3 mb-4 ml-4">
      <div class="w-1.5 h-4 bg-green-500 rounded-full"></div>
      <h4 class="text-xs font-black text-slate-400 uppercase tracking-widest">Logistik Penjemputan</h4>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div class="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-3"><i
            class="ti ti-bell-ringing"></i></div>
        <p class="text-3xl font-black text-slate-900">{{ stats.pending }}</p>
        <p class="text-[9px] font-black text-slate-400 uppercase mt-1">Pending</p>
      </div>
      <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3"><i
            class="ti ti-truck-delivery"></i></div>
        <p class="text-3xl font-black text-slate-900">{{ stats.processing }}</p>
        <p class="text-[9px] font-black text-slate-400 uppercase mt-1">Diproses</p>
      </div>
      <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div class="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-3"><i
            class="ti ti-circle-check"></i></div>
        <p class="text-3xl font-black text-slate-900">{{ stats.completed }}</p>
        <p class="text-[9px] font-black text-slate-400 uppercase mt-1">Selesai</p>
      </div>
      <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div class="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-3"><i
            class="ti ti-trash-x"></i></div>
        <p class="text-3xl font-black text-slate-900">{{ stats.rejected }}</p>
        <p class="text-[9px] font-black text-slate-400 uppercase mt-1">Ditolak</p>
      </div>
      <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
        <div class="w-10 h-10 bg-slate-100 text-slate-400 rounded-xl flex items-center justify-center mb-3"><i
            class="ti ti-forbid-2"></i></div>
        <p class="text-3xl font-black text-slate-900">{{ stats.cancelled }}</p>
        <p class="text-[9px] font-black text-slate-400 uppercase mt-1">Batal</p>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div class="lg:col-span-2 bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h3 class="text-xl font-black text-slate-900 tracking-tight">Tren Pengumpulan</h3>
          <p class="text-[10px] font-bold text-slate-400 uppercase">Volume Sampah (KG) - 7 Hari Terakhir</p>
        </div>
      </div>
      <div class="h-64">
        <Line :data="chartConfig" :options="chartOptions" />
      </div>
    </div>

    <div class="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
      <h3 class="text-xl font-black text-slate-900 tracking-tight mb-6">Aktivitas</h3>
      <div class="space-y-5">
        <div v-for="pickup in recent_pickups" :key="pickup.id" class="flex items-center gap-4">
          <div
            class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 text-xs font-black italic">
            {{ pickup.weight }}k
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-black text-slate-900 truncate">{{ pickup.member?.name }}</p>
            <p class="text-[10px] font-bold text-slate-400 uppercase">{{ pickup.status }}</p>
          </div>
          <Link :href="route('dashboard.pickup.list')" class="text-slate-300 hover:text-green-600"><i
              class="ti ti-chevron-right"></i></Link>
        </div>
        <Link :href="route('dashboard.pickup.list')"
          class="block text-center py-3 bg-slate-50 rounded-2xl text-[10px] font-black uppercase text-slate-400 hover:bg-green-600 hover:text-white transition-all">
          Lihat Semua Laporan</Link>
      </div>
    </div>
  </div>

</template>