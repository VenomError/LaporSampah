<script setup>
import { Link, Form, usePage } from "@inertiajs/vue3";
import { route } from "@route";
import AuthLayout from "@layout/AuthLayout.vue";

import Input from "@components/Input.vue";
import InputPassword from "@components/InputPassword.vue";
defineOptions({
  layout: AuthLayout,
});
</script>

<template>
  <div class="flex justify-center items-center text-center flex-col">
    <h1 class="text-3xl font-medium dark:text-white">SIGN IN</h1>
    <div
      v-for="(value, key) in $page.props.messages.envelopes"
      :key="key"
      class="tet-sm pt-3 px-4"
    >
      <p>{{ value.message }}</p>
    </div>
  </div>

  <Form
    :action="route('login.process')"
    method="POST"
    class="flex flex-col gap-4 pt-8"
    #default="{ errors, processing }"
  >
    <Input
      name="email"
      :error="errors.email"
      label="Email"
      placeholder="Masukkan Email"
      type="email"
    />
    <InputPassword
      name="password"
      placeholder="Masukkan Password"
      :error="errors.password"
      label="Password"
    />

    <div class="my-3 flex">
      <button
        type="submit"
        :disabled="processing"
        class="flex-1 py-3 bg-g300 text-white text-center rounded-xl"
      >
        <span v-if="!processing">Sign In</span>
        <span v-if="processing">Loading...</span>
      </button>
    </div>
  </Form>

  <div class="pt-4 text-center text-sm text-n500 dark:text-darkN500">
    Don’t have an account?
    <Link :href="route('register')" class="text-g300 font-medium">Sign Up</Link> here
  </div>
</template>
