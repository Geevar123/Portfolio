<template>
    <aside class="sidebar">
        <ul class="sidebar__menu">
            <li class="sidebar__menu-list" @click="goToHome">_hello</li>
            <li class="sidebar__menu-list" @click="goToAbout">_about-me</li>
            <li class="sidebar__menu-list" @click="goToProjects">_projects</li>
            <li class="sidebar__menu-list" @click="goToContactMe">_contact-me</li>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/StateStore';

const stateStore = useStateStore()

const goToAbout = () => {
    stateStore.isSidebarOpen = false
    stateStore.isAboutMeOpen = true
}
const goToProjects = () => {
    stateStore.isSidebarOpen = false
    stateStore.isProjectPageOpen = true
}
const goToHome = () => {
    stateStore.isSidebarOpen = false
    stateStore.ishelloOpen = true
}
const goToContactMe = () => {
    stateStore.isSidebarOpen = false
    stateStore.isContactMeOpen = true
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

        &--header {
            justify-content: flex-end;
        }
    }
}
</style>