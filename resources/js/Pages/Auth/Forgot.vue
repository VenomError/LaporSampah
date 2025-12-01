<script setup>
import AuthLayout from '@layout/AuthLayout.vue';
defineOptions({
    layout: AuthLayout,
});
</script>
<template>
    <div class="container px-6 pb-8 pt-12 h-dvh text-n900 dark:bg-n0 flex flex-col">
        <div class="flex justify-center items-center text-center flex-col">
            <h1 class="text-2xl font-medium dark:text-white">Forgot Password</h1>
            <p class="tet-sm text-n500 dark:text-darkN500 pt-3 px-4">
                Stay connected, follow teams, and never miss thrilling Stay connected
            </p>
        </div>

        <form class="flex flex-col gap-4 pt-8 relative flex-1">
            <div class="flex flex-col justify-start">
                <p class="text-sm font-semibold pb-2 dark:text-white">Email</p>
                <div class="p-4 bg-n20 border border-n40 dark:bg-darkN20 dark:border-darkN40 rounded-xl">
                    <input type="text" placeholder="Enter email"
                        class="w-full bg-transparent outline-none placeholder:text-n90 text-sm dark:text-white" />
                </div>
            </div>

            <div class="absolute bottom-0 left-0 right-0 flex">
                <a href="verify-otp.html" class="flex-1 py-3 bg-g300 text-white text-center rounded-xl">Send OTP</a>
            </div>
        </form>
    </div>
</template>
