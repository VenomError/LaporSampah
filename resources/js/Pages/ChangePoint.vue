<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import Modal from '@components/Modal.vue';
import { InfiniteScroll, Link, router, useForm } from "@inertiajs/vue3";
import { route } from "@route";
import { ref, watch } from "vue";
const props = defineProps(["incentives", "filters", "auth"]);
const search = ref(props.filters?.search ?? "");
const memberPoint = props.auth.user?.member?.point ?? 0;

watch(search, (value) => {
    router.get(
        route("change.point"),
        { search: value },
        {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        }
    );
});
function canExchange(incentive) {
    return memberPoint >= incentive.point_required;
}
const form = useForm({
    incentive_id: null
});
const modal = ref(null);
function openModal(incentive_id) {
    form.incentive_id = incentive_id;
    modal.value.open();
}

function confirmChangePoin() {
    form.post(route('change.incentive'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            modal.value.close();
        },
        onError: () => {
            console.log(form.errors);
        },
    });
}
</script>
<template>
    <HeaderTitle href="home" title="Tukar Point" />
    <div class="text-center flex justify-between items-center flex-col py-8">
        <p class="text-[52px] font-bold flex justify-start -mt-3">
            {{ Number(auth.user?.member?.point ?? 0).toLocaleString() ?? 0 }}
        </p>
        <p class="text-n500 dark:text-darkN500">Point Anda</p>
    </div>
    <div class="pt-8 flex justify-start items-center gap-2 px-6">
        <div
            class="flex justify-between items-center flex-1 border border-n40 dark:border-darkN40 dark:bg-darkN20 rounded-xl p-3 gap-2">
            <div class="">
                <i class="ph ph-magnifying-glass text-n70"></i>
            </div>
            <input v-model="search" type="text" placeholder="Search here..."
                class="placeholder:text-n90 text-xs bg-transparent outline-none flex-1" />
        </div>
    </div>
    <div class="px-6 pt-8">
        <div class="flex justify-between items-center">
            <p class="text-xl font-semibold">List Incentive</p>
        </div>
        <InfiniteScroll data="incentives">
            <div class="flex flex-col gap-4 pt-6" v-for="incentive in incentives.data" :key="incentive.id">
                <button @click="openModal(incentive.id)"
                    class="flex justify-between items-center border-b border-dashed border-n40 dark:border-darkN40 pb-4"
                    :class="{
                        'opacity-40 cursor-not-allowed': !canExchange(incentive)
                    }">
                    <div class="flex justify-start items-center gap-4">
                        <div class="rounded-full bg-bgColor2 dark:bg-darkN40 overflow-hidden">
                            <img :src="incentive.image_url" alt="" class="w-[60px] h-[60px] object-cover" />
                        </div>
                        <div class="">
                            <p class="font-semibold">{{ incentive.name }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-end items-end">
                        <p class="font-semibold pb-2" :class="{
                            'text-danger': memberPoint < incentive.point_required,
                            'text-success': memberPoint >= incentive.point_required,
                        }">
                            {{ Number(incentive.point_required).toLocaleString() }} point
                        </p>
                    </div>
                </button>
            </div>
        </InfiniteScroll>
    </div>

    <Modal ref="modal" title="Tukar Point?" subtitle="Apakah kamu yakin ingin melanjutkan?"
        @confirm="confirmChangePoin()" />
</template>
