<script setup>
import { onMounted, onUnmounted } from "vue";

const props = defineProps({
  id: { type: String, default: "bootstrap-modal" },
  title: { type: String, default: "Modal" },
});

const emit = defineEmits(["open", "close"]);

let modal = null;

onMounted(() => {
  const el = document.getElementById(props.id);

  modal = new bootstrap.Modal(el);

  // Emit event ketika modal ditampilkan
  el.addEventListener("shown.bs.modal", () => emit("open"));

  // Emit event ketika modal ditutup
  el.addEventListener("hidden.bs.modal", () => emit("close"));
});

onUnmounted(() => {
  modal?.dispose();
});

// Public methods untuk parent
const open = () => modal.show();
const close = () => modal.hide();

// expose ke parent
defineExpose({ open, close });
</script>

<template>
  <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ title }}</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
