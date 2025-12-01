<script setup>
import { Form, Link, usePage } from '@inertiajs/vue3';
import { route } from '@route';
import AuthLayout from '@layout/AuthLayout.vue';

defineOptions({
    layout: AuthLayout
});

const user = usePage().props.auth.user;

</script>
<template>
    <div class="row">
        <div class="col-12 ">
            <div class="container px-6 pb-8 pt-12 h-dvh text-n900 dark:bg-n0 flex flex-col">
                <Form :action="route('verification.send')" method="post"
                    class="flex flex-col gap-4 pt-8 relative flex-1" #default="{
                        errors,
                        processing,
                    }">
                    <div class="flex justify-center items-center text-center flex-col">
                        <h1 class="text-2xl font-medium dark:text-white">Verifikasi Email</h1>
                        <p class="tet-sm text-n500 dark:text-darkN500 pt-3 px-4">
                            verifikasi email telah terkirim ke
                        <h2 class="font-medium dark:text-white">{{ user.email }}</h2>
                        silahkan cek inbox anda !
                        </p>
                        <p v-if="$page.props.flash.message" class="tet-sm text-success pt-3 px-4 ">
                            {{ $page.props.flash.message }}
                        </p>
                    </div>
                    <div class=" flex " style="margin-top: 50px;">
                        <button type="submit" class="flex-1 py-3 bg-g300 text-white text-center rounded-xl"
                            :disabled="processing">
                            <span v-if="!processing">Resend Email</span>
                            <span v-if="processing">Resending...</span>
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>
