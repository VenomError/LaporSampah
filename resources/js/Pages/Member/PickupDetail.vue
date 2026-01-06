<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import { Link } from "@inertiajs/vue3";
import { route } from "@route";

const props = defineProps(["pickup"]);

// Helper untuk status warna agar konsisten dengan komponen sebelumnya
const statusClasses = (status) => {
  const s = status.toLowerCase();
  if (s.includes('cancelled') || s.includes('batal')) return 'bg-red-50 text-red-600 border-red-100';
  if (s.includes('menunggu') || s.includes('pending')) return 'bg-yellow-50 text-yellow-600 border-yellow-100';
  if (s.includes('proses')) return 'bg-blue-50 text-blue-600 border-blue-100';
  return 'bg-green-50 text-green-600 border-green-100';
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 pb-10">
    <HeaderTitle href="history" title="Detail Laporan" />

    <div class="pt-10 pb-8 flex justify-center items-center flex-col">
        <div class="relative inline-block">
            <p class="text-[64px] font-black text-green-600 leading-none tracking-tighter">
                +{{ Number(pickup.estimate_point).toLocaleString() }}
            </p>
            <div class="absolute -right-10 top-0 bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded-lg border border-green-200 uppercase">
                PTS
            </div>
        </div>
        <p class="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-3">Estimasi Perolehan Poin</p>
    </div>

    <div class="px-6">
        <div class="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
            <div class="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-50 rounded-full border border-slate-100"></div>
            <div class="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-50 rounded-full border border-slate-100"></div>

            <div class="space-y-6">
                <div class="flex justify-between items-center border-b border-slate-50 pb-5">
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Status Laporan</p>
                    <span class="px-4 py-1.5 rounded-xl text-[10px] font-black uppercase border tracking-widest" :class="statusClasses(pickup.status)">
                        {{ pickup.status }}
                    </span>
                </div>

                <div class="space-y-4">
                    <div class="flex justify-between items-start">
                        <p class="text-xs font-bold text-slate-400 uppercase">Tanggal</p>
                        <p class="text-sm font-bold text-slate-800 text-right">
                            {{ new Date(pickup.created_at).toLocaleString("id-ID", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }) }}
                        </p>
                    </div>

                    <div class="flex justify-between items-start">
                        <p class="text-xs font-bold text-slate-400 uppercase">Berat Sampah</p>
                        <p class="text-sm font-black text-slate-800">{{ Number(pickup.weight).toLocaleString() }} KG</p>
                    </div>

                    <div class="flex flex-col gap-1">
                        <p class="text-xs font-bold text-slate-400 uppercase">Deskripsi Kejadian</p>
                        <p class="text-sm font-medium text-slate-600 bg-slate-50 p-4 rounded-2xl italic">
                            "{{ pickup.description || 'Tidak ada deskripsi' }}"
                        </p>
                    </div>

                    <div class="border-t border-dashed border-slate-200 my-2"></div>

                    <div class="flex flex-col gap-2">
                        <div class="flex items-center gap-2 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p class="text-xs font-black uppercase tracking-widest">{{ pickup.location.name }}</p>
                        </div>
                        <p class="text-xs font-medium text-slate-500 leading-relaxed">
                            {{ pickup.location.address }}
                        </p>
                    </div>

                    <div class="flex justify-between items-center pt-2">
                        <p class="text-xs font-bold text-slate-400 uppercase">Petugas</p>
                        <div class="flex items-center gap-2">
                            <span class="text-sm font-bold text-slate-800">{{ pickup.operator?.account?.name ?? "Mencari Petugas..." }}</span>
                        </div>
                    </div>
                </div>

                <div class="pt-6 border-t border-slate-50 flex justify-between items-center text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
                    <span>Reference ID</span>
                    <span>#{{ pickup.id }}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="px-6 py-10" v-if="pickup.status != 'cancelled' && pickup.status != 'completed'">
        <Link :href="route('pickup.cancel', { pickup: pickup.id })" method="post" as="button"
            class="w-full py-4 bg-white border-2 border-red-100 text-red-500 font-black rounded-2xl shadow-xl shadow-red-50 transition-all active:scale-[0.97] hover:bg-red-50 flex justify-center items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            BATALKAN LAPORAN
        </Link>
    </div>
  </div>
</template>