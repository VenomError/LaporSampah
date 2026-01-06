<script setup>
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import { usePage, Head } from "@inertiajs/vue3";
import { LMap, LMarker, LPopup, LTileLayer } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { computed, ref } from "vue";
import { Icon } from "leaflet";

// Fix Leaflet Icons
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

const page = usePage();
const locations = computed(() => page.props.locations || []);

// Filter lokasi yang memiliki koordinat valid
const validLocations = computed(() =>
  locations.value.filter((l) => l.latitude !== null && l.longitude !== null)
);

// Tentukan titik tengah peta
const center = computed(() => {
  const first = validLocations.value[0];
  return first
    ? [parseFloat(first.latitude), parseFloat(first.longitude)]
    : [-5.147665, 119.432732]; // Fallback Makassar
});

const zoom = ref(12);
</script>

<template>

  <Head title="Peta Sebaran Member" />

  <div class="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div>
      <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Visualisasi Data</p>
      <h2 class="text-2xl font-black text-slate-900 tracking-tight">Sebaran Titik Jemput Member</h2>
    </div>

    <div class="bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
      <div class="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
        <i class="ti ti-users text-xl"></i>
      </div>
      <div>
        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Total Member</p>
        <p class="text-xl font-black text-slate-900 leading-none mt-1">{{ validLocations.length }} <span
            class="text-[10px] text-slate-400">TITIK</span></p>
      </div>
    </div>
  </div>

  <div
    class="bg-white p-2 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden relative">
    <LMap style="height: 600px; width: 100%" :zoom="zoom" :center="center" :use-global-leaflet="false"
      class="rounded-[2rem] z-10">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; Gonsa Member Mapping" />

      <LMarker v-for="location in validLocations" :key="location.id" :lat-lng="[location.latitude, location.longitude]">
        <LPopup>
          <div class="p-1 min-w-[200px]">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">{{ location.name }}</p>
            </div>

            <h4 class="font-black text-slate-900 leading-tight mb-1">
              {{ location.owner?.name || 'Tanpa Nama' }}
            </h4>

            <p class="text-[11px] text-slate-500 italic leading-relaxed mb-4">
              <i class="ti ti-map-pin text-green-600"></i> {{ location.address }}
            </p>

            <div class="pt-3 border-t border-slate-50 flex justify-between items-center">
              <span class="text-[9px] font-bold text-slate-400 uppercase">Member ID: #{{ location.id }}</span>
              <button
                class="w-7 h-7 bg-slate-50 text-slate-400 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <i class="ti ti-external-link"></i>
              </button>
            </div>
          </div>
        </LPopup>
      </LMarker>
    </LMap>

    <div class="absolute bottom-8 right-8 z-[1000] hidden md:block">
      <div
        class="bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white shadow-lg text-[10px] font-bold text-slate-600">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></span>
          <span>Titik Lokasi Terdaftar</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@reference "../../../css/app.css";

/* Overriding Leaflet for Pop Design */
.leaflet-popup-content-wrapper {
  @apply rounded-2xl border-none shadow-2xl p-0 overflow-hidden;
}

.leaflet-popup-content {
  @apply m-4;
}

.leaflet-popup-tip {
  @apply shadow-none;
}

.leaflet-container {
  @apply font-sans;
}

.leaflet-bar a {
  @apply border-none bg-white text-slate-600 font-bold hover:bg-slate-50;
}
</style>