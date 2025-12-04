<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { route } from "@route";

const user = usePage().props.auth.user;
</script>
<template>
    <div class="flex justify-center items-center pb-8">
        <p class="text-2xl font-semibold">Settings</p>
    </div>
    <div class="flex justify-between items-center bg-g300 p-6 rounded-2xl text-white mx-6">
        <div class="flex justify-start items-center gap-4">
            <img src="@template/images/user-img.png" class="size-16 rounded-full" alt="" />
            <div class="">
                <h2 class="heading-2 font-semibold text-xl">{{ user.member.name }}</h2>
                <p class="pt-1">{{ user.email }}</p>
            </div>
        </div>
        <button
            class="text-xl size-11 rounded-full bg-white flex justify-center items-center text-n0 myQrCodeModalOpenButton">
            <i class="ph ph-qr-code"></i>
        </button>
    </div>
    <div class="pt-8 flex flex-col gap-5">
        <Link :href="route('notifications')"
            class="flex justify-between items-center pb-5 border-b border-dashed border-n40 dark:border-darkN40 px-6">
        <div class="flex justify-start items-center gap-4">
            <div
                class="text-xl size-11 rounded-full border border-bgColor2 flex justify-center items-center bg-bgColor text-g300 dark:bg-n0 dark:border-darkN40">
                <i class="ph ph-bell"></i>
            </div>
            <p class="font-semibold text-lg">Notifikasi</p>
        </div>
        <div class="">
            <i class="ph ph-caret-right text-xl text-n70 dark:text-white"></i>
        </div>
        </Link>
        <Link :href="route('profile.edit')"
            class="flex justify-between items-center pb-5 border-b border-dashed border-n40 dark:border-darkN40 px-6">
        <div class="flex justify-start items-center gap-4">
            <div
                class="text-xl size-11 rounded-full border border-bgColor2 flex justify-center items-center bg-bgColor text-g300 dark:bg-n0 dark:border-darkN40">
                <i class="ph ph-user"></i>
            </div>
            <p class="font-semibold text-lg">Informasi Pribadi</p>
        </div>
        <div class="">
            <i class="ph ph-caret-right text-xl text-n70 dark:text-white"></i>
        </div>
        </Link>
        <Link :href="route('password.change')"
            class="flex justify-between items-center pb-5 border-b border-dashed border-n40 dark:border-darkN40 px-6">
        <div class="flex justify-start items-center gap-4">
            <div
                class="text-xl size-11 rounded-full border border-bgColor2 flex justify-center items-center bg-bgColor text-g300 dark:bg-n0 dark:border-darkN40">
                <i class="ph ph-key"></i>
            </div>
            <p class="font-semibold text-lg">Ganti Password</p>
        </div>
        <div class="">
            <i class="ph ph-caret-right text-xl text-n70 dark:text-white"></i>
        </div>
        </Link>
        <Link :href="route('profile.location')"
            class="flex justify-between items-center pb-5 border-b border-dashed border-n40 dark:border-darkN40 px-6">
        <div class="flex justify-start items-center gap-4">
            <div
                class="text-xl size-11 rounded-full border border-bgColor2 flex justify-center items-center bg-bgColor text-g300 dark:bg-n0 dark:border-darkN40">
                <i class="ph ph-map-pin"></i>
            </div>
            <p class="font-semibold text-lg">Lokasi</p>
        </div>
        <div class="">
            <i class="ph ph-caret-right text-xl text-n70 dark:text-white"></i>
        </div>
        </Link>
        <div class="flex justify-between items-center pb-5 logoutModalOpenButton cursor-pointer px-6">
            <Link :href="route('logout')" class="flex justify-start items-center gap-4 cursor-pointer">
            <div
                class="text-xl size-11 rounded-full border border-bgColor2 flex justify-center items-center bg-bgColor text-g300 dark:bg-n0 dark:border-darkN40">
                <i class="ph ph-sign-out"></i>
            </div>
            <p class="font-semibold text-g300">Logout</p>
            </Link>
        </div>
    </div>
</template>
