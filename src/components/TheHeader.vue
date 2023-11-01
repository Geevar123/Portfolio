<template>
    <header class="header">
        <h1 class="header__title">geevar-jacob</h1>
        <button class="header__sidebar-button" :class="{ 'header__sidebar-button--close': stateStore.isSidebarOpen }"
            @click="toggleView"></button>
    </header>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/StateStore';
const stateStore = useStateStore()
const toggleView = () => {
    if (stateStore.ishelloOpen) {
        stateStore.ishelloOpen = false
        stateStore.isSidebarOpen = true
    }
    else if (stateStore.isSidebarOpen) {
        stateStore.isSidebarOpen = false
        stateStore.ishelloOpen = true
    }
    else if (stateStore.isAboutMeOpen) {
        stateStore.isAboutMeOpen = false
        stateStore.isSidebarOpen = true
    }
     else if (stateStore.isProjectPageOpen) {
        stateStore.isProjectPageOpen = false
        stateStore.isSidebarOpen = true
    }
    else if (stateStore.isContactMeOpen) {
        stateStore.isContactMeOpen = false
        stateStore.isSidebarOpen = true
    }
}
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $blueHex-03;
    padding-inline: 18px;
    z-index: 1;

    &__title {
        color: $blueHex-05;
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
    }

    &__sidebar-button {
        width: 26px;
        height: 26px;
        background: url('@/assets/icons/breadcrumbs.svg') no-repeat center/18px;
        z-index: 1;
        position: relative;

        &::after {
            display: none;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 26px;
            height: 26px;
            background: url('@/assets/icons/cross-btn.svg') no-repeat center / 18px;
        }

        &--close {
            background: none;

            &::after {
                display: block;
            }
        }
    }
}
</style>