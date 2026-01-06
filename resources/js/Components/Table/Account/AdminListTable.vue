<script setup>
import { computed, onMounted, reactive, ref, toRaw, watch } from "vue";
import { router, useForm } from "@inertiajs/vue3";
import BaseTable from "@components/Table/BaseTable.vue";
import BtModal from "@components/BtModal.vue";
import BtModalConfirm from "@components/BtModalConfirm.vue";
import BtInput from "@components/BtInput.vue";
import BtSelect from "@components/BtSelect.vue";
import axios from "axios";
import { route } from "@route";

const cols = ref([
    { field: "id", title: "ID", isUnique: true, type: "number", width: '80px' },
    { field: "email", title: "Akses Akun", type: "string" },
    { field: "status", title: "Verifikasi & Status", type: "string" },
    { field: "created_at", title: "Terdaftar Pada", type: "date" },
    { field: "actions", title: "Opsi", width: '150px', sort: false, headerClass: 'justify-center', cellClass: 'justify-center' },
]);

const rows = ref([]);
const loading = ref(false);
const params = reactive({ search: "", created_at: null, status: "" });

const getUsers = async () => {
  try {
    loading.value = true;
    const res = await axios.post(route("dashboard.master-data.get-list", { role: "admin" }), toRaw(params));
    rows.value = res.data;
  } catch (error) {
  } finally {
    loading.value = false;
  }
};

onMounted(() => getUsers());
watch(() => [params.created_at, params.status], () => getUsers());

const reset = () => { params.created_at = null; params.status = ""; params.search = ""; };

// --- DELETE LOGIC ---
const selectedId = ref(null);
const modalConfirm = ref(null);
const showConfirmModal = (id) => { selectedId.value = id; modalConfirm.value.open(); };

const remove = () => {
  router.delete(route("dashboard.master-data.admin-remove", { user: selectedId.value }), {
    onSuccess: () => getUsers(),
  });
};

// --- EDIT LOGIC ---
const modalEdit = ref(null);
const formEdit = useForm({ id: null, email: null, password: null, is_active: null });

const edit = async (id) => {
  const res = await axios.get(route("api.users.show", { user: id }));
  formEdit.id = res.data.id;
  formEdit.email = res.data.email;
  formEdit.is_active = res.data.is_active;
  modalEdit.value.open();
};

const submitEdit = () => {
  formEdit.post(route("api.users.update", { user: formEdit.id }), {
    onSuccess: () => {
      formEdit.reset();
      modalEdit.value.close();
      getUsers();
    },
  });
};

defineExpose({ reloadTable: () => getUsers() });
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
      <select v-model="params.status" class="px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-black uppercase outline-none focus:ring-4 focus:ring-green-500/10 transition-all">
        <option value="">Semua Status</option>
        <option value="active">🟢 Aktif</option>
        <option value="non_active">🔴 Non-Aktif</option>
      </select>
      <input type="date" v-model="params.created_at" class="px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-black outline-none transition-all" />
      <button @click="reset" class="w-11 h-11 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
        <i class="ti ti-refresh text-xl"></i>
      </button>
    </template>

    <template #id="data">
      <span class="font-black text-slate-300 italic text-xs">#{{ data.value.id }}</span>
    </template>

    <template #email="data">
      <div class="flex flex-col">
          <span class="font-black text-slate-900 leading-none">{{ data.value.email }}</span>
          <span class="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{{ data.value.role || 'Administrator' }}</span>
      </div>
    </template>

    <template #status="data">
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-1.5 px-3 py-1 rounded-lg border text-[10px] font-black uppercase tracking-tighter"
             :class="data.value.is_active ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-600 border-red-100'">
             <span class="w-1.5 h-1.5 rounded-full" :class="data.value.is_active ? 'bg-green-500' : 'bg-red-500'"></span>
             {{ data.value.is_active ? 'Aktif' : 'Non-Aktif' }}
        </div>
        
        <div class="flex items-center gap-1 text-[10px] font-black uppercase" :class="data.value.email_verified_at ? 'text-blue-500' : 'text-slate-300'">
            <i :class="['ti', data.value.email_verified_at ? 'ti-circle-check-filled' : 'ti-circle-x']"></i>
            {{ data.value.email_verified_at ? 'Verified' : 'Unverified' }}
        </div>
      </div>
    </template>

    <template #created_at="data">
      <div class="flex flex-col text-[11px] font-bold text-slate-400">
          <span>{{ new Date(data.value.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) }}</span>
      </div>
    </template>

    <template #actions="data">
      <div class="flex gap-2">
        <button @click="edit(data.value.id)" class="w-9 h-9 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
          <i class="ti ti-pencil text-lg"></i>
        </button>
        <button @click="showConfirmModal(data.value.id)" class="w-9 h-9 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm">
          <i class="ti ti-trash text-lg"></i>
        </button>
      </div>
    </template>
  </BaseTable>

  <BtModal title="Ubah Detail Admin" ref="modalEdit" @close="formEdit.reset()">
    <form @submit.prevent="submitEdit" class="space-y-6">
      <BtInput
        label="Alamat Email"
        type="email"
        placeholder="Masukkan Email Pengelola"
        v-model="formEdit.email"
        :error="formEdit.errors.email"
      />
      
      <BtSelect label="Status Akun" v-model="formEdit.is_active" :error="formEdit.errors.is_active">
        <option :value="true">🟢 Akun Aktif</option>
        <option :value="false">🔴 Akun Non-Aktif (Suspended)</option>
      </BtSelect>

      <div class="p-4 bg-amber-50 rounded-2xl border border-amber-100">
          <p class="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">Keamanan Akun</p>
          <p class="text-[11px] font-bold text-amber-800 italic">Kosongkan password jika tidak ingin menggantinya.</p>
      </div>

      <BtInput
        label="Password Baru (Opsional)"
        placeholder="Masukkan password baru"
        type="password"
        v-model="formEdit.password"
        :error="formEdit.errors.password"
      />

      <div class="flex justify-end pt-4">
          <button class="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-green-600 transition-all active:scale-95" type="submit">
            Perbarui Akun
          </button>
      </div>
    </form>
  </BtModal>

  <BtModalConfirm
    ref="modalConfirm"
    title="Hapus Administrator?"
    message="Tindakan ini permanen. Admin tidak akan bisa lagi mengakses panel kontrol setelah dihapus."
    icon="trash-x"
    confirm-text="Ya, Hapus Akun"
    @confirm="remove()"
  />
</template>