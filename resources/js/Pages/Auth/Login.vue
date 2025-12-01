<script setup>
import { Link, Form } from '@inertiajs/vue3';
import { route } from '@route';
import AuthLayout from '@layout/AuthLayout.vue';

import Input from '@components/Input.vue';
import InputPassword from '@components/InputPassword.vue';
defineOptions({
    layout: AuthLayout,
});

</script>

<template>
    <div class="flex justify-center items-center text-center flex-col">
        <h1 class="text-3xl font-medium dark:text-white">SIGN IN</h1>

        <p v-if="$page.props.flash.message" class="tet-sm text-success pt-3 px-4 ">
            {{ $page.props.flash.message }}
        </p>
        <p v-if="$page.props.flash.error" class="tet-sm text-danger pt-3 px-4 ">
            {{ $page.props.flash.error }}
        </p>
        <p v-if="$page.props.flash.verify" class="tet-sm  pt-3 px-4 ">
        Email diverifikasi <br>
        <Link :href="route('verification.send')" class=" font-bold text-g300 " style="text-decoration: underline;">Resend Email Verification</Link>
        </p>
    </div>

    <Form :action="route('login.process')" method="POST" class="flex flex-col gap-4 pt-8" #default="{
        errors,
        processing,
    }">
        <Input name="email" :error="errors.email" label="Email" placeholder="Masukkan Email" type="email" />
        <InputPassword name="password" placeholder="Masukkan Password" :error="errors.password" label="Password" />

        <div class="my-3 flex">
            <button type="submit" :disabled="processing" class="flex-1 py-3 bg-g300 text-white text-center rounded-xl">
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
