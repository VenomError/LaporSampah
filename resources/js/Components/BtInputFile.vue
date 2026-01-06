<script setup>
import { useAttrs } from "vue";

const props = defineProps({
  modelValue: { type: [File, null], default: null },
  label: { type: String, default: "" },
  error: { type: String, default: "" },
  help: { type: String, default: "" },
  progress: { type: Number, default: 0 }, // 0 - 100
});

const emit = defineEmits(["update:modelValue"]);
const attrs = useAttrs();

const onFileChange = (e) => {
  const file = e.target.files[0] ?? null;
  emit("update:modelValue", file);
};
</script>

<template>
  <div class="w-full space-y-2">
    <label v-if="label" class="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">
      {{ label }}
    </label>

    <div class="relative group">
      <input
        type="file"
        v-bind="attrs"
        @change="onFileChange"
        class="block w-full text-sm text-slate-500 font-bold
               file:mr-4 file:py-3 file:px-6
               file:rounded-2xl file:border-0
               file:text-xs file:font-black file:uppercase file:tracking-widest
               file:bg-green-50 file:text-green-700
               hover:file:bg-green-100 file:transition-all file:cursor-pointer
               bg-slate-50 rounded-2xl border-2 border-transparent transition-all
               group-hover:border-slate-100 focus:outline-none"
        :class="[error ? 'border-red-500 bg-red-50/50' : '']"
      />
      
      <div v-if="error" class="absolute right-5 top-1/2 -translate-y-1/2 text-red-500">
        <i class="ti ti-alert-circle text-xl"></i>
      </div>
    </div>

    <div v-if="progress > 0" class="px-2">
        <div class="flex items-center justify-between mb-1 px-2">
            <span class="text-[9px] font-black text-green-600 uppercase tracking-widest">Uploading...</span>
            <span class="text-[9px] font-black text-green-600">{{ progress }}%</span>
        </div>
        <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
                class="h-full bg-green-500 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                :style="{ width: progress + '%' }"
            ></div>
        </div>
    </div>

    <p v-if="error" class="text-[11px] font-bold text-red-500 ml-4 italic">{{ error }}</p>
    <p v-else-if="help" class="text-[11px] font-bold text-slate-400 ml-4 italic">{{ help }}</p>
  </div>
</template>