<script setup>
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";

const emit = defineEmits(["update:search"]);

const props = defineProps({
  rows: { type: Array, default: () => [] },
  cols: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false },
  search: { type: String, default: "" },
});
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 px-2">
      <div class="relative w-full lg:w-80 group">
        <i class="ti ti-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 transition-colors"></i>
        <input
          type="text"
          class="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all outline-none"
          placeholder="Cari data..."
          :value="search"
          @input="emit('update:search', $event.target.value)"
        />
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <slot name="header" />
      </div>
    </div>

    <div class="bg-white border border-slate-50 rounded-[1rem] p-2 overflow-hidden shadow-sm">
      <Vue3Datatable
        :rows="rows"
        :columns="cols"
        :loading="loading"
        :search="search"
        v-bind="$attrs"
        skin="bh-table-borderless"
        class="pop-datatable"
      >
        <template v-for="(_, name) in $slots" #[name]="slotProps">
          <slot :name="name" v-bind="slotProps" />
        </template>
      </Vue3Datatable>
    </div>
  </div>
</template>

<style>
@reference "../../../css/app.css";

/* Styling Datatable agar selaras dengan tema Gonsa */
.pop-datatable .bh-table-borderless table thead tr th {
  @apply bg-slate-50/50 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 border-none py-6 px-4;
}

.pop-datatable .bh-table-borderless table tbody tr {
  @apply border-b border-slate-50 transition-all hover:bg-slate-50/40;
}

.pop-datatable .bh-table-borderless table tbody tr td {
  @apply py-5 px-4 border-none text-sm font-bold text-slate-600;
}

.bh-pagination .bh-page-item.bh-active {
  @apply bg-green-600 border-green-600 rounded-xl font-black ;
}

.bh-pagination .bh-page-item {
  @apply rounded-xl border-slate-100 font-bold text-xs ;
}
</style>