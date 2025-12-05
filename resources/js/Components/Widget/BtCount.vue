<script setup>
defineProps(["title", "count", "icon", "color"]);
</script>
<template>
  <div v-bind="$attrs">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div>
            <p class="fw-medium text-muted mb-0 fs-16">{{ title }}</p>
            <h2 class="mt-4 ff-secondary fs-20 fw-semibold">
              <span class="counter-value">{{ count }}</span>
            </h2>
          </div>
          <div>
            <div class="avatar-lg flex-shrink-0">
              <span class="avatar-title rounded-circle p-2" :class="'bg-' + color">
                <i :class="['ti ti-' + icon, 'fs-32']"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- end card body -->
    </div>
    <!-- end card-->
  </div>
</template>
