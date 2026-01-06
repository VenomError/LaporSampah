<script setup>
import { onMounted, reactive, ref, toRaw, watch } from "vue";
import BaseTable from "@components/Table/BaseTable.vue";
import axios from "axios";
import { route } from "@route";
import { router } from "@inertiajs/vue3";

const cols = ref([
    { field: "id", title: "ID", width: "80px" },
    { field: "member.name", title: "Warga" },
    { field: "incentive.name", title: "Hadiah" },
    { field: "point_reedemed", title: "Poin Ditukar" },
    { field: "status", title: "Status" },
    { field: "actions", title: "Aksi", sort: false, headerClass: 'justify-center', cellClass: 'justify-center' }
]);

const rows = ref([]);
const loading = ref(false);
const params = reactive({ search: "", status: "" });

const getRedemptions = async () => {
  try {
    loading.value = true;
    const res = await axios.post(route("api.redemptions.list"), toRaw(params));
    rows.value = res.data;
  } catch (error) { 
    console.error("Gagal mengambil data:", error); 
  } finally { 
    loading.value = false; 
  }
};

onMounted(() => getRedemptions());
watch(() => params.status, () => getRedemptions());

const updateStatus = (id, status) => {
    router.post(route('api.redemptions.update-status', { redemption: id }), { status }, {
        onSuccess: () => {
            getRedemptions();
            window.dispatchEvent(new Event("sidebar-refresh"));
        }
    });
};

// Helper pengecekan status agar aman dari typo/case-sensitive
const isStatus = (current, target) => current?.toLowerCase() === target.toLowerCase();
</script>

<template>
  <BaseTable :cols="cols" :rows="rows" :loading="loading" v-model:search="params.search">
    <template #header>
        <select v-model="params.status" class="px-4 py-3 bg-slate-50 border-none rounded-2xl text-[10px] font-black uppercase outline-none focus:ring-4 focus:ring-green-500/10">
            <option value="">Semua Status</option>
            <option value="submitted">⏳ Menunggu (Submitted)</option>
            <option value="approved">✅ Disetujui (Approved)</option>
            <option value="rejected">❌ Ditolak (Rejected)</option>
        </select>
    </template>

    <template #member.name="data">
        <div class="flex flex-col">
            <span class="font-black text-slate-900 leading-none">{{ data.value.member?.name }}</span>
            <span class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">{{ data.value.member?.phone }}</span>
        </div>
    </template>

    <template #point_reedemed="data">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-600 rounded-lg font-black text-xs italic">
            <i class="ti ti-coins"></i> {{ data.value.point_reedemed }}
        </div>
    </template>

    <template #status="data">
        <div class="flex items-center gap-2">
            <span :class="['w-2.5 h-2.5 rounded-full ring-4 ring-white shadow-sm', 'bg-' + data.value.color]"></span>
            <span class="text-[10px] font-black uppercase tracking-widest text-slate-700">
                {{ data.value.status }}
            </span>
        </div>
    </template>

    <template #actions="data">
        <div class="flex gap-2">
            
            <template v-if="isStatus(data.value.status, 'submitted')">
                <button 
                    @click="updateStatus(data.value.id, 'approved')" 
                    class="p-2.5 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm group"
                    title="Setujui Penukaran"
                >
                    <i class="ti ti-check text-lg group-hover:scale-110 transition-transform"></i>
                </button>
                
                <button 
                    @click="updateStatus(data.value.id, 'rejected')" 
                    class="p-2.5 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm group"
                    title="Tolak Penukaran"
                >
                    <i class="ti ti-x text-lg group-hover:rotate-12 transition-transform"></i>
                </button>
            </template>

            <div v-else class="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-lg">
                <i :class="['ti', isStatus(data.value.status, 'approved') ? 'ti-circle-check-filled text-green-500' : 'ti-circle-x-filled text-red-500']"></i>
                <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Selesai</span>
            </div>

        </div>
    </template>
  </BaseTable>
</template>
