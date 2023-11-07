<template>
    <main class="about-me">
        <div class="about-me__title-wrapper">
            <h2 class="about-me__title">_about-me</h2>
        </div>
        <ul class="about-me__tab-list">
            <li class="about-me__tab">
                <h3 :class="{ 'about-me__tab-title': true, 'about-me__personal-info-open': stateStore.isPersonalInfoOpen }"
                    @click.prevent="stateStore.togglePersonalInfo" data-aos="fade-right" data-aos-duration="500">
                    personal-info</h3>
                <ul v-if="stateStore.isPersonalInfoOpen" class="about-me__tabs-wrapper" data-aos="flip-down">
                    <li class="about-me__personal-tab-wrapper">
                        <p @click.prevent="stateStore.toggleBio" :class="{
                            'about-me__inner-tab': true,
                            'about-me__inner-tab--orange-icon': true,
                            'about-me__inner-tab-open': stateStore.isBioOpen
                        }">bio
                        </p>
                    </li>
                    <li class="about-me__personal-tab-wrapper">
                        <p @click.prevent="stateStore.toggleEducation" :class="{
                            'about-me__inner-tab': true,
                            'about-me__inner-tab--green-icon': true,
                            'about-me__inner-tab-open': stateStore.isEducationOpen
                        }">
                            education</p>
                    </li>
                    <li class="about-me__personal-tab-wrapper">
                        <p @click.prevent="stateStore.toggleInterested" :class="{
                            'about-me__inner-tab': true,
                            'about-me__inner-tab--blue-icon': true,
                            'about-me__inner-tab-open': stateStore.isInerestedOpen
                        }">interested</p>
                    </li>
                </ul>
            </li>
            <li class="about-me__tab">
                <h3 @click.prevent="stateStore.toggleProfessionalTab"
                    :class="{ 'about-me__tab-title': true, 'about-me__professional-info-open': stateStore.isProfessionalTabOpen }"
                    data-aos="fade-right" data-aos-duration="500">
                    professional-info</h3>
                <ul v-if="stateStore.isProfessionalTabOpen"
                    class="about-me__tabs-wrapper about-me__tabs-wrapper--professional-tabs" data-aos="flip-down">
                    <li
                        :class="{ 'about-me__professional-tab-wrapper': true, 'about-me__professional-tab-wrapper--tab-open': stateStore.isSkillsOpen }">
                        <p @click.prevent="stateStore.toggleSkills" :class="{
                            'about-me__inner-tab': true,
                            'about-me__inner-tab--orange-icon': true
                        }">skills</p>
                        <ul class="about-me__skills-tabs-list" v-if="stateStore.isSkillsOpen" data-aos="flip-down">
                            <li class="about-me__skill-tab about-me__skill-tab--frontend">front-end</li>
                            <li class="about-me__skill-tab about-me__skill-tab--backend">back-end</li>
                            <li class="about-me__skill-tab about-me__skill-tab--database">database</li>
                            <li class="about-me__skill-tab">others</li>
                        </ul>
                    </li>
                    <li
                        :class="{ 'about-me__professional-tab-wrapper': true, 'about-me__professional-tab-wrapper--tab-open': stateStore.isExperienceOpen }">
                        <p @click.prevent="stateStore.toggleExperience" :class="{
                            'about-me__inner-tab': true,
                            'about-me__inner-tab--green-icon': true
                        }">experience</p>
                    </li>
                    <!-- <li :class="{ 'about-me__professional-tab-wrapper': true }">
                        <p :class="{
                            'about-me__inner-tab': true,
                            'about-me__inner-tab--blue-icon': true
                        }">languages</p>
                    </li> -->
                </ul>
            </li>
            <li class="about-me__tab">
                <h3 :class="{ 'about-me__tab-title': true, 'about-me__contact-tab-open': stateStore.isContactOpen }"
                    @click.prevent="stateStore.toggleContactTab" data-aos="fade-right" data-aos-duration="500">contacts</h3>
                <div v-if="stateStore.isContactOpen" class="about-me__contact-tab" data-aos="flip-down">
                    <p class="about-me__contact-email-title">send email</p>
                    <p class="about-me__contact-email">geevarjacob123@gmail.com</p>
                    <div class="about-me__contact-phone-wrapper">
                        <p class="about-me__contact-phone">+91 9496258955 <br> +91 9061040334</p>
                    </div>
                </div>
            </li>
        </ul>
        <section :class="{ 'about-me__content': true, 'about-me__content--inEduView': stateStore.isEducationOpen }">
            <div v-if="stateStore.isBioOpen" data-aos="fade-down" data-aos-duration="800">
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
            </div>
            <education-timeline v-else-if="stateStore.isEducationOpen" />
            <div v-else-if="stateStore.isInerestedOpen" data-aos="fade-down" data-aos-duration="800">
                <h3 class="about-me__content-title">// personal-info <span class="about-me__content-title--bio">/
                        interested</span>
                </h3>
                <p class="about-me__content-info">
                    As a web developer, I have a keen interest in emerging technologies and innovative web solutions.<br>
                    I'm passionate about creating seamless user experiences and leveraging the power of web development to
                    bring ideas to life. Constantly learning and exploring new trends.<br>
                    I thrive on the dynamic nature of the web development industry. Let's collaborate and build
                    extraordinary digital experiences together.
                </p>
            </div>
        </section>
        <code-snippet />
    </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useStateStore } from '@/stores/StateStore';
