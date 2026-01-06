<script setup>
import { onMounted, watch } from 'vue';
import flasher from "@flasher/flasher";
import BottomMenu from "./App/BottomMenu.vue";

const props = defineProps({
  messages: Object,
  hideHeader: { type: Boolean, default: false }, // Tambahkan ini
});

watch(() => props.messages, (value) => {
  if (value) flasher.render(value);
});

onMounted(() => {
  if (props.messages) flasher.render(props.messages);
});
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-950 antialiased flex flex-col">
    
    <header v-if="!hideHeader" class="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-5 py-4 flex justify-between items-center shadow-sm">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-200">
           <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
        </div>
        <span class="font-black text-slate-900 tracking-tight">LaporSampah</span>
      </div>
    </header>

    <main class="flex-1 w-full max-w-md mx-auto px-5 pb-32" :class="hideHeader ? 'pt-0' : 'pt-6'">
      <slot />
    </main>

    <BottomMenu />
    <slot name="modal" />
  </div>
</template>