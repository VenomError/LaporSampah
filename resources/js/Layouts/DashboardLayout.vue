<script setup>
import Sidenav from "./Dashboard/Sidenav.vue";
import Header from "./Dashboard/Header.vue";
</script>

<template>
    <div class="wrapper">
        <Sidenav />

        <Header />

        <div class="page-content">
            <div class="page-container">
                <slot />
            </div>
        </div>
    </div>
</template>
