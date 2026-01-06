<script setup>
import { Link } from "@inertiajs/vue3";
import { route } from "@route";

const props = defineProps(["data"]);

function getTypeLabel(type) {
    if (type === 'App\\Models\\PointReedmtion') {
        return 'Penukaran Hadiah';
    }
    return 'Laporan Sampah';
}

// Helper untuk warna teks dan background poin
const getPointClass = (type) => {
    return type === 'App\\Models\\PointReedmtion' 
        ? 'text-red-500' 
        : 'text-green-600';
};

// Helper untuk status badge
const statusClasses = (status) => {
  const s = status?.toLowerCase() || '';
  if (s.includes('pending') || s.includes('menunggu')) return 'bg-yellow-50 text-yellow-600 border-yellow-100';
  if (s.includes('success') || s.includes('selesai')) return 'bg-green-50 text-green-600 border-green-100';
  return 'bg-slate-50 text-slate-500 border-slate-100';
};
</script>

<template>
    <div class="flex flex-col gap-3">
        <div v-for="history in data" :key="history.id">
            <Link :href="route('point.history.detail', { point_history: history.id })"
                class="flex justify-between items-center p-4 bg-white border border-slate-100 rounded-2xl shadow-sm active:scale-[0.98] transition-all group">
                
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                        :class="history.type_type === 'App\\Models\\PointReedmtion' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'">
                        
                        <svg v-if="history.type_type === 'App\\Models\\PointReedmtion'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>

                    <div class="flex flex-col">
                        <p class="font-bold text-slate-900 leading-tight">
                            {{ getTypeLabel(history.type_type) }}
                        </p>
                        <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">
                            {{
                                new Date(history.created_at).toLocaleString("id-ID", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })
                            }}
                        </p>
                    </div>
                </div>

                <div class="flex flex-col items-end gap-1.5">
                    <p class="font-black text-sm transition-transform group-active:scale-110" :class="getPointClass(history.type_type)">
                        {{ history.point_change }}
                    </p>

                    <span 
                        class="px-2 py-0.5 rounded-lg text-[9px] font-black uppercase border tracking-widest"
                        :class="statusClasses(history.status)"
                    >
                        {{ history.status }}
                    </span>
                </div>
            </Link>
        </div>

        <div v-if="!data || data.length === 0" class="py-12 text-center opacity-40">
            <p class="text-sm font-bold text-slate-400 uppercase tracking-widest">Belum ada mutasi poin</p>
        </div>
    </div>
</template>