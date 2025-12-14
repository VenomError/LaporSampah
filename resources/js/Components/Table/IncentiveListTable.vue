<script setup>
import { computed, onMounted, reactive, ref, toRaw, watch } from "vue";
import BaseTable from "@components/Table/BaseTable.vue";
import BtModalConfirm from "@components/BtModalConfirm.vue";
import axios from "axios";
import { route } from "@route";
import { router } from "@inertiajs/vue3";

const cols =
  ref([
    { field: "id", title: "ID", isUnique: true, type: "number" },
    { field: "name", title: "Name", isUnique: true, type: "string" },
    { field: "is_active", title: "Status", type: "bool" },
    { field: "point_required", title: "Point Required", type: "string" },
    { field: "created_at", title: "Tanggal Pembuatan", type: "date" },
    { field: "actions", title: "", type: "string" },
  ]) || [];
const rows = ref(null);
const loading = ref(false);

const params = reactive({
  search: "",
  created_at: null,
  is_active: "",
});

const getIncentives = async () => {
  try {
    loading.value = true;
    const res = await axios.post(
      route("dashboard.master-data.incentive.list"),
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
  params.is_active = "";
  params.search = "";
};

onMounted(() => {
  getIncentives();
});
watch(
  () => [params.created_at, params.is_active],
  () => {
    getIncentives();
  }
);
defineExpose({
  reloadTable: () => getIncentives(),
});

// toggle status
const toggling = ref(new Set());
function toggleStatus(id) {
  if (toggling.value.has(id)) return;

  toggling.value.add(id);
  router.post(
    route("api.incentive.toggle-status", { incentive: id }),
    {},
    {
      onFinish: () => {
        toggling.value.delete(id);
      },
      onSuccess: () => {
        getIncentives();
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
  const url = route("api.incentive.destroy", { incentive: selectedId.value });
  router.delete(url, {
    onSuccess: () => {
      getIncentives();
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
      <select class="form-select" v-model="params.is_active">
        <option value="">All</option>
        <option :value="true">Active</option>
        <option :value="false">Inactive</option>
      </select>
      <input type="date" class="form-control" v-model="params.created_at" />
      <button class="btn btn-danger" @click="reset">Reset</button>
    </template>
    <!-- body -->
    <template #id="data">
      <h2 class="fw-bold">#{{ data.value.id }}</h2>
    </template>
    <template #name="data">
      <span class="text-nowrap">{{ data.value.name }}</span>
    </template>
    <template #point_required="data">
      <span class="text-nowrap">{{
        Number(data.value.point_required).toLocaleString("id-ID")
      }}</span>
    </template>
    <template #is_active="data">
      <div class="d-flex gap-2 flex-row">
        <h5 class="fs-14 text-nowrap text-capitalize mt-1 fw-normal">
          <i
            class="ti ti-circle-filled fs-12"
            :class="'text-' + (data.value.is_active ? 'success' : 'danger')"
          ></i>
          {{ data.value.is_active ? "Active" : "Inactive" }}
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
          @click="showConfirmModal(data.value.id)"
          type="button"
        >
          <i class="ti ti-trash fs-20 me-2"></i> Hapus
        </button>
        <template v-if="data.value.is_active">
          <button
            class="btn btn-danger btn-sm"
            type="button"
            :disabled="toggling.has(data.value.id)"
            @click="toggleStatus(data.value.id)"
          >
            <template v-if="toggling.has(data.value.id)">
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
            :disabled="toggling.has(data.value.id)"
            @click="toggleStatus(data.value.id)"
          >
            <template v-if="toggling.has(data.value.id)">
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
