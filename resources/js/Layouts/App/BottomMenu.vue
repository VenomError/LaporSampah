<script setup>
import { Link } from "@inertiajs/vue3";
import { route } from "@route";
</script>
<template>
  <div class="fixed bottom-0 left-0 right-0 container">
    <div class="p-6 bg-g300 rounded-t-3xl flex justify-between items-center">
      <Link :href="route('home')" class="flex flex-col gap-1 justify-center items-center">
        <i class="ph ph-house text-3xl !leading-none text-white"></i>
        <p class="text-xs font-semibold text-white">Home</p>
      </Link>

      <Link
        :href="route('history')"
        class="flex flex-col gap-1 justify-center items-center"
      >
        <i class="ph ph-clock-counter-clockwise text-3xl !leading-none text-white"></i>
        <p class="text-xs font-semibold text-white">History</p>
      </Link>

      <Link
        :href="route('pickup.create')"
        class="flex justify-center items-center p-3.5 bg-primary rounded-full"
      >
        <i class="ph ph-plus text-2xl !leading-none text-white"></i>
      </Link>
      <Link
        :href="route('change.point')"
        class="flex flex-col gap-1 justify-center items-center"
      >
        <i class="ph ph-coins text-3xl !leading-none text-white"></i>
        <p class="text-xs font-semibold text-white">Tukar Point</p>
      </Link>
      <Link
        :href="route('profile')"
        class="flex flex-col gap-1 justify-center items-center"
      >
        <i class="ph ph-user-circle text-3xl !leading-none text-white"></i>
        <p class="text-xs font-semibold text-white">Profile</p>
      </Link>
    </div>
  </div>
</template>
