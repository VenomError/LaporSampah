<script setup>
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import { Link, usePage, router } from "@inertiajs/vue3";
import { LMap, LMarker, LPopup, LTileLayer } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { computed, ref, watch } from "vue";
import { Icon } from "leaflet";

// Fix Leaflet Icon (Penting agar icon tidak hilang saat di-build)
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

const page = usePage();
const locations = computed(() => page.props.locations || []);
const filters = ref({
  status: page.props.filters?.status ?? "",
  date: page.props.filters?.date ?? "",
});

const validLocations = computed(() =>
  locations.value.filter((l) => l.latitude && l.longitude)
);

const center = computed(() =>
    validLocations.value.length
      ? [parseFloat(validLocations.value[0].latitude), parseFloat(validLocations.value[0].longitude)]
      : [-5.147665, 119.432732] // Makassar
);

const zoom = ref(12);

// Auto reload ketika filter berubah
watch(
  filters,
  () => {
    router.get(route("dashboard.pickup.location"), filters.value, {
      preserveState: true,
      preserveScroll: true,
      replace: true,
    });
  },
  { deep: true }
);

const resetFilter = () => {
    filters.value.status = "";
    filters.value.date = "";
};

// Map warna status ke style "Pop"
const getStatusClass = (status) => {
    const map = {
        pending: 'bg-red-50 text-red-600 border-red-100',
        processing: 'bg-blue-50 text-blue-600 border-blue-100',
        completed: 'bg-green-50 text-green-600 border-green-100',
        rejected: 'bg-slate-100 text-slate-500 border-slate-200',
        cancelled: 'bg-slate-100 text-slate-500 border-slate-200',
    };
    return map[status] || 'bg-slate-50 text-slate-400';
};
</script>

<template>
    <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm mb-8 flex flex-wrap items-center gap-4">
      <div class="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 flex-1 min-w-[200px]">
        <i class="ti ti-filter text-slate-400"></i>
        <select v-model="filters.status" class="bg-transparent border-none text-sm font-bold text-slate-700 focus:ring-0 w-full cursor-pointer">
          <option value="">Semua Status</option>
          <option value="pending">🚨 Permintaan Baru (Pending)</option>
          <option value="processing">🚚 Sedang Diproses</option>
          <option value="completed">✅ Selesai</option>
          <option value="rejected">❌ Ditolak</option>
          <option value="cancelled">🚫 Dibatalkan</option>
        </select>
      </div>

      <div class="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 flex-1 min-w-[200px]">
        <i class="ti ti-calendar text-slate-400"></i>
        <input type="date" v-model="filters.date" class="bg-transparent border-none text-sm font-bold text-slate-700 focus:ring-0 w-full cursor-pointer" />
      </div>

      <button @click="resetFilter" class="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-black transition-all uppercase tracking-widest">
        Reset
      </button>
    </div>

    <div class="relative">
      <div class="absolute top-4 left-4 z-[1000] hidden md:block">
        <div class="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white shadow-xl">
           <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Titik Pantau</p>
           <p class="text-2xl font-black text-slate-900">{{ validLocations.length }} <span class="text-xs text-slate-400 font-bold">LOKASI</span></p>
        </div>
      </div>

      <div class="bg-white p-2 rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden relative">
        <LMap
          style="height: 600px; width: 100%"
          :zoom="zoom"
          :center="center"
          :use-global-leaflet="false"
          class="rounded-[2rem] z-10"
        >
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; Gonsa Admin"
          />
          
          <LMarker
            v-for="location in validLocations"
            :key="location.id"
            :lat-lng="[location.latitude, location.longitude]"
          >
            <LPopup>
              <div class="p-1 min-w-[180px]">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Nama Warga / Lokasi</p>
                <h4 class="font-black text-slate-900 leading-tight mb-2">{{ location.name }}</h4>
                
                <p class="text-[10px] text-slate-500 italic mb-3 leading-relaxed">
                  <i class="ti ti-map-pin"></i> {{ location.address }}
                </p>

                <div class="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                  <span :class="['px-2 py-1 rounded-lg text-[9px] font-black uppercase border', getStatusClass(location.owner?.status)]">
                    {{ location.owner?.status }}
                  </span>
                  
                  <Link :href="route('dashboard.pickup.list')" class="text-[10px] font-black text-green-600 hover:underline uppercase">
                    Detail <i class="ti ti-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </LPopup>
          </LMarker>
        </LMap>
      </div>
    </div>
</template>

<style>
@reference "../../../css/app.css";

/* Styling Popup Leaflet agar sesuai gaya Pop */
.leaflet-popup-content-wrapper {
  @apply rounded-2xl border-none shadow-2xl p-0 overflow-hidden ;
}

.leaflet-popup-content {
  @apply m-4 ;
}

.leaflet-popup-tip {
  @apply shadow-none ;
}

.leaflet-container {
  @apply font-sans ;
}
</style>