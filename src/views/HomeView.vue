<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import LandingPage from '@/components/LandingPage.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheSidebar from '@/components/TheSidebar.vue';
import AboutMe from '@/components/AboutMe.vue';
import ProjectsPage from '@/components/ProjectsPage.vue';
import { useStateStore } from '@/stores/StateStore';
import { onMounted } from 'vue';
const stateStore = useStateStore()

onMounted(() => {
  stateStore.ishelloOpen = true
})
</script>

<template>
  <main class="home-view" :class="{ 'home-view--inner-page': !stateStore.ishelloOpen }">
    <the-header />
    <section class="home-view__content-wrapper">
      <landing-page v-if="stateStore.ishelloOpen" />
      <the-sidebar v-if="stateStore.isSidebarOpen" />
      <about-me v-if="stateStore.isAboutMeOpen" />
      <projects-page v-if="stateStore.isProjectPageOpen" />
    </section>
    <the-footer v-show="!stateStore.ishelloOpen" />
  </main>
</template>
<style lang="scss" scoped>
.home-view {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: $blueHex-01;
  position: relative;

  &::before {
    @include background-gradient('@/assets/icons/green-gradient.svg');
  }

  &::after {
    @include background-gradient('@/assets/icons/blue-gradient.svg');
  }

  &--inner-page {

    &::after,
    &::before {
      display: none;
    }
  }
}
</style>
