<script>
import "../../css/app.css";
import "../../template/js/main.js";
import flasher from "@flasher/flasher";
import BottomMenu from "./App/BottomMenu.vue";

export default {
  components: {
    BottomMenu,
  },
  props: {
    messages: Object,
  },
  watch: {
    messages(value) {
      if (value) {
        flasher.render(value);
      }
    },
  },
  mounted() {
    // Display messages on initial load
    if (this.messages) {
      flasher.render(this.messages);
    }
  },
};
</script>
<template>
  <main class="container dark:bg-n0 text-n900 dark:text-white pt-8 min-h-dvh pb-28">
    <slot />
    <BottomMenu />
  </main>
  <slot name="modal" />
</template>
