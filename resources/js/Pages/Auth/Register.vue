<script setup>
import { Form, Link } from "@inertiajs/vue3";
import { route } from "@route";
import AuthLayout from "@layout/AuthLayout.vue";
import Input from "@components/Input.vue";
import InputPassword from "@components/InputPassword.vue";

defineOptions({
  layout: AuthLayout,
});
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="text-2xl font-black text-slate-900 tracking-tight">
      Buat Akun Baru
    </h1>
    <p class="text-sm text-slate-500 mt-2 font-medium">
      Mari bergabung untuk lingkungan yang lebih bersih dan sehat.
    </p>

    <div v-if="$page.props.messages.envelopes.length > 0" class="w-full mt-4">
      <div
        v-for="(value, key) in $page.props.messages.envelopes"
        :key="key"
        class="bg-red-50 border border-red-100 text-red-600 text-[11px] font-bold py-3 px-4 rounded-xl flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        {{ value.message }}
      </div>
    </div>
  </div>

  <Form
    :action="route('register.process')"
    method="POST"
    class="flex flex-col gap-1 pt-8"
    #default="{ errors, processing }"
  >
    <Input
      name="name"
      :error="errors.name"
      label="Nama Lengkap"
      placeholder="Contoh: Budi Santoso"
      type="text"
    />
    
    <Input
      name="phone"
      :error="errors.phone"
      label="Nomor WhatsApp"
      placeholder="0812xxxx"
      type="tel"
    />
    
    <Input
      name="email"
      :error="errors.email"
      label="Alamat Email"
      placeholder="nama@email.com"
      type="email"
    />
    
    <InputPassword
      name="password"
      placeholder="Buat Password Kuat"
      :error="errors.password"
      label="Password"
    />

    <div class="pt-6">
      <button
        type="submit"
        :disabled="processing"
        class="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-lg shadow-green-100 transition-all active:scale-[0.97] disabled:opacity-70 flex justify-center items-center gap-3"
      >
        <span v-if="!processing">Daftar Sekarang</span>
        <div v-if="processing" class="flex items-center gap-2">
           <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
           </svg>
           <span>Sedang Mendaftar...</span>
        </div>
      </button>
    </div>
  </Form>

  <div class="pt-8 text-center text-sm text-slate-500">
    Sudah punya akun?
    <Link :href="route('login')" class="text-green-600 font-bold hover:underline underline-offset-4">Masuk di sini</Link>
  </div>
</template>