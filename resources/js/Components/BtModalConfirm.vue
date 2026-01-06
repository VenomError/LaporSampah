<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  title: { type: String, default: "Konfirmasi" },
  message: { type: String, default: "Apakah Anda yakin?" },
  confirmText: { type: String, default: "Ya, Lanjutkan" },
  cancelText: { type: String, default: "Batal" },
  icon: { type: String, default: "alert-triangle" },
  iconColor: { type: String, default: "danger" }, // primary, success, danger
});

const emit = defineEmits(["confirm", "cancel"]);

const isOpen = ref(false);
const open = () => (isOpen.value = true);
const close = () => (isOpen.value = false);

const onConfirm = () => { emit("confirm"); close(); };
const onCancel = () => { emit("cancel"); close(); };

defineExpose({ open, close });

// Warna dinamis gaya POP
const colorMap = {
    danger: { bg: 'bg-red-50', text: 'text-red-500', btn: 'bg-red-500 hover:bg-red-600 shadow-red-100' },
    success: { bg: 'bg-green-50', text: 'text-green-600', btn: 'bg-green-600 hover:bg-green-700 shadow-green-100' },
    primary: { bg: 'bg-blue-50', text: 'text-blue-600', btn: 'bg-blue-600 hover:bg-blue-700 shadow-blue-100' }
};

const theme = computed(() => colorMap[props.iconColor] || colorMap.danger);
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-[110] flex items-center justify-center p-4">
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-md" @click="close"></div>

        <Transition name="pop">
          <div v-if="isOpen" class="relative bg-white w-full max-w-sm rounded-[3rem] p-8 text-center shadow-2xl border border-slate-100">
            <div :class="['mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6', theme.bg]">
                <i :class="['ti ti-' + icon, 'text-4xl', theme.text]"></i>
            </div>

            <h4 class="text-2xl font-black text-slate-900 tracking-tight mb-2">{{ title }}</h4>
            <p class="text-sm font-bold text-slate-500 leading-relaxed mb-8">{{ message }}</p>

            <div class="flex flex-col gap-3">
                <button @click="onConfirm" :class="['w-full py-4 rounded-2xl text-white font-black uppercase tracking-widest text-xs shadow-xl transition-all active:scale-95', theme.btn]">
                    {{ confirmText }}
                </button>
                <button @click="onCancel" class="w-full py-4 rounded-2xl bg-slate-50 text-slate-400 font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all">
                    {{ cancelText }}
                </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.pop-enter-active { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.pop-leave-active { transition: all 0.2s ease-in; }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: scale(0.9) translateY(20px); }
</style>