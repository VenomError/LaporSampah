<script setup>
import HeaderTitle from "@components/HeaderTitle.vue";
import ButtonSubmit from "@components/ButtonSubmit.vue";
import FlashMessage from "@components/FlashMessage.vue";
import Input from "@components/Input.vue";
import { Form, usePage } from "@inertiajs/vue3";
import { route } from "@route";

const user = usePage().props.auth.user;
</script>
<template>
  <HeaderTitle href="profile" title="Personal Info" />
  <FlashMessage :message="$page.props.flash?.message" />
  <Form
    :action="route('profile.update')"
    method="POST"
    class="flex flex-col gap-4 pt-8 px-6"
    #default="{ processing, errors }"
  >
    <Input
      name="name"
      :error="errors.name"
      label="Name"
      placeholder="Masukkan Nama"
      type="text"
      :value="user.member.name"
    />
    <Input
      name="phone"
      :error="errors.phone"
      label="Phone"
      placeholder="Masukkan Nomor Telephon"
      type="text"
      :value="user.member.phone"
    />
    <div class="my-3 flex">
      <ButtonSubmit :loading="processing" text="Saving..."> Save </ButtonSubmit>
    </div>
  </Form>
</template>
