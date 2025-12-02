<script setup>
import { InfiniteScroll, Link } from "@inertiajs/vue3";
import { route } from "@route";

const props = defineProps(["data"]);
</script>

<template>
  <div class="flex flex-col gap-4 pt-6" v-for="pickup in data" :key="pickup.id">
    <Link
      :href="route('pickup.detail', { pickup: pickup.id })"
      class="flex justify-between items-center border-b border-dashed border-n40 dark:border-darkN40 pb-4"
    >
      <div class="flex justify-start items-center gap-4">
        <div>
          <p class="font-semibold">{{ pickup.weight }} KG</p>

          <p class="text-n500 dark:text-darkN500 text-xs pt-2.5">
            {{
              new Date(pickup.created_at).toLocaleString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
            }}
          </p>
        </div>
      </div>

      <div class="flex flex-col justify-end items-end">
        <p class="font-semibold pb-2">
          {{ pickup.location?.name }}
        </p>

        <p
          class="text-xs py-0.5 px-2 rounded-md text-white"
          :class="`bg-` + pickup.color"
        >
          {{ pickup.status?.toUpperCase() }}
        </p>
      </div>
    </Link>
  </div>
</template>
