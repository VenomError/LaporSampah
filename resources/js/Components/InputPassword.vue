<script setup>
import { useAttrs } from 'vue';

const props = defineProps({
    name: { type: String, required: true },
    label: { type: String, required: true },
    error: { type: String, required: false, default: null }
});

</script>
<template>
    <div class="flex flex-col justify-start">
        <p class="text-sm font-semibold pb-2 dark:text-white">{{ label }}</p>
        <div
            class="p-4 bg-n20 border border-n40 dark:bg-darkN20 dark:border-darkN40 rounded-xl flex justify-between items-center">
            <input type="password" v-bind="$attrs" :name="name"
                class="flex-1 bg-transparent outline-none placeholder:text-n90 text-sm passwordField dark:text-white" />
            <i class="ph ph-eye-slash passowordShow cursor-pointer text-n90 text-lg !leading-none"></i>
        </div>
        <p class="text-red-500 text-xs mt-2" v-if="error">
            {{ error }}
        </p>
    </div>
</template>
