<script setup>
import { useAttrs } from "vue";

const props = defineProps({
  // 1. Terima value dari v-model parent
  modelValue: { type: [String, Number], default: "" },
  name: { type: String, required: true },
  label: { type: String, required: true },
  error: { type: String, required: false, default: null },
});

// 2. Definisikan event untuk update data ke parent
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col justify-start">
    <p class="text-sm font-semibold pb-2 dark:text-white">{{ label }}</p>
    <div
      class="p-4 bg-n20 border border-n40 dark:bg-darkN20 dark:border-darkN40 rounded-xl"
    >
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        :name="name"
        class="w-full bg-transparent outline-none placeholder:text-n90 text-sm dark:text-white"
      />
    </div>
    <p class="text-red-500 text-xs mt-2" v-if="error">
      {{ error }}
    </p>
  </div>
</template>
