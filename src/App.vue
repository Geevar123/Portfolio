<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import HomeView from './views/HomeView.vue';

</script>

<template>
    <the-header />
    <home-view />
    <the-footer />
</template>
<style lang="scss">
@import '@/assets/styles/main.scss';
</style>