<script setup>
import { onMounted, reactive, ref, toRaw, watch } from "vue";
import BaseTable from "@components/Table/BaseTable.vue";
import BtModalConfirm from "@components/BtModalConfirm.vue";
import axios from "axios";
import { route } from "@route";
import { Link, router } from "@inertiajs/vue3";

const cols = ref([
    { field: "id", title: "ID", width: "80px" },
    { field: "operator.name", title: "Nama Petugas" },
    { field: "email", title: "Email Akses" },
    { field: "status", title: "Status Akun" },
    { field: "created_at", title: "Terdaftar" },
    { field: "actions", title: "Opsi", sort: false, headerClass: 'justify-center', cellClass: 'justify-center' },
]);

const rows = ref([]);
const loading = ref(false);
const params = reactive({ search: "", created_at: null, status: "" });

const getUsers = async () => {
  try {
    loading.value = true;
    const res = await axios.post(route("dashboard.master-data.get-list", { role: "operator" }), toRaw(params));
    rows.value = res.data;
  } catch (error) {
  } finally {
    loading.value = false;
  }
};

onMounted(() => getUsers());
watch(() => [params.created_at, params.status], () => getUsers());

const reset = () => {
  params.created_at = null;
  params.status = "";
  params.search = "";
};

defineExpose({ reloadTable: () => getUsers() });

// Toggle Status Logic
const toggling = ref(new Set());
function toggleStatus(operator_id) {
  if (toggling.value.has(operator_id)) return;
  toggling.value.add(operator_id);
  router.post(route("api.operators.toggle-status", { operator: operator_id }), {}, {
      onFinish: () => toggling.value.delete(operator_id),
      onSuccess: () => getUsers(),
  });
}

// Removing Logic
const selectedId = ref(null);
const modalConfirm = ref(null);
const showConfirmModal = (id) => {
  selectedId.value = id;
  modalConfirm.value.open();
};
const remove = () => {
  router.delete(route("api.operators.delete", { operator: selectedId.value }), {
    onSuccess: () => getUsers(),
  });
};
</script>

<template>
  <BaseTable
    :cols="cols"
    :rows="rows"
    :loading="loading"
    v-model:search="params.search"
    :sortable="true"
    sortColumn="created_at"
    sortDirection="desc"
  >
    <template #header>
      <select v-model="params.status" class="px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black uppercase outline-none focus:ring-4 focus:ring-green-500/10 transition-all">
        <option value="">Status: Semua</option>
        <option value="active">🟢 Active</option>
        <option value="non_active">🔴 Inactive</option>
      </select>
      <input type="date" v-model="params.created_at" class="px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black outline-none transition-all" />
      <button @click="reset" class="w-11 h-11 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
        <i class="ti ti-refresh text-xl"></i>
      </button>
    </template>

    <template #id="data">
      <span class="font-black text-slate-300 italic text-xs">#{{ data.value.id }}</span>
    </template>

    <template #operator.name="data">
      <Link :href="route('dashboard.master-data.operator-detail' , {operator : data.value.operator.id})" class="flex items-center gap-3">
          <div class="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center text-green-600 font-black text-xs">
              {{ data.value.operator.name.charAt(0) }}
          </div>
          <span class="font-black text-slate-900">{{ data.value.operator.name }}</span>
      </Link>
    </template>

    <template #email="data">
      <span class="text-xs font-bold text-slate-500">{{ data.value.email }}</span>
    </template>

    <template #status="data">
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <span :class="['w-2 h-2 rounded-full', data.value.is_active ? 'bg-green-500' : 'bg-red-500']"></span>
          <span class="text-[10px] font-black uppercase text-slate-700 tracking-tighter">
            {{ String(data.value.status).replace("_", " ") }}
          </span>
        </div>
        <div class="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest" :class="data.value.email_verified_at ? 'text-blue-500' : 'text-slate-300'">
            <i :class="data.value.email_verified_at ? 'ti ti-circle-check-filled' : 'ti ti-circle-x'"></i>
            {{ data.value.email_verified_at ? "Verified" : "Unverified" }}
        </div>
      </div>
    </template>

    <template #created_at="data">
      <span class="text-[11px] font-bold text-slate-400 uppercase">
        {{ new Date(data.value.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) }}
      </span>
    </template>

    <template #actions="data">
      <div class="flex items-center gap-2">
        <Link :href="route('dashboard.master-data.operator-detail' , {operator : data.value.operator.id})" class="w-9 h-9 flex items-center justify-center bg-slate-50 text-slate-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
          <i class="ti ti-eye"></i>
        </Link>

        <button
          @click="toggleStatus(data.value.operator.id)"
          :disabled="toggling.has(data.value.operator.id)"
          :class="[
            'w-9 h-9 flex items-center justify-center rounded-xl transition-all shadow-sm',
            data.value.status === 'active' 
              ? 'bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white' 
              : 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white'
          ]"
        >
          <i v-if="toggling.has(data.value.operator.id)" class="ti ti-loader-2 animate-spin text-lg"></i>
          <i v-else :class="data.value.status === 'active' ? 'ti ti-lock' : 'ti ti-lock-open'"></i>
        </button>

        <button
          @click="showConfirmModal(data.value?.operator?.id)"
          class="w-9 h-9 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
        >
          <i class="ti ti-trash text-lg"></i>
        </button>
      </div>
    </template>
  </BaseTable>

  <BtModalConfirm
    ref="modalConfirm"
    title="Hapus Operator?"
    message="Petugas ini tidak akan bisa lagi melakukan penjemputan sampah melalui aplikasi mobile."
    icon="trash-x"
    confirm-text="Ya, Hapus Akun"
    @confirm="remove()"
  />
</template>