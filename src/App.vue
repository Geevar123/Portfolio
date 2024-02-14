<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import MainView from '@/views/MainView.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import { useStateStore } from '@/stores/StateStore'
const stateStore = useStateStore()
</script>

<template>
  <the-header />
  <the-sidebar v-if="stateStore.isSidebarOpen" />
  <main-view />
  <the-footer />
</template>
<style lang="scss">
@import '@/assets/styles/main.scss';
</style>
