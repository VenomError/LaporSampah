<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import PickupHistory from "@components/PickupHistory.vue";
import ChangeIncentiveHistory from "@components/ChangeIncentiveHistory.vue";
import PointHistory from "@components/PointHistory.vue";
import { InfiniteScroll } from "@inertiajs/vue3";
import { ref } from "vue";

const tabs = ["Pelaporan", "Penukaran", "History Point"];
const activeTab = ref("Pelaporan");

const props = defineProps(["pickups", "changeIncentives", "pointHistories"]);

</script>
<template>
    <HeaderTitle href="home" title="History Pelaporan" />
    <div class="flex items-center gap-2 px-6" style="margin-top: 20px;">
        <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all" :class="[
                activeTab === tab
                    ? 'bg-g300 text-white'
                    : 'bg-bgColor2 dark:bg-darkN20 text-n600 dark:text-darkN500'
            ]">
            {{ tab }}
        </button>
    </div>
    <div class="bg-white rounded-t-3xl  mt-14 flex-1 pb-32 dark:bg-n0">
        <div class="px-6 pt-8" v-if="activeTab == 'Pelaporan'">
            <div class="flex justify-between items-center">
                <p class="text-xl font-semibold">History Pelaporan</p>
            </div>
            <InfiniteScroll data="pickups">
                <PickupHistory :data="pickups.data" />
            </InfiniteScroll>
        </div>
        <div class="px-6 pt-8" v-if="activeTab == 'Penukaran'">
            <div class="flex justify-between items-center">
                <p class="text-xl font-semibold">History Penukaran</p>
            </div>
            <InfiniteScroll data="changeIncentives">
                <ChangeIncentiveHistory :data="changeIncentives.data" />
            </InfiniteScroll>
        </div>
        <div class="px-6 pt-8" v-if="activeTab == 'History Point'">
            <div class="flex justify-between items-center">
                <p class="text-xl font-semibold">History Point</p>
            </div>
            <InfiniteScroll data="pointHistories">
                <PointHistory :data="pointHistories.data" />
            </InfiniteScroll>
        </div>
    </div>
</template>
