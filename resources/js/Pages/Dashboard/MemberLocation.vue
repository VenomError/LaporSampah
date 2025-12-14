<script setup>
import PageTitle from "@components/PageTitle.vue";
import { usePage } from "@inertiajs/vue3";
import { LMap, LMarker, LPopup, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { computed, ref } from "vue";
const locations = usePage().props.locations;

const firstLocation = locations[0];
const center = ref([firstLocation?.latitude, firstLocation?.longitude]);
const zoom = ref(12);
const validLocations = computed(() =>
  locations.filter((l) => l.latitude !== null && l.longitude !== null)
);
</script>
<template>
  <PageTitle title="Lokasi Member" />
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <LMap
            style="height: 500px; width: 100%"
            :zoom="zoom"
            :center="center"
            :use-global-leaflet="false"
          >
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <LMarker
              v-for="location in validLocations"
              :key="location.id"
              :lat-lng="[location.latitude, location.longitude]"
            >
              <LPopup>
                <div class="fw-semibold">
                  {{ location.name }}
                </div>
                <div class="text-muted small">
                  {{ location.address }}
                </div>
                <hr class="my-1" />
                <div class="small">
                  Member: <strong>{{ location.owner?.name }}</strong>
                </div>
              </LPopup>
            </LMarker>
          </LMap>
        </div>
      </div>
    </div>
  </div>
</template>
