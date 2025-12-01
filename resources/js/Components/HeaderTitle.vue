<script setup>
import { Link } from "@inertiajs/vue3";
import { route } from "@route";
const props = defineProps({
  href: { required: true, type: String },
  title: { required: true, type: String, default: "Lapor Sampah" },
});
</script>

<template>
  <div class="px-6 flex justify-between items-center pb-8">
    <Link
      :href="route(href)"
      class="flex justify-center items-center bg-g300 w-12 h-12 rounded-full text-2xl !leading-none text-white"
    >
      <i class="ph ph-caret-left"></i>
    </Link>
    <div class="flex-1 flex justify-center items-center pr-12">
      <p class="text-2xl font-semibold">{{ title }}</p>
    </div>
  </div>
</template>
