<script setup>
import { onMounted, reactive, ref, toRaw, watch } from "vue";
import BaseTable from "@components/Table/BaseTable.vue";
import BtModalConfirm from "@components/BtModalConfirm.vue";
import axios from "axios";
import { route } from "@route";
import { router } from "@inertiajs/vue3";

const cols = ref([
    { field: "id", title: "ID", width: "80px" },
    { field: "name", title: "Nama Item" },
    { field: "point_required", title: "Biaya Poin" },
    { field: "is_active", title: "Status" },
    { field: "created_at", title: "Tanggal Rilis" },
    { field: "actions", title: "Opsi", sort: false, headerClass: 'justify-center', cellClass: 'justify-center' },
]);

const rows = ref([]);
const loading = ref(false);
const params = reactive({ search: "", created_at: null, is_active: "" });

const getIncentives = async () => {
  try {
    loading.value = true;
    const res = await axios.post(route("dashboard.master-data.incentive.list"), toRaw(params));
    rows.value = res.data;
  } catch (error) {
  } finally {
    loading.value = false;
  }
};

onMounted(() => getIncentives());
watch(() => [params.created_at, params.is_active], () => getIncentives());

const reset = () => {
  params.created_at = null;
  params.is_active = "";
  params.search = "";
};

defineExpose({ reloadTable: () => getIncentives() });

// Toggle Status
const toggling = ref(new Set());
function toggleStatus(id) {
  if (toggling.value.has(id)) return;
  toggling.value.add(id);
  router.post(route("api.incentive.toggle-status", { incentive: id }), {}, {
      onFinish: () => toggling.value.delete(id),
      onSuccess: () => getIncentives(),
  });
}

// Removing
const selectedId = ref(null);
const modalConfirm = ref(null);
const showConfirmModal = (id) => {
  selectedId.value = id;
  modalConfirm.value.open();
};
const remove = () => {
  router.delete(route("api.incentive.destroy", { incentive: selectedId.value }), {
    onSuccess: () => getIncentives(),
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
      <select v-model="params.is_active" class="px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black uppercase outline-none focus:ring-4 focus:ring-green-500/10 transition-all">
        <option value="">Filter Status</option>
        <option :value="true">🟢 Active</option>
        <option :value="false">🔴 Inactive</option>
      </select>
      <input type="date" v-model="params.created_at" class="px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black outline-none transition-all" />
      <button @click="reset" class="w-11 h-11 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
        <i class="ti ti-refresh text-xl"></i>
      </button>
    </template>

    <template #id="data">
      <span class="font-black text-slate-300 italic text-xs">#{{ data.value.id }}</span>
    </template>

    <template #name="data">
      <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center">
              <img v-if="data.value.image_url" :src="data.value.image_url" class="w-full h-full object-cover" />
              <i v-else class="ti ti-package text-slate-300 text-xl"></i>
          </div>
          <span class="font-black text-slate-900">{{ data.value.name }}</span>
      </div>
    </template>

    <template #point_required="data">
      <div class="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100 rounded-lg">
          <i class="ti ti-coins text-amber-600"></i>
          <span class="text-xs font-black text-amber-700">
            {{ Number(data.value.point_required).toLocaleString("id-ID") }} POIN
          </span>
      </div>
    </template>

    <template #is_active="data">
      <div class="flex items-center gap-2">
        <span :class="['w-2 h-2 rounded-full', data.value.is_active ? 'bg-green-500' : 'bg-red-500']"></span>
        <span class="text-[10px] font-black uppercase text-slate-700 tracking-tighter">
          {{ data.value.is_active ? "Active" : "Inactive" }}
        </span>
      </div>
    </template>

    <template #created_at="data">
      <span class="text-[11px] font-bold text-slate-400 uppercase">
        {{ new Date(data.value.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) }}
      </span>
    </template>

    <template #actions="data">
      <div class="flex items-center gap-2">
        <button class="w-9 h-9 flex items-center justify-center bg-slate-50 text-slate-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
          <i class="ti ti-pencil"></i>
        </button>

        <button
          @click="toggleStatus(data.value.id)"
          :disabled="toggling.has(data.value.id)"
          :class="[
            'w-9 h-9 flex items-center justify-center rounded-xl transition-all shadow-sm',
            data.value.is_active 
              ? 'bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white' 
              : 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white'
          ]"
        >
          <i v-if="toggling.has(data.value.id)" class="ti ti-loader-2 animate-spin text-lg"></i>
          <i v-else :class="data.value.is_active ? 'ti ti-eye-off' : 'ti ti-eye'"></i>
        </button>

        <button
          @click="showConfirmModal(data.value.id)"
          class="w-9 h-9 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
        >
          <i class="ti ti-trash"></i>
        </button>
      </div>
    </template>
  </BaseTable>

  <BtModalConfirm
    ref="modalConfirm"
    title="Hapus Item Insentif?"
    message="Menghapus item ini akan menghilangkan data katalog secara permanen. Member tidak akan bisa menukarkan poin dengan item ini lagi."
    icon="gift-off"
    confirm-text="Ya, Hapus Item"
    @confirm="remove()"
  />
</template>