<script setup>
import { ref, defineExpose, defineProps, defineEmits } from "vue";

const props = defineProps({
    title: { type: String, default: "Konfirmasi" },
    subtitle: { type: String, default: "" },
    closeText: { type: String, default: "Batal" },
    confirmText: { type: String, default: "Ya, Lanjutkan" },
    closeDisabled: { type: Boolean, default: false },
    confirmDisabled: { type: Boolean, default: false },
});

const emit = defineEmits(["close", "confirm"]);
const isOpen = ref(false);

function open() { isOpen.value = true; }
function close() { 
    isOpen.value = false;
    emit("close");
}
function confirm() {
    isOpen.value = false;
    emit("confirm");
}

defineExpose({ open, close });
</script>

<template>
    <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-6">
            
            <div 
                class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
                @click="close"
            ></div>

            <Transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 scale-95 translate-y-4"
                enter-to-class="opacity-100 scale-100 translate-y-0"
            >
                <div class="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                    
                    <div class="pt-8 flex justify-center">
                        <div class="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                    </div>

                    <div class="px-8 pt-6 pb-4 text-center">
                        <h3 class="text-xl font-black text-slate-900 leading-tight">
                            {{ title }}
                        </h3>
                        <p class="mt-3 text-sm font-medium text-slate-500 leading-relaxed">
                            {{ subtitle }}
                        </p>
                    </div>

                    <div class="px-8 py-8 flex flex-col gap-3">
                        <button 
                            type="button" 
                            :disabled="confirmDisabled" 
                            @click="confirm"
                            class="w-full py-4 bg-green-600 text-white font-bold rounded-2xl shadow-lg shadow-green-100 active:scale-95 transition-all disabled:opacity-50"
                        >
                            {{ confirmText }}
                        </button>

                        <button 
                            type="button" 
                            :disabled="closeDisabled" 
                            @click="close"
                            class="w-full py-4 bg-white text-slate-400 font-bold rounded-2xl border-2 border-slate-100 active:scale-95 transition-all disabled:opacity-50"
                        >
                            {{ closeText }}
                        </button>
                    </div>

                </div>
            </Transition>
        </div>
    </Transition>
</template>

<style scoped>
/* Memastikan modal tidak bisa di-scroll saat konten di belakangnya panjang */
body {
    overflow: hidden;
}
</style>