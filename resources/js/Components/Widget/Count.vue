<script setup>
defineProps({
  color: { type: String, default: "primary" },
  count: { type: Number, default: 0 },
  title: { type: String, default: "All" },
});
</script>

<template>
  <div
    class="col-span-1 p-4 border border-n40 rounded-md flex flex-col gap-2 justify-center items-center text-center"
    :class="['border-' + color, ' text-' + color]"
  >
    <div
      class="w-10 h-10 rounded-full border flex justify-center items-center dark:border-darkN40"
      :class="['border-' + color, ' text-' + color]"
    >
      <p class="font-medium">{{ count }}</p>
    </div>
    <p class="text-md font-medium">{{ title.toUpperCase() }}</p>
  </div>
</template>
