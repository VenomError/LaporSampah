<script setup>
import { computed, useAttrs } from "vue";

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

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<template>
  <div class="mb-3">
    <!-- Label -->
    <label v-if="label" class="form-label">{{ label }}</label>

    <!-- Select -->
    <select
      v-bind="attrs"
      v-model="value"
      :class="['form-select', error ? 'is-invalid' : '']"
    >
      <!-- SLOT OPTIONS -->
      <slot />
    </select>

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
