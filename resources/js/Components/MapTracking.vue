<script setup>
import { ref, onMounted, watch, nextTick } from "vue"; // 1. Import nextTick
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";

// --- Fix Icon Leaflet ---
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const props = defineProps({
  latitude: { type: [Number, String], default: null },
  longitude: { type: [Number, String], default: null },
});

const emit = defineEmits(["location-selected"]);

const map = ref(null);
const zoom = ref(15);
const center = ref([-6.2, 106.816666]);
const pinnedLocation = ref(null);

// --- FUNGSI SET LOCATION (DIPERBAIKI) ---
const setLocation = async (lat, lng, shouldEmit = false) => {
  if (!lat || !lng) return;

  const newLoc = [parseFloat(lat), parseFloat(lng)];

  // 1. Update posisi Marker (Pin)
  pinnedLocation.value = newLoc;

  // 2. Tunggu sebentar agar Vue selesai update DOM (munculin marker)
  await nextTick();

  // 3. PAKSA PETA PINDAH (SOLUSI MASALAH ANDA)
  // Kita akses object asli leaflet (leafletObject) dan suruh 'terbang' ke lokasi
  if (map.value && map.value.leafletObject) {
    map.value.leafletObject.flyTo(newLoc, 18, {
      animate: true,
      duration: 1.5, // Durasi animasi detik
    });
  } else {
    // Fallback jika map belum siap, kita set center variable saja
    center.value = newLoc;
    zoom.value = 18;
  }

  if (shouldEmit) {
    emit("location-selected", { lat: parseFloat(lat), lng: parseFloat(lng) });
  }
};

onMounted(() => {
  if (props.latitude && props.longitude) {
    setLocation(props.latitude, props.longitude, false);
  } else if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(latitude, longitude, true);
      },
      (err) => console.error("GPS Error:", err),
      { enableHighAccuracy: true }
    );
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

defineExpose({ setLocation });
</script>

<template>
  <div style="height: 300px; width: 100%; position: relative">
    <div
      v-if="pinnedLocation"
      style="
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1000;
        background: white;
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 11px;
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      "
    >
      <b>Terpilih:</b><br />
      Lat: {{ pinnedLocation[0].toFixed(5) }}<br />
      Lng: {{ pinnedLocation[1].toFixed(5) }}
    </div>

    <LMap
      ref="map"
      v-model:zoom="zoom"
      v-model:center="center"
      :use-global-leaflet="false"
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
        <LPopup>Lokasi Sampah</LPopup>
      </LMarker>
    </LMap>
  </div>
</template>
