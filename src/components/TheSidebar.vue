<template>
  <aside class="sidebar" data-aos="zoom-in-left">
    <ul class="sidebar__menu">
      <li class="sidebar__menu-list" @click="goToHome">_hello</li>
      <li class="sidebar__menu-list" @click="goToAbout">_about-me</li>
      <li class="sidebar__menu-list" @click="goToProjects">_projects</li>
      <li class="sidebar__menu-list" @click="goToContactMe">_contact-me</li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStateStore } from '@/stores/StateStore'

const router = useRouter()
const stateStore = useStateStore()

const goToHome = () => {
  router.push('/')
  stateStore.isSidebarOpen = false
}
const goToAbout = () => {
  router.push('/about')
  stateStore.isSidebarOpen = false
}
const goToProjects = () => {
  router.push('/projects')
  stateStore.isSidebarOpen = false
}
const goToContactMe = () => {
  router.push('/contact')
  stateStore.isSidebarOpen = false
}
</script>

<style scoped lang="scss">
.sidebar {
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: relative;
  top: 0;

  &__menu-list {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid $blueHex-03;
    padding-inline: 18px;
    color: $whiteHex;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    cursor: pointer;

    &--header {
      justify-content: flex-end;
    }
  }
}
</style>
