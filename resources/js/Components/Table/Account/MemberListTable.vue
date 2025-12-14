<script setup>
import { computed, onMounted, reactive, ref, toRaw, watch } from "vue";
import BaseTable from "@components/Table/BaseTable.vue";
import axios from "axios";
import { route } from "@route";
import { Link } from "@inertiajs/vue3";

const cols =
  ref([
    { field: "id", title: "ID", isUnique: true, type: "number" },
    { field: "member.name", title: "Name", isUnique: true, type: "string" },
    { field: "member.phone", title: "Phone", type: "string" },
    { field: "member.point", title: "Point", type: "number" },
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
      route("dashboard.master-data.get-list", { role: "member" }),
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
        <option value="inactive">inactive</option>
      </select>
      <input type="date" class="form-control" v-model="params.created_at" />
      <button class="btn btn-danger" @click="reset">Reset</button>
    </template>
    <!-- body -->
    <template #id="data">
      <h2 class="fw-bold">#{{ data.value.id }}</h2>
    </template>
    <template #member.name="data">
      <Link class="text-nowrap">{{ data.value.member.name }}</Link>
    </template>
    <template #member.point="data">
      <span class="text-nowrap"
        >{{ Number(data.value.member?.point ?? 0).toLocaleString("id-ID") }} point</span
      >
    </template>
    <template #member.phone="data">
      <span class="text-nowrap">{{ data.value.member?.phone }}</span>
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
        <button class="btn btn-danger btn-sm" type="button">
          <i class="ti ti-forbid-2 fs-20 me-2"></i> Block
        </button>
        <button class="btn btn-danger btn-sm" type="button">
          <i class="ti ti-forbid-2 fs-20 me-2"></i> Nonactive
        </button>
      </div>
    </template>
  </BaseTable>
</template>
