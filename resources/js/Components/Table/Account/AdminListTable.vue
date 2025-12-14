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

const cols =
  ref([
    { field: "id", title: "ID", isUnique: true, type: "number" },
    { field: "email", title: "Email", isUnique: true, type: "string" },
    { field: "status", title: "Status", type: "string" },
    { field: "role", title: "Role", type: "string" },
    { field: "created_at", title: "Tanggal Pembuatan", type: "date" },
    { field: "actions", title: "", type: "string" },
  ]) || [];
const rows = ref(null);
const loading = ref(false);

const params = reactive({
  search: "",
  created_at: null,
  status: "",
});

const getUsers = async () => {
  try {
    loading.value = true;
    const res = await axios.post(
      route("dashboard.master-data.get-list", { role: "admin" }),
      toRaw(params)
    );
    rows.value = res.data;
  } catch (error) {
  } finally {
    loading.value = false;
  }
};

const reset = () => {
  params.created_at = null;
  params.status = "";
  params.search = "";
};

onMounted(() => {
  getUsers();
});
watch(
  () => [params.created_at, params.status],
  () => {
    getUsers();
  }
);
// Action
const selectedId = ref(null);
const modalConfirm = ref(null);
const showConfirmModal = (id) => {
  selectedId.value = id;
  modalConfirm.value.open();
};
const remove = () => {
  const url = route("dashboard.master-data.admin-remove", { user: selectedId.value });
  router.delete(url, {
    onSuccess: () => {
      getUsers();
    },
  });
};

// Edit

const modalEdit = ref(null);

const formEdit = useForm({
  id: null,
  email: null,
  password: null,
  is_active: null,
});

const edit = async (id) => {
  const res = await axios.get(route("api.users.show", { user: id }));
  modalEdit.value.open();
  formEdit.id = res.data.id;
  formEdit.email = res.data.email;
  formEdit.is_active = res.data.is_active;
};

const submitEdit = () => {
  formEdit.post(route("api.users.update", { user: formEdit.id }), {
    onSuccess: () => {
      formEdit.reset();
      modalEdit.value.close();
    },
  });
  getUsers();
};

defineExpose({
  reloadTable: () => getUsers(),
});
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
    <!-- header -->
    <template #header>
      <select class="form-select" v-model="params.status">
        <option value="">All</option>
        <option value="active">active</option>
        <option value="non_active">inactive</option>
      </select>
      <input type="date" class="form-control" v-model="params.created_at" />
      <button class="btn btn-danger" @click="reset">Reset</button>
    </template>
    <!-- body -->
    <template #id="data">
      <h2 class="fw-bold">#{{ data.value.id }}</h2>
    </template>
    <template #status="data">
      <div class="d-flex gap-2 flex-row">
        <h5 class="fs-14 text-nowrap text-capitalize mt-1 fw-normal">
          <i class="ti ti-circle-filled fs-12" :class="'text-' + data.value.color"></i>
          {{ String(data.value.status).replace("_", " ") }}
        </h5>
        <h5 class="fs-14 text-nowrap text-capitalize mt-1 fw-normal">
          <i
            class="ti ti-circle-filled fs-12"
            :class="'text-' + (data.value.email_verified_at ? 'success' : 'danger')"
          ></i>
          {{ data.value.email_verified_at ? "Verified" : "Not Verified" }}
        </h5>
      </div>
    </template>
    <template #created_at="data">
      <span class="text-nowrap">{{
        new Date(data.value.created_at).toLocaleString("id-ID", {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "numeric",
          hour12: false,
        })
      }}</span>
    </template>
    <template #actions="data">
      <div class="d-flex gap-1">
        <button class="btn btn-primary btn-icon btn-sm" type="button">
          <i class="ti ti-eye fs-20"></i>
        </button>
        <button
          class="btn btn-warning btn-icon btn-sm"
          type="button"
          @click="edit(data.value.id)"
        >
          <i class="ti ti-pencil fs-20"></i>
        </button>
        <button
          class="btn btn-danger btn-icon btn-sm"
          type="button"
          @click="showConfirmModal(data.value.id)"
        >
          <i class="ti ti-trash fs-20"></i>
        </button>
      </div>
    </template>
  </BaseTable>
  <BtModal
    id="modal-edit-admin"
    title="Edit Admin"
    ref="modalEdit"
    @close="formEdit.reset()"
  >
    <form @submit.prevent="submitEdit">
      <BtInput
        label="Email"
        type="email"
        placeholder="Masukkan Email"
        v-model="formEdit.email"
        :error="formEdit.errors.email"
        help="Masukkan Email"
      />
      <BtSelect
        label="Status"
        v-model="formEdit.is_active"
        :error="formEdit.errors.is_active"
      >
        <option :value="true">Aktif</option>
        <option :value="false">Non Aktif</option>
      </BtSelect>
      <BtInput
        label="New Password (optional)"
        placeholder="Masukkan Password"
        type="password"
        v-model="formEdit.password"
        :error="formEdit.errors.password"
        help="Masukkan Password"
      />
      <button class="btn btn-success float-end mt-3" type="submit">Simpan</button>
    </form>
  </BtModal>
  <BtModalConfirm
    ref="modalConfirm"
    title="Hapus Data"
    message="Data ini akan dihapus permanen"
    icon="trash"
    icon-color="danger"
    confirm-text="Hapus"
    confirm-class="btn-danger"
    @confirm="remove()"
  />
</template>
