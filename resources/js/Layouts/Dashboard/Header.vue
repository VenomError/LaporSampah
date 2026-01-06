<script setup>
import { ref, inject } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';

const { auth } = usePage().props;
const isUserDropdownOpen = ref(false);
const toggleSidebar = inject('toggleSidebar');

const notifications = [
    { id: 1, title: 'Laporan Baru', desc: 'Sampah menumpuk di Sektor 5', color: 'bg-red-500' },
    { id: 2, title: 'Tukar Poin', desc: 'Budi mengajukan penukaran', color: 'bg-blue-500' },
];
</script>

<template>
  <header class="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 h-20 px-4 md:px-10 flex items-center justify-between shadow-sm">
    <div class="flex items-center gap-4">
      <button @click="toggleSidebar" class="w-11 h-11 flex lg:hidden items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:text-green-600 transition-all">
        <i class="ti ti-menu-2 text-2xl"></i>
      </button>
      <p class="hidden md:block text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Administrator Panel</p>
    </div>

    <div class="flex items-center gap-2 md:gap-4">
      <div class="relative group hidden sm:block">
        <button class="w-11 h-11 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-50 relative">
          <i class="ti ti-bell text-2xl"></i>
          <span class="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
      </div>

      <div class="h-8 w-[1px] bg-slate-100 mx-1"></div>

      <div class="relative">
        <button @click="isUserDropdownOpen = !isUserDropdownOpen" class="flex items-center gap-3 p-1 rounded-2xl hover:bg-slate-50 transition-all">
          <div class="w-10 h-10 rounded-xl overflow-hidden border-2 border-white shadow-sm shrink-0">
            <img :src="`https://ui-avatars.com/api/?name=${auth.user.name}&background=10b981&color=fff`" alt="Avatar">
          </div>
          <div class="hidden lg:block text-left pr-2">
            <p class="text-sm font-black text-slate-900 truncate w-24 leading-none">{{ auth.user.name }}</p>
            <p class="text-[9px] font-bold text-green-600 uppercase tracking-widest mt-1">Super Admin</p>
          </div>
        </button>

        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0 -translate-y-2"
          enter-to-class="transform scale-100 opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform scale-100 opacity-100 translate-y-0"
          leave-to-class="transform scale-95 opacity-0 -translate-y-2"
        >
          <div v-if="isUserDropdownOpen" class="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-2">
            <div class="px-4 py-3 border-b border-slate-50 mb-1">
                <p class="text-[9px] font-black text-slate-400 uppercase">Login Sebagai</p>
                <p class="text-xs font-bold text-slate-900 truncate">{{ auth.user.email }}</p>
            </div>
            <Link :href="route('dashboard.settings.account')" class="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-green-600">
                <i class="ti ti-user-circle text-lg opacity-40"></i> Profil Saya
            </Link>
            <div class="h-[1px] bg-slate-50 my-1 mx-2"></div>
            <Link :href="route('logout')" method="post" as="button" class="w-full flex items-center gap-3 px-4 py-3 text-sm font-black text-red-500 hover:bg-red-50 text-left">
                <i class="ti ti-logout text-lg"></i> KELUAR PANEL
            </Link>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>