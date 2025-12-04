<script setup>
import { Link } from "@inertiajs/vue3";
import { addNav, addSub } from "../../config/sidenav.js";
import { usePage } from "@inertiajs/vue3";
import { route } from "@route";

const count = usePage().props.count;

const navigations = {
  dashboard: [
    addNav(route("dashboard"), "Dashboard", "dashboard", [], count?.dashboard),
    addNav(
      route("dashboard.point.reedemtion"),
      "Penukaran Point",
      "transfer",
      [],
      count?.point_reedemtion
    ),
    addNav(route("dashboard.pickup.location"), "Lokasi Penjemputan", "map-pins", []),
    addNav(route("dashboard.member.location"), "Lokasi Member", "user-pin", []),
  ],
  penjemputan: [
    addNav(route("dashboard.pickup.list"), "Daftar Penjemputan", "list", []),
    addNav(
      route("dashboard.pickup.status", { status: "pending" }),
      "Permintaan Baru",
      "phone-incoming",
      [],
      count?.pickup?.pending,
      "danger"
    ),
    addNav(
      route("dashboard.pickup.status", { status: "processing" }),
      "Sedang Diproses",
      "truck-delivery",
      [],
      count?.pickup?.processing,
      "primary"
    ),
    addNav(
      route("dashboard.pickup.status", { status: "completed" }),
      "Selesai",
      "checklist",
      [],
      count?.pickup?.completed,
      "success"
    ),
    addNav(
      route("dashboard.pickup.status", { status: "rejected" }),
      "Ditolak",
      "truck-off",
      [],
      count?.pickup?.rejected
    ),
    addNav(
      route("dashboard.pickup.status", { status: "cancelled" }),
      "Dibatalkan",
      "forbid-2",
      [],
      count?.pickup?.cancelled
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
};
</script>
<template>
  <div class="sidenav-menu">
    <!-- Brand Logo -->
    <Link href="/dashboard" class="logo mt-3 mb-2">
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
              <Link :href="item.route" class="side-nav-link">
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
