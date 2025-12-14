<script setup>
import { Link, router } from "@inertiajs/vue3";
import { addNav } from "../../config/sidenav.js";
import { route } from "@route";
import axios from "axios";
import { ref, computed, onMounted } from "vue";

const emit = defineEmits(["register-refresh"]);

const count = ref({
  dashboard: 0,
  point_reedemtion: 0,
  pickup: {
    pending: 0,
    processing: 0,
    completed: 0,
    rejected: 0,
    cancelled: 0,
  },
});

const fetchCount = async () => {
  const res = await axios.get(route("api.pickups.count"));
  count.value = res.data;
};

onMounted(() => {
  fetchCount();
  emit("register-refresh", fetchCount); // 🔥 DAFTARKAN KE LAYOUT
});
/* =========================
   NAVIGATION (COMPUTED)
========================= */
const navigations = computed(() => ({
  dashboard: [
    addNav(route("dashboard"), "Dashboard", "dashboard", [], count.value.dashboard),
    addNav(
      route("dashboard.point.reedemtion"),
      "Penukaran Point",
      "transfer",
      [],
      count.value.point_reedemtion
    ),
    addNav(route("dashboard.pickup.location"), "Lokasi Penjemputan", "map-pins"),
    addNav(route("dashboard.member.location"), "Lokasi Member", "user-pin"),
  ],

  penjemputan: [
    addNav(route("dashboard.pickup.list"), "Daftar Penjemputan", "list"),
    addNav(
      route("dashboard.pickup.status", { status: "pending" }),
      "Permintaan Baru",
      "phone-incoming",
      [],
      count.value.pickup.pending,
      "danger"
    ),
    addNav(
      route("dashboard.pickup.status", { status: "processing" }),
      "Sedang Diproses",
      "truck-delivery",
      [],
      count.value.pickup.processing,
      "primary"
    ),
    addNav(
      route("dashboard.pickup.status", { status: "completed" }),
      "Selesai",
      "checklist",
      [],
      count.value.pickup.completed,
      "success"
    ),
    addNav(
      route("dashboard.pickup.status", { status: "rejected" }),
      "Ditolak",
      "truck-off",
      [],
      count.value.pickup.rejected
    ),
    addNav(
      route("dashboard.pickup.status", { status: "cancelled" }),
      "Dibatalkan",
      "forbid-2",
      [],
      count.value.pickup.cancelled
    ),
  ],

  laporan: [
    addNav(route("dashboard.report.pickup"), "Laporan Penjemputan", "checkup-list"),
    addNav(
      route("dashboard.report.point-reedemtion"),
      "Laporan Penukaran Point",
      "report-money"
    ),
  ],

  master_data: [
    addNav(route("dashboard.master-data.admin"), "Data Admin", "user-shield"),
    addNav(route("dashboard.master-data.operator"), "Data Operator", "user-square"),
    addNav(route("dashboard.master-data.member"), "Data Member", "users-group"),
    addNav(route("dashboard.master-data.incentive"), "Data Incentive", "gift"),
  ],

  settings: [
    addNav(route("dashboard.settings.system"), "System", "settings"),
    addNav(route("dashboard.settings.account"), "Account", "user-cog"),
  ],
}));
</script>

<template>
  <div class="sidenav-menu">
    <!-- Brand Logo -->
    <Link href="/dashboard" class="logo mt-3 mb-2" view-transition>
      <span class="logo-light">
        <span class="logo-lg"
          ><img src="@template/dashboard/images/logo.png" alt="logo"
        /></span>
        <span class="logo-sm"
          ><img src="@template/dashboard/images/logo-sm.png" alt="small logo"
        /></span>
      </span>

      <span class="logo-dark">
        <span class="logo-lg"
          ><img src="@template/dashboard/images/logo-dark.png" alt="dark logo"
        /></span>
        <span class="logo-sm"
          ><img src="@template/dashboard/images/logo-sm.png" alt="small logo"
        /></span>
      </span>
    </Link>

    <!-- Sidebar Hover Menu Toggle Button -->
    <button class="button-sm-hover mt-3 mb-2">
      <i class="ti ti-circle align-middle"></i>
    </button>

    <!-- Full Sidebar Menu Close Button -->
    <button class="button-close-fullsidebar mt-3 mb-2">
      <i class="ti ti-x align-middle"></i>
    </button>

    <div data-simplebar>
      <!--- Sidenav Menu -->
      <ul class="side-nav" v-for="(items, title) in navigations" :key="title">
        <li class="side-nav-title">
          {{ String(title).replace("_", " ") }}
        </li>
        <template v-for="(item, index) in items" :key="index">
          <template v-if="item.sub.length == 0">
            <li class="side-nav-item">
              <Link :href="item.route" class="side-nav-link" view-transition>
                <span class="menu-icon"><i :class="`ti ti-` + item.icon"></i></span>
                <span class="menu-text">
                  {{ item.title }}
                </span>
                <span
                  class="badge rounded-pill"
                  :class="`bg-` + item.count_color"
                  v-if="item.count > 0"
                >
                  {{ item.count }}
                </span>
              </Link>
            </li>
          </template>
          <template v-else>
            <li class="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                :href="`#` + String(item.title).replace(' ', '-')"
                aria-expanded="false"
                :aria-controls="String(item.title).replace(' ', '-')"
                class="side-nav-link"
              >
                <span class="menu-icon"><i :class="`ti ti-` + item.icon"></i></span>
                <span class="menu-text">{{ item.title }}</span>
                <span class="menu-arrow"></span>
              </Link>
              <div class="collapse" :id="String(item.title).replace(' ', '-')">
                <ul class="sub-menu" v-for="(sub, subIndex) in item.sub" :key="subIndex">
                  <li class="side-nav-item">
                    <Link :href="sub.route" class="side-nav-link">
                      <span class="menu-text">{{ sub.title }}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </template>
        </template>
      </ul>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
