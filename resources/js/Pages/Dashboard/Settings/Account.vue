<script setup>
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import { Head, useForm, usePage } from "@inertiajs/vue3";
import BtInput from "@/Components/BtInput.vue";
import { ref } from "vue";
import {route} from "@route";

const user = usePage().props.auth.user;

// Form Profil
const formProfile = useForm({
  email: user.email,
});

// Form Password
const formPassword = useForm({
  current_password: '',
  password: '',
  password_confirmation: '',
});

const updateProfile = () => {
  formProfile.post(route('dashboard.settings.updateProfile'), {
    preserveScroll: true,
  });
};

const updatePassword = () => {
  formPassword.post(route('dashboard.settings.updatePassword'), {
    preserveScroll: true,
    onSuccess: () => formPassword.reset(),
  });
};
</script>

<template>

  <Head title="Pengaturan Akun" />

  <div class="mb-10">
    <h2 class="text-3xl font-black text-slate-900 tracking-tighter uppercase">
      My <span class="text-green-600">Settings</span>
    </h2>
    <p class="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest italic">
      Kelola profil pengelola dan keamanan akun Anda
    </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

    <div class="lg:col-span-1 space-y-6">
      <div class="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-center relative overflow-hidden">
        <div class="relative z-10">
          <div
            class="w-24 h-24 bg-green-50 rounded-[2rem] flex items-center justify-center text-green-600 mb-4 mx-auto border-4 border-white shadow-inner">
            <i class="ti ti-shield-check text-5xl"></i>
          </div>
          <h3 class="text-xl font-black text-slate-900 tracking-tight leading-tight">Administrator</h3>
          <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Akses Level: Super Admin</p>
        </div>

        <div class="mt-8 pt-8 border-t border-slate-50 text-left">
          <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Status Akun</p>
          <div class="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-xl">
            <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span class="text-[10px] font-black uppercase">Aktif & Terverifikasi</span>
          </div>
        </div>
        <i class="ti ti-settings absolute -bottom-10 -right-10 text-9xl opacity-[0.03]"></i>
      </div>
    </div>

    <div class="lg:col-span-2 space-y-8">

      <div class="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm relative">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1.5 h-6 bg-green-500 rounded-full"></div>
          <h4 class="text-lg font-black text-slate-900 tracking-tight uppercase">Informasi Dasar</h4>
        </div>

        <form @submit.prevent="updateProfile" class="space-y-6">
          <BtInput label="Alamat Email Utama" type="email" v-model="formProfile.email" :error="formProfile.errors.email"
            placeholder="admin@gonsa.id" />

          <div class="flex justify-end pt-4">
            <button
              class="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-green-600 transition-all active:scale-95"
              type="submit" :disabled="formProfile.processing">
              {{ formProfile.processing ? 'Menyimpan...' : 'Perbarui Profil' }}
            </button>
          </div>
        </form>
      </div>

      <div class="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-1.5 h-6 bg-red-500 rounded-full"></div>
          <h4 class="text-lg font-black text-slate-900 tracking-tight uppercase">Keamanan Password</h4>
        </div>

        <form @submit.prevent="updatePassword" class="space-y-6">
          <BtInput label="Password Saat Ini" type="password" v-model="formPassword.current_password"
            :error="formPassword.errors.current_password" placeholder="••••••••" />

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BtInput label="Password Baru" type="password" v-model="formPassword.password"
              :error="formPassword.errors.password" placeholder="Min. 8 Karakter" />
            <BtInput label="Konfirmasi Password Baru" type="password" v-model="formPassword.password_confirmation"
              placeholder="Ulangi Password" />
          </div>

          <div class="flex justify-end pt-4">
            <button
              class="px-10 py-4 bg-red-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-red-100 hover:bg-red-600 transition-all active:scale-95"
              type="submit" :disabled="formPassword.processing">
              <i class="ti ti-lock-open mr-2"></i>
              Ganti Password
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>

</template>