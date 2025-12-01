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
  <div class="flex justify-center items-center text-center flex-col">
    <h1 class="text-2xl font-medium dark:text-white">Create an Account</h1>
    <div
      v-for="(value, key) in $page.props.messages.envelopes"
      :key="key"
      class="tet-sm pt-3 px-4"
    >
      <p>{{ value.message }}</p>
    </div>
  </div>

  <Form
    :action="route('register.process')"
    method="POST"
    class="flex flex-col gap-4 pt-8"
    #default="{ errors, processing }"
  >
    <Input
      name="name"
      :error="errors.name"
      label="Name"
      placeholder="Masukkan Nama"
      type="text"
    />
    <Input
      name="phone"
      :error="errors.phone"
      label="Phone"
      placeholder="Masukkan Phone"
      type="tel"
    />
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
        <span v-if="!processing">Sign Up</span>
        <span v-if="processing">Loading...</span>
      </button>
    </div>
  </Form>
  <div class="pt-4 text-center text-sm text-n500 dark:text-darkN500">
    Already have an account?
    <Link :href="route('login')" class="text-g300 font-medium">Sign In</Link> here
  </div>
</template>
