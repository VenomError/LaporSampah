<script>
import OperatorLayout from "@/Layouts/OperatorLayout.vue";
export default {
    // Using the shorthand...
    layout: [OperatorLayout],
}
</script>
<script setup>
import { Head, Link, router } from "@inertiajs/vue3";
import { computed, ref } from "vue";
import { route } from "@route";

const props = defineProps(['pickups', 'filters']);

// Gunakan computed agar reaktif terhadap perubahan URL/Props dari Inertia
const currentStatus = computed(() => props.filters?.status || 'all');

const applyFilter = (status) => {
    router.get(route('operator.pickup.index'), 
        { status: status }, 
        {
            preserveState: true,
            replace: true,
            only: ['pickups', 'filters'] 
        }
    );
};

const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
        case 'completed': return 'bg-green-50 text-green-600 border-green-100';
        case 'processing': return 'bg-blue-50 text-blue-600 border-blue-100';
        case 'pending': return 'bg-orange-50 text-orange-600 border-orange-100';
        default: return 'bg-slate-50 text-slate-400 border-slate-100';
    }
};

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID', {
        day: '2-digit', month: 'short', year: 'numeric'
    });
};
</script>

<template>
  <Head title="Daftar Tugas Penjemputan" />
    <div class="mb-8">
        <h2 class="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Antrean <span class="text-blue-600">Tugas</span>
        </h2>
        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 italic">
            Daftar penjemputan yang ditugaskan kepada Anda
        </p>
    </div>

    <div class="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
        <button 
            @click="applyFilter('all')"
            :class="[currentStatus === 'all' || !currentStatus ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-white text-slate-400 border border-slate-100']"
            class="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
        >
            Semua
        </button>
        <button 
            @click="applyFilter('processing')"
            :class="[currentStatus === 'processing' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-white text-slate-400 border border-slate-100']"
            class="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
        >
            Ongoing
        </button>
        <button 
            @click="applyFilter('completed')"
            :class="[currentStatus === 'completed' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-white text-slate-400 border border-slate-100']"
            class="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
        >
            Selesai
        </button>
    </div>

    <div class="space-y-4">
        <div v-for="pickup in pickups.data" :key="pickup.id" 
             class="group bg-white p-5 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            
            <div class="flex justify-between items-start mb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 font-black italic text-[10px] border border-slate-100">
                        #{{ pickup.id }}
                    </div>
                    <div>
                        <h4 class="font-black text-slate-900 leading-none uppercase italic tracking-tighter">
                            {{ pickup.member?.name }}
                        </h4>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                            {{ formatDate(pickup.created_at) }}
                        </p>
                    </div>
                </div>
                <span :class="['px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border', getStatusClasses(pickup.status)]">
                    {{ pickup.status }}
                </span>
            </div>

            <div class="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
                <div class="flex flex-col">
                    <span class="text-[8px] font-black text-slate-300 uppercase leading-none">Berat Sampah</span>
                    <span class="text-sm font-black text-slate-700 leading-none mt-1">{{ pickup.weight || 0 }} <span class="text-[10px] italic">KG</span></span>
                </div>

                <Link 
                    v-if="pickup.status === 'processing'"
                    :href="route('operator.pickup.show', pickup.id)" 
                    class="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-md hover:bg-slate-900 transition-colors"
                >
                    Jemput Sekarang
                </Link>
                <Link 
                    v-else
                    :href="route('operator.pickup.show', pickup.id)" 
                    class="px-5 py-2.5 bg-slate-100 text-slate-400 rounded-xl text-[9px] font-black uppercase tracking-widest"
                >
                    Lihat Detail
                </Link>
            </div>
            <i class="ti ti-truck-delivery absolute -right-4 -bottom-4 text-7xl opacity-[0.02] -rotate-12 group-hover:opacity-[0.05] transition-opacity"></i>
        </div>

        <div v-if="pickups.data.length === 0" class="py-20 text-center">
            <div class="w-20 h-20 bg-slate-100 rounded-[2rem] flex items-center justify-center mx-auto mb-4">
                <i class="ti ti-clipboard-x text-3xl text-slate-300"></i>
            </div>
            <p class="text-xs font-black text-slate-400 uppercase tracking-widest italic tracking-tighter">Tidak ada tugas dalam kategori ini.</p>
        </div>
    </div>

    <div v-if="pickups.links.length > 3" class="mt-10 flex justify-center gap-2">
        <template v-for="(link, k) in pickups.links" :key="k">
            <Link 
                v-if="link.url"
                :href="link.url" 
                v-html="link.label"
                class="w-10 h-10 flex items-center justify-center rounded-xl text-[10px] font-black transition-all"
                :class="link.active ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-400 border border-slate-100'"
            />
        </template>
    </div>
</template>