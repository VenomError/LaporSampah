<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import PickupHistory from "@components/PickupHistory.vue";
import { route } from '@route';

const props = defineProps(["pickups", "hasNotifications"]);
const user = usePage().props.auth.user;
</script>

<template>
  <div class="px-6 flex justify-between items-center pt-2">
    <div class="flex items-center gap-3">
      <div class="w-11 h-11 rounded-2xl overflow-hidden border-2 border-white shadow-md">
        <img src="https://ui-avatars.com/api/?name=User&background=10b981&color=fff" alt="User Avatar" class="w-full h-full object-cover" />
      </div>
      <div>
        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Halo,</p>
        <p class="text-sm font-bold text-slate-800 truncate w-24 leading-none">{{ user.name }}</p>
      </div>
    </div>

    <p class="text-xl font-black tracking-tight text-slate-900">
      Lapor<span class="text-green-600">Sampah</span>
    </p>

    <Link :href="route('notifications')"
      class="w-11 h-11 flex justify-center items-center rounded-2xl relative bg-white border border-slate-100 shadow-sm text-slate-600 active:scale-90 transition-transform">
      <div class="absolute top-2.5 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" v-if="hasNotifications">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31a8.967 8.967 0 0 1-2.312-6.022c0-4.747-3.733-8.499-8.125-8.499s-8.125 3.753-8.125 8.5c0 2.455-.873 4.708-2.313 6.022c1.833.566 3.708.995 5.61 1.284m11.305 0c-.452 2.075-2.288 3.564-4.43 3.564c-2.143 0-3.978-1.49-4.43-3.563m11.305 0a23.951 23.951 0 0 1-11.305 0" />
      </svg>
    </Link>
  </div>

  <div class="text-center py-10 flex flex-col items-center">
    <div class="relative inline-block">
        <p class="text-[64px] font-black text-slate-900 leading-none tracking-tighter">
            {{ Number(user.member.point).toLocaleString() ?? 0 }}
        </p>
        <div class="absolute -right-8 bottom-2 bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded-lg border border-green-200 uppercase">
            PTS
        </div>
    </div>
    <p class="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">Total Poin Terkumpul</p>
  </div>

  <div class="px-6 relative z-20 flex gap-4">
      <Link :href="route('pickup.create')"
          class="bg-green-600 rounded-[2rem] p-5 flex-1 flex flex-col items-center shadow-xl shadow-green-100 active:scale-95 transition-all">
          <div class="w-12 h-12 rounded-2xl bg-white/20 flex justify-center items-center mb-3 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
          </div>
          <p class="text-white font-black text-xs uppercase tracking-wider text-center">
              Lapor<br>Sampah
          </p>
      </Link>

      <Link :href="route('change.point')"
          class="bg-slate-900 rounded-[2rem] p-5 flex-1 flex flex-col items-center shadow-xl shadow-slate-200 active:scale-95 transition-all">
          <div class="w-12 h-12 rounded-2xl bg-white/10 flex justify-center items-center mb-3 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
          </div>
          <p class="text-white font-black text-xs uppercase tracking-wider text-center">
              Tukar<br>Poin
          </p>
      </Link>
  </div>

  <div class="bg-white rounded-t-[3rem] pt-16 -mt-10 flex-1 pb-32 shadow-[0_-20px_40px_rgba(0,0,0,0.03)]">
      <div class="px-6">
          <div class="flex justify-between items-end mb-6">
              <div>
                  <h3 class="text-lg font-black text-slate-900">Riwayat Laporan</h3>
                  <p class="text-[10px] text-slate-400 font-bold uppercase">Aktivitas Terbaru</p>
              </div>
              <Link :href="route('history')" class="text-xs font-black text-green-600 bg-green-50 px-3 py-1.5 rounded-full active:bg-green-100 transition-colors">
                  LIHAT SEMUA
              </Link>
          </div>
          
          <div class="space-y-1">
            <PickupHistory :data="pickups" />
          </div>
      </div>
  </div>
</template>