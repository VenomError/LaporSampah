<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";

const props = defineProps(["notifications"]);

</script>
<template>
    <HeaderTitle href="home" title="Notifications" />
    <div class="bg-white px-6 rounded-t-3xl dark:bg-n0">
        <div class="pt-6 flex flex-col gap-8">
            <div v-for="(list, date) in notifications" :key="date">
                <p class="text-sm font-semibold text-n500 dark:text-darkN500">
                    {{ date }}
                </p>
                <div class="pt-5 flex flex-col gap-4" v-for="notification in list" :key="notification.id">
                    <div
                        class="flex justify-between items-start p-4 border border-n40 rounded-3xl gap-8 dark:border-darkN40">
                        <div class="flex justify-start items-start gap-4">
                            <div class="flex justify-center items-center p-3.5 rounded-full text-2xl !leading-none border border-n40 "
                                :class="'bg-' + notification.data?.color">
                                <i :class="notification.data?.icon"></i>
                            </div>
                            <div class="">
                                <p class="font-semibold">{{ notification.data?.title }}</p>
                                <p class="text-sm text-n500 dark:text-darkN500 pt-2">
                                    {{ notification.data?.message }}
                                </p>
                            </div>
                        </div>
                        <p class="text-xs text-nowrap">
                            {{
                                new Date(notification.created_at).toLocaleString("id-ID", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: false,
                                })
                            }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
