<script setup>
const props = defineProps({
  message: { type: String, default: false },
  color: { type: String, default: "success" },
});
</script>

<template>
  <div class="px-6" v-if="message">
    <div
      :class="[
        'text-center rounded-2xl p-4 border dark:bg-darkN20 dark:border-darkN40',
        `border-${color}`,
      ]"
    >
      <p :class="[`text-${color}`, 'text-sm']">
        {{ message }}
      </p>
    </div>
  </div>
</template>
