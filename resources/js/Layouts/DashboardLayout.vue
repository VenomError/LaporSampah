<script setup>
import Sidenav from "./Dashboard/Sidenav.vue";
import Header from "./Dashboard/Header.vue";
import { Head } from "@inertiajs/vue3";
import flasher from "@flasher/flasher";
import { watch, onMounted } from "vue";

const props = defineProps({
  title: { type: String, default: "Dashboard Admin" },
  messages: { type: Object, default: null },
});

// Watch perubahan messages (flash message dari Laravel)
watch(
  () => props.messages,
  (value) => {
    if (value) flasher.render(value);
  }
);

// Render saat pertama kali halaman dimuat
onMounted(() => {
  if (props.messages) {
    flasher.render(props.messages);
  }
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
