<script setup>
import Sidenav from "./Dashboard/Sidenav.vue";
import Header from "./Dashboard/Header.vue";
import { Head } from "@inertiajs/vue3";

defineProps({
  title: { type: String, default: "Dashboard Admin" },
});
</script>

<template>
  <Head :title="title" />
  <div class="wrapper">
    <Sidenav />

    <Header />

    <div class="page-content">
      <div class="page-container">
        <slot />
      </div>
    </div>
  </div>
</template>
