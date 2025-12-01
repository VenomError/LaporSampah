<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import ButtonSubmit from "@components/ButtonSubmit.vue";
import MapTracking from "@components/MapTracking.vue";
import Input from "@components/Input.vue";
import { router, useForm, usePage } from "@inertiajs/vue3";
import { route } from "@route";
import InputTextarea from "@components/InputTextarea.vue";
import axios from "axios";
import { ref } from "vue"; // Pastikan ref diimport

const page = usePage();
const userMember = page.props.auth.user.member;
const props = defineProps({
  locations: {
    type: Array,
    default: () => [],
  },
});

const form = useForm({
  latitude: null,
  longitude: null,
  name: "",
  address: "",
});

// FIX 1: Gunakan const untuk ref (best practice)
const loading = ref(false);

// 2. TANGKAP DATA DARI MAP, MASUKKAN KE FORM
const selectedMap = async (e) => {
  try {
    // FIX 2: Gunakan .value untuk mengubah nilai
    loading.value = true;

    const res = await axios.post(route("location.getaddress"), {
      latitude: e.lat,
      longitude: e.lng,
    });

    form.address = res.data.address;
    form.latitude = e.lat;
    form.longitude = e.lng;
  } catch (error) {
    console.error(error); // Lebih baik console.error daripada alert untuk debug
    alert("Gagal mengambil alamat otomatis");
  } finally {
    // FIX 3: Gunakan .value di finally juga
    loading.value = false;
  }
};

// 3. FUNGSI SUBMIT
const submit = () => {
  if (!form.latitude || !form.longitude) {
    alert("Mohon pilih lokasi pada peta terlebih dahulu.");
    return;
  }

  form.post(route("profile.location.add"), {
    onSuccess: () => form.reset(),
    preserveScroll: true,
    forceFormData: true,
  });
};
</script>

<template>
  <HeaderTitle href="home" title="Lapor Sampah" />

  <MapTracking @location-selected="selectedMap" />

  <div style="margin-top: 20px"></div>

  <div class="px-6">
    <div
      :class="[
        'text-center rounded-2xl p-4 border dark:bg-darkN20 dark:border-darkN40',
        `border-primary`,
      ]"
    >
      <p :class="[`text-primary`, 'text-sm']">
        Drag Pin di Map jika lokasi tidak tepat !
      </p>
    </div>
  </div>

  <form @submit.prevent="submit" class="flex flex-col gap-4 pt-8 px-6">
    <Input
      name="name"
      v-model="form.name"
      :error="form.errors.name"
      label="Name"
      :placeholder="loading ? 'Loading...' : 'Simpan Nama Lokasi seperti : Rumah, Kantor'"
      :disabled="loading"
    />
    <Input
      name="latitude"
      v-model="form.latitude"
      :error="form.errors.latitude"
      label="Latitude"
      :placeholder="loading ? 'Loading...' : 'Pilih Lokasi di Map'"
      :disabled="loading"
    />

    <Input
      name="longitude"
      v-model="form.longitude"
      :error="form.errors.longitude"
      label="Longitude"
      :placeholder="loading ? 'Loading...' : 'Pilih Lokasi di Map'"
      :disabled="loading"
    />

    <InputTextarea
      name="address"
      v-model="form.address"
      :error="form.errors.address"
      label="Alamat / Deskripsi Lokasi"
      :placeholder="
        loading
          ? 'Sedang mengambil alamat...'
          : 'Drag Pin Map untuk mendapatkan alamat otomatis'
      "
      rows="4"
      :disabled="loading"
    />

    <div class="my-3 flex">
      <ButtonSubmit :loading="form.processing || loading" text="Loading...">
        Simpan Lokasi
      </ButtonSubmit>
    </div>
  </form>

  <div class="px-6 pt-8" v-if="locations">
    <div class="flex justify-between items-center">
      <p class="text-xl font-semibold">List Location</p>
    </div>
    <div class="flex flex-col gap-4 pt-6">
      <template v-for="(location, index) in locations" :key="index">
        <a
          class="flex justify-between items-center border-b border-dashed border-n40 dark:border-darkN40 pb-4"
        >
          <div class="flex justify-start items-center gap-4 w-full">
            <div class="">
              <p class="font-semibold">{{ location.name }}</p>
              <p class="text-n500 dark:text-darkN500 text-xs pt-2.5">
                {{ location.address }}
              </p>
            </div>
          </div>
        </a></template
      >
    </div>
  </div>
</template>
