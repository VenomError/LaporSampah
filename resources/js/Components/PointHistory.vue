<script setup>
import { InfiniteScroll, Link } from "@inertiajs/vue3";
import { route } from "@route";

const props = defineProps(["data"]);

function getType(type) {
    if (type == 'App\\Models\\PointReedmtion') {
        return 'Penukaran Incentive';
    } else {
        return 'Pelaporan Sampah';
    }
}
</script>

<template>
    <div class="flex flex-col gap-4 pt-6" v-for="history in data" :key="history.id">
        <Link :href="route('point.history.detail', { point_history: history.id })"
            class="flex justify-between items-center border-b border-dashed border-n40 dark:border-darkN40 pb-4">
        <div class="flex justify-start items-center gap-4">
            <div>
                <p class="font-semibold">{{ getType(history.type_type) }}</p>

                <p class="text-n500 dark:text-darkN500 text-xs pt-2.5">
                    {{
                        new Date(history.created_at).toLocaleString("id-ID", {
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
            <p class="font-semibold pb-2" :class="`text-` + history.color">
                {{ history.point_change }}
            </p>

            <p class="text-xs py-0.5 px-2 rounded-md text-white" :class="`bg-` + history.color">
                {{ history.status?.toUpperCase() }}
            </p>
        </div>
        </Link>
    </div>
</template>
