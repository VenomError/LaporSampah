<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  title: { type: String, default: "Modal" },
  show: { type: Boolean, default: false } // Menggunakan prop show agar reaktif
});

const emit = defineEmits(["open", "close"]);

// Menutup modal dengan tombol ESC
const handleEscape = (e) => {
  if (e.key === "Escape" && props.show) closeModal();
};

onMounted(() => window.addEventListener("keydown", handleEscape));
onUnmounted(() => window.removeEventListener("keydown", handleEscape));

const closeModal = () => emit("close");

// Expose methods agar tetap kompatibel dengan kode lamamu (.open() / .close())
const isOpen = ref(false);
const open = () => { isOpen.value = true; emit("open"); };
const close = () => { isOpen.value = false; emit("close"); };

defineExpose({ open, close });
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" @click="close"></div>

        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div v-if="isOpen" class="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
            <div class="px-8 py-6 flex items-center justify-between border-b border-slate-50">
              <h4 class="text-xl font-black text-slate-900 tracking-tight">{{ title }}</h4>
              <button @click="close" class="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all">
                <i class="ti ti-x text-xl"></i>
              </button>
            </div>

            <div class="p-8">
              <slot />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>