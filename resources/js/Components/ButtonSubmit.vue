<script setup>
const props = defineProps({
  loading: { required: true, type: Boolean },
  text: { type: String, default: "Loading.." },
});
</script>

<template>
  <button
    type="submit"
    :disabled="loading"
    :class="[
      'flex-1 py-3 text-white text-center rounded-xl transition',
      loading ? 'bg-secondary cursor-not-allowed' : 'bg-success',
    ]"
  >
    <span v-if="!loading">
      <slot />
    </span>
    <span v-if="loading">{{ text }}</span>
  </button>
</template>
