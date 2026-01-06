<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import ButtonSubmit from "@components/ButtonSubmit.vue";
import FlashMessage from "@components/FlashMessage.vue";
import InputPassword from "@components/InputPassword.vue";
import { useForm } from "@inertiajs/vue3";
import { route } from "@route";

const form = useForm({
  password: '',          // Password Lama
  new_password: '',      // Password Baru
  new_password_confirmation: '', // Biasanya dibutuhkan konfirmasi
});

const submit = () => {
  form.post(route('password.update'), {
    preserveScroll: true,
    onSuccess: () => form.reset(),
  });
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 pb-20">
    <HeaderTitle href="profile" title="Ganti Password" />
    
    <div class="px-6 pt-6">
      <FlashMessage :message="$page.props.flash?.message" />

      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mt-4">
        <div class="mb-6">
          <h3 class="text-lg font-black text-slate-900 tracking-tight">Keamanan Akun</h3>
          <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
            Gunakan kombinasi password yang kuat dan sulit ditebak.
          </p>
        </div>

        <form @submit.prevent="submit" class="flex flex-col gap-5">
          <InputPassword
            v-model="form.password"
            name="password"
            :error="form.errors.password"
            label="Password Saat Ini"
            placeholder="••••••••"
          />

          <InputPassword
            v-model="form.new_password"
            name="new_password"
            :error="form.errors.new_password"
            label="Password Baru"
            placeholder="••••••••"
          />

          <InputPassword
            v-model="form.new_password_confirmation"
            name="new_password_confirmation"
            label="Konfirmasi Password Baru"
            placeholder="••••••••"
          />

          <div class="pt-4">
            <ButtonSubmit 
              :loading="form.processing" 
              class="w-full py-4 bg-green-600 text-white font-black rounded-xl shadow-lg shadow-green-100 active:scale-[0.98] transition-all"
            > 
              UPDATE PASSWORD 
            </ButtonSubmit>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>