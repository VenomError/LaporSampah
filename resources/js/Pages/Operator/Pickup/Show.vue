<script>
import OperatorLayout from "@/Layouts/OperatorLayout.vue";
export default {
    // Using the shorthand...
    layout: [OperatorLayout],
}
</script>
<script setup>
import { Head, useForm, Link } from "@inertiajs/vue3";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { route } from "@route";

const props = defineProps(['pickup']);

// Inisialisasi Form untuk Input Berat
const form = useForm({
    weight: props.pickup.weight || '',
});

// Handler untuk menyelesaikan penjemputan
const submitWeight = () => {
    form.post(route('operator.pickup.complete', props.pickup.id), {
        onSuccess: () => {
        },
        preserveScroll: true
    });
};

const mapCenter = [props.pickup.location.latitude, props.pickup.location.longitude];
</script>

<template>
  <Head :title="'Jemput #' + pickup.id" />
    
    <div class="mb-6 flex items-center justify-between">
        <Link :href="route('operator.pickup.index')" class="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-widest">
            <i class="ti ti-chevron-left text-lg"></i> Kembali
        </Link>
        <span :class="[
            'px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border',
            pickup.status === 'completed' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-blue-50 text-blue-600 border-blue-100'
        ]">
            {{ pickup.status }}
        </span>
    </div>

    <div class="bg-white p-3 rounded-[2.5rem] border border-slate-100 shadow-sm mb-6 h-60 relative overflow-hidden group">
        <l-map ref="map" :zoom="16" :center="mapCenter" :use-global-leaflet="false" class="rounded-[2rem] z-0">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="mapCenter"></l-marker>
        </l-map>
        <a :href="`https://www.google.com/maps?q=${pickup.lat},${pickup.lng}`" target="_blank" 
           class="absolute bottom-6 right-6 z-10 bg-white px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 text-[10px] font-black uppercase text-slate-700 hover:bg-slate-900 hover:text-white transition-all">
            <i class="ti ti-map-2 text-blue-600"></i> Petunjuk Jalan
        </a>
    </div>

    <div class="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm mb-6 relative overflow-hidden">
        <div class="flex items-center gap-4 relative z-10">
            <div class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 border border-slate-100">
                <i class="ti ti-user text-3xl"></i>
            </div>
            <div class="flex-1">
                <p class="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1">Pemilik Sampah</p>
                <h3 class="font-black text-xl text-slate-900 leading-none italic">{{ pickup.member?.name }}</h3>
                <p class="text-xs font-bold text-slate-400 mt-2">{{ pickup.member?.phone }}</p>
            </div>
            <a :href="`tel:${pickup.member?.phone}`" class="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shadow-sm active:scale-90 transition-transform">
                <i class="ti ti-phone-call text-xl"></i>
            </a>
        </div>
        <i class="ti ti-id-badge-2 absolute -right-6 -bottom-6 text-8xl opacity-[0.02]"></i>
    </div>

    <div v-if="pickup.status === 'processing'" class="bg-blue-600 p-8 rounded-[3rem] text-white shadow-2xl shadow-blue-100 relative overflow-hidden">
        <div class="relative z-10 text-center">
            <h4 class="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-6">Input Hasil Timbangan</h4>
            
            <form @submit.prevent="submitWeight">
                <div class="relative mb-6">
                    <input 
                        v-model="form.weight"
                        type="number" 
                        step="0.1"
                        placeholder="0.0"
                        class="w-full bg-white/10 border-4 border-white/20 rounded-[2.5rem] py-10 text-center text-6xl font-black focus:outline-none focus:border-white focus:bg-white/20 transition-all placeholder:text-white/20"
                        required
                    />
                    <span class="absolute right-10 top-1/2 -translate-y-1/2 text-2xl font-black opacity-30 italic">KG</span>
                </div>

                <p v-if="form.errors.weight" class="text-xs font-bold text-red-200 mb-4 italic uppercase tracking-widest">
                    ⚠️ {{ form.errors.weight }}
                </p>

                <button 
                    type="submit"
                    :disabled="form.processing"
                    class="w-full py-5 bg-white text-blue-600 rounded-[2rem] font-black uppercase tracking-[0.15em] text-xs shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                    <i v-if="form.processing" class="ti ti-loader-2 animate-spin text-xl"></i>
                    <template v-else>
                        <i class="ti ti-circle-check"></i>
                        Konfirmasi Selesai
                    </template>
                </button>
            </form>
        </div>
        <i class="ti ti-scale absolute -left-10 -bottom-10 text-[15rem] opacity-10 -rotate-12 pointer-events-none"></i>
    </div>

    <div v-else class="bg-green-600 p-8 rounded-[3rem] text-white shadow-xl shadow-green-100 text-center relative overflow-hidden">
        <i class="ti ti-discount-check-filled text-6xl mb-4"></i>
        <h3 class="text-2xl font-black tracking-tighter uppercase italic">Tugas Selesai!</h3>
        <p class="text-xs font-bold opacity-70 mt-2 uppercase tracking-widest">Berat Terangkut: {{ pickup.weight }} KG</p>
        <Link :href="route('operator.dashboard')" class="mt-8 inline-block px-8 py-3 bg-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest">Kembali ke Beranda</Link>
    </div>

</template>

<style scoped>
:deep(.leaflet-container) {
    z-index: 1 !important;
}
/* Menghilangkan spin button pada input number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>