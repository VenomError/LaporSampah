<script setup>
import PageTitle from "@components/PageTitle.vue";
import PickupStatusTable from "../../../Components/Table/PickupStatusTable.vue";
import BtCount from "@components/Widget/BtCount.vue";
import { usePage } from "@inertiajs/vue3";

const props = usePage().props;
const status = props.status;
const today = props.today;
const total = props.total;
const icon = props.icon;
const color = props.color;
const title = `Penjemputan ${status}`;
</script>
<template>
  <PageTitle :title="title" />
  <div class="row">
    <BtCount
      class="col-lg-6"
      title="Total Penjemputan"
      icon="list"
      :count="total"
      color="primary"
    />
    <BtCount
      class="col-lg-6"
      title="Total Hari Ini"
      :count="today"
      :icon="icon"
      :color="color"
    />
  </div>
  <PickupStatusTable :status="status" />
</template>
