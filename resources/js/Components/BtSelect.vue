<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: { type: [String, Number, null], default: "" },
  label: { type: String, default: "" },
  error: { type: String, default: "" },
  help: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <div class="w-full space-y-2">
    <label v-if="label" class="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
      {{ label }}
    </label>

    <div class="relative group">
      <select
        v-model="value"
        class="w-full bg-slate-50 border-2 border-transparent px-5 py-3.5 rounded-2xl text-sm font-bold text-slate-700 outline-none transition-all appearance-none
               focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
        :class="[error ? 'border-red-500 bg-red-50/50' : '']"
      >
        <slot />
      </select>
      
      <div class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-green-600 transition-colors">
        <i class="ti ti-chevron-down text-lg"></i>
      </div>
    </div>

    <p v-if="error" class="text-[11px] font-bold text-red-500 ml-4 italic">
      <i class="ti ti-alert-circle mr-1"></i> {{ error }}
    </p>
    <p v-else-if="help" class="text-[11px] font-bold text-slate-400 ml-4 italic">
      {{ help }}
    </p>
  </div>
</template>