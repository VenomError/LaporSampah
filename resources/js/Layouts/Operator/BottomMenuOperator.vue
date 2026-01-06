<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed } from "vue";
import { route } from "@route";

const page = usePage();

// Di script setup, kita butuh .value jika ingin akses langsung
// Tapi lebih aman buat fungsi pembantu atau pakai route().current()
const currentUrl = computed(() => page.url || '');

// Fungsi pengecekan yang lebih aman
const isActive = (name) => {
  return route().current(name);
};
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 z-50">
    <div class="relative bg-white border-t border-slate-100 px-4 pb-6 pt-3 flex justify-between items-center shadow-[0_-10px_25px_rgba(0,0,0,0.05)]">
      
      <div class="flex flex-1 justify-around items-center">
        <Link :href="route('operator.dashboard')" class="flex flex-col items-center gap-1 group transition-all active:scale-90">
          <div :class="[isActive('operator.dashboard') ? 'text-blue-600' : 'text-slate-400']">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-widest" :class="isActive('operator.dashboard') ? 'text-blue-600' : 'text-slate-400'">Home</span>
        </Link>

        <Link :href="route('operator.pickup.index')" class="flex flex-col items-center gap-1 group transition-all active:scale-90">
          <div :class="[isActive('operator.pickup.*') ? 'text-blue-600' : 'text-slate-400']">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-3.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-widest" :class="isActive('operator.pickup.*') ? 'text-blue-600' : 'text-slate-400'">Tugas</span>
        </Link>
      </div>

      <div class="relative -mt-12 flex flex-col items-center">
        <Link
          :href="route('operator.pickup.index')" 
          class="flex justify-center items-center w-16 h-16 bg-blue-600 rounded-2xl shadow-xl shadow-blue-200 border-4 border-white transition-all active:scale-95 active:-rotate-12"
          :class="{'ring-4 ring-blue-100': isActive('operator.pickup.show')}"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
          </svg>
        </Link>
        <span class="mt-2 text-[10px] font-black uppercase tracking-tighter" :class="isActive('operator.pickup.show') ? 'text-blue-600' : 'text-blue-800'">Jemput</span>
      </div>

      <div class="flex flex-1 justify-around items-center">
        <Link :href="route('operator.pickup.history')" class="flex flex-col items-center gap-1 group transition-all active:scale-90">
          <div class="text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Riwayat</span>
        </Link>

        <Link :href="route('operator.profile')" class="flex flex-col items-center gap-1 group transition-all active:scale-90">
          <div :class="[isActive('operator.profile') ? 'text-blue-600' : 'text-slate-400']">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <span class="text-[10px] font-bold uppercase tracking-widest" :class="isActive('operator.profile') ? 'text-blue-600' : 'text-slate-400'">Profil</span>
        </Link>
      </div>

    </div>
  </div>
</template>