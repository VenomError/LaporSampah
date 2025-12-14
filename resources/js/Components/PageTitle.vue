<script setup>
import { Head } from "@inertiajs/vue3";

defineProps({
  title: { type: String, default: "Dashboard Admin" },
});
</script>
<template>
  <Head :title="title" />
  <div class="page-title-head d-flex align-items-sm-center flex-sm-row flex-column gap-2">
    <div class="flex-grow-1">
      <h4 class="fs-18 fw-semibold mb-0 text-capitalize">{{ title }}</h4>
    </div>

    <div class="gap-2 d-flex justify-content-end align-items-center">
      <slot />
    </div>
  </div>
</template>
