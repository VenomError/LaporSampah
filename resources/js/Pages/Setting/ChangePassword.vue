<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import ButtonSubmit from "@components/ButtonSubmit.vue";
import FlashMessage from "@components/FlashMessage.vue";
import InputPassword from "@components/InputPassword.vue";
import { Form, usePage } from "@inertiajs/vue3";
import { route } from "@route";
</script>
<template>
  <HeaderTitle href="profile" title="Ganti Password" />
  <FlashMessage :message="$page.props.flash?.message" />
  <Form
    :action="route('password.update')"
    method="POST"
    class="flex flex-col gap-4 pt-8 px-6"
    #default="{ processing, errors }"
  >
    <InputPassword
      name="password"
      :error="errors.password"
      label="Password"
      placeholder="Masukkan Password"
    />
    <InputPassword
      name="new_password"
      :error="errors.new_password"
      label="New Password"
      placeholder="Masukkan  Password Baru"
    />
    <div class="my-3 flex">
      <ButtonSubmit :loading="processing" text="Saving..."> Save </ButtonSubmit>
    </div>
  </Form>
</template>
