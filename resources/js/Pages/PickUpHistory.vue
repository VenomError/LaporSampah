<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import PickupHistory from "@components/PickupHistory.vue";
import { InfiniteScroll } from "@inertiajs/vue3";
import Count from "@components/Widget/Count.vue";

const props = defineProps(["pickups", "counts", "all"]);
</script>
<template>
  <HeaderTitle href="home" title="History Pelaporan" />
  <div class="pt-5 grid grid-cols-3 gap-3">
    <Count title="ALL" :count="all" color="secondary" />

    <template v-for="(data, status) in counts" :key="status">
      <Count :count="data.count" :color="data.color" :title="status" />
    </template>
  </div>
  <div class="bg-white rounded-t-3xl pt-14 -mt-14 flex-1 pb-32 dark:bg-n0">
    <div class="px-6 pt-8">
      <div class="flex justify-between items-center">
        <p class="text-xl font-semibold">History Pelaporan</p>
      </div>
      <InfiniteScroll data="pickups">
        <PickupHistory :data="pickups.data" />
      </InfiniteScroll>
    </div>
  </div>
</template>
