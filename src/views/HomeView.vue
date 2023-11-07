<script setup lang="ts">
import { useStateStore } from '@/stores/StateStore';
import { RouterView } from 'vue-router'

import { onMounted } from 'vue';
const stateStore = useStateStore()

onMounted(() => {
  stateStore.ishelloOpen = true
})
</script>

<template>
  <main class="home-view"
    :class="{ 'home-view--inner-page': !stateStore.ishelloOpen, 'home-view--contact-page': stateStore.isSuccess }">
    <section :class="{ 'home-view__content-wrapper': stateStore.isContactMeOpen }">
      <RouterView />
    </section>
  </main>
</template>
