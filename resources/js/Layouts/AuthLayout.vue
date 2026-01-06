<script setup>
import { onMounted, watch } from 'vue';
import flasher from "@flasher/flasher";

// Mendefinisikan props di Vue 3 (Composition API lebih clean)
const props = defineProps({
    messages: Object,
});

// Watcher untuk notifikasi flasher
watch(() => props.messages, (value) => {
    if (value) {
        flasher.render(value);
    }
});

onMounted(() => {
    if (props.messages) {
        flasher.render(props.messages);
    }
});
</script>

<template>
    <div class="min-h-screen bg-slate-50 flex flex-col items-center px-6 py-10 antialiased">

        <div class="mb-10 text-center">
            <div
                class="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-2xl shadow-lg shadow-green-200 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
            <h1 class="text-2xl font-black text-slate-800 tracking-tight">LaporSampah</h1>
            <p class="text-sm text-slate-500 mt-1">Wujudkan lingkungan bersih & sehat</p>
        </div>

        <div class="w-full max-w-sm bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <slot />
        </div>

        <div class="mt-auto pt-10 text-center">
            <p class="text-xs text-slate-400 font-medium uppercase tracking-widest">
                Dinas Lingkungan Hidup &copy; 2026
            </p>
        </div>
    </div>
</template>