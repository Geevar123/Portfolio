<template>
  <main class="contact-me">
    <div class="contact-me__title-wrapper">
      <h2 class="contact-me__title">_contact-me</h2>
    </div>
    <ul class="contact-me__tab-list">
      <li class="contact-me__tabs">
        <h3
          @click.prevent="stateStore.toggleContactTab"
          :class="{
            'contact-me__tab-title': true,
            'contact-me__tab-open': stateStore.isContactOpen
          }"
        >
          contacts
        </h3>
        <div v-if="stateStore.isContactOpen" class="contact-me__tab-wrapper" data-aos="flip-down">
          <p class="contact-me__tab-item contact-me__tab-item--email">geevarjacob123@gmail.com</p>
          <div class="contact-me__tab-item contact-me____tab-item--phone">
            <p>
              +91 9496258955 <br />
              +91 9061040334
            </p>
          </div>
        </div>
      </li>
      <li>
        <h3
          :class="{
            'contact-me__tab-title': true,
            'contact-me__tab-open': stateStore.isFindMeOpen
          }"
          @click.prevent="stateStore.toggleFindMe"
        >
          find-me-also-in
        </h3>
        <div v-if="stateStore.isFindMeOpen" class="contact-me__tab-wrapper" data-aos="flip-down">
          <a href="" class="contact-me__tab-item contact-me__tab-item--link">LinkedIn profile</a>
          <a href="" class="contact-me__tab-item contact-me__tab-item--link">Github profile</a>
          <a href="" class="contact-me__tab-item contact-me__tab-item--link">Instagram account</a>
          <a href="" class="contact-me__tab-item contact-me__tab-item--link">Facebook account</a>
        </div>
      </li>
    </ul>
    <form v-if="!stateStore.isSuccess" class="contact-me__content" data-aos="fade-left">
      <div class="contact-me__content-wrapper">
        <label for="name" class="contact-me__label">_name:</label>
        <input type="text" class="contact-me__input" id="name" />
      </div>
      <div class="contact-me__content-wrapper">
        <label for="email" class="contact-me__label">_email:</label>
        <input type="email" class="contact-me__input" id="email" />
      </div>
      <div class="contact-me__content-wrapper">
        <label for="message" class="contact-me__label">_message:</label>
        <textarea type="email" class="contact-me__input contact-me__textarea" id="message">
        </textarea>
      </div>
      <button class="contact-me__submit-btn" disabled>submit-message</button>
    </form>
    <section v-else class="contact-me__success">
      <h4 class="contact-me__success-title">Thank you! 🤘</h4>
      <p class="contact-me__success-subtitle">
        Your message has been accepted. You will recieve answer really soon!
      </p>
      <button class="contact-me__submit-btn contact-me__submit-btn--new" disabled>
        send-new-message
      </button>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/StateStore'

const stateStore = useStateStore()
</script>

<style scoped lang="scss">
.contact-me {
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

  &__tab-open::before {
    transform: rotate(0deg);
  }

  &__tab-wrapper {
    @include tabs-style;
    padding-left: 27px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: $blueHex-05;
    padding-bottom: 0;
  }

  &__tab-item {
    color: $blueHex-05;
    font-size: 16px;
    line-height: 16px;
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
    &--email {
      font-size: 18px;
    }

    &--phone::before {
      content: '';
      width: 20px;
      height: 20px;
      background: url('@/assets/icons/phone-icon.svg') no-repeat center / 100%;
    }

    &--link::before {
      content: '';
      width: 16px;
      height: 16px;
      background: url('@/assets/icons/link.svg') no-repeat 0 0 / 100%;
    }
  }

  &__content {
    margin: 24px 27px 38px;
    display: flex;
    flex-direction: column;
    row-gap: 18px;
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  &__label {
    color: $blueHex-05;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
  }

  &__input {
    width: 100%;
    height: 41px;
    border-radius: 8px;
    border: 1px solid $blueHex-03;
    background: $blueHex-01;
    color: $blueHex-07;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 1px;
    padding-inline: 15px;
    &:focus {
      border: 2px solid #607b96;
      transition: border 0.2s ease-in-out;
      filter: drop-shadow(0px 0px 2px #686767);
    }
  }

  &__textarea {
    min-height: 145px;
    resize: vertical;
  }

  &__submit-btn {
    margin-top: 18px;
    width: 146px;
    padding: 10px 14px;
    border-radius: 8px;
    background: $blueHex-04;
    color: $whiteHex;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    cursor: url('@/assets/icons/finger-icon.svg') 0 0, pointer;
    font-family: $font-family;

    &--new {
      width: auto;
      margin-top: 8px;
    }
  }

  &__success {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 13px;
    padding-inline: 27px;
    margin-top: 42px;
  }

  &__success-title {
    color: $whiteHex;
    font-size: 24px;
    font-weight: 500;
    line-height: 31px;
  }

  &__success-subtitle {
    color: $blueHex-05;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    max-width: 284px;
    text-align: center;
  }
}
</style>
