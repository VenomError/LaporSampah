<script setup>
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";

const emit = defineEmits(["update:search"]);

const props = defineProps({
  rows: { type: Array, default: [], required: true },
  cols: { type: Array, default: [], required: true },
  loading: { type: Boolean, default: false },
  search: { type: String, default: "" },

  rowClass: { type: [String, Array], default: "col-12" },
});
</script>

<template>
  <div class="row">
    <div :class="rowClass">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search..."
                :value="search"
                @input="emit('update:search', $event.target.value)"
              />
            </div>
            <div class="mb-3 d-flex gap-2 align-items-center">
              <slot name="header" />
            </div>
          </div>
          <Vue3Datatable
            :rows="rows"
            :columns="cols"
            :loading="loading"
            :search="search"
            v-bind="$attrs"
          >
            <template v-for="(_, name) in $slots" #[name]="slotProps">
              <slot :name="name" v-bind="slotProps" />
            </template>
          </Vue3Datatable>
        </div>
      </div>
    </div>
  </div>
</template>
