<script setup>
import { onMounted, reactive, ref, toRaw, watch } from "vue";
import BaseTable from "@components/Table/BaseTable.vue";
import BtModalConfirm from "@components/BtModalConfirm.vue";
import axios from "axios";
import { route } from "@route";
import { Link, router } from "@inertiajs/vue3";

const cols = ref([
    { field: "id", title: "ID", width: "80px" },
    { field: "member.name", title: "Nama Member" },
    { field: "member.phone", title: "Kontak" },
    { field: "member.point", title: "Poin" },
    { field: "status", title: "Status & Verifikasi" },
    { field: "created_at", title: "Bergabung" },
    { field: "actions", title: "Opsi", sort: false, headerClass: 'justify-center', cellClass: 'justify-center' },
]);

const rows = ref([]);
const loading = ref(false);

const params = reactive({ search: "", created_at: null, status: "" });

const getUsers = async () => {
  try {
    loading.value = true;
    const res = await axios.post(route("dashboard.master-data.get-list", { role: "member" }), toRaw(params));
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
function toggleStatus(member_id) {
  if (toggling.value.has(member_id)) return;
  toggling.value.add(member_id);
  router.post(route("api.members.toggle-status", { member: member_id }), {}, {
      onFinish: () => toggling.value.delete(member_id),
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
  router.delete(route("api.members.destroy", { member: selectedId.value }), {
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
        <option value="">Semua Status</option>
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

    <template #member.name="data">
      <div class="flex flex-col">
          <Link :href="route('dashboard.master-data.member-detail' , {member : data.value.member.id})" class="font-black text-slate-900 hover:text-green-600 transition-colors">
            {{ data.value.member.name }}
          </Link>
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{{ data.value.email }}</span>
      </div>
    </template>

    <template #member.point="data">
      <div class="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 border border-yellow-100 rounded-lg">
          <i class="ti ti-coins text-yellow-600"></i>
          <span class="text-xs font-black text-yellow-700">
            {{ Number(data.value.member?.point ?? 0).toLocaleString("id-ID") }}
          </span>
      </div>
    </template>

    <template #member.phone="data">
      <span class="font-bold text-slate-600 text-xs tracking-tight">
          <i class="ti ti-phone text-slate-300 mr-1"></i> {{ data.value.member?.phone }}
      </span>
    </template>

    <template #status="data">
      <div class="flex flex-col gap-1.5">
        <div class="flex items-center gap-1.5">
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
        <Link :href="route('dashboard.master-data.member-detail' , {member : data.value.member.id})" class="w-9 h-9 flex items-center justify-center bg-slate-50 text-slate-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
          <i class="ti ti-eye"></i>
        </Link>

        <button
          @click="toggleStatus(data.value.member.id)"
          :disabled="toggling.has(data.value.member.id)"
          :class="[
            'w-9 h-9 flex items-center justify-center rounded-xl transition-all shadow-sm',
            data.value.status === 'active' 
              ? 'bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white' 
              : 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white'
          ]"
        >
          <i v-if="toggling.has(data.value.member.id)" class="ti ti-loader-2 animate-spin text-lg"></i>
          <i v-else :class="data.value.status === 'active' ? 'ti ti-lock' : 'ti ti-lock-open'"></i>
        </button>

        <button
          @click="showConfirmModal(data.value?.member?.id)"
          class="w-9 h-9 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
        >
          <i class="ti ti-trash"></i>
        </button>
      </div>
    </template>
  </BaseTable>

  <BtModalConfirm
    ref="modalConfirm"
    title="Hapus Member Gonsa?"
    message="Penghapusan data member bersifat permanen dan akan menghapus semua riwayat penjemputan terkait."
    icon="trash-x"
    confirm-text="Ya, Hapus Member"
    @confirm="remove()"
  />
</template>