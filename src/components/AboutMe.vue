<template>
  <main class="about-me">
    <div class="about-me__title-wrapper">
      <h2 class="about-me__title">_about-me</h2>
    </div>
    <ul class="about-me__tab-list">
      <li class="about-me__tab">
        <h3
          :class="{
            'about-me__tab-title': true,
            'about-me__personal-info-open': stateStore.isPersonalInfoOpen
          }"
          @click.prevent="stateStore.togglePersonalInfo"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          personal-info
        </h3>
        <ul
          v-if="stateStore.isPersonalInfoOpen"
          class="about-me__tabs-wrapper"
          data-aos="flip-down"
        >
          <li
            :class="{
              'about-me__personal-tab-wrapper': true,
              'about-me__personal-tab-wrapper--tab-open': stateStore.isBioOpen
            }"
          >
            <p
              @click.prevent="stateStore.toggleBio"
              :class="{
                'about-me__inner-tab': true,
                'about-me__inner-tab--orange-icon': true,
                'about-me__inner-tab-open': stateStore.isBioOpen
              }"
            >
              bio
            </p>
          </li>
          <li
            :class="{
              'about-me__personal-tab-wrapper': true,
              'about-me__personal-tab-wrapper--tab-open': stateStore.isEducationOpen
            }"
          >
            <p
              @click.prevent="stateStore.toggleEducation"
              :class="{
                'about-me__inner-tab': true,
                'about-me__inner-tab--green-icon': true,
                'about-me__inner-tab-open': stateStore.isEducationOpen
              }"
            >
              education
            </p>
          </li>
          <li
            :class="{
              'about-me__personal-tab-wrapper': true,
              'about-me__personal-tab-wrapper--tab-open': stateStore.isInerestedOpen
            }"
          >
            <p
              @click.prevent="stateStore.toggleInterested"
              :class="{
                'about-me__inner-tab': true,
                'about-me__inner-tab--blue-icon': true,
                'about-me__inner-tab-open': stateStore.isInerestedOpen
              }"
            >
              interested
            </p>
          </li>
        </ul>
      </li>
      <li class="about-me__tab">
        <h3
          @click.prevent="stateStore.toggleProfessionalTab"
          :class="{
            'about-me__tab-title': true,
            'about-me__professional-info-open': stateStore.isProfessionalTabOpen
          }"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          professional-info
        </h3>
        <ul
          v-if="stateStore.isProfessionalTabOpen"
          class="about-me__tabs-wrapper about-me__tabs-wrapper--professional-tabs"
          data-aos="flip-down"
        >
          <li
            :class="{
              'about-me__professional-tab-wrapper': true,
              'about-me__professional-tab-wrapper--tab-open': stateStore.isSkillsOpen
            }"
          >
            <p
              @click.prevent="stateStore.toggleSkills"
              :class="{
                'about-me__inner-tab': true,
                'about-me__inner-tab--orange-icon': true
              }"
            >
              skills
            </p>
            <ul
              class="about-me__skills-tabs-list"
              v-if="stateStore.isSkillsOpen"
              data-aos="flip-down"
            >
              <li
                @click.prevent="stateStore.toggleFrontend"
                :class="{
                  'about-me__skill-tab': true,
                  'about-me__skill-tab--frontend': true,
                  'about-me__inner-tab-open': stateStore.isFrontendOpen
                }"
              >
                front-end
              </li>
              <li
                @click.prevent="stateStore.toggleBackend"
                :class="{
                  'about-me__skill-tab': true,
                  'about-me__skill-tab--backend': true,
                  'about-me__inner-tab-open': stateStore.isBackendOpen
                }"
              >
                back-end
              </li>
              <li
                @click.prevent="stateStore.toggleDatabase"
                :class="{
                  'about-me__skill-tab': true,
                  'about-me__skill-tab--database': true,
                  'about-me__inner-tab-open': stateStore.isDatabaseOpen
                }"
              >
                database
              </li>
              <li
                @click.prevent="stateStore.toggleOtherSkills"
                :class="{
                  'about-me__skill-tab': true,
                  'about-me__inner-tab-open': stateStore.isOtherSkillsOpen
                }"
              >
                others
              </li>
            </ul>
          </li>
          <li
            :class="{
              'about-me__professional-tab-wrapper': true,
              'about-me__professional-tab-wrapper--tab-open': stateStore.isExperienceOpen
            }"
          >
            <p
              @click.prevent="stateStore.toggleExperience"
              :class="{
                'about-me__inner-tab': true,
                'about-me__inner-tab--green-icon': true
              }"
            >
              experience
            </p>
          </li>
        </ul>
      </li>
      <li class="about-me__tab">
        <h3
          :class="{
            'about-me__tab-title': true,
            'about-me__contact-tab-open': stateStore.isContactOpen
          }"
          @click.prevent="stateStore.toggleContactTab"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          contacts
        </h3>
        <div v-if="stateStore.isContactOpen" class="about-me__contact-tab" data-aos="flip-down">
          <p class="about-me__contact-email-title">send email</p>
          <p class="about-me__contact-email">geevarjacob123@gmail.com</p>
          <div class="about-me__contact-phone-wrapper">
            <p class="about-me__contact-phone">
              +91 9496258955 <br />
              +91 9061040334
            </p>
          </div>
        </div>
      </li>
    </ul>
    <section :class="{ 'about-me__content': true }">
      <div v-if="stateStore.isBioOpen || stateStore.isEducationOpen || stateStore.isInerestedOpen">
        <h3 class="about-me__content-title">
          // personal-info
          <span class="about-me__content-title--bio">/ {{ personalSubTitle }}</span>
        </h3>
        <p
          v-if="stateStore.isBioOpen"
          data-aos="fade-down"
          data-aos-duration="800"
          class="about-me__content-info"
        >
          I am a dedicated Frontend Developer with 1 year of experience. Specializing in Vue.js and
          React, I create dynamic, high-performance web interfaces that excel in user experience. My
          focus on performance, accessibility, and SEO ensures websites that are both eye-catching
          and efficient. With a Full Stack Developer certification, my comprehensive understanding
          of web development drives me to deliver top-quality work. I stay updated with the latest
          trends, always ready to explore new projects and opportunities. Let's connect and discuss
          the exciting world of web development.
        </p>
        <education-timeline v-else-if="stateStore.isEducationOpen" />
        <p
          class="about-me__content-info"
          v-else-if="stateStore.isInerestedOpen"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          As a web developer, I have a keen interest in emerging technologies and innovative web
          solutions.<br />
          I'm passionate about creating seamless user experiences and leveraging the power of web
          development to bring ideas to life. Constantly learning and exploring new trends.<br />
          I thrive on the dynamic nature of the web development industry. Let's collaborate and
          build extraordinary digital experiences together.
        </p>
      </div>
      <div
        v-if="
          stateStore.isFrontendOpen ||
          stateStore.isBackendOpen ||
          stateStore.isDatabaseOpen ||
          stateStore.isOtherSkillsOpen
        "
      >
        <h3 class="about-me__content-title">
          // professional-info
          <span class="about-me__content-title--bio">/ {{ professionalSubTitle }}</span>
        </h3>
        <div v-if="stateStore.isFrontendOpen" class="about-me__frontend">
          <h5 class="about-me__skills-title">_front-end-skills</h5>
          <div class="about-me__skills-list">
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/html-icon-big.png" alt="" />
              <p class="about-me__skill-name">HTML</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets//icons/css-icon.png" alt="" />
              <p class="about-me__skill-name">CSS</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/tailwind-icon.png" alt="" />
              <p class="about-me__skill-name">Tailwind</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/bootstrap-icon.png" alt="" />
              <p class="about-me__skill-name">Bootstrap</p>
            </div>
          </div>
          <h5 class="about-me__skills-title">_languages & frameworks</h5>
          <div class="about-me__skills-list">
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/js-icon-large.png" alt="" />
              <p class="about-me__skill-name">JavaScript</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/ts-icon.png" alt="" />
              <p class="about-me__skill-name">TypeScript</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/vue-icon.png" alt="" />
              <p class="about-me__skill-name">Vue</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/react-icon.png" alt="" />
              <p class="about-me__skill-name">React</p>
            </div>
          </div>
        </div>
        <div v-else-if="stateStore.isBackendOpen" class="about-me__backend">
          <h5 class="about-me__skills-title">_back-end-skills</h5>
          <div class="about-me__skills-list">
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/node-icon.png" alt="" />
              <p class="about-me__skill-name">Node.js</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/express-icon.png" alt="" />
              <p class="about-me__skill-name">Express.js</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/c-sharp.svg" alt="" />
              <p class="about-me__skill-name">C Sharp</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/dot-net.svg" alt="" />
              <p class="about-me__skill-name">Dot Net</p>
            </div>
          </div>
        </div>
        <div v-else-if="stateStore.isDatabaseOpen" class="about-me__backend">
          <h5 class="about-me__skills-title">_database</h5>
          <div class="about-me__skills-list">
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/my-sql-icon.png" alt="" />
              <p class="about-me__skill-name">MySQL</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/ms-sql-icon.png" alt="" />
              <p class="about-me__skill-name">MS SQL</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/mongo-icon.png" alt="" />
              <p class="about-me__skill-name">MongoDB</p>
            </div>
          </div>
        </div>
        <div v-else-if="stateStore.isOtherSkillsOpen" class="about-me__backend">
          <h5 class="about-me__skills-title">_git</h5>
          <div class="about-me__skills-list">
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/git-color-icon.png" alt="" />
              <p class="about-me__skill-name">git</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/git-hub-icon.svg" alt="" />
              <p class="about-me__skill-name">github</p>
            </div>
          </div>
          <h5 class="about-me__skills-title">_different tools</h5>
          <div class="about-me__skills-list">
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/pinia-icon.svg" alt="" />
              <p class="about-me__skill-name">pinia</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/axios-icon.png" alt="" />
              <p class="about-me__skill-name">axios</p>
            </div>
            <div class="about-me__skill-wrapper">
              <img class="about-me__skill-icon" src="@/assets/icons/figma-icon.png" alt="" />
              <p class="about-me__skill-name">figma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <code-snippet />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'
