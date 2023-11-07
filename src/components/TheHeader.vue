<template>
    <header class="header">
        <h1 class="header__title">geevar-jacob</h1>
        <button class="header__sidebar-button" :class="{ 'header__sidebar-button--close': stateStore.isSidebarOpen }"
            @click="toggleView"></button>
    </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStateStore } from '@/stores/StateStore';
const stateStore = useStateStore()
const router = useRouter()

const toggleView = () => {
    router.push('/sidebar')
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
        cursor: pointer;

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