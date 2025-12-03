<script setup>
import { ref, defineExpose, defineProps, defineEmits } from "vue";

// Props
const props = defineProps({
    title: { type: String, default: "Title" },
    subtitle: { type: String, default: "" },
    closeText: { type: String, default: "Cancel" },
    confirmText: { type: String, default: "Confirm" },
    closeDisabled: { type: Boolean, default: false },
    confirmDisabled: { type: Boolean, default: false },
});

// Emit
const emit = defineEmits(["close", "confirm"]);

// Internal modal state
const isOpen = ref(false);

// Methods to control modal from parent
function open() {
    isOpen.value = true;
}
function close() {
    isOpen.value = false;
    emit("close");
}
function confirm() {
    isOpen.value = false;
    emit("confirm");
}

// expose untuk parent
defineExpose({
    open,
    close,
});
</script>

<template>
    <div v-if="isOpen" class="bottom-modal container fixed inset-0 z-50 active">

        <!-- Background -->
        <div class="modalBg absolute inset-0 w-full bg-black opacity-30 dark:bg-white" @click="close"></div>

        <!-- Modal Content -->
        <div class="modal relative z-10 flex h-full flex-col items-end justify-end text-center dark:text-white">

            <div class="absolute bottom-0 left-0 right-0">
                <img src="@template/images/rounded-modal-white-bg.png" class="block dark:hidden" />
                <img src="@template/images/rounded-modal-black-bg.png" class="hidden dark:block" />
            </div>

            <div class="relative w-full overflow-y-auto">
                <div class="px-6 pt-8">
                    <div class="flex flex-col items-center justify-center gap-3 pb-4">
                        <p
                            class="w-full text-center text-2xl font-bold border-b border-n40 dark:border-darkN40 border-dashed pb-5 text-g300">
                            {{ title }}
                        </p>

                        <p class="text-center text-n500 dark:text-darkN500">{{ subtitle }}</p>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="px-6 py-8">
                    <div class="flex justify-between items-center gap-4">

                        <!-- CLOSE -->
                        <button type="button" :disabled="closeDisabled" @click="close"
                            class="flex-1 py-3 bg-bgColor text-g300 font-medium text-center rounded-xl border border-bgColor2 dark:bg-darkN20 dark:border-darkN40"
                            :class="{
                                'opacity-40 cursor-not-allowed': closeDisabled
                            }">
                            {{ closeText }}
                        </button>

                        <!-- CONFIRM -->
                        <button type="button" :disabled="confirmDisabled" @click="confirm"
                            class="flex-1 py-3 bg-g300 text-white text-center rounded-xl font-medium border border-g300"
                            :class="{
                                'opacity-40 cursor-not-allowed': confirmDisabled
                            }">
                            {{ confirmText }}
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
