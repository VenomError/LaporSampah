<script setup>
import BottomMenu from "./App/BottomMenu.vue";
</script>
<template>
  <!-- Splash Screen End -->
  <main class="container dark:bg-n0 text-n900 dark:text-white pt-8 min-h-dvh pb-28">
    <slot />
    <BottomMenu />
  </main>
  <slot name="modal" />
</template>
