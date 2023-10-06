<script setup>
import {provide} from "vue";
import store from "@store/store.js";
import LoaderComponent from "./component/features/LoaderComponent.vue";
import HeaderComponent from "@component/features/HeaderComponent.vue";
import FooterComponent from "@component/features/FooterComponent.vue";

provide('store', store);

</script>

<template>
    <LoaderComponent />
    <HeaderComponent />
    <main class="main">
        <router-view/>
    </main>
    <FooterComponent/>
</template>

<style scoped>

</style>
