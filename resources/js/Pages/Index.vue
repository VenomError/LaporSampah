<script setup>
import { usePage } from '@inertiajs/vue3';

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
            {{ user.member.point ?? 0 }}
        </p>
        <p class="text-n500 dark:text-darkN500">Point Anda</p>
    </div>
    <div class="px-6 relative z-20">
        <div class="flex gap-3 justify-start items-center">
            <a href="request-money.html"
                class="bg-danger rounded-2xl p-4 flex-1  flex flex-col justify-center items-center shrink-0">
                <div class="h-7 w-7 rounded-full bg-n0 flex justify-center items-center">
                    <img src="@template/images/icon2.png" class="size-4" alt="" />
                </div>
                <p class="pt-3 text-center dark:text-n0 font-medium text-sm">
                    Lapor Sampah
                </p>
            </a>
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
                <p class="text-xl font-semibold">Recent Transaction</p>
                <a href="transaction-history.html" class="text-g300 font-semibold text-sm">
                    View All</a>
            </div>
            <div class="flex flex-col gap-4 pt-6">
                <a href="incoming-request.html"
                    class="flex justify-between items-center border-b border-dashed border-n40 dark:border-darkN40 pb-4">
                    <div class="flex justify-start items-center gap-4">
                        <div class="rounded-full bg-bgColor2 dark:bg-darkN40 overflow-hidden">
                            <img src="@template/images/people-1.png" alt="" class="w-[60px] h-[60px] object-cover" />
                        </div>
                        <div class="">
                            <p class="font-semibold">Donald Myers</p>
                            <p class="text-n500 dark:text-darkN500 text-xs pt-2.5">
                                08.30 AM
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-end items-end">
                        <p class="font-semibold pb-2">$197.00</p>
                        <p class="text-orange-500 text-xs py-0.5 px-2 bg-orange-200 rounded-md dark:bg-darkN40">
                            Incoming Request
                        </p>
                    </div>
                </a>
                <a href="money-sent-details.html"
                    class="flex justify-between items-center border-b border-dashed border-n40 dark:border-darkN40 pb-4">
                    <div class="flex justify-start items-center gap-4">
                        <div class="rounded-full bg-bgColor2 dark:bg-darkN40 overflow-hidden">
                            <img src="@template/images/people-2.png" alt="" class="w-[60px] h-[60px] object-cover" />
                        </div>
                        <div class="">
                            <p class="font-semibold">Bruce Reed</p>
                            <p class="text-n500 dark:text-darkN500 text-xs pt-2.5">
                                08.30 AM
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-end items-end">
                        <p class="font-semibold pb-2">-$897.00</p>
                        <p class="text-red-500 text-xs py-0.5 px-2 bg-red-200 rounded-md dark:bg-darkN40">
                            Sent
                        </p>
                    </div>
                </a>
                <a href="outgoing-request.html"
                    class="flex justify-between items-center border-b border-dashed border-n40 dark:border-darkN40 pb-4">
                    <div class="flex justify-start items-center gap-4">
                        <div class="rounded-full bg-bgColor2 dark:bg-darkN40 overflow-hidden">
                            <img src="@template/images/people-2.png" alt="" class="w-[60px] h-[60px] object-cover" />
                        </div>
                        <div class="">
                            <p class="font-semibold">Bruce Reed</p>
                            <p class="text-n500 dark:text-darkN500 text-xs pt-2.5">
                                08.30 AM
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-end items-end">
                        <p class="font-semibold pb-2">-$897.00</p>
                        <p class="text-purple-500 text-xs py-0.5 px-2 bg-purple-200 rounded-md dark:bg-darkN40">
                            Outgoing Request
                        </p>
                    </div>
                </a>
                <a href="money-withdraw-details.html" class="flex justify-between items-center">
                    <div class="flex justify-start items-center gap-4">
                        <div
                            class="rounded-full bg-bgColor2 dark:bg-darkN40 overflow-hidden w-[60px] h-[60px] flex justify-center items-center">
                            <i class="ph ph-sign-out text-2xl !leading-none"></i>
                        </div>
                        <div class="">
                            <p class="font-semibold">Essie Sanders</p>
                            <p class="text-n500 dark:text-darkN500 text-xs pt-2.5">
                                10.30 AM
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-end items-end">
                        <p class="font-semibold pb-2">-$750.00</p>
                        <p class="text-yellow-700 text-xs py-0.5 px-2 bg-yellow-200 rounded-md dark:bg-darkN40">
                            Withdraw
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>

</template
