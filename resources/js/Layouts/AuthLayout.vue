<script>
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
  <div class="container px-6 pb-8 pt-12 h-dvh text-n900 dark:bg-n0">
    <slot />
  </div>
</template>
