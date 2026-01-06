<script setup>
import { useAttrs } from "vue";

const props = defineProps({
  modelValue: { type: [String, Number], default: "" },
  name: { type: String, required: true },
  label: { type: String, required: true },
  error: { type: String, required: false, default: null },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col w-full group">
    <label :for="name" class="text-[13px] font-bold text-slate-900 mb-1.5 ml-1 transition-colors group-focus-within:text-green-600">
      {{ label }}
    </label>

    <div
      class="relative flex transition-all duration-300 bg-white border-2 rounded-2xl overflow-hidden shadow-sm"
      :class="[
        error 
          ? 'border-red-500 bg-red-50/30' 
          : 'border-slate-200 group-focus-within:border-green-600 group-focus-within:shadow-md group-focus-within:shadow-green-100'
      ]"
    >
      <div 
        class="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300"
        :class="[
            error ? 'bg-red-500' : 'bg-slate-100 group-focus-within:bg-green-600'
        ]"
      ></div>

      <textarea
        :id="name"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        :name="name"
        class="w-full py-4 px-5 bg-transparent outline-none text-[15px] font-bold text-slate-950 placeholder:text-slate-400 min-h-[120px] resize-none"
      ></textarea>
    </div>

    <div class="h-6">
        <transition 
            enter-active-class="transition duration-300 ease-out" 
            enter-from-class="opacity-0 -translate-y-1" 
            enter-to-class="opacity-100 translate-y-0"
        >
          <p v-if="error" class="text-red-600 text-[12px] font-bold mt-1 ml-1 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1-1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            {{ error }}
          </p>
        </transition>
    </div>
  </div>
</template>