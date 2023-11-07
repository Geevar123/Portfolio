<template>
    <figure class="project-card__wrapper"  data-aos="flip-down">
        <h5 class="project-card__title">Project {{ projectData.projectId }} <span
                class="project-card__title--project-name">/
                {{ projectData.name }}</span>
        </h5>
        <div class="project-card">
            <div class="project-card__thumbnail" :style="'background-image: url(' + projectData.projectImage + ');'"></div>
            <div class="project-card__content">
                <p class="project-card__description">{{ projectData.description }}</p>
                <a :href="projectData.projectUrl" target="_blank" class="project-card__git-link">view
                    project</a>
            </div>
        </div>
    </figure>
</template>

<script setup lang="ts">
import type { Project } from '@/interfaces/ProjectType'
defineProps<{
    projectData: Project
}>()
</script>

<style scoped lang="scss">
.project-card {
    width: 100%;
    margin-block: 15px 25px;
    border-radius: 15px;
    border: 1px solid $blueHex-03;
    background: $blueHex-02;

    &__title {
        color: $blueHex-06;
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;

        &--project-name {
            color: $blueHex-05;
            font-size: 16px;
            font-weight: 450;
        }
    }

    &__thumbnail {
        width: 100%;
        max-width: 370px;
        height: 147px;
        background: no-repeat top center / 100% 100%;
        border-bottom: 1px solid $blueHex-03;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    &__content {
        padding: 31px;
        display: flex;
        flex-direction: column;
        row-gap: 23px;
    }

    &__description {
        color: $blueHex-05;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
    }

    &__git-link {
        max-width: 129px;
        padding: 10px;
        border-radius: 8px;
        background: $blueHex-04;
        color: $whiteHex;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        text-decoration: none;
    }

}
</style>