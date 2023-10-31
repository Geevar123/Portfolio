<template>
    <main class="about-me">
        <div class="about-me__title-wrapper">
            <h2 class="about-me__title">_about-me</h2>
        </div>
        <ul class="about-me__tab-list">
            <li class="about-me__tab">
                <h3 class="about-me__tab-title" :class="{ 'about-me__personal-info-open': stateStore.isPersonalInfoOpen }"
                    @click="stateStore.togglePersonalInfo">personal-info</h3>
                <ul v-show="stateStore.isPersonalInfoOpen" class="about-me__personal-tabs">
                    <li class="about-me__tab-wrapper">
                        <h4 class="about-me__personal-tab about-me__personal-tab--bio-tab">bio</h4>
                    </li>
                    <li class="about-me__tab-wrapper">
                        <h4 class="about-me__personal-tab about-me__personal-tab--interest-tab">interests</h4>
                    </li>
                    <li class="about-me__tab-wrapper">
                        <h4 class="about-me__personal-tab about-me__personal-tab--education-tab">education</h4>
                        <ul>
                            <li>high-school</li>
                            <li>higher-secondary</li>
                            <li>university</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="about-me__tab">
                <h3 class="about-me__tab-title">professional-info</h3>
            </li>
            <li class="about-me__tab">
                <h3 class="about-me__tab-title">hobbies</h3>
            </li>
            <li class="about-me__tab">
                <h3 class="about-me__tab-title">contacts</h3>
            </li>
        </ul>
        <section class="about-me__content">
            <h3 class="about-me__content-title">// personal-info <span class="about-me__content-title--bio">/ bio</span>
            </h3>
            <p class="about-me__content-info">
                I am a dedicated Frontend Developer with 1 year of experience. Specializing in Vue.js and
                React, I create dynamic, high-performance web interfaces that excel in user experience. My focus on
                performance, accessibility, and SEO ensures websites that are both eye-catching and efficient. With a
                Full
                Stack Developer certification, my comprehensive understanding of web development drives me to deliver
                top-quality work. I stay updated with the latest trends, always ready to explore new projects and
                opportunities. Let's connect and discuss the exciting world of web development.
            </p>
            <h3 class="about-me__content-title">// Code snippet showcase: </h3>
            <code-snippet />
        </section>
    </main>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/StateStore';
import CodeSnippet from '@/components/CodeSnippet.vue';

const stateStore = useStateStore()
</script>

<style scoped lang="scss">
.about-me {
    height: 100%;

    &__title-wrapper {
        height: 70px;
        display: flex;
        align-items: center;
        padding-left: 27px;
    }

    &__title {
        color: $whiteHex;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    }

    &__tab-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        row-gap: 3px;
    }


    &__tab-title {
        width: 100%;
        height: 30px;
        background: $blueHex-03;
        color: $whiteHex;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        display: flex;
        align-items: center;
        column-gap: 12px;
        padding-left: 27px;

        &::before {
            content: '';
            width: 9px;
            height: 6px;
            background: url('@/assets/icons/down-arrow.svg') no-repeat center / contain;
            transform: rotate(270deg);
        }
    }

    &__personal-info-open::before {
        transform: rotate(0deg);
    }

    &__personal-tabs {
        list-style: none;
        padding-left: 27px;
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        padding-block: 16px;
        transition: all .4s ease-in-out;
    }

    &__tab-wrapper {
        width: 100%;
        height: 21px;
        display: flex;
        align-items: center;
        column-gap: 12px;

        &::before {
            content: "";
            width: 8px;
            height: 100%;
            margin-left: 2px;
            background: url('@/assets/icons/right-arrow.svg') no-repeat center/7px 12px;
        }
    }

    &__personal-tab {
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        display: flex;
        align-items: center;
        column-gap: 9px;

        &::before {
            content: '';
            width: 14px;
            height: 13px;
        }

        &--bio-tab {
            color: $blueHex-05;

            &::before {
                background: url('@/assets/icons/folder-orange.svg') no-repeat center / 100%;
            }
        }

        &--interest-tab {
            color: $blueHex-05;

            &::before {
                background: url('@/assets/icons/folder-green.svg') no-repeat center / 100%;
            }
        }

        &--education-tab {
            color: $blueHex-05;

            &::before {
                background: url('@/assets/icons/folder-blue.svg') no-repeat center / 100%;
            }
        }
    }

    &__content {
        padding: 0 27px 38px;
    }

    &__content-title {

        color: $whiteHex;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        margin-block: 38px 17px;

        &--bio {
            color: $blueHex-05;
        }
    }

    &__content-info {
        color: $blueHex-05;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 38px;
    }
}
</style>