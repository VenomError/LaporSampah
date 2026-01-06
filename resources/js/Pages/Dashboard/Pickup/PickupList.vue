<script setup>
import PickupListTable from "../../../Components/Table/PickupListTable.vue";
import { Head } from "@inertiajs/vue3";
import { route } from "@route";
import axios from "axios";
import { onMounted, ref } from "vue";

const countData = ref(null);

const getStatusCount = async () => {
  try {
    const res = await axios.post(route("dashboard.pickup.status-count"));
    countData.value = res.data;
  } catch (error) {
    console.error("Gagal mengambil data statistik");
  }
};

onMounted(() => {
  getStatusCount();
});
</script>

<template>
  <Head title="Daftar Antrean Penjemputan" />
    
    <div class="mb-8">
        <h2 class="text-2xl font-black text-slate-900 tracking-tight">Daftar Antrean</h2>
        <p class="text-sm font-bold text-slate-400 mt-1 uppercase tracking-tighter italic">Monitoring seluruh aktivitas logistik sampah</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
      
      <div class="bg-white p-5 rounded-[1.8rem] border border-slate-100 shadow-sm transition-all hover:shadow-lg group">
        <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 mb-3 group-hover:bg-green-600 group-hover:text-white transition-all">
          <i class="ti ti-list text-xl"></i>
        </div>
        <p class="text-2xl font-black text-slate-900 leading-none">{{ countData?.all ?? 0 }}</p>
        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">Total Data</p>
      </div>

      <div class="bg-white p-5 rounded-[1.8rem] border border-slate-100 shadow-sm transition-all hover:shadow-lg group">
        <div class="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-3 group-hover:scale-110 transition-transform">
          <i class="ti ti-bell-ringing text-xl"></i>
        </div>
        <p class="text-2xl font-black text-orange-600 leading-none">{{ countData?.pending ?? 0 }}</p>
        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">Permintaan Baru</p>
      </div>

      <div class="bg-white p-5 rounded-[1.8rem] border border-slate-100 shadow-sm transition-all hover:shadow-lg group">
        <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 transition-transform">
          <i class="ti ti-truck-delivery text-xl"></i>
        </div>
        <p class="text-2xl font-black text-blue-600 leading-none">{{ countData?.processing ?? 0 }}</p>
        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">Sedang Jalan</p>
      </div>

      <div class="bg-white p-5 rounded-[1.8rem] border border-slate-100 shadow-sm transition-all hover:shadow-lg group">
        <div class="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-3 group-hover:scale-110 transition-transform">
          <i class="ti ti-circle-check text-xl"></i>
        </div>
        <p class="text-2xl font-black text-green-600 leading-none">{{ countData?.completed ?? 0 }}</p>
        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">Selesai</p>
      </div>

      <div class="bg-white p-5 rounded-[1.8rem] border border-slate-100 shadow-sm transition-all hover:shadow-lg group">
        <div class="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-3 group-hover:scale-110 transition-transform">
          <i class="ti ti-truck-off text-xl"></i>
        </div>
        <p class="text-2xl font-black text-red-500 leading-none">{{ countData?.rejected ?? 0 }}</p>
        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">Ditolak</p>
      </div>

      <div class="bg-white p-5 rounded-[1.8rem] border border-slate-100 shadow-sm transition-all hover:shadow-lg group">
        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 mb-3 group-hover:scale-110 transition-transform">
          <i class="ti ti-forbid-2 text-xl"></i>
        </div>
        <p class="text-2xl font-black text-slate-400 leading-none">{{ countData?.cancelled ?? 0 }}</p>
        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">Dibatalkan</p>
      </div>

    </div>

    <div class="bg-white rounded-[2.5rem] p-4 md:p-8 border border-slate-100 shadow-sm">
        <div class="mb-6 flex items-center justify-between">
            <h3 class="font-black text-lg text-slate-900 tracking-tight">Data Logistik</h3>
            <div class="flex gap-2">
                <button class="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-green-600 transition-colors">
                    <i class="ti ti-refresh text-xl"></i>
                </button>
            </div>
        </div>
        
        <PickupListTable />
    </div>

</template>

<style scoped>
@reference "../../../../css/app.css";
</style>