<script setup>
import PageTitle from "@components/PageTitle.vue";
import PickupListTable from "../../../Components/Table/PickupListTable.vue";
import BtCount from "@components/Widget/BtCount.vue";
import { route } from "@route";
import axios from "axios";
import { computed, onMounted, ref } from "vue";

const countData = ref(null);

onMounted(() => {
  getStatusCount();
});

const getStatusCount = async () => {
  try {
    const res = await axios.post(route("dashboard.pickup.status-count"));
    countData.value = res.data;
  } catch (error) {}
};
</script>
<template>
  <PageTitle title="Daftar Penjemputan" />
  <div class="row">
    <BtCount
      class="col-lg-6"
      title="Total Penjemputan"
      icon="list"
      :count="countData?.all"
      color="primary"
    />
    <BtCount
      class="col-lg-6"
      title="Selesai"
      icon="checklist"
      :count="countData?.completed"
      color="success"
    />
    <BtCount
      class="col-lg-3"
      title="Baru"
      icon="phone-incoming"
      :count="countData?.pending"
      color="warning"
    />
    <BtCount
      class="col-lg-3"
      title="Diproses"
      icon="truck-delivery"
      :count="countData?.processing"
      color="info"
    />
    <BtCount
      class="col-lg-3"
      title="Ditolak"
      icon="truck-off"
      :count="countData?.rejected"
      color="danger"
    />
    <BtCount
      class="col-lg-3"
      title="Dibatalkan"
      icon="forbid-2"
      :count="countData?.cancelled"
      color="danger"
    />
  </div>
  <PickupListTable />
</template>
