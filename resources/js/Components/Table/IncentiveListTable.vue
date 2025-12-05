<script setup>
import { computed, onMounted, reactive, ref, toRaw, watch } from "vue";
import BaseTable from "@components/Table/BaseTable.vue";
import axios from "axios";
import { route } from "@route";

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
  is_active: false,
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
</script>

<template>
  <BaseTable :cols="cols" :rows="rows" :loading="loading">
    <!-- header -->
    <template #header>
      <select class="form-select" v-model="params.is_active">
        <option value="">All</option>
        <option :value="true">active</option>
        <option :value="false">inactive</option>
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
      </div>
    </template>
  </BaseTable>
</template>
