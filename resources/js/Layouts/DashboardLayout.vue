<script setup>
import Sidenav from "./Dashboard/Sidenav.vue";
import Header from "./Dashboard/Header.vue";
import { Head } from "@inertiajs/vue3";
import flasher from "@flasher/flasher";
import { watch, onMounted, ref, provide } from "vue";

const props = defineProps({
  title: { type: String, default: "Dashboard Admin" },
  messages: { type: Object, default: null },
});

// State untuk Mobile Sidebar
const isSidebarOpen = ref(false);
const toggleSidebar = () => (isSidebarOpen.value = !isSidebarOpen.value);

// Sediakan akses ke state ini untuk Header & Sidenav
provide("isSidebarOpen", isSidebarOpen);
provide("toggleSidebar", toggleSidebar);

watch(() => props.messages, (value) => { if (value) flasher.render(value); });

onMounted(() => { if (props.messages) flasher.render(props.messages); });

const refreshSidebar = ref(() => {});
provide("refreshSidebar", () => { refreshSidebar.value?.(); });
</script>

<template>
  <Head :title="title" />

  <div class="min-h-screen bg-slate-50 flex overflow-hidden font-sans antialiased text-slate-900">
    
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isSidebarOpen" @click="isSidebarOpen = false" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"></div>
    </Transition>

    <Sidenav @register-refresh="(fn) => (refreshSidebar.value = fn)" />

    <div class="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
      <Header />

      <main class="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
        <div class="max-w-7xl mx-auto">
          <slot @sidebar-refresh="refreshSidebar" />
        </div>
      </main>
    </div>
  </div>
</template>

<style>
  @reference "../../css/app.css";
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { @apply bg-slate-200 rounded-full; }
</style>