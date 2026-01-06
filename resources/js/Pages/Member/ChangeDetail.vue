<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import { Link } from "@inertiajs/vue3";
import { route } from "@route";

const props = defineProps(["pointReedemtion"]);

// Helper untuk warna status yang konsisten
const statusClasses = (status) => {
  const s = status?.toLowerCase() || '';
  if (s.includes('pending') || s.includes('menunggu')) return 'bg-yellow-50 text-yellow-600 border-yellow-100';
  if (s.includes('success') || s.includes('selesai')) return 'bg-green-50 text-green-600 border-green-100';
  if (s.includes('failed') || s.includes('cancel') || s.includes('batal')) return 'bg-red-50 text-red-600 border-red-100';
  return 'bg-slate-50 text-slate-500 border-slate-100';
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 pb-10">
    <HeaderTitle href="history" title="Detail Penukaran" />

    <div class="pt-10 pb-8 flex justify-center items-center flex-col">
        <div class="relative inline-block">
            <p class="text-[56px] font-black text-red-500 leading-none tracking-tighter">
                -{{ Number(pointReedemtion.point_reedemed).toLocaleString() }}
            </p>
            <div class="absolute -right-10 top-0 bg-red-100 text-red-700 text-[10px] font-black px-2 py-0.5 rounded-lg border border-red-200 uppercase">
                PTS
            </div>
        </div>
        <p class="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-3">Poin Ditukarkan</p>
    </div>

    <div class="px-6">
        <div class="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm relative overflow-hidden">
            <div class="space-y-6">
                
                <div class="flex justify-between items-center border-b border-slate-50 pb-5">
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Status Transaksi</p>
                    <span class="px-4 py-1.5 rounded-xl text-[10px] font-black uppercase border tracking-widest" :class="statusClasses(pointReedemtion.status)">
                        {{ pointReedemtion.status }}
                    </span>
                </div>

                <div class="space-y-4">
                    <div class="flex justify-between items-start">
                        <p class="text-xs font-bold text-slate-400 uppercase">Waktu Tukar</p>
                        <p class="text-sm font-bold text-slate-800 text-right">
                            {{ new Date(pointReedemtion.created_at).toLocaleString("id-ID", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }) }}
                        </p>
                    </div>

                    <div class="flex justify-between items-start">
                        <p class="text-xs font-bold text-slate-400 uppercase">Hadiah</p>
                        <p class="text-sm font-black text-green-600 text-right">
                            {{ pointReedemtion.incentive?.name }}
                        </p>
                    </div>

                    <div class="border-t border-dashed border-slate-200 my-2"></div>

                    <div class="flex flex-col gap-2">
                        <p class="text-xs font-bold text-slate-400 uppercase">Detail Hadiah</p>
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <p class="text-xs font-medium text-slate-600 leading-relaxed italic">
                                "{{ pointReedemtion.incentive?.description || 'Tidak ada deskripsi tambahan.' }}"
                            </p>
                        </div>
                    </div>
                </div>

                <div class="pt-6 border-t border-slate-50 flex justify-between items-center">
                    <div>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Reference ID</p>
                        <p class="text-[11px] font-mono font-bold text-slate-400">#{{ pointReedemtion.id }}</p>
                    </div>
                    <div class="text-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-8">
            <button class="w-full py-4 bg-white border border-slate-200 text-slate-500 font-bold rounded-2xl text-sm flex justify-center items-center gap-2 active:scale-95 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
                Butuh Bantuan?
            </button>
        </div>
    </div>
  </div>
</template>