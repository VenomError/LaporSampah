<script setup>
import { Link } from "@inertiajs/vue3";
import { route } from "@route";

const props = defineProps({
  data: Array,
});

// Fungsi untuk menentukan warna badge berdasarkan status
const statusColor = (status) => {
  const s = status.toLowerCase();
  if (s.includes('menunggu') || s.includes('pending')) return 'bg-yellow-50 text-yellow-600 border-yellow-100';
  if (s.includes('proses') || s.includes('dijemput')) return 'bg-blue-50 text-blue-600 border-blue-100';
  if (s.includes('selesai') || s.includes('sukses')) return 'bg-green-50 text-green-600 border-green-100';
  return 'bg-slate-50 text-slate-600 border-slate-100';
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div v-if="data && data.length > 0" v-for="item in data" :key="item.id">
      <Link :href="route('pickup.detail', item.id)" 
        class="flex items-center gap-4 p-3 bg-white border border-slate-100 rounded-[1rem] shadow-sm active:scale-[0.98] active:bg-slate-50 transition-all group">
        
        

        <div class="flex-1 min-w-0">
          <div class="flex justify-between items-start mb-1">
            <span class="text-[9px] font-black px-2 py-0.5 rounded-lg border uppercase tracking-tighter" :class="statusColor(item.status)">
              {{ item.status }}
            </span>
            <span class="text-[10px] text-slate-400 font-medium italic">
               {{
              new Date(item.created_at).toLocaleString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
            }}
            </span>
          </div>
          
          <h4 class="text-sm font-bold text-slate-900 truncate tracking-tight">
            {{ item.location?.name || 'Lokasi tidak diketahui' }}
          </h4>
          
          <p class="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
            {{ item.description || 'Tidak ada deskripsi' }}
          </p>
        </div>

        <div class="pr-2 text-slate-300 group-hover:text-green-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </Link>
    </div>

    <div v-else class="flex flex-col items-center justify-center py-10 opacity-60">
        <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        </div>
        <p class="text-sm font-bold text-slate-400 uppercase tracking-widest">Belum ada riwayat</p>
    </div>
  </div>
</template>