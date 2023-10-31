<template>
    <main class="landing-page">
        <section class="landing-page__content">
            <h2 class="landing-page__content-subtitle">Hi all. I am</h2>
            <h3 class="landing-page__content-title">Geevar Jacob</h3>
            <h4 class="landing-page__designation">> Front-end developer</h4>
        </section>
        <div class="landing-page__footer">
            <p class="landing-page__footer-title">//find my profile on Github</p>
            <p class="landing-page__footer-subtitle"><span class="landing-page__footer-subtitle--const">const
                </span><span class="landing-page__footer-subtitle--github">githubLink <span
                        class="landing-page__footer-subtitle--equal">=</span>
                </span> "https://github.com/Geevar123"</p>
        </div>
    </main>
</template>

<style scoped lang="scss">
.landing-page {
    width: 100%;
    height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
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
        font-size: 20px;
        font-weight: 400;

    }

    &__footer {
        margin-bottom: 85px;
        padding-inline: 27px 45px;
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