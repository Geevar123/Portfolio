<template>
    <section class="education__wrapper" data-aos="fade-down" data-aos-duration="800">
        <div class="education__card-wrapper" v-for="education in eduStore" :key="education.courseTitle">
            <div class="education__timeline-icon education__timeline-icon--graduate"></div>
            <div class="education__school-card">
                <h5 class="education__card-title">{{ education.courseTitle }}</h5>
                <p class="education__school">{{ education.college }}</p>
                <p class="education__course">{{ education.course }}</p>
                <p class="education__duration">{{ education.year }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { education } from '@/dataStore/Education'
const eduStore = education
</script>

<style scoped lang="scss">
.education {
    &__wrapper {
        position: relative;
        width: 100%;
        margin-left: 23px;
        padding-block: 30px;
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        &::before {
            content: '';
            width: 2px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0.3;
            background-color: $blueHex-05;
        }
    }

    &__card-wrapper {
        margin-inline: 35px;
    }

    &__school-card {
        display: flex;
        flex-direction: column;
        color: $blueHex-05;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        padding: 16px;
        box-shadow: 0 3px $blueHex-03;
        border: 1px solid $blueHex-03;
        border-radius: 4px;
        position: relative;

        &::before {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            top: 16px;
            right: 100%;
            border: 7px solid transparent;
            border-right: 7px solid $blueHex-03;
        }
    }

    &__timeline-icon {
        content: '';
        width: 40px;
        height: 40px;
        position: absolute;
        left: -19px;
        border-radius: 50%;
        background: $blueHex-02 no-repeat center / 24px 21px;
        border: 2px solid $blueHex-03;

        &--graduate {
            background-image: url('@/assets/icons/graduate.svg');
        }

        &--school {
            background-image: url('@/assets/icons/school.svg');
        }

    }

    &__course {
        margin-block: 13px 10px;
        font-size: 13px;
        font-weight: 500;
        line-height: 21px;
    }

    &__duration {
        font-size: 13px;
        font-weight: 500;
        line-height: 20px;
        opacity: 0.7;
    }

}
</style>