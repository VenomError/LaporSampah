<script>
import OperatorLayout from "@/Layouts/OperatorLayout.vue";
export default {
    // Using the shorthand...
    layout: [OperatorLayout],
}
</script>
<script setup>
import OperatorLayout from "@/Layouts/OperatorLayout.vue";
import BtInput from "@/Components/BtInput.vue";
import { Head, useForm, Link } from "@inertiajs/vue3";
import {route} from "@route";

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('operator.update-password'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
    });
};
</script>

<template>
  <Head title="Ganti Password" />
    
    <div class="mb-8 flex items-center gap-4">
        <Link :href="route('operator.profile')" class="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 shadow-sm active:scale-90 transition-transform">
            <i class="ti ti-chevron-left text-xl"></i>
        </Link>
        <div>
            <h2 class="text-xl font-black text-slate-900 tracking-tight leading-none uppercase italic">Keamanan <span class="text-blue-600">Akun</span></h2>
            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Perbarui password secara berkala</p>
        </div>
    </div>

    <div class="bg-white p-8 rounded-[2.8rem] border border-slate-100 shadow-sm relative overflow-hidden">
        <div class="relative z-10">
            <div class="flex items-center gap-3 mb-8">
                <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    <i class="ti ti-lock text-2xl"></i>
                </div>
                <h4 class="text-xs font-black text-slate-900 uppercase tracking-widest">Ubah Kata Sandi</h4>
            </div>

            <form @submit.prevent="submit" class="space-y-5">
                <BtInput 
                    label="Password Saat Ini"
                    type="password"
                    v-model="form.current_password"
                    :error="form.errors.current_password"
                    placeholder="Masukkan password lama"
                />

                <div class="h-px bg-slate-50 w-full my-2"></div>

                <BtInput 
                    label="Password Baru"
                    type="password"
                    v-model="form.password"
                    :error="form.errors.password"
                    placeholder="Min. 8 karakter"
                />

                <BtInput 
                    label="Konfirmasi Password Baru"
                    type="password"
                    v-model="form.password_confirmation"
                    placeholder="Ulangi password baru"
                />

                <div class="pt-4">
                    <button 
                        type="submit"
                        :disabled="form.processing"
                        class="w-full py-5 bg-blue-600 text-white rounded-[1.8rem] font-black uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-blue-100 active:scale-95 transition-all flex items-center justify-center gap-3"
                    >
                        <i v-if="form.processing" class="ti ti-loader-2 animate-spin text-lg"></i>
                        <template v-else>
                            <i class="ti ti-shield-lock text-lg"></i>
                            Simpan Perubahan
                        </template>
                    </button>
                </div>
            </form>
        </div>

        <i class="ti ti-key absolute -right-10 -bottom-10 text-[12rem] opacity-[0.02] -rotate-12"></i>
    </div>

    <div class="mt-8 px-6 py-5 bg-amber-50 rounded-[2rem] border border-amber-100 flex items-start gap-4">
        <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm">
            <i class="ti ti-info-circle text-lg"></i>
        </div>
        <div>
            <p class="text-[9px] font-black text-amber-700 uppercase tracking-widest mb-1">Tips Keamanan</p>
            <p class="text-[10px] font-bold text-amber-600/80 leading-relaxed italic">
                Gunakan kombinasi huruf, angka, dan simbol agar password Anda tidak mudah ditebak oleh orang lain.
            </p>
        </div>
    </div>

</template>