<template>
  <main class="landing-page">
    <section
      class="landing-page__content"
      data-aos="fade-right"
      data-aos-offset="500"
      data-aos-anchor="#example-anchor"
      data-aos-duration="1500"
    >
      <h2 class="landing-page__content-subtitle">Hi all. I am</h2>
      <h3 class="landing-page__content-title">Geevar Jacob</h3>
      <h4 class="landing-page__designation">
        &lt;Front-end developer <span class="landing-page__designation--right-arrow">/</span>&gt;
      </h4>
    </section>
    <div
      class="landing-page__footer"
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="1500"
    >
      <p class="landing-page__footer-title">//find my profile on Github</p>
      <p class="landing-page__footer-subtitle">
        <span class="landing-page__footer-subtitle--const">const </span
        ><span class="landing-page__footer-subtitle--github"
          >githubLink <span class="landing-page__footer-subtitle--equal">=</span>
        </span>
        "https://github.com/Geevar123"
      </p>
    </div>
  </main>
</template>

<style scoped lang="scss">
.landing-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    @include background-gradient('@/assets/icons/green-gradient.svg');
  }

  &::after {
    @include background-gradient('@/assets/icons/blue-gradient.svg');
  }

  &__content {
    width: 100%;
    position: relative;
    padding: 96px 0 0 27px;
    color: $grayHex-01;
  }

  &__content-subtitle {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }

  &__content-title {
    margin-block: 10px 5px;
    font-size: 62px;
    font-weight: 300;
    line-height: 64px;
  }

  &__designation {
    color: $greenHex-01;
    font-size: 24px;
    font-weight: 400;
    &--right-arrow {
      padding-left: 2px;
    }
  }

  &__footer {
    margin-top: 85px;
    padding-inline: 27px;
    color: $whiteHex;
  }

  &__footer-title {
    color: $blueHex-05;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 16px;
  }

  &__footer-subtitle {
    font-size: 14px;
    font-weight: 500;
    color: $orangeHex-01;
    word-break: break-all;

    &--const {
      color: $yellowHex-01;
    }

    &--github {
      color: $greenHex-01;
    }

    &--equal {
      color: $whiteHex;
    }
  }
}
</style>
