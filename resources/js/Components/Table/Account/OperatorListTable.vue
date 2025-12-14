<script setup>
import { computed, onMounted, reactive, ref, toRaw, watch } from "vue";
import BaseTable from "@components/Table/BaseTable.vue";
import BtModalConfirm from "@components/BtModalConfirm.vue";

import axios from "axios";
import { route } from "@route";
import { Link, router } from "@inertiajs/vue3";

const cols =
  ref([
    { field: "id", title: "ID", isUnique: true, type: "number" },
    { field: "operator.name", title: "Name", type: "string" },
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
      route("dashboard.master-data.get-list", { role: "operator" }),
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
defineExpose({
  reloadTable: () => getUsers(),
});

// toggle status
const toggling = ref(new Set());
function toggleStatus(operator_id) {
  if (toggling.value.has(operator_id)) return;

  toggling.value.add(operator_id);
  router.post(
    route("api.operators.toggle-status", { operator: operator_id }),
    {},
    {
      onFinish: () => {
        toggling.value.delete(operator_id);
      },
      onSuccess: () => {
        getUsers();
      },
    }
  );
}

// Removing
const selectedId = ref(null);
const modalConfirm = ref(null);
const showConfirmModal = (id) => {
  selectedId.value = id;
  modalConfirm.value.open();
};
const remove = () => {
  const url = route("api.operators.delete", { operator: selectedId.value });
  router.delete(url, {
    onSuccess: () => {
      getUsers();
    },
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
    <template #operator.name="data">
      <Link class="text-nowrap text-decoration-underline text-primary">{{
        data.value.operator.name
      }}</Link>
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
      <div class="d-flex gap-2">
        <button class="btn btn-primary btn-sm" type="button">
          <i class="ti ti-eye fs-20 me-2"></i> Detail
        </button>
        <button
          class="btn btn-danger btn-sm"
          @click="showConfirmModal(data.value?.operator?.id)"
          type="button"
        >
          <i class="ti ti-trash fs-20 me-2"></i> Hapus
        </button>
        <template v-if="data.value.status === 'active'">
          <button
            class="btn btn-danger btn-sm"
            type="button"
            :disabled="toggling.has(data.value.operator.id)"
            @click="toggleStatus(data.value.operator.id)"
          >
            <template v-if="toggling.has(data.value.operator.id)">
              <i class="ti ti-loader-2 ti-spin fs-20 me-2"></i>
              Processing...
            </template>
            <template v-else>
              <i class="ti ti-forbid-2 fs-20 me-2"></i>
              Inactivate
            </template>
          </button>
        </template>

        <template v-else>
          <button
            class="btn btn-success btn-sm"
            type="button"
            :disabled="toggling.has(data.value.operator.id)"
            @click="toggleStatus(data.value.operator.id)"
          >
            <template v-if="toggling.has(data.value.operator.id)">
              <i class="ti ti-loader-2 ti-spin fs-20 me-2"></i>
              Processing...
            </template>
            <template v-else>
              <i class="ti ti-check fs-20 me-2"></i>
              Activate
            </template>
          </button>
        </template>
      </div>
    </template>
  </BaseTable>
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
