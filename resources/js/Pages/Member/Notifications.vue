<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";

const props = defineProps(["notifications"]);

// Helper untuk warna background & teks berdasarkan status
const getStatusTheme = (color) => {
    const themes = {
        success: 'bg-green-50 text-green-600 border-green-100',
        danger: 'bg-red-50 text-red-600 border-red-100',
        warning: 'bg-yellow-50 text-yellow-600 border-yellow-100',
    };
    return themes[color] || 'bg-blue-50 text-blue-600 border-blue-100';
};
</script>

<template>
    <div class="min-h-screen bg-slate-50 pb-20">
        <HeaderTitle href="home" title="Notifikasi" />

        <div class="bg-white rounded-t-[2.5rem] mt-4 min-h-screen shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
            <div class="px-6 pt-10 flex flex-col gap-8">
                
                <div v-for="(list, date) in notifications" :key="date" class="flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap italic">
                            {{ date }}
                        </p>
                        <div class="h-[1px] w-full bg-slate-100"></div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <div 
                            v-for="notification in list" 
                            :key="notification.id"
                            class="flex justify-between items-start p-4 bg-white border border-slate-100 rounded-2xl shadow-sm active:scale-[0.98] transition-all"
                        >
                            <div class="flex justify-start items-start gap-4">
                                <div 
                                    class="flex-shrink-0 w-12 h-12 rounded-xl border flex justify-center items-center"
                                    :class="getStatusTheme(notification.data?.color)"
                                >
                                    <svg v-if="notification.data?.color === 'success'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    <svg v-else-if="notification.data?.color === 'danger'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    <svg v-else-if="notification.data?.color === 'warning'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                    </svg>

                                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31a8.967 8.967 0 0 1-2.312-6.022c0-4.747-3.733-8.499-8.125-8.499s-8.125 3.753-8.125 8.5c0 2.455-.873 4.708-2.313 6.022c1.833.566 3.708.995 5.61 1.284m11.305 0c-.452 2.075-2.288 3.564-4.43 3.564c-2.143 0-3.978-1.49-4.43-3.563m11.305 0a23.951 23.951 0 0 1-11.305 0" />
                                    </svg>
                                </div>

                                <div class="flex flex-col gap-1">
                                    <p class="font-bold text-slate-900 leading-tight">
                                        {{ notification.data?.title }}
                                    </p>
                                    <p class="text-xs font-medium text-slate-500 leading-relaxed">
                                        {{ notification.data?.message }}
                                    </p>
                                </div>
                            </div>

                            <p class="text-[10px] font-bold text-slate-300 whitespace-nowrap mt-1">
                                {{
                                    new Date(notification.created_at).toLocaleString("id-ID", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })
                                }}
                            </p>
                        </div>
                    </div>
                </div>

                <div v-if="Object.keys(notifications).length === 0" class="py-20 flex flex-col items-center opacity-30">
                    <div class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </div>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Tidak ada kabar terbaru</p>
                </div>
            </div>
        </div>
    </div>
</template>