<script setup>
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";
import BtModal from "@components/BtModal.vue";
import BtModalConfirm from "@components/BtModalConfirm.vue";

import BtSelect from "@components/BtSelect.vue";
import { Link, router, useForm } from "@inertiajs/vue3";
import { route } from "@route";
import axios from "axios";

import { computed, onMounted, reactive, ref, toDisplayString, toRaw, watch } from "vue";
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
    console.log(res.data);

    rows.value = res.data.map((item) => ({
      ...item,
      member_name: item.member?.name ?? "-",
      operator_name: item.operator?.name,
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
defineExpose({
  reloadTable: () => getPickups(),
});

// Assign Operator
const operators = ref([]);

const fetchOperators = async () => {
  try {
    const res = await axios.get(route("api.operators"));
    operators.value = res.data;
  } catch (err) {}
};

const formAssign = useForm({
  pickup_id: null,
  operator_id: null,
});
const modalAssign = ref(null);
const showModalAssign = (pickup_id) => {
  fetchOperators();
  formAssign.pickup_id = pickup_id;
  modalAssign.value.open();
};
function submitOperator() {
  formAssign.post(route("api.pickups.assign-operator"), {
    onSuccess: () => {
      formAssign.reset();
      modalAssign.value.close();
      getPickups();
      window.dispatchEvent(new Event("sidebar-refresh"));
    },
  });
}

// Rejected
const modalConfirm = ref(null);
const selectedId = ref(null);
function showConfirmModal(pickup_id) {
  selectedId.value = pickup_id;
  modalConfirm.value.open();
}
function pickupReject() {
  const url = route("api.pickups.reject", { pickup: selectedId.value });
  router.post(
    url,
    {},
    {
      onSuccess: () => {
        getPickups();
        window.dispatchEvent(new Event("sidebar-refresh"));
      },
    }
  );
}
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
              <template v-if="data.value.member">
                <Link class="text-dark fw-medium">
                  <span class="text-nowrap text-decoration-underline text-primary">{{
                    data.value.member_name
                  }}</span>
                </Link>
              </template>
              <template v-else> - </template>
            </template>
            <template #operator_name="data">
              <template v-if="data.value.operator_name">
                <Link class="text-dark fw-medium text-nowrap">
                  <span class="text-decoration-underline text-primary">{{
                    data.value.operator_name
                  }}</span>
                </Link>
              </template>
              <template
                v-else-if="
                  data.value.status != 'rejected' && data.value.status != 'cancelled'
                "
              >
                <button
                  type="button"
                  class="btn btn-sm btn-danger text-nowrap"
                  @click="showModalAssign(data.value.id)"
                >
                  <i class="ti ti-truck me-2"></i>
                  Assign Operator
                </button>
              </template>
              <template v-else> - </template>
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
                <button
                  class="btn btn-danger btn-sm"
                  type="button"
                  @click="showConfirmModal(data.value.id)"
                  v-show="
                    !data.value.operator_name &&
                    data.value.status != 'rejected' &&
                    data.value.status != 'cancelled'
                  "
                >
                  <i class="ti ti-forbid-2 fs-20 me-2"></i> Reject
                </button>
              </div>
            </template>
          </Vue3Datatable>
        </div>
      </div>
    </div>
  </div>

  <BtModal
    id="modal-edit-admin"
    title="Assign Operator"
    ref="modalAssign"
    @close="formAssign.reset()"
  >
    <form @submit.prevent="submitOperator">
      <BtSelect
        label="Pilih Operator"
        v-model="formAssign.operator_id"
        :error="formAssign.errors.operator_id"
      >
        <template v-for="operator in operators" :key="operator.id">
          <option :value="operator.id">{{ operator.name }}</option>
        </template>
      </BtSelect>
      <button class="btn btn-success float-end mt-3" type="submit">Simpan</button>
    </form>
  </BtModal>
  <BtModalConfirm
    ref="modalConfirm"
    title="Tolak Laporan"
    message="Laporan ini Akan di Tolak"
    icon="forbid-2"
    icon-color="danger"
    confirm-text="Tolak"
    confirm-class="btn-danger"
    @confirm="pickupReject()"
  />
</template>
