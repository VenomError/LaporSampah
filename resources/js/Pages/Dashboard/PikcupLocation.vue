<script setup>
import PageTitle from "@components/PageTitle.vue";
import { Link, usePage, router } from "@inertiajs/vue3";
import { LMap, LMarker, LPopup, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { computed, ref, watch } from "vue";

const page = usePage();
const locations = computed(() => page.props.locations);
const filters = ref({
  status: page.props.filters?.status ?? "",
  date: page.props.filters?.date ?? "",
});

const validLocations = computed(() =>
  locations.value.filter((l) => l.latitude && l.longitude)
);

const center = computed(
  () =>
    validLocations.value.length
      ? [validLocations.value[0].latitude, validLocations.value[0].longitude]
      : [-5.147665, 119.432732] // fallback Makassar
);

const zoom = ref(12);

// auto reload ketika filter berubah
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
</script>
<template>
  <PageTitle title="Lokasi Penjemputanm" />

  <div class="row mb-3">
    <div class="col-md-3">
      <select class="form-select" v-model="filters.status">
        <option value="">Semua Status</option>
        <option value="pending">Pending</option>
        <option value="processing">Processing</option>
        <option value="completed">Completed</option>
        <option value="rejected">Rejected</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>

    <div class="col-md-3">
      <input type="date" class="form-control" v-model="filters.date" />
    </div>

    <div class="col-md-2">
      <button class="btn btn-secondary w-100" @click="filters = { status: '', date: '' }">
        Reset
      </button>
    </div>
  </div>
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
                  Status:
                  <strong :class="'text-' + location.owner?.color">{{
                    location.owner?.status
                  }}</strong>
                </div>
                <div class="small">
                  <Link>View Detail</Link>
                </div>
              </LPopup>
            </LMarker>
          </LMap>
        </div>
      </div>
    </div>
  </div>
</template>
