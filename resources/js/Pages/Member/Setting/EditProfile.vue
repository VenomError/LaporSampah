<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import ButtonSubmit from "@components/ButtonSubmit.vue";
import FlashMessage from "@components/FlashMessage.vue";
import Input from "@components/Input.vue";
import { useForm, usePage } from "@inertiajs/vue3";
import { route } from "@route";

const user = usePage().props.auth.user;

// Menggunakan useForm untuk handling data yang lebih reaktif
const form = useForm({
  name: user.member.name,
  phone: user.member.phone,
});

const submit = () => {
  form.patch(route('profile.update'), {
    preserveScroll: true,
    onSuccess: () => {
      // Logika tambahan jika sukses (opsional)
    },
  });
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 pb-20">
    <HeaderTitle href="profile" title="Informasi Pribadi" />
    
    <div class="px-6 pt-6">
      <FlashMessage :message="$page.props.flash?.message" />
      
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mt-4">
        <div class="mb-6">
          <h3 class="text-lg font-black text-slate-900 tracking-tight">Data Akun</h3>
          <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
            Pastikan nomor telepon aktif untuk koordinasi jemput sampah.
          </p>
        </div>

        <form @submit.prevent="submit" class="flex flex-col gap-5">
          <Input
            v-model="form.name"
            name="name"
            :error="form.errors.name"
            label="Nama Lengkap"
            placeholder="Masukkan Nama Anda"
            type="text"
            class="focus:ring-green-500"
          />

          <Input
            v-model="form.phone"
            name="phone"
            :error="form.errors.phone"
            label="Nomor WhatsApp"
            placeholder="Contoh: 08123456789"
            type="text"
          />

          <div class="pt-4">
            <ButtonSubmit 
              :loading="form.processing" 
              class="w-full py-4 bg-green-600 text-white font-black rounded-xl shadow-lg shadow-green-100 active:scale-[0.98] transition-all"
            > 
              SIMPAN PERUBAHAN 
            </ButtonSubmit>
          </div>
        </form>
      </div>

      <div class="mt-8 px-2">
          <div class="flex items-start gap-3 opacity-60">
              <div class="mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-slate-400">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
                  </svg>
              </div>
              <p class="text-[11px] font-medium text-slate-500 leading-relaxed">
                  Email tidak dapat diubah. Hubungi admin jika ingin melakukan perubahan alamat email terdaftar.
              </p>
          </div>
      </div>
    </div>
  </div>
</template>