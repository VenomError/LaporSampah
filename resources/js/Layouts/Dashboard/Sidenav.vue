<script setup>
import { Link, usePage, router } from "@inertiajs/vue3";
import { route } from "@route";
import axios from "axios";
import { ref, computed, onMounted, onUnmounted, inject } from "vue";

const emit = defineEmits(["register-refresh"]);
const page = usePage();
const isSidebarOpen = inject("isSidebarOpen");

// 1. REAKTIFITAS ACTIVE STATE TANPA RELOAD
const currentActiveRoute = ref(page.url);
const unregisterNavigateHook = router.on('navigate', () => {
    currentActiveRoute.value = page.url;
});
onUnmounted(() => unregisterNavigateHook());

// 2. LOGIKA CEK ACTIVE (ANTI BENTROK)
const isMenuOpen = (item) => {
    const currentPath = page.url.split('?')[0];
    const targetUrl = new URL(item.route, window.location.origin);
    const targetPath = targetUrl.pathname;

    if (targetPath === '/dashboard') return currentPath === '/dashboard';
    if (targetPath === '/dashboard/pickup/list') return currentPath === '/dashboard/pickup/list';
    
    if (targetPath.includes('master-data') || targetPath.includes('settings')) {
        return currentPath.startsWith(targetPath);
    }
    return currentPath === targetPath;
};

const count = ref({
  dashboard: 0, point_reedemtion: 0,
  pickup: { pending: 0, processing: 0, completed: 0, rejected: 0, cancelled: 0 },
});

const fetchCount = async () => {
  try {
    const res = await axios.get(route("api.pickups.count"));
    count.value = res.data;
  } catch (e) { console.error("Gagal update count"); }
};

onMounted(() => { fetchCount(); emit("register-refresh", fetchCount); });

const navigations = computed(() => ({
  dashboard: [
    { title: "Dashboard", route: route("dashboard"), icon: 'dashboard', count: count.value.dashboard },
    { title: "Penukaran Point", route: route("dashboard.point.reedemtion"), icon: 'gift', count: count.value.point_reedemtion },
    { title: "Lokasi Jemput", route: route("dashboard.pickup.location"), icon: 'map-pin' },
    { title: "Lokasi Member", route: route("dashboard.member.location"), icon: 'user-pin' },
  ],
  penjemputan: [
    { title: "Daftar Antrean", route: route("dashboard.pickup.list"), icon: 'list-details' },
    { title: "Permintaan Baru", route: route("dashboard.pickup.status", { status: "pending" }), icon: 'bell-ringing', count: count.value.pickup.pending, color: 'text-red-600 bg-red-50' },
    { title: "Sedang Proses", route: route("dashboard.pickup.status", { status: "processing" }), icon: 'truck-delivery', count: count.value.pickup.processing, color: 'text-blue-600 bg-blue-50' },
    { title: "Selesai", route: route("dashboard.pickup.status", { status: "completed" }), icon: 'circle-check', count: count.value.pickup.completed, color: 'text-green-600 bg-green-50' },
  ],
  master_data: [
    { title: "Data Admin", route: route("dashboard.master-data.admin"), icon: 'shield-lock' },
    { title: "Data Operator", route: route("dashboard.master-data.operator"), icon: 'truck' },
    { title: "Data Member", route: route("dashboard.master-data.member"), icon: 'users' },
    { title: "Data Insentif", route: route("dashboard.master-data.incentive"), icon: 'package' },
  ],
  pengaturan: [
    { title: "Sistem", route: route("dashboard.settings.system"), icon: 'settings' },
    { title: "Akun", route: route("dashboard.settings.account"), icon: 'user-cog' },
  ]
}));
</script>

<template>
  <aside 
    class="fixed lg:sticky top-0 left-0 z-50 w-72 h-screen bg-white border-r border-slate-100 flex flex-col transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none"
    :class="[isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0']"
  >
    <div class="p-8 pb-4 flex items-center justify-between">
      <Link :href="route('dashboard')" class="flex items-center gap-3 group">
        <div class="w-10 h-10 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-100 group-hover:rotate-12 transition-all">
          <i class="ti ti-trash text-white text-xl"></i>
        </div>
        <span class="font-black text-xl tracking-tighter text-slate-900 uppercase">GONSA<span class="text-green-600">ADMIN</span></span>
      </Link>
      <button @click="isSidebarOpen = false" class="lg:hidden p-2 text-slate-400 hover:text-red-500"><i class="ti ti-x text-2xl"></i></button>
    </div>

    <div :key="currentActiveRoute" class="flex-1 overflow-y-auto px-4 py-4 space-y-7 custom-scrollbar">
      <div v-for="(items, section) in navigations" :key="section">
        <h3 class="px-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.25em] mb-3 italic">{{ section.replace('_', ' ') }}</h3>
        <div class="space-y-1">
          <Link v-for="item in items" :key="item.title" :href="item.route" @click="isSidebarOpen = false"
            class="flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group relative"
            :class="[isMenuOpen(item) ? 'bg-green-600 text-white shadow-xl shadow-green-200 translate-x-1' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900']">
            <div class="flex items-center gap-3">
              <div class="flex items-center justify-center w-6 h-6"><i :class="['ti ti-' + item.icon, 'text-lg', isMenuOpen(item) ? 'opacity-100' : 'opacity-60']"></i></div>
              <span class="text-sm font-bold tracking-tight">{{ item.title }}</span>
            </div>
            <span v-if="item.count > 0" class="px-2 py-0.5 rounded-lg text-[10px] font-black border transition-all"
              :class="[isMenuOpen(item) ? 'bg-white text-green-600 border-white' : (item.color || 'bg-slate-100 text-slate-500')]">{{ item.count }}</span>
            <div v-if="isMenuOpen(item)" class="absolute left-0 w-1.5 h-5 bg-white rounded-r-full"></div>
          </Link>
        </div>
      </div>
    </div>

    <div class="p-6 border-t border-slate-50">
      <div class="flex items-center gap-3 px-2">
        <div class="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center"><i class="ti ti-terminal-2 text-slate-400"></i></div>
        <div class="flex-1 min-w-0"><p class="text-[11px] font-black text-slate-900 truncate uppercase">System Ready</p><p class="text-[9px] font-bold text-green-600 uppercase animate-pulse">Running</p></div>
      </div>
    </div>
  </aside>
</template>