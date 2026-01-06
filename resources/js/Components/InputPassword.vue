<script setup>
import { useAttrs, ref } from "vue";

const model = defineModel({ type: String });
const isPasswordVisible = ref(false);

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  error: { type: String, required: false, default: null },
});

const togglePassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<template>
  <div class="flex flex-col w-full group">
    <label :for="name" class="text-[13px] font-bold text-slate-900 mb-1.5 ml-1 transition-colors group-focus-within:text-green-600">
      {{ label }}
    </label>

    <div
      class="relative flex items-center transition-all duration-300 bg-white border-2 rounded-xl overflow-hidden shadow-sm"
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

      <input
        :type="isPasswordVisible ? 'text' : 'password'"
        v-model="model"
        v-bind="$attrs"
        :id="name"
        :name="name"
        class="flex-1 py-4 pl-5 pr-2 bg-transparent outline-none text-[15px] font-bold text-slate-950 placeholder:text-slate-400"
        placeholder="••••••••"
      />

      <button 
        type="button"
        @click="togglePassword"
        class="px-4 py-4 flex items-center justify-center text-slate-400 hover:text-green-600 transition-colors focus:outline-none"
      >
        <svg v-if="isPasswordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
      </button>
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