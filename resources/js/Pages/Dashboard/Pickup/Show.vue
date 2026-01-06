<script setup>
import { Head, Link } from "@inertiajs/vue3";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import {route} from "@route";

const props = defineProps(['pickup', 'location']);

const formatDate = (date) => {
    return new Date(date).toLocaleString('id-ID', {
        day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
};

// Map Settings
const mapCenter = [props.location.lat, props.location.lng];
const zoom = 16;
</script>

<template>
  <Head :title="'Detail Tiket #' + pickup.id" />
    
    <div class="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Link :href="route('dashboard.pickup.list')" class="flex items-center gap-2 text-slate-400 hover:text-green-600 transition-all font-black uppercase text-[10px] tracking-widest">
            <i class="ti ti-arrow-narrow-left text-xl"></i> Kembali ke Antrean
        </Link>
        <div class="flex items-center gap-3">
            <span class="text-[10px] font-black text-slate-400 uppercase italic">Status Laporan:</span>
            <span :class="['px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ring-4 ring-white', 
                pickup.status === 'completed' ? 'bg-green-50 text-green-600' : 
                pickup.status === 'pending' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600']">
                {{ pickup.status }}
            </span>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div class="lg:col-span-2 space-y-6">
            
            <div class="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
                <div class="flex items-start justify-between relative z-10 mb-10">
                    <div>
                        <p class="text-[10px] font-black text-green-600 uppercase tracking-widest mb-1">Tiket Penjemputan</p>
                        <h3 class="text-4xl font-black text-slate-900 tracking-tighter italic">#{{ pickup.id }}</h3>
                    </div>
                    <div class="text-right">
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Waktu Laporan</p>
                        <p class="text-sm font-bold text-slate-700">{{ formatDate(pickup.created_at) }}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 italic font-black text-xs">M</div>
                            <h4 class="text-xs font-black text-slate-400 uppercase tracking-widest">Data Pelapor</h4>
                        </div>
                        <div class="pl-13">
                            <p class="text-xl font-black text-slate-900 leading-none">{{ pickup.member?.name }}</p>
                            <p class="text-sm font-bold text-slate-500 mt-2">{{ pickup.member?.phone }}</p>
                            <div class="inline-block mt-4 px-3 py-1 bg-amber-50 rounded-lg text-[10px] font-black text-amber-600 uppercase">
                                Poin Saat Ini: {{ pickup.member?.point }}
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 italic font-black text-xs">O</div>
                            <h4 class="text-xs font-black text-slate-400 uppercase tracking-widest">Petugas Lapangan</h4>
                        </div>
                        <div class="pl-13">
                            <template v-if="pickup.operator">
                                <p class="text-xl font-black text-slate-900 leading-none">{{ pickup.operator?.name }}</p>
                                <p class="text-sm font-bold text-slate-500 mt-2">Sedang Menuju Lokasi</p>
                            </template>
                            <div v-else class="p-4 bg-red-50 rounded-2xl border border-red-100">
                                <p class="text-[10px] font-black text-red-600 uppercase">Belum Ada Petugas</p>
                            </div>
                        </div>
                    </div>
                </div>

                <i class="ti ti-ticket absolute -bottom-10 -right-10 text-[15rem] opacity-[0.02] -rotate-12"></i>
            </div>

            <div class="bg-slate-900 p-8 md:p-10 rounded-[3rem] text-white shadow-xl shadow-slate-200 flex items-center justify-between group overflow-hidden relative">
                <div class="relative z-10">
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 mb-2">Total Sampah Terangkut</p>
                    <h3 class="text-6xl font-black tracking-tighter">{{ pickup.weight || 0 }} <span class="text-2xl italic text-green-400 uppercase">KG</span></h3>
                    <p class="text-[10px] font-bold text-slate-400 mt-2 italic">Divalidasi pada {{ pickup.updated_at ? formatDate(pickup.updated_at) : '---' }}</p>
                </div>
                <div class="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <i class="ti ti-scale text-4xl text-green-400"></i>
                </div>
                <i class="ti ti-leaf absolute -left-10 -bottom-10 text-[12rem] opacity-5 -rotate-45"></i>
            </div>
        </div>

        <div class="lg:col-span-1 space-y-6">
            <div class="bg-white p-4 rounded-[3rem] border border-slate-100 shadow-sm h-full flex flex-col min-h-[500px]">
                <div class="p-4 flex items-center justify-between">
                    <h4 class="text-xs font-black text-slate-900 uppercase tracking-widest">Titik Koordinat</h4>
                    <button class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-600 transition-colors">
                        <i class="ti ti-external-link"></i>
                    </button>
                </div>
                
                <div class="flex-1 rounded-[2.2rem] overflow-hidden border border-slate-50 relative z-0">
                    <l-map ref="map" :zoom="zoom" :center="mapCenter" :use-global-leaflet="false">
                        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap"></l-tile-layer>
                        <l-marker :lat-lng="mapCenter">
                            <l-popup>Lokasi Penjemputan #{{ pickup.id }}</l-popup>
                        </l-marker>
                    </l-map>
                </div>

                <div class="p-6">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Keterangan Alamat</p>
                    <p class="text-sm font-bold text-slate-700 leading-relaxed italic">
                        "Laporan ini dibuat secara digital berdasarkan koordinat GPS perangkat warga saat mengirimkan data."
                    </p>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped>
@reference "../../../../css/app.css";

/* Perbaikan z-index untuk Leaflet agar tidak menimpa sidebar/header */
:deep(.leaflet-container) {
    z-index: 1 !important;
}
</style>