import CodeSnippet from '@/components/CodeSnippet.vue';
import EducationTimeline from '@/components/EducationTimeline.vue'
const stateStore = useStateStore()
onMounted(() => {
    stateStore.isPersonalInfoOpen = true
    stateStore.isBioOpen = true
    stateStore.isEducationOpen = false
    stateStore.isInerestedOpen = false
})
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
        cursor: pointer;

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

    &__tabs-wrapper {
        @include tabs-style;

        &--professional-tabs {
            padding-left: 21px
        }
    }

    &__personal-tab-wrapper {
        width: 100%;
        height: 21px;
    }

    &__professional-tab-wrapper {
        width: 100%;
        position: relative;
        padding-left: 28px;
        display: flex;
        flex-direction: column;
        row-gap: 16px;

        &::before {
            content: '';
            width: 24px;
            height: 24px;
            position: absolute;
            left: 0;
            background: url('@/assets/icons/right-arrow.svg') no-repeat center / 8px 12px;
            transition: all 0.3s ease-in-out;
        }

        &--tab-open::before {
            transform: rotate(90deg)
        }
    }

    &__inner-tab {
        @include inner-tab-style;

        &--orange-icon {
            &::before {
                background: url('@/assets/icons/folder-orange.svg') no-repeat center / 100%;
            }
        }

        &--green-icon {
            &::before {
                background: url('@/assets/icons/folder-green.svg') no-repeat center / 100%;
            }
        }

        &--blue-icon {
            &::before {
                background: url('@/assets/icons/folder-blue.svg') no-repeat center / 100%;
            }
        }

    }

    &__inner-tab-open {
        color: $whiteHex;

        &::before {
            transform: scale(1.3);
        }
    }

    &__professional-info-open::before {
        transform: rotate(0deg);
    }

    &__skills-tabs-list {
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        margin-bottom: 8px;
    }

    &__skill-tab {
        height: 24px;
        color: $blueHex-05;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        display: flex;
        align-items: center;
        column-gap: 4px;

        &::before {
            content: '';
            width: 21px;
            height: 21px;
            background: url('@/assets/icons//other-icon.svg') no-repeat center / 100%;
        }

        &--frontend::before {
            background-image: url('@/assets/icons/html-icon-small.svg')
        }

        &--backend::before {
            background-image: url('@/assets/icons/js-icon-small.svg')
        }

        &--database::before {
            background-image: url('@/assets/icons/database-icon.svg')
        }
    }


    &__contact-tab {
        @include tabs-style;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: $blueHex-05;
        padding-bottom: 0;
    }

    &__contact-tab-open::before {
        transform: rotate(0deg);
    }

    &__contact-email-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 8px;

        &::before {
            content: '';
            width: 20px;
            height: 20px;
            background: url('@/assets/icons/email-icon.svg') no-repeat center / 100%;
        }
    }

    &__contact-email {
        font-size: 12px;
        line-height: 16px;
    }

    &__contact-phone-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 8px;

        &::before {
            content: '';
            width: 20px;
            height: 20px;
            background: url('@/assets/icons/phone-icon.svg') no-repeat center / 100%;
        }
    }

    &__content {
        margin-block: 38px;
        padding-inline: 27px;

        &--inEduView {
            margin-block: 0;
        }
    }

    &__content-title {

        color: $whiteHex;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        margin-bottom: 17px;

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
}</style>