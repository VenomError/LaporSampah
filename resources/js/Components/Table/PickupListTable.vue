<script setup>
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";
import { Link } from "@inertiajs/vue3";
import { route } from "@route";
import axios from "axios";

import { onMounted, reactive, ref, toDisplayString, toRaw, watch } from "vue";
const params = reactive({
  current_page: 1,
  pagesize: 10,
  search: "",
  created_at: null,
  status: "",
});

const loading = ref(true);

const rows = ref(null);

const cols =
  ref([
    { field: "id", title: "ID", isUnique: true, type: "number" },
    { field: "member_name", title: "Member", type: "string" },
    { field: "operator_name", title: "Operator", type: "string" },
    { field: "weight", title: "Berat", type: "number" },
    { field: "status", title: "Status", type: "string" },
    { field: "created_at", title: "Tanggal Laporan", type: "string" },
    { field: "actions", title: "Actions" },
  ]) || [];

const reset = () => {
  params.search = "";
  params.created_at = null;
  params.status = "";
};

const getPickups = async () => {
  try {
    loading.value = true;
    const res = await axios.post(route("dashboard.pickup.get-pickup"), toRaw(params));
    rows.value = res.data.data.map((item) => ({
      ...item,
      member_name: item.member?.name ?? "-",
      operator_name: item.operator?.name ?? "-",
    }));
  } catch (err) {
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getPickups();
});
watch(
  () => [params.status, params.created_at],
  () => {
    getPickups();
  }
);
</script>
<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div class="mb-3">
              <input
                v-model="params.search"
                type="text"
                class="form-control"
                placeholder="Search..."
              />
            </div>
            <div class="mb-3 d-flex gap-2 align-items-center">
              <select class="form-select" v-model="params.status">
                <option value="">All</option>
                <option value="pending">pending</option>
                <option value="processing">processing</option>
                <option value="completed">completed</option>
                <option value="rejected">rejected</option>
                <option value="cancelled">cancelled</option>
              </select>
              <input v-model="params.created_at" type="date" class="form-control" />
              <button class="btn btn-danger" @click="reset">Reset</button>
            </div>
          </div>
          <Vue3Datatable
            :rows="rows"
            :columns="cols"
            :loading="loading"
            :search="params.search"
            :sortable="true"
            sortColumn="created_at"
            sortDirection="desc"
          >
            <template #id="data">
              <strong>#{{ data.value.id }}</strong>
            </template>
            <template #member_name="data">
              <Link class="text-dark fw-medium">
                <span class="text-nowrap">{{ data.value.member_name ?? "-" }}</span>
              </Link>
            </template>
            <template #operator="data">
              <Link class="text-dark fw-medium">
                <template v-if="data.value.operator?.name">
                  <span class="text-decoration-underline text-info">{{
                    data.value.operator_name
                  }}</span>
                </template>
                <template v-else>
                  <button type="button" class="btn btn-sm btn-danger text-nowrap">
                    <i class="ti ti-truck me-2"></i>
                    Assign Operator
                  </button>
                </template>
              </Link>
            </template>
            <template #weight="data">
              <span class="text-nowrap">{{ data.value.weight }} KG</span>
            </template>
            <template #status="data">
              <h5 class="fs-14 text-nowrap text-capitalize mt-1 fw-normal">
                <i
                  class="ti ti-circle-filled fs-12"
                  :class="'text-' + data.value.color"
                ></i>
                {{ data.value.status }}
              </h5>
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
                  <i class="ti ti-forbid-2 fs-20 me-2"></i> Reject
                </button>
              </div>
            </template>
          </Vue3Datatable>
        </div>
      </div>
    </div>
  </div>
</template>
