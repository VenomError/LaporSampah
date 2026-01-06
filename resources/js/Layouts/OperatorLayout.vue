<script setup>
import { onMounted, watch } from 'vue';
import flasher from "@flasher/flasher";
import BottomMenuOperator from "./Operator/BottomMenuOperator.vue";
import { route } from "@route";
import { Link } from '@inertiajs/vue3';
const props = defineProps({
  messages: Object,
  hideHeader: { type: Boolean, default: false },
});

watch(() => props.messages, (value) => {
  if (value) flasher.render(value);
});

onMounted(() => {
  if (props.messages) flasher.render(props.messages);
});
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-950 antialiased flex flex-col font-sans">

    <header v-if="!hideHeader"
      class="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-5 py-4 flex justify-between items-center shadow-sm">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
          <i class="ti ti-truck text-white text-lg"></i>
        </div>
        <div class="flex flex-col leading-none">
          <span class="font-black text-slate-900 tracking-tight">GONSA</span>
          <span class="text-[9px] font-black text-blue-600 uppercase tracking-widest">Operator App</span>
        </div>
      </div>

      <Link :href="route('operator.notification')"
        class="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 relative active:scale-90 transition-all">
      <i class="ti ti-bell text-xl"></i>
      <span class="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
      </Link>
    </header>

    <main class="flex-1 w-full max-w-md mx-auto px-5 pb-32" :class="hideHeader ? 'pt-0' : 'pt-6'">
      <slot />
    </main>

    <BottomMenuOperator />
    <slot name="modal" />
  </div>
</template>