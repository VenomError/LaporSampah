<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import PickupHistory from "@components/PickupHistory.vue";
import ChangeIncentiveHistory from "@components/ChangeIncentiveHistory.vue";
import PointHistory from "@components/PointHistory.vue";
import { InfiniteScroll } from "@inertiajs/vue3"; // Pastikan library ini terkonfigurasi
import { ref } from "vue";

const tabs = ["Pelaporan", "Penukaran", "History Point"];
const activeTab = ref("Pelaporan");

const props = defineProps(["pickups", "changeIncentives", "pointHistories"]);
</script>

<template>
  <HeaderTitle href="home" title="Riwayat Aktivitas" />

  <div class="flex items-center gap-3 px-6 overflow-x-auto no-scrollbar py-6">
    <button 
      v-for="tab in tabs" 
      :key="tab" 
      @click="activeTab = tab"
      class="px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 border-2"
      :class="[
        activeTab === tab
          ? 'bg-green-600 border-green-600 text-white shadow-lg shadow-green-100 scale-105'
          : 'bg-white border-slate-100 text-slate-400'
      ]"
    >
      {{ tab }}
    </button>
  </div>

  <div class="bg-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.03)] min-h-screen flex-1 pb-32">
    
    <div class="px-6 pt-10" v-if="activeTab == 'Pelaporan'">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-black text-slate-900 tracking-tight">Riwayat Pelaporan</h3>
        <span class="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg uppercase">
            {{ pickups.data.length }} Data
        </span>
      </div>
      <InfiniteScroll data="pickups">
        <PickupHistory :data="pickups.data" />
      </InfiniteScroll>
    </div>

    <div class="px-6 pt-10" v-if="activeTab == 'Penukaran'">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-black text-slate-900 tracking-tight">Riwayat Penukaran</h3>
        <span class="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg uppercase">
            {{ changeIncentives.data.length }} Data
        </span>
      </div>
      <InfiniteScroll data="changeIncentives">
        <ChangeIncentiveHistory :data="changeIncentives.data" />
      </InfiniteScroll>
    </div>

    <div class="px-6 pt-10" v-if="activeTab == 'History Point'">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-black text-slate-900 tracking-tight">Mutasi Poin</h3>
        <span class="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg uppercase">
            {{ pointHistories.data.length }} Data
        </span>
      </div>
      <InfiniteScroll data="pointHistories">
        <PointHistory :data="pointHistories.data" />
      </InfiniteScroll>
    </div>

  </div>
</template>

<style scoped>
/* Menghilangkan scrollbar pada navigasi tab agar tetap clean */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>