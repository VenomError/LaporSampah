<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import { Link } from "@inertiajs/vue3";
import { route } from "@route";
const props = defineProps(["pointReedemtion"]);


</script>
<template>
    <HeaderTitle href="history" title="Detail Laporan" />
    <div class="pt-8 flex justify-center items-center flex-col">
        <p class="text-[52px] font-bold flex justify-start pt-2 text-danger">
            - {{ Number(pointReedemtion.point_reedemed).toLocaleString() }}
        </p>
    </div>
    <div class="pt-8">
        <div class="border border-n40 dark:border-darkN40 flex flex-col gap-5 p-4 mx-6 rounded-2xl">
            <!-- created at -->
            <div class="flex justify-between items-center pb-5 border-b border-dashed border-n40 dark:border-darkN40">
                <p class="text-sm text-n500 dark:text-darkN500">Tanggal</p>
                <p class="text-sm">
                    {{
                        new Date(pointReedemtion.created_at).toLocaleString("id-ID", {
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
            <!-- status -->
            <div class="flex justify-between items-center pb-5 border-b border-dashed border-n40 dark:border-darkN40">
                <p class="text-sm text-n500 dark:text-darkN500">Status</p>
                <p class="text-sm px-4 py-2 rounded-md text-white" :class="'bg-' + pointReedemtion.color">
                    {{ String(pointReedemtion.status).toUpperCase() }}
                </p>
            </div>
            <!-- incentive -->
            <div class="flex justify-between items-center pb-5 border-b border-dashed border-n40 dark:border-darkN40">
                <p class="text-sm text-n500 dark:text-darkN500">Incentive</p>
                <p class="text-sm" style="text-align: start; max-width: 50vw">
                    {{ pointReedemtion.incentive?.name }}
                </p>
            </div>
            <!-- description -->
            <div class="flex justify-between items-center pb-5 border-b border-dashed border-n40 dark:border-darkN40">
                <p class="text-sm text-n500 dark:text-darkN500">Deskripsi</p>
                <p class="text-sm" style="text-align: start; max-width: 50vw">
                    {{ pointReedemtion.incentive?.description }}
                </p>
            </div>
            <div class="flex justify-between items-center">
                <p class="text-sm text-n500 dark:text-darkN500">Reference ID</p>
                <p class="text-sm">{{ pointReedemtion.id }}</p>
            </div>
        </div>
    </div>
    <div class="px-6 py-8">
        <div class="flex justify-between items-center gap-4" v-if="pointReedemtion.status != 'cancelled'">
            <!-- <Link :href="route('pickup.cancel', { pickup: pickup.id })" method="post" as="button"
                class="flex-1 py-3 bg-danger text-white text-center rounded-xl font-medium border contactModalOpenButton">
            Batalkan
            </Link> -->
        </div>
    </div>
</template>
