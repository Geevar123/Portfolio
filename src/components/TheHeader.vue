<template>
  <header class="header">
    <h1 class="header__title">geevar-jacob</h1>
    <ul class="header__menu">
      <li class="header__menu-list" @click="setRoute('/')">_hello</li>
      <li class="header__menu-list" @click="setRoute('/about')">_about-me</li>
      <li class="header__menu-list" @click="setRoute('/projects')">_projects</li>
      <li class="header__menu-list header__menu-list--right" @click="setRoute('/contacts')">
        _contact-me
      </li>
    </ul>
    <button class="header__sidebar-button" :class="{ 'header__sidebar-button--close': stateStore.isSidebarOpen }"
      @click="toggleView"></button>
  </header>
</template>

<script setup lang="ts">
import { useStateStore } from "@/stores/StateStore";
import { useRouter } from "vue-router";

const stateStore = useStateStore();
const router = useRouter();

const setRoute = (value: string) => {
  router.push(value)
};
const toggleView = () => {
  stateStore.isSidebarOpen = !stateStore.isSidebarOpen;
};

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
    height: 60px;
    width: 100%;
    max-width: 305px;
    display: flex;
    align-items: center;
    border-right: 1px solid $blueHex-03;

    @media #{$break-tab-sm-max} {
      border: none;
    }
  }

  &__menu {
    display: flex;
    flex-direction: row;
    flex-grow: 1;

    @media #{$break-tab-sm-max} {
      display: none;
    }
  }

  &__menu-list {
    width: max-content;
    height: 60px;
    display: flex;
    align-items: center;
    border-right: 1px solid $blueHex-03;
    padding-inline: 18px;
    color: $blueHex-05;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    cursor: pointer;

    &:last-child {
      margin-left: auto;
      border-left: 1px solid $blueHex-03;
      border-right: none;
    }
  }

  &__sidebar-button {
    width: 26px;
    height: 26px;
    background: url("@/assets/icons/breadcrumbs.svg") no-repeat center/18px;
    z-index: 1;
    position: relative;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.37, 0.74, 0.15, 1) 0.2s;
    transform: rotate(180deg);

    &::after {
      display: none;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 26px;
      height: 26px;
      background: url("@/assets/icons/cross-btn.svg") no-repeat center / 18px;
      transition: all 0.3s cubic-bezier(0.37, 0.74, 0.15, 1) 0.2s;
      transform: rotate(180deg);
    }

    &--close {
      background: none;

      &::after {
        display: block;
      }
    }

    @media #{$break-tab-sm} {
      display: none;
    }
  }

  @media #{$break-tab-sm} {
    justify-content: flex-start;
    padding-right: 0;
  }
}
</style>
