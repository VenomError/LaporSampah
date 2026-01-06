<script setup>
import { computed, useAttrs } from "vue";

const props = defineProps({
  modelValue: { type: [String, Number, null], default: "" },
  label: { type: String, default: "" },
  error: { type: String, default: "" },
  help: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);
const attrs = useAttrs();

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
      <textarea v-bind="attrs" v-model="value" class="w-full bg-slate-50 border-2 border-transparent px-5 py-4 rounded-[1.8rem] text-sm font-bold text-slate-700 outline-none transition-all placeholder:text-slate-300 min-h-[120px]
               focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 custom-scrollbar"
        :class="[error ? 'border-red-500 bg-red-50/50' : '']"></textarea>

      <div
        class="absolute right-5 bottom-5 text-slate-200 pointer-events-none group-focus-within:text-green-100 transition-colors">
        <i class="ti ti-notes text-2xl"></i>
      </div>
    </div>

    <p v-if="error" class="text-[11px] font-bold text-red-500 ml-4 italic flex items-center gap-1">
      {{ error }}
    </p>
    <p v-else-if="help" class="text-[11px] font-bold text-slate-400 ml-4 italic">
      {{ help }}
    </p>
  </div>
</template>

<style scoped>
@reference "../../css/app.css";

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-slate-200 rounded-full;
}
</style>