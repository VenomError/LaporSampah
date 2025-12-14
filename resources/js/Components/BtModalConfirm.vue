<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";

const props = defineProps({
  id: { type: String, default: "confirm-modal" },
  title: { type: String, default: "Konfirmasi" },
  message: { type: String, default: "Apakah Anda yakin?" },
  confirmText: { type: String, default: "Ya" },
  cancelText: { type: String, default: "Batal" },
  confirmClass: { type: String, default: "btn-danger" },

  /** NEW */
  icon: { type: String, default: "alert-triangle" },
  iconColor: { type: String, default: "danger" },
});

const emit = defineEmits(["confirm", "cancel", "open", "close"]);

let modal = null;
let confirmCallback = null;

onMounted(() => {
  const el = document.getElementById(props.id);
  modal = new bootstrap.Modal(el);

  el.addEventListener("shown.bs.modal", () => emit("open"));
  el.addEventListener("hidden.bs.modal", () => emit("close"));
});

onUnmounted(() => {
  modal?.dispose();
});

const open = (callback = null) => {
  confirmCallback = callback;
  modal.show();
};

const close = () => modal.hide();

const onConfirm = () => {
  emit("confirm");
  confirmCallback?.();
  close();
};

const onCancel = () => {
  emit("cancel");
  close();
};

defineExpose({ open, close, onConfirm });

/** Auto style */
const iconBg = computed(() => `bg-${props.iconColor}-subtle`);
const iconText = computed(() => `text-${props.iconColor}`);
</script>
<template>
  <div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content border-0 shadow-lg rounded-4">
        <div class="modal-body text-center p-4">
          <!-- ICON -->
          <div
            class="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
            :class="iconBg"
            style="width: 64px; height: 64px"
          >
            <i class="ti" :class="[`ti-${icon}`, iconText]" style="font-size: 32px"></i>
          </div>

          <!-- TITLE -->
          <h4 class="fw-bold mb-2">{{ title }}</h4>

          <!-- MESSAGE -->
          <p class="text-muted mb-4">
            {{ message }}
          </p>

          <!-- ACTIONS -->
          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn btn-light px-4" @click="onCancel">
              {{ cancelText }}
            </button>
            <button
              type="button"
              class="btn px-4"
              :class="confirmClass"
              @click="onConfirm"
            >
              <i class="ti ti-check me-1"></i>
              {{ confirmText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
