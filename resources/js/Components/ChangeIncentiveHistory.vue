<script setup>
import { Link } from "@inertiajs/vue3";
import { route } from "@route";

const props = defineProps(["data"]);

// Helper untuk warna status agar tidak pecah di Tailwind
const statusClasses = (status) => {
  const s = status?.toLowerCase() || '';
  if (s.includes('pending') || s.includes('menunggu')) return 'bg-yellow-50 text-yellow-600 border-yellow-100';
  if (s.includes('success') || s.includes('selesai') || s.includes('berhasil')) return 'bg-green-50 text-green-600 border-green-100';
  if (s.includes('failed') || s.includes('gagal') || s.includes('cancel')) return 'bg-red-50 text-red-600 border-red-100';
  return 'bg-slate-50 text-slate-500 border-slate-100';
};
</script>

<template>
  <div class="flex flex-col gap-3">
    <div v-for="pointRedemption in data" :key="pointRedemption.id">
      <Link 
        :href="route('change.detail', { point_reedemtion: pointRedemption.id })"
        class="flex justify-between items-center p-4 bg-white border border-slate-100 rounded-2xl shadow-sm active:scale-[0.98] transition-all group"
      >
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-green-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
          </div>

          <div class="flex flex-col">
            <p class="font-bold text-slate-900 leading-tight">
              {{ pointRedemption.incentive?.name || 'Hadiah' }}
            </p>
            <p class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">
              {{
                new Date(pointRedemption.created_at).toLocaleString("id-ID", {
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
          <p class="font-black text-red-500 text-sm">
            -{{ Number(pointRedemption.point_reedemed).toLocaleString() }} <span class="text-[10px]">PTS</span>
          </p>

          <span 
            class="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border"
            :class="statusClasses(pointRedemption.status)"
          >
            {{ pointRedemption.status }}
          </span>
        </div>
      </Link>
    </div>

    <div v-if="!data || data.length === 0" class="py-12 text-center opacity-40">
      <p class="text-sm font-bold text-slate-400 uppercase tracking-widest">Belum ada penukaran</p>
    </div>
  </div>
</template>