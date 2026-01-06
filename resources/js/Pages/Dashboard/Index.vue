<script setup>
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import { Head } from "@inertiajs/vue3";

const props = defineProps({
  stats: {
    type: Object,
    default: () => ({
      pending: 12,
      processing: 5,
      completed: 145,
      total_points: "2.4M",
    }),
  },
  recent_pickups: {
    type: Array,
    default: () => [
      { id: 1, name: "Ahmad Budi", address: "Jl. Mawar No. 12", status: "pending", time: "5 menit yang lalu" },
      { id: 2, name: "Siti Aminah", address: "Perum Gonsa Blok C", status: "processing", time: "20 menit yang lalu" },
    ],
  },
});
</script>

<template>
  <Head title="Admin Overview" />
 <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-red-50 transition-all group">
        <div class="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
          <i class="ti ti-bell-ringing text-2xl"></i>
        </div>
        <p class="text-4xl font-black text-slate-900 tracking-tighter">{{ stats.pending }}</p>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Laporan Baru</p>
      </div>

      <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all group">
        <div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
          <i class="ti ti-truck-delivery text-2xl"></i>
        </div>
        <p class="text-4xl font-black text-slate-900 tracking-tighter">{{ stats.processing }}</p>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Sedang Diproses</p>
      </div>

      <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-green-50 transition-all group">
        <div class="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
          <i class="ti ti-circle-check text-2xl"></i>
        </div>
        <p class="text-4xl font-black text-slate-900 tracking-tighter">{{ stats.completed }}</p>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Selesai Dijemput</p>
      </div>

      <div class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-yellow-50 transition-all group">
        <div class="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-4 group-hover:scale-110 transition-transform">
          <i class="ti ti-coins text-2xl"></i>
        </div>
        <p class="text-4xl font-black text-slate-900 tracking-tighter">{{ stats.total_points }}</p>
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Poin Terdistribusi</p>
      </div>

    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
      
      <div class="lg:col-span-2 bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
        <div class="flex justify-between items-center mb-8">
          <div>
            <h3 class="text-xl font-black text-slate-900 tracking-tight">Antrean Terbaru</h3>
            <p class="text-xs font-bold text-slate-400 mt-1 uppercase tracking-tighter">Data penjemputan masuk hari ini</p>
          </div>
          <Link href="#" class="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-black hover:bg-green-600 hover:text-white transition-all uppercase">Lihat Semua</Link>
        </div>

        <div class="space-y-4">
          <div v-for="pickup in recent_pickups" :key="pickup.id" class="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 hover:border-green-100 hover:bg-green-50/30 transition-all group">
            <div class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-white transition-colors">
                <i class="ti ti-user text-xl"></i>
            </div>
            <div class="flex-1 min-w-0">
                <p class="font-black text-slate-900 leading-none truncate">{{ pickup.name }}</p>
                <p class="text-[11px] font-bold text-slate-400 mt-1 truncate">{{ pickup.address }}</p>
            </div>
            <div class="text-right shrink-0">
                <span :class="[
                  'px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border',
                  pickup.status === 'pending' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-blue-50 text-blue-600 border-blue-100'
                ]">
                  {{ pickup.status }}
                </span>
                <p class="text-[9px] font-bold text-slate-300 mt-1 uppercase">{{ pickup.time }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-green-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-green-100 group">
          <div class="relative z-10">
              <h3 class="text-xl font-black tracking-tight mb-2">Performa Gonsa</h3>
              <p class="text-sm font-bold opacity-80 leading-relaxed mb-6">Total sampah yang berhasil didaur ulang bulan ini meningkat 12% dari bulan lalu.</p>
              
              <div class="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <p class="text-[10px] font-black uppercase tracking-widest opacity-60">Target Bulanan</p>
                  <div class="flex items-end justify-between mt-2">
                      <p class="text-2xl font-black italic">1.2 Ton</p>
                      <p class="text-xs font-bold text-green-200">90% Tercapai</p>
                  </div>
                  <div class="w-full h-2 bg-white/20 rounded-full mt-3 overflow-hidden">
                      <div class="w-[90%] h-full bg-white rounded-full shadow-sm shadow-white"></div>
                  </div>
              </div>
          </div>
          
          <i class="ti ti-chart-arrows fixed -bottom-8 -right-8 text-[12rem] opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700"></i>
      </div>

    </div>
</template>