import { useStateStore } from '@/stores/StateStore'
import CodeSnippet from '@/components/CodeSnippet.vue'
import EducationTimeline from '@/components/EducationTimeline.vue'
const stateStore = useStateStore()
const professionalSubTitle = ref('')
const personalSubTitle = ref('')

const checkFlagStatus = () => {
  if (stateStore.isPersonalInfoOpen) {
    if (stateStore.isBioOpen) {
      personalSubTitle.value = 'Bio'
    } else if (stateStore.isEducationOpen) {
      personalSubTitle.value = 'education'
    } else if (stateStore.isInerestedOpen) {
      personalSubTitle.value = 'interested'
    }
  } else if (stateStore.isProfessionalTabOpen) {
    if (stateStore.isSkillsOpen) {
      professionalSubTitle.value = 'skills'
    } else if (stateStore.isExperienceOpen) {
      professionalSubTitle.value = 'experience'
    }
  }
}
onMounted(() => {
  stateStore.isPersonalInfoOpen = true
  stateStore.isBioOpen = true
  stateStore.isEducationOpen = false
  stateStore.isInerestedOpen = false
  stateStore.isContactOpen = false
})
onUpdated(() => {
  checkFlagStatus()
})
</script>

<style scoped lang="scss">
.about-me {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__title-wrapper {
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 27px;
    @media #{$break-tab-sm} {
      display: none;
    }
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
    @media #{$break-tab-sm} {
    }
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
      padding-left: 21px;
    }
  }

  &__personal-tab-wrapper {
    width: 100%;
    position: relative;
    padding-left: 28px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    &--tab-open {
      &::before {
        transform: rotate(90deg);
      }
    }
    &::before {
      content: '';
      width: 24px;
      height: 24px;
      position: absolute;
      left: 0;
      background: url('@/assets/icons/right-arrow.svg') no-repeat center / 8px 12px;
      transition: all 0.3s ease-in-out;
    }
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
      transform: rotate(90deg);
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
    color: $whiteHex !important;
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
    cursor: pointer;

    &::before {
      content: '';
      width: 21px;
      height: 21px;
      background: url('@/assets/icons//other-icon.svg') no-repeat center / 100%;
    }

    &--frontend::before {
      background-image: url('@/assets/icons/html-icon-small.svg');
    }

    &--backend::before {
      background-image: url('@/assets/icons/js-icon-small.svg');
    }

    &--database::before {
      background-image: url('@/assets/icons/database-icon.svg');
    }
  }

  &__skills-title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    color: $blueHex-05;
    padding-bottom: 20px;

    &::before {
      content: '//';
    }
  }

  &__skills-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px 15px;
    margin-bottom: 40px;
  }

  &__skill-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  &__skill-icon {
    width: 64px;
    max-height: 64px;
  }

  &__skill-name {
    color: $blueHex-05;
    text-align: center;
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
    @media #{$break-tab-sm} {
      border-left: 1px solid $blueHex-03;
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
  @media #{$break-tab-sm} {
    flex-direction: row;
  }
}
</style>
