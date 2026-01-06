<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { route } from "@route";

const user = usePage().props.auth.user;

// Data Menu untuk mempermudah perulangan (Opsional, tapi lebih rapi)
const menus = [
  { label: 'Notifikasi', route: 'notifications', icon: 'bell' },
  { label: 'Informasi Pribadi', route: 'profile.edit', icon: 'user' },
  { label: 'Ganti Password', route: 'password.change', icon: 'key' },
  { label: 'Lokasi Tersimpan', route: 'profile.location', icon: 'map-pin' },
];
</script>

<template>
    <div class="flex justify-center items-center py-6">
        <p class="text-xl font-black text-slate-900 tracking-tight uppercase italic">Pengaturan</p>
    </div>

    <div class="mx-6 p-6 bg-green-600 rounded-2xl shadow-xl shadow-green-100 flex justify-between items-center text-white relative overflow-hidden">
        <div class="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        
        <div class="flex justify-start items-center gap-4 relative z-10">
            <div class="size-16 rounded-2xl overflow-hidden border-2 border-white/50 shadow-sm">
                <img src="https://ui-avatars.com/api/?name=User&background=fff&color=10b981" class="w-full h-full object-cover" alt="Profile" />
            </div>
            <div class="min-w-0">
                <h2 class="font-black text-lg leading-tight truncate w-40">{{ user.member.name }}</h2>
                <p class="text-xs text-green-100 mt-0.5 truncate w-40">{{ user.email }}</p>
            </div>
        </div>

        <button
            class="size-11 rounded-xl bg-white flex justify-center items-center text-green-600 shadow-lg active:scale-90 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.008v.008H6.75V6.75ZM6.75 16.5h.008v.008H6.75V16.5ZM16.5 6.75h.008v.008H16.5V6.75ZM13.5 13.5h.008v.008H13.5V13.5ZM16.5 13.5h.008v.008H16.5V13.5ZM19.5 13.5h.008v.008H19.5V13.5ZM13.5 16.5h.008v.008H13.5V16.5ZM16.5 16.5h.008v.008H16.5V16.5ZM19.5 16.5h.008v.008H19.5V16.5ZM13.5 19.5h.008v.008H13.5V19.5ZM16.5 19.5h.008v.008H16.5V19.5ZM19.5 19.5h.008v.008H19.5V19.5Z" />
            </svg>
        </button>
    </div>

    <div class="pt-10 flex flex-col gap-2">
        
        <Link v-for="menu in menus" :key="menu.route" :href="route(menu.route)"
            class="flex justify-between items-center py-4 px-6 active:bg-slate-50 transition-colors group">
            <div class="flex justify-start items-center gap-4">
                <div class="size-11 rounded-xl bg-slate-100 flex justify-center items-center text-slate-500 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                    <svg v-if="menu.icon === 'bell'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31a8.967 8.967 0 0 1-2.312-6.022c0-4.747-3.733-8.499-8.125-8.499s-8.125 3.753-8.125 8.5c0 2.455-.873 4.708-2.313 6.022c1.833.566 3.708.995 5.61 1.284m11.305 0c-.452 2.075-2.288 3.564-4.43 3.564c-2.143 0-3.978-1.49-4.43-3.563m11.305 0a23.951 23.951 0 0 1-11.305 0" />
                    </svg>
                    <svg v-else-if="menu.icon === 'user'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <svg v-else-if="menu.icon === 'key'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                    </svg>
                    <svg v-else-if="menu.icon === 'map-pin'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </div>
                <p class="font-bold text-slate-700 tracking-tight">{{ menu.label }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4 text-slate-300 group-active:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </Link>

        <div class="mt-4 px-6">
            <Link :href="route('logout')" method="post" as="button" class="w-full flex justify-between items-center py-4 px-5 bg-red-50 rounded-2xl border border-red-100 active:scale-95 transition-all group">
                <div class="flex items-center gap-4">
                    <div class="size-10 rounded-xl bg-red-500 flex justify-center items-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                    </div>
                    <p class="font-black text-red-600 uppercase tracking-widest text-xs">Keluar Akun</p>
                </div>
            </Link>
        </div>
    </div>
</template>