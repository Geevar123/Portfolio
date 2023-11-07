<template>
    <main class="projects">
        <div class="projects__title-wrapper">
            <h2 class="projects__title">_projects</h2>
        </div>
        <ul class="projects__tab-list">
            <li class="projects__tab">
                <h3 class="projects__tab-title" :class="{ 'projects__personal-info-open': stateStore.isPersonalInfoOpen }">
                    projects</h3>
            </li>
        </ul>
        <section class="projects__content">
            <h4 class="projects__content-title">// personal-info <span class="projects__content-title--bio">/ all</span>
            </h4>
            <ul>
                <li v-for="project in projectData" :key="project.projectId"><project-card :projectData="project" /></li>
            </ul>
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStateStore } from '@/stores/StateStore';
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/dataStore/Projects';
import type { Project } from '@/interfaces/ProjectType'
const projectData = ref<Project[]>(projects)
const stateStore = useStateStore()
</script>

<style scoped lang="scss">
.projects {
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

    &__personal-info-open {
        &::before {
            transform: rotate(0deg);
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
}
</style>