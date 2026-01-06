<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import ButtonSubmit from "@components/ButtonSubmit.vue";
import MapTracking from "@components/MapTracking.vue";
import Input from "@components/Input.vue";
import InputTextarea from "@components/InputTextarea.vue";
import { useForm, usePage } from "@inertiajs/vue3";
import { route } from "@route";

const page = usePage();
const userMember = page.props.auth.user.member;
const props = defineProps({
    locations: { type: Array, default: () => [] },
});

const form = useForm({
    location_id: null,
    latitude: null,
    longitude: null,
    weight: 0,
    description: "",
    image: null,
});

const selectedMap = (e) => {
    form.latitude = e.lat;
    form.longitude = e.lng;
    form.location_id = null; // Reset pilihan lokasi tersimpan jika user geser pin
};

const setLocation = (location) => {
    form.latitude = location.latitude;
    form.longitude = location.longitude;
    form.location_id = location.id;
};

const submit = () => {
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
    <div class="min-h-screen bg-slate-50 pb-20">
        <HeaderTitle href="home" title="Lapor Sampah" />

        <div class="px-6 mt-4">
            <div class="overflow-hidden rounded-2xl border-4 border-white shadow-xl shadow-slate-200 aspect-video relative">
                <MapTracking @location-selected="selectedMap" :latitude="form.latitude" :longitude="form.longitude" />
            </div>
            
            <div class="mt-4 bg-green-50 border border-green-100 p-4 rounded-xl flex items-center gap-3">
                <div class="flex-shrink-0 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.152-.822c.39-.308.856-.725 1.322-1.221 1.83-1.957 3.597-4.593 3.597-7.302 0-3.962-3.137-7.145-7.057-7.145-3.92 0-7.055 3.183-7.055 7.145 0 2.709 1.767 5.345 3.597 7.302.466.496.932.913 1.322 1.221.469.357.854.628 1.152.822zm.46-9.351a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clip-rule="evenodd" />
                    </svg>
                </div>
                <p class="text-[11px] font-bold text-green-700 leading-tight">
                    Geser Pin pada peta untuk menentukan lokasi penjemputan yang lebih akurat.
                </p>
            </div>
        </div>

        <form @submit.prevent="submit" class="mt-8 px-6 flex flex-col gap-6">
            
            <div v-if="locations && locations.length > 0" class="bg-white p-5 rounded-2xl border border-slate-200">
                <p class="text-xs font-black text-slate-900 uppercase tracking-widest border-b border-slate-50 pb-4 mb-4">
                    Lokasi Tersimpan
                </p>
                <div class="space-y-3">
                    <div 
                        v-for="(location, index) in locations" :key="index"
                        @click="setLocation(location)"
                        class="flex items-center justify-between p-3 rounded-xl border-2 transition-all cursor-pointer"
                        :class="location.id == form.location_id ? 'border-green-500 bg-green-50/30' : 'border-slate-50 bg-slate-50/50'"
                    >
                        <div class="flex items-center gap-3">
                            <div :class="location.id == form.location_id ? 'text-green-600' : 'text-slate-300'">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="text-sm font-bold text-slate-800">{{ location.name }}</span>
                        </div>
                        <span v-if="location.id == form.location_id" class="text-[10px] font-black text-green-600 uppercase italic">Terpilih</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <Input name="latitude" v-model="form.latitude" :error="form.errors.latitude" label="Lat" placeholder="0.000" readonly class="opacity-80" />
                <Input name="longitude" v-model="form.longitude" :error="form.errors.longitude" label="Long" placeholder="0.000" readonly class="opacity-80" />
            </div>

            <div class="space-y-4">
                <Input 
                    name="weight" 
                    v-model="form.weight" 
                    :error="form.errors.weight" 
                    label="Estimasi Berat (KG)" 
                    placeholder="Contoh: 5" 
                    type="number" 
                />
                
                <InputTextarea 
                    name="description" 
                    v-model="form.description" 
                    :error="form.errors.description" 
                    label="Keterangan Sampah" 
                    placeholder="Sebutkan jenis sampah (Plastik, Kertas, dll)..." 
                />

                <div class="flex flex-col gap-2">
                    <label class="text-[13px] font-bold text-slate-900 ml-1 italic">Lampiran Foto</label>
                    <div class="relative bg-white border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center transition-all active:bg-slate-50 overflow-hidden">
                        <input 
                            type="file" 
                            accept="image/*"
                            @input="form.image = $event.target.files[0]"
                            class="absolute inset-0 opacity-0 cursor-pointer z-10"
                        />
                        <div v-if="!form.image" class="flex flex-col items-center">
                            <div class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                </svg>
                            </div>
                            <span class="text-[11px] font-black text-slate-400 uppercase tracking-widest">Klik untuk Foto</span>
                        </div>
                        <div v-else class="flex flex-col items-center text-green-600">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 mb-1">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-xs font-bold">{{ form.image.name }}</span>
                        </div>
                    </div>
                    <p v-if="form.errors.image" class="text-red-500 text-[11px] font-bold mt-1 ml-1">{{ form.errors.image }}</p>
                </div>
            </div>

            <div class="mt-4 mb-10">
                <button 
                    type="submit" 
                    :disabled="form.processing"
                    class="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl shadow-xl shadow-green-100 transition-all active:scale-[0.97] flex justify-center items-center gap-3 disabled:opacity-50"
                >
                    <span v-if="!form.processing">KIRIM LAPORAN</span>
                    <span v-else class="flex items-center gap-2">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        MENGIRIM...
                    </span>
                </button>
            </div>
        </form>
    </div>
</template>