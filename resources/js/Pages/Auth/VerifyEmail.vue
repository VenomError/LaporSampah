<script setup>
import { Form, Link, usePage } from '@inertiajs/vue3';
import { route } from '@route';
import AuthLayout from '@layout/AuthLayout.vue';

defineOptions({
    layout: AuthLayout
});

const user = usePage().props.auth.user;
</script>

<template>
    <div class="flex flex-col items-center text-center">
        
        <div class="relative mb-8">
            <div class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div class="absolute -top-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span class="flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
            </div>
        </div>

        <h1 class="text-2xl font-black text-slate-900 tracking-tight">Verifikasi Email</h1>
        
        <p class="text-sm text-slate-500 mt-4 leading-relaxed px-2">
            Link verifikasi baru saja kami terbangkan ke:
        </p>
        
        <div class="mt-3 px-4 py-2 bg-slate-100 rounded-xl inline-block border border-slate-200">
            <span class="font-bold text-slate-800">{{ user.email }}</span>
        </div>

        <p class="text-xs text-slate-400 mt-6 font-medium italic">
            Belum menerima email? Silakan cek folder <span class="text-slate-600 font-bold">Spam</span> atau klik tombol di bawah untuk kirim ulang.
        </p>

        <div v-if="$page.props.messages.envelopes.length > 0" class="w-full mt-6">
            <div
                v-for="(value, key) in $page.props.messages.envelopes"
                :key="key"
                class="bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold py-3 px-4 rounded-xl flex items-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0116 0z" />
                </svg>
                {{ value.message }}
            </div>
        </div>
    </div>

    <Form 
        :action="route('verification.send')" 
        method="post"
        class="mt-10" 
        #default="{ processing }"
    >
        <button 
            type="submit" 
            :disabled="processing"
            class="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-lg shadow-green-100 transition-all active:scale-[0.97] disabled:opacity-70 flex justify-center items-center gap-3"
        >
            <span v-if="!processing">Kirim Ulang Email</span>
            <div v-if="processing" class="flex items-center gap-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Mengirim...</span>
            </div>
        </button>
    </Form>

    <div class="mt-8 text-center">
        <Link :href="route('logout')" method="post" as="button" class="text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">
            Keluar & Gunakan Akun Lain
        </Link>
    </div>
</template>