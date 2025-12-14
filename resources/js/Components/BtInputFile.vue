<script setup>
import { computed } from "vue";
import { useAttrs } from "vue";

const props = defineProps({
  modelValue: {
    type: [File, null],
    default: null,
  },
  label: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
  help: {
    type: String,
    default: "",
  },
  progress: {
    type: Number,
    default: 0, // 0 - 100
  },
});

const emit = defineEmits(["update:modelValue"]);
const attrs = useAttrs();

const onFileChange = (e) => {
  const file = e.target.files[0] ?? null;
  emit("update:modelValue", file);
};
</script>

<template>
  <div class="mb-3">
    <!-- Label -->
    <label v-if="label" class="form-label">
      {{ label }}
    </label>

    <!-- File input -->
    <input
      type="file"
      v-bind="attrs"
      class="form-control"
      :class="{ 'is-invalid': error }"
      @change="onFileChange"
    />

    <!-- Progress bar -->
    <div v-if="progress > 0" class="progress mt-2">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        :style="{ width: progress + '%' }"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ progress }}%
      </div>
    </div>

    <!-- Help -->
    <small v-if="help && !error" class="text-muted d-block mt-1">
      {{ help }}
    </small>

    <!-- Error -->
    <div v-if="error" class="invalid-feedback d-block">
      {{ error }}
    </div>
  </div>
</template>
