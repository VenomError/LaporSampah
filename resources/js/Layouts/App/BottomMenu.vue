<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed } from "vue";
import { route } from "@route";

const page = usePage();

// State reaktif yang memantau URL saat ini
const currentUrl = computed(() => page.url);

// Fungsi untuk mengecek apakah URL saat ini mengandung path tertentu
const isActive = (path) => {
  if (path === '/') return currentUrl.value === '/';
  return currentUrl.value.startsWith(path);
};
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 z-50">
    <div class="relative bg-white border-t border-slate-100 px-4 pb-6 pt-3 flex justify-between items-center shadow-[0_-10px_25px_rgba(0,0,0,0.05)]">
      
      <div class="flex flex-1 justify-around items-center">
        <Link :href="route('home')" class="flex flex-col items-center gap-1 group transition-all active:scale-90">
          <div :class="[isActive('/') ? 'text-green-600' : 'text-slate-400']">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-widest" :class="isActive('/') ? 'text-green-600' : 'text-slate-400'">Home</span>
        </Link>

        <Link :href="route('history')" class="flex flex-col items-center gap-1 group transition-all active:scale-90">
          <div :class="[isActive('/history') ? 'text-green-600' : 'text-slate-400']">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-widest" :class="isActive('/history') ? 'text-green-600' : 'text-slate-400'">Riwayat</span>
        </Link>
      </div>

      <div class="relative -mt-12 flex flex-col items-center">
        <Link
          :href="route('pickup.create')"
          class="flex justify-center items-center w-16 h-16 bg-green-600 rounded-2xl shadow-xl shadow-green-200 border-4 border-white transition-all active:scale-95 active:rotate-12"
          :class="{'ring-4 ring-green-100': isActive('/pick-up')}"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </Link>
        <span class="mt-2 text-[10px] font-black uppercase tracking-tighter" :class="isActive('/pick-up') ? 'text-green-600' : 'text-green-800'">Lapor</span>
      </div>

      <div class="flex flex-1 justify-around items-center">
        <Link :href="route('change.point')" class="flex flex-col items-center gap-1 group transition-all active:scale-90">
          <div :class="[isActive('/change') ? 'text-green-600' : 'text-slate-400']">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-widest" :class="isActive('/change') ? 'text-green-600' : 'text-slate-400'">Tukar</span>
        </Link>

        <Link :href="route('profile')" class="flex flex-col items-center gap-1 group transition-all active:scale-90">
          <div :class="[isActive('/profile') ? 'text-green-600' : 'text-slate-400']">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-widest" :class="isActive('/profile') ? 'text-green-600' : 'text-slate-400'">Profil</span>
        </Link>
      </div>

    </div>
  </div>
</template>