<script setup>
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";
import BtModal from "@components/BtModal.vue";
import BtSelect from "@components/BtSelect.vue";
import BtModalConfirm from "@components/BtModalConfirm.vue";
import { Link, router, useForm } from "@inertiajs/vue3";
import { route } from "@route";
import axios from "axios";
import { onMounted, reactive, ref, toRaw, watch, inject } from "vue";

const refreshSidebar = inject("refreshSidebar");

const props = defineProps({
  status: { type: String, default: "" },
});

const params = reactive({
  current_page: 1,
  pagesize: 10,
  search: "",
  created_at: null,
  status: "",
});

const loading = ref(true);
const rows = ref([]);

const cols = ref([
    { field: "id", title: "ID", isUnique: true, type: "number", width: '80px' },
    { field: "member_name", title: "Member", type: "string" },
    { field: "operator_name", title: "Petugas", type: "string" },
    { field: "weight", title: "Berat", type: "number", width: '100px' },
    { field: "status", title: "Status", type: "string" },
    { field: "created_at", title: "Tanggal", type: "string" },
    { field: "actions", title: "Aksi", sort: false, headerClass: 'justify-center', cellClass: 'justify-center' },
]);

const reset = () => {
  params.search = "";
  params.created_at = null;
};

const getPickups = async () => {
  try {
    loading.value = true;
    const res = await axios.post(route("dashboard.pickup.get-pickup"), toRaw(params));
    rows.value = res.data.map((item) => ({
      ...item,
      member_name: item.member?.name ?? "-",
      operator_name: item.operator?.name,
    }));
  } catch (err) {
      console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  if (props.status) params.status = props.status;
  getPickups();
});

watch(() => [params.status, params.created_at], () => getPickups());

// Assign Operator Logic
const operators = ref([]);
const fetchOperators = async () => {
  try {
    const res = await axios.get(route("api.operators"));
    operators.value = res.data;
  } catch (err) {}
};

const formAssign = useForm({ pickup_id: null, operator_id: null });
const modalAssign = ref(null);

const showModalAssign = (pickup_id) => {
  fetchOperators();
  formAssign.pickup_id = pickup_id;
  modalAssign.value.open();
};

function submitOperator() {
  formAssign.post(route("api.pickups.assign-operator"), {
    onSuccess: () => {
      formAssign.reset();
      modalAssign.value.close();
      getPickups();
      refreshSidebar?.();
    },
  });
}

// Reject Logic
const modalConfirm = ref(null);
const selectedId = ref(null);
function showConfirmModal(pickup_id) {
  selectedId.value = pickup_id;
  modalConfirm.value.open();
}

function pickupReject() {
  router.post(route("api.pickups.reject", { pickup: selectedId.value }), {}, {
      onSuccess: () => {
        getPickups();
        refreshSidebar?.();
      },
  });
}

defineExpose({ reloadTable: () => getPickups() });
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
      <div class="relative w-full md:w-80">
        <i class="ti ti-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
        <input
          v-model="params.search"
          type="text"
          class="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none"
          placeholder="Cari laporan..."
        />
      </div>

      <div class="flex items-center gap-2">
        <div class="relative">
             <i class="ti ti-calendar absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
             <input 
                v-model="params.created_at" 
                type="date" 
                class="pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold outline-none focus:ring-4 focus:ring-green-500/10 transition-all" 
             />
        </div>
        <button @click="reset" class="w-12 h-12 flex items-center justify-center bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
          <i class="ti ti-refresh text-xl"></i>
        </button>
      </div>
    </div>

    <div class="bg-white border border-slate-50 rounded-[2.5rem] overflow-hidden">
      <Vue3Datatable
        :rows="rows"
        :columns="cols"
        :loading="loading"
        :search="params.search"
        :sortable="true"
        sortColumn="created_at"
        sortDirection="desc"
        skin="bh-table-borderless"
        class="custom-datatable"
      >
        <template #id="data">
          <span class="font-black text-slate-400 italic">#{{ data.value.id }}</span>
        </template>

        <template #member_name="data">
          <div class="flex flex-col">
              <span class="font-black text-slate-900">{{ data.value.member_name }}</span>
              <span class="text-[9px] font-bold text-slate-300 uppercase tracking-tighter">Verified Member</span>
          </div>
        </template>

        <template #operator_name="data">
          <div v-if="data.value.operator_name" class="flex items-center gap-2">
             <span class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center italic font-black text-[10px]">OP</span>
             <span class="font-bold text-slate-700">{{ data.value.operator_name }}</span>
          </div>
          <button
            v-else-if="!['rejected', 'cancelled', 'completed'].includes(data.value.status)"
            @click="showModalAssign(data.value.id)"
            class="px-4 py-1.5 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-100"
          >
            Assign Petugas
          </button>
          <span v-else class="text-slate-300 italic text-xs">-</span>
        </template>

        <template #weight="data">
          <div class="flex items-center gap-1">
              <span class="text-sm font-black text-slate-900">{{ data.value.weight }}</span>
              <span class="text-[10px] font-bold text-slate-400">KG</span>
          </div>
        </template>

        <template #status="data">
          <div class="flex items-center gap-2">
              <span :class="['w-2.5 h-2.5 rounded-full ring-4 ring-white shadow-sm', 'bg-' + (data.value.color || 'slate-400')]"></span>
              <span class="text-[11px] font-black uppercase tracking-tighter text-slate-700">{{ data.value.status }}</span>
          </div>
        </template>

        <template #created_at="data">
           <div class="text-[11px] font-bold text-slate-500">
                <p>{{ new Date(data.value.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) }}</p>
                <p class="text-[9px] text-slate-300 leading-none uppercase">{{ new Date(data.value.created_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) }}</p>
            </div>
        </template>

        <template #actions="data">
          <div class="flex gap-2">
            <button class="w-9 h-9 flex items-center justify-center bg-slate-50 text-slate-400 rounded-xl hover:bg-green-600 hover:text-white transition-all">
              <i class="ti ti-eye text-lg"></i>
            </button>
            <button
              v-if="!data.value.operator_name && !['rejected', 'cancelled', 'completed'].includes(data.value.status)"
              @click="showConfirmModal(data.value.id)"
              class="w-9 h-9 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
            >
              <i class="ti ti-forbid-2 text-lg"></i>
            </button>
          </div>
        </template>
      </Vue3Datatable>
    </div>
  </div>

  <BtModal title="Pilih Petugas Lapangan" ref="modalAssign" @close="formAssign.reset()">
    <form @submit.prevent="submitOperator" class="space-y-6">
      <div class="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-center gap-3">
          <i class="ti ti-info-circle text-blue-600 text-2xl"></i>
          <p class="text-xs font-bold text-blue-800 leading-tight">Pastikan petugas yang dipilih sedang dalam kondisi aktif dan tersedia untuk menjemput.</p>
      </div>

      <BtSelect label="Petugas Tersedia" v-model="formAssign.operator_id" :error="formAssign.errors.operator_id">
        <option value="" disabled>-- Klik untuk memilih --</option>
        <option v-for="op in operators" :key="op.id" :value="op.id">{{ op.name }}</option>
      </BtSelect>
      
      <div class="flex justify-end">
          <button class="px-10 py-4 bg-green-600 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs shadow-xl shadow-green-100 hover:bg-green-700 transition-all active:scale-95" type="submit">
            Tugaskan Sekarang
          </button>
      </div>
    </form>
  </BtModal>

  <BtModalConfirm
    ref="modalConfirm"
    title="Tolak Permintaan?"
    message="Tindakan ini tidak dapat dibatalkan. Laporan akan ditandai sebagai ditolak dan warga akan diberitahu."
    icon="trash-x"
    confirm-text="Ya, Tolak"
    @confirm="pickupReject()"
  />
</template>

<style>
@reference "../../../css/app.css";

/* Datatable Skinning Pop */
.custom-datatable .bh-table-borderless table thead tr th {
    @apply bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400 border-none py-6 px-4;
}

.custom-datatable .bh-table-borderless table tbody tr {
    @apply border-b border-slate-50 transition-all hover:bg-slate-50/50;
}

.custom-datatable .bh-table-borderless table tbody tr td {
    @apply py-5 px-4 border-none text-sm;
}

/* Custom Pagination styling */
.bh-pagination .bh-page-item {
    @apply rounded-xl border-slate-100 font-black text-xs ;
}
.bh-pagination .bh-page-item.bh-active {
    @apply bg-green-600 border-green-600 ;
}
</style>