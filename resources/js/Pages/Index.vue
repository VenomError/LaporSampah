<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import PickupHistory from "@components/PickupHistory.vue";
import { route } from '@route';

const props = defineProps(["pickups"]);

const user = usePage().props.auth.user;

</script>
<template>
    <div class="px-6 flex justify-between items-start">
        <div class="rounded-full w-12 h-12 overflow-hidden bg-bgColor2">
            <img src="@template/images/user.png" alt="" />
        </div>

        <p class="text-2xl font-semibold">
            Lapor<span class="text-g300">Sampah</span>
        </p>

        <a href="notifications.html"
            class="text-2xl text-g300 border border-n500 !leading-none flex justify-center items-center rounded-full p-2 relative bg-white dark:bg-n0">
            <div
                class="absolute top-0 right-0 bg-bgColor rounded-full w-3 h-3 flex justify-center items-center dark:bg-n0">
                <div class="w-2 h-2 rounded-full bg-red-500"></div>
            </div>
            <i class="ph-fill ph-bell-simple"></i>
        </a>
    </div>
    <div class="text-center flex justify-between items-center flex-col py-8">
        <p class="text-[52px] font-bold flex justify-start -mt-3">
            {{ Number(user.member.point).toLocaleString() ?? 0 }}
        </p>
        <p class="text-n500 dark:text-darkN500">Point Anda</p>
    </div>
    <div class="px-6 relative z-20">
        <div class="flex gap-3 justify-start items-center">
            <Link :href="route('pickup.create')"
                class="bg-danger rounded-2xl p-4 flex-1  flex flex-col justify-center items-center shrink-0">
                <div class="h-7 w-7 rounded-full bg-n0 flex justify-center items-center">
                    <img src="@template/images/icon2.png" class="size-4" alt="" />
                </div>
                <p class="pt-3 text-center dark:text-n0 font-medium text-sm">
                    Lapor Sampah
                </p>
            </Link>
            <a href="request-money.html"
                class="bg-success rounded-2xl p-4 flex-1  flex flex-col justify-center items-center shrink-0">
                <div class="h-7 w-7 rounded-full bg-n0 flex justify-center items-center">
                    <img src="@template/images/icon3.png" class="size-4" alt="" />
                </div>
                <p class="pt-3 text-center dark:text-n0 font-medium text-sm">
                    Tukar Poin
                </p>
            </a>

        </div>
    </div>
    <div class="bg-white rounded-t-3xl pt-14 -mt-14 flex-1 pb-32 dark:bg-n0">
        <div class="px-6 pt-8">
            <div class="flex justify-between items-center">
                <p class="text-xl font-semibold">History Pelaporan</p>
                <Link :href="route('history')" class="text-g300 font-semibold text-sm">
                    View All</Link>
            </div>
            <PickupHistory :data="pickups" />

        </div>
    </div>

</template
