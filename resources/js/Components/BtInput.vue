<script setup>
import { computed } from "vue";
import { useAttrs } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number, null],
    default: "",
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
});

const emit = defineEmits(["update:modelValue"]);

const attrs = useAttrs();

// Bind proper v-model
const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <div class="mb-3">
    <!-- Label -->
    <label v-if="label" class="form-label">{{ label }}</label>

    <!-- Input -->
    <input
      v-bind="attrs"
      v-model="value"
      :class="['form-control', error ? 'is-invalid' : '']"
    />

    <!-- Help text -->
    <small v-if="help && !error" class="text-muted d-block mt-1">
      {{ help }}
    </small>

    <!-- Error message -->
    <div v-if="error" class="invalid-feedback d-block">
      {{ error }}
    </div>
  </div>
</template>
