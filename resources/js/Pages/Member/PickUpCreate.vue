<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import ButtonSubmit from "@components/ButtonSubmit.vue";
import MapTracking from "@components/MapTracking.vue";
import Input from "@components/Input.vue";
import { useForm, usePage } from "@inertiajs/vue3";
import { route } from "@route";
import InputTextarea from "@components/InputTextarea.vue";

const page = usePage();
const userMember = page.props.auth.user.member;
const props = defineProps({
    locations: {
        type: Array,
        default: () => [],
    },
});
const form = useForm({
    location_id: null,
    latitude: null,
    longitude: null,
    weight: 0,
    description: "",
    image: null,
});

// 2. TANGKAP DATA DARI MAP, MASUKKAN KE
const selectedMap = (e) => {
    form.latitude = e.lat;
    form.longitude = e.lng;
    form.reset('location_id');
};

const setLocation = (location) => {
    form.latitude = location.latitude;
    form.longitude = location.longitude;
    form.location_id = location.id;
};

// 3. FUNGSI SUBMIT
const submit = () => {
    // Cek validasi sederhana
    if (!form.latitude || !form.longitude) {
        alert("Mohon pilih lokasi pada peta terlebih dahulu.");
        return;
    }

    form.post(route("pickup.store"), {
        onSuccess: () => form.reset("description", "weight", "image"),
        preserveScroll: true,
        forceFormData: true,
    });
};
</script>

<template>
    <HeaderTitle href="home" title="Lapor Sampah" />

    <MapTracking @location-selected="selectedMap" :latitude="form.latitude" :longitude="form.longitude" />
    <div style="margin-top: 20px"></div>
    <div class="px-6">
        <div :class="[
            'text-center rounded-2xl p-4 border dark:bg-darkN20 dark:border-darkN40',
            `border-primary`,
        ]">
            <p :class="[`text-primary`, 'text-sm']">
                Drag Pin di Map jika lokasi tidak tepat !
            </p>
        </div>
    </div>
    <form @submit.prevent="submit" class="flex flex-col gap-4 pt-8 px-6">
        <div class="mt-8 p-6 border border-bgColor2 rounded-2xl dark:border-darkN40 w-full" v-if="locations">
            <p class="border-b border-dashed border-n40 pb-6 font-semibold text-p1 dark:border-darkN40 text-g300">
                Pilih Lokasi Tersimpan
            </p>
            <div class="suggested-languages flex flex-col gap-4 pt-5" v-for="(location, index) in locations"
                :key="index">
                <div class="item flex cursor-pointer items-center justify-between border-b border-dashed border-n40 pb-5 dark:border-darkN40"
                    @click="setLocation(location)">
                    <p class="font-medium dark:text-white">{{ location.name }}</p>
                    <i class="ph-radio-button text-2xl radioButton "
                        :class="location.id == form.location_id ? 'ph-fill' : 'ph'"></i>
                </div>
            </div>
        </div>
        <Input name="latitude" v-model="form.latitude" :error="form.errors.latitude" label="Latitude"
            placeholder="Pilih Map di Peta" />
        <Input name="longitude" v-model="form.longitude" :error="form.errors.longitude" label="Longitude"
            placeholder="Pilih Map di Peta" />
        <Input name="weight" v-model="form.weight" :error="form.errors.weight" label="Berat Sampah (KG)"
            placeholder="Masukkan Berat Sampah" type="text" />
        <InputTextarea name="description" v-model="form.description" :error="form.errors.description" label="Deskripsi"
            placeholder="Masukkan Deskripsi Sampah " rows="7" />
        <Input name="image" :error="form.errors.image" label="Upload Gambar Sampah" type="file" accept="image/*"
            @input="form.image = $event.target.files[0]" />
        <div class="my-3 flex">
            <ButtonSubmit :loading="form.processing" text="Saving..."> Save </ButtonSubmit>
        </div>
    </form>
</template>
