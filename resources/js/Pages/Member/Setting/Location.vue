<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import ButtonSubmit from "@components/ButtonSubmit.vue";
import MapTracking from "@components/MapTracking.vue";
import Input from "@components/Input.vue";
import InputTextarea from "@components/InputTextarea.vue";
import { useForm, usePage } from "@inertiajs/vue3";
import { route } from "@route";
import axios from "axios";
import { ref } from "vue";

const page = usePage();
const props = defineProps({
    locations: { type: Array, default: () => [] },
});

const form = useForm({
    latitude: null,
    longitude: null,
    name: "",
    address: "",
});

const loading = ref(false);

const selectedMap = async (e) => {
    try {
        loading.value = true;
        const res = await axios.post(route("location.getaddress"), {
            latitude: e.lat,
            longitude: e.lng,
        });
        form.address = res.data.address;
        form.latitude = e.lat;
        form.longitude = e.lng;
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

const submit = () => {
    if (!form.latitude || !form.longitude) {
        alert("Mohon pilih lokasi pada peta terlebih dahulu.");
        return;
    }
    form.post(route("profile.location.add"), {
        onSuccess: () => form.reset(),
        preserveScroll: true,
    });
};
</script>

<template>
    <div class="min-h-screen bg-slate-50 pb-20">
        <HeaderTitle href="profile" title="Kelola Lokasi" />

        <div class="px-6 mt-4">
            <div class="overflow-hidden rounded-2xl border-4 border-white shadow-xl shadow-slate-200 aspect-video relative">
                <MapTracking @location-selected="selectedMap" :latitude="form.latitude" :longitude="form.longitude" />
            </div>
            
            <div class="mt-4 bg-green-50 border border-green-100 p-4 rounded-xl flex items-center gap-3">
                <div class="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.152-.822c.39-.308.856-.725 1.322-1.221 1.83-1.957 3.597-4.593 3.597-7.302 0-3.962-3.137-7.145-7.057-7.145-3.92 0-7.055 3.183-7.055 7.145 0 2.709 1.767 5.345 3.597 7.302.466.496.932.913 1.322 1.221.469.357.854.628 1.152.822zm.46-9.351a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clip-rule="evenodd" />
                    </svg>
                </div>
                <p class="text-[11px] font-bold text-green-700 leading-tight">
                    Geser Pin untuk mendapatkan alamat otomatis atau isi detail lokasi di bawah.
                </p>
            </div>
        </div>

        <div class="px-6 mt-8">
            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 class="text-lg font-black text-slate-900 tracking-tight mb-6 flex items-center gap-2">
                    <span class="w-1.5 h-6 bg-green-600 rounded-full"></span>
                    Tambah Lokasi Baru
                </h3>

                <form @submit.prevent="submit" class="flex flex-col gap-5">
                    <Input 
                        name="name" 
                        v-model="form.name" 
                        :error="form.errors.name" 
                        label="Label Lokasi"
                        :placeholder="loading ? 'Menunggu map...' : 'Rumah, Kantor, Sekolah'" 
                        :disabled="loading" 
                    />

                    <div class="grid grid-cols-2 gap-4">
                        <Input name="latitude" v-model="form.latitude" :error="form.errors.latitude" label="Lat" readonly class="opacity-70" />
                        <Input name="longitude" v-model="form.longitude" :error="form.errors.longitude" label="Long" readonly class="opacity-70" />
                    </div>

                    <InputTextarea 
                        name="address" 
                        v-model="form.address" 
                        :error="form.errors.address"
                        label="Alamat Detail / Patokan" 
                        :placeholder="loading ? 'Sedang mengambil alamat...' : 'Contoh: Sebelah Toko Berkah'" 
                        rows="3" 
                        :disabled="loading" 
                    />

                    <div class="pt-4">
                        <ButtonSubmit 
                            :loading="form.processing || loading" 
                            class="w-full py-4 bg-green-600 text-white font-black rounded-xl shadow-lg shadow-green-100 active:scale-[0.98] transition-all disabled:opacity-50"
                        >
                            SIMPAN LOKASI
                        </ButtonSubmit>
                    </div>
                </form>
            </div>
        </div>

        <div class="px-6 mt-10" v-if="locations && locations.length > 0">
            <div class="flex justify-between items-center mb-6">
                <div>
                    <h3 class="text-xl font-black text-slate-900 tracking-tight">Lokasi Saya</h3>
                    <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Daftar lokasi yang disimpan</p>
                </div>
                <span class="bg-slate-100 text-slate-500 text-[10px] font-black px-3 py-1 rounded-full border border-slate-200">
                    {{ locations.length }} ITEM
                </span>
            </div>

            <div class="flex flex-col gap-4">
                <div 
                    v-for="(location, index) in locations" 
                    :key="index"
                    class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 active:bg-slate-50 transition-colors group"
                >
                    <div class="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="font-black text-slate-900 tracking-tight mb-1 capitalize">{{ location.name }}</p>
                        <p class="text-[11px] font-medium text-slate-500 leading-relaxed italic">
                            {{ location.address }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>