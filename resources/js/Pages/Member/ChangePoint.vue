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
        { preserveState: true, preserveScroll: true, replace: true }
    );
});

function canExchange(incentive) {
    return memberPoint >= incentive.point_required;
}

const form = useForm({ incentive_id: null });
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
    });
}
</script>

<template>
    <div class="min-h-screen bg-slate-50 pb-20">
        <HeaderTitle href="home" title="Tukar Poin" />

        <div class="px-6 py-8">
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
                <p class="text-[48px] font-black text-slate-900 leading-none">
                    {{ Number(memberPoint).toLocaleString() }}
                </p>
                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Poin Anda Saat Ini</p>
            </div>
        </div>

        <div class="px-6 mb-6">
            <div class="flex items-center bg-white border border-slate-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-500/20 focus-within:border-green-500 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                    v-model="search" 
                    type="text" 
                    placeholder="Cari hadiah..."
                    class="ml-3 bg-transparent outline-none flex-1 text-sm font-semibold text-slate-800 placeholder:text-slate-400" 
                />
            </div>
        </div>

        <div class="px-6">
            <div class="flex justify-between items-center mb-4">
                <p class="text-lg font-bold text-slate-900">Katalog Hadiah</p>
            </div>

            <InfiniteScroll data="incentives">
                <div class="flex flex-col gap-3">
                    <button 
                        v-for="incentive in incentives.data" 
                        :key="incentive.id"
                        @click="canExchange(incentive) ? openModal(incentive.id) : null"
                        class="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl transition-all text-left"
                        :class="[
                            canExchange(incentive)
                                ? 'active:scale-[0.98] shadow-sm'
                                : 'opacity-50 grayscale cursor-not-allowed'
                        ]"
                    >
                        <div class="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100">
                            <img :src="incentive.image_url" alt="" class="w-full h-full object-cover" />
                        </div>

                        <div class="flex-1 min-w-0">
                            <p class="font-bold text-slate-900 truncate">{{ incentive.name }}</p>
                            <p class="text-sm font-black mt-1" :class="canExchange(incentive) ? 'text-green-600' : 'text-red-500'">
                                {{ Number(incentive.point_required).toLocaleString() }} Point
                            </p>
                        </div>

                        <div v-if="canExchange(incentive)" class="text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>
                </div>
            </InfiniteScroll>
        </div>

        <Modal ref="modal" title="Tukar Point?" subtitle="Apakah kamu yakin ingin melanjutkan?" @confirm="confirmChangePoin()" />
    </div>
</template>