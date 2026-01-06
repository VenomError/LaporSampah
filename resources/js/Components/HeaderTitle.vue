<script setup>
import { Link } from "@inertiajs/vue3";
import { route } from "@route";

const props = defineProps({
  href: { required: true, type: String },
  title: { required: true, type: String, default: "Lapor Sampah" },
});
</script>

<template>
  <nav class="sticky top-0 z-50 backdrop-blur-lg  border-slate-100 px-5 py-4 flex items-center -mx-5 mb-4">
    <Link
      :href="route(href)"
      class="w-11 h-11 flex justify-center items-center bg-white border border-slate-200 rounded-2xl shadow-sm text-slate-900 transition-all active:scale-90 active:bg-slate-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </Link>

    <div class="flex-1 flex justify-center items-center pr-11"> 
      <h1 class="text-lg font-black text-slate-950 tracking-tight capitalize leading-none">
        {{ title }}
      </h1>
    </div>
  </nav>
</template>