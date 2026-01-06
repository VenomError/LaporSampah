<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

// Fix Icon Leaflet agar tidak hilang saat build production
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

const props = defineProps({
  latitude: { type: [Number, String], default: null },
  longitude: { type: [Number, String], default: null },
});

const emit = defineEmits(["location-selected"]);

const leafletMap = ref(null); 
const zoom = ref(15);
const center = ref([-6.2, 106.816666]); // Default Jakarta
const pinnedLocation = ref(null);

// Fungsi saat Peta SIAP (Leaflet siap menerima perintah flyTo)
const onMapReady = (mapInstance) => {
  leafletMap.value = mapInstance;
  setTimeout(() => {
    mapInstance.invalidateSize();
    // Jika koordinat sudah ada saat load, langsung arahkan peta
    if (pinnedLocation.value) {
      mapInstance.flyTo(pinnedLocation.value, 18);
    }
  }, 500);
};

const setLocation = async (lat, lng, shouldEmit = false) => {
  if (!lat || !lng) return;
  const newLoc = [parseFloat(lat), parseFloat(lng)];
  
  pinnedLocation.value = newLoc;
  center.value = newLoc; 

  await nextTick();

  // Animasi terbang ke lokasi jika instansi map sudah siap
  if (leafletMap.value) {
    leafletMap.value.flyTo(newLoc, 18, { animate: true, duration: 1.5 });
  }

  if (shouldEmit) {
    emit("location-selected", { lat: parseFloat(lat), lng: parseFloat(lng) });
  }
};

const handleGeolocation = () => {
  if (!navigator.geolocation) {
    setLocation(-6.2, 106.816666, true);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      setLocation(latitude, longitude, true);
    },
    (err) => {
      console.warn("GPS Gagal (Code " + err.code + "): " + err.message);
      // JIKA ERROR, paksa set ke lokasi default agar user tidak stuck di loading
      // User tetap bisa geser pin manual setelah ini
      setLocation(-6.2000, 106.8166, true); 
    },
    { 
      enableHighAccuracy: true, // MATIKAN ini agar Code 2 tidak muncul
      timeout: 10000,            // Beri waktu 10 detik
      maximumAge: 0 
    }
  );
};

onMounted(() => {
  if (props.latitude && props.longitude) {
    setLocation(props.latitude, props.longitude, false);
  } else {
    handleGeolocation();
  }
});

watch(
  () => [props.latitude, props.longitude],
  ([newLat, newLng]) => {
    if (newLat && newLng) {
      setLocation(newLat, newLng, false);
    }
  }
);

const onMarkerDragEnd = (event) => {
  const { lat, lng } = event.target.getLatLng();
  pinnedLocation.value = [lat, lng];
  emit("location-selected", { lat, lng });
};
</script>

<template>
  <div class="h-[320px] w-full rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-slate-200 relative">
    
    <div v-if="pinnedLocation" class="absolute top-4 right-4 z-[1000] bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-100 shadow-lg">
      <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Titik Jemput</p>
      <div class="flex gap-3 text-[10px] font-bold text-slate-900">
        <span><span class="text-green-600">LAT:</span> {{ pinnedLocation[0].toFixed(4) }}</span>
        <span><span class="text-green-600">LNG:</span> {{ pinnedLocation[1].toFixed(4) }}</span>
      </div>
    </div>

    <LMap
      v-model:zoom="zoom"
      :center="center"
      :use-global-leaflet="false"
      @ready="onMapReady"
      class="z-10"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />

      <LMarker
        v-if="pinnedLocation"
        :lat-lng="pinnedLocation"
        draggable
        @moveend="onMarkerDragEnd"
      >
        <LPopup>Tahan dan geser pin ke lokasi sampah</LPopup>
      </LMarker>
    </LMap>

    <div v-if="!pinnedLocation" class="absolute inset-0 z-[1001] bg-slate-50/80 backdrop-blur-sm flex items-center justify-center">
        <div class="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 scale-110">
            <div class="animate-spin h-5 w-5 border-2 border-green-600 border-t-transparent rounded-full"></div>
            <span class="text-sm font-black text-slate-700 uppercase tracking-tight">Menentukan Lokasi...</span>
        </div>
    </div>
  </div>
</template>

<style>
@reference "../../css/app.css";

.leaflet-popup-content-wrapper {
    @apply rounded-xl border-none shadow-xl font-bold text-slate-800 p-1;
}
.leaflet-popup-tip {
    @apply shadow-none;
}
.leaflet-container {
    @apply font-sans;
}
</style>