<script setup>
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";
import BtModal from "@components/BtModal.vue";
import BtModalConfirm from "@components/BtModalConfirm.vue";
import BtSelect from "@components/BtSelect.vue";
import { Link, router, useForm } from "@inertiajs/vue3";
import { route } from "@route";
import axios from "axios";
import { onMounted, reactive, ref, toRaw, watch } from "vue";

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
  { field: "operator_name", title: "Petugas Lapangan", type: "string" },
  { field: "weight", title: "Berat", type: "number", width: '100px' },
  { field: "status", title: "Status", type: "string" },
  { field: "created_at", title: "Waktu Laporan", type: "string" },
  { field: "actions", title: "Aksi", sort: false, headerClass: 'justify-center', cellClass: 'justify-center' },
]);

const reset = () => {
  params.search = "";
  params.created_at = null;
  params.status = "";
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

onMounted(() => getPickups());
watch(() => [params.status, params.created_at], () => getPickups());

defineExpose({ reloadTable: () => getPickups() });

// --- Logic Assign Operator ---
const operators = ref([]);
const fetchOperators = async () => {
  try {
    const res = await axios.get(route("api.operators"));
    operators.value = res.data;
  } catch (err) { }
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
      window.dispatchEvent(new Event("sidebar-refresh"));
    },
  });
}

// --- Logic Reject ---
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
      window.dispatchEvent(new Event("sidebar-refresh"));
    },
  });
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <div class="relative w-full lg:w-72">
        <i class="ti ti-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
        <input v-model="params.search" type="text"
          class="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none"
          placeholder="Cari member atau ID..." />
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <select v-model="params.status"
          class="px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold outline-none focus:ring-4 focus:ring-green-500/10 transition-all">
          <option value="">Semua Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="completed">Completed</option>
          <option value="rejected">Rejected</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <input v-model="params.created_at" type="date"
          class="px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold outline-none focus:ring-4 focus:ring-green-500/10 transition-all" />

        <button @click="reset" class="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
          title="Reset Filter">
          <i class="ti ti-refresh text-xl"></i>
        </button>
      </div>
    </div>

    <div class="bg-white border border-slate-50 rounded-[2rem] overflow-hidden">
      <Vue3Datatable :rows="rows" :columns="cols" :loading="loading" :search="params.search" :sortable="true"
        sortColumn="created_at" sortDirection="desc" skin="bh-table-borderless" class="custom-datatable">
        <template #id="data">
          <span class="font-black text-slate-400">#{{ data.value.id }}</span>
        </template>

        <template #member_name="data">
          <Link :href="route('dashboard.master-data.member-detail', { member: data.value.member.id })"
            class="flex flex-col">
            <span class="font-black text-slate-900">{{ data.value.member_name }}</span>
            <span class="text-[9px] font-bold text-slate-300 uppercase tracking-tighter">Verified Member</span>
          </Link>
        </template>

        <template #operator_name="data">
          <Link :href="route('dashboard.master-data.operator-detail', { operator: data.value.operator.id })"
            v-if="data.value.operator_name" class="flex items-center gap-2">
            <span
              class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center italic font-black text-[10px]">OP</span>
            <span class="font-bold text-slate-700">{{ data.value.operator_name }}</span>
          </Link>
          <button v-else-if="!['rejected', 'cancelled', 'completed'].includes(data.value.status)"
            @click="showModalAssign(data.value.id)"
            class="px-4 py-1.5 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-100">
            Assign Petugas
          </button>
          <span v-else class="text-slate-300 italic text-xs">Tidak ada petugas</span>
        </template>

        <template #weight="data">
          <span class="px-3 py-1 bg-slate-100 text-slate-900 rounded-lg text-xs font-black">
            {{ data.value.weight }} KG
          </span>
        </template>

        <template #status="data">
          <div class="flex items-center gap-2">
            <span :class="['w-2 h-2 rounded-full', 'bg-' + (data.value.color || 'slate-400')]"></span>
            <span class="text-xs font-black uppercase tracking-tighter text-slate-700">{{ data.value.status }}</span>
          </div>
        </template>

        <template #created_at="data">
          <div class="flex flex-col text-[11px] font-bold text-slate-500">
            <span>{{ new Date(data.value.created_at).toLocaleDateString('id-ID', {
              day: '2-digit', month: 'short', year:
                'numeric'
            }) }}</span>
            <span class="text-[9px] text-slate-300 uppercase leading-none">{{ new
              Date(data.value.created_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) }}
              WIB</span>
          </div>
        </template>

        <template #actions="data">
          <div class="flex gap-2">
            <Link :href="route('dashboard.pickup.show', { pickup: data.value.id })"
              class="w-9 h-9 flex items-center justify-center bg-slate-50 text-slate-400 rounded-xl hover:bg-green-600 hover:text-white transition-all">
              <i class="ti ti-eye text-lg"></i>
            </Link>
            <button
              v-if="!data.value.operator_name && !['rejected', 'cancelled', 'completed'].includes(data.value.status)"
              @click="showConfirmModal(data.value.id)"
              class="w-9 h-9 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all">
              <i class="ti ti-trash-x text-lg"></i>
            </button>
          </div>
        </template>
      </Vue3Datatable>
    </div>
  </div>

  <BtModal title="Tugaskan Petugas" ref="modalAssign" @close="formAssign.reset()">
    <form @submit.prevent="submitOperator" class="space-y-4">
      <div class="p-4 bg-green-50 rounded-2xl border border-green-100 mb-4">
        <p class="text-[10px] font-black text-green-600 uppercase tracking-widest">Informasi Penjemputan</p>
        <p class="text-sm font-bold text-slate-900 mt-1">Mengatur petugas untuk penjemputan ID #{{ formAssign.pickup_id
        }}
        </p>
      </div>

      <BtSelect label="Pilih Operator Lapangan" v-model="formAssign.operator_id" :error="formAssign.errors.operator_id">
        <option value="" disabled>-- Pilih Petugas Aktif --</option>
        <option v-for="op in operators" :key="op.id" :value="op.id">{{ op.name }}</option>
      </BtSelect>

      <div class="flex justify-end pt-4">
        <button
          class="px-8 py-3 bg-green-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-green-100 hover:bg-green-700 transition-all"
          type="submit">
          Konfirmasi Petugas
        </button>
      </div>
    </form>
  </BtModal>

  <BtModalConfirm ref="modalConfirm" title="Tolak Penjemputan?"
    message="Laporan ini akan ditandai sebagai ditolak dan warga akan mendapatkan notifikasi." icon="trash-x"
    icon-color="danger" confirm-text="Ya, Tolak Laporan" @confirm="pickupReject()" />
</template>

<style>
@reference "../../../css/app.css";

/* Kustomisasi Datatable untuk gaya POP */
.custom-datatable .bh-table-borderless table thead tr th {
  @apply bg-slate-50/50 text-[10px] font-black uppercase tracking-widest text-slate-400 border-none py-6;
}

.custom-datatable .bh-table-borderless table tbody tr {
  @apply border-b border-slate-50 transition-colors hover:bg-slate-50/30;
}

.custom-datatable .bh-table-borderless table tbody tr td {
  @apply py-5 border-none text-sm;
}

/* Pagination Styling */
.bh-pagination .bh-page-item.bh-active {
  @apply bg-green-600 border-green-600 rounded-xl font-black;
}

.bh-pagination .bh-page-item {
  @apply rounded-xl border-slate-100 text-slate-600 font-bold;
}
</style>