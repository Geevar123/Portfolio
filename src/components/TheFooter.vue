<template>
    <footer class="footer">
        <ul class="footer__menu">
            <li class="footer__menu-list">find me in:</li>
            <li class="footer__menu-list footer__menu-list--twitter-icon"></li>
            <li class="footer__menu-list footer__menu-list--fb-icon"></li>
            <li class="footer__menu-list footer__menu-list--git-icon"></li>
        </ul>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    width: 100%;
    border-top: 1px solid $blueHex-03;

    &__menu {
        display: flex;
        flex-direction: row;
    }

    &__menu-list {
        width: 48px;
        height: 49px;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: $blueHex-05;
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
        border-right: 1px solid $blueHex-03;
        padding-inline: 18px;

        &--twitter-icon {
            background: url('@/assets/icons/twitter.svg') no-repeat center / 24px;
        }

        &--fb-icon {
            background: url('@/assets/icons/facebook.svg') no-repeat center / 24px;
        }

        &--git-icon {
            background: url('@/assets/icons/git.svg') no-repeat center / 24px;
        }

        &:first-child {
            flex-grow: 1;
        }

        &:last-child {
            border-right: none;
        }

        @media screen and (min-width:331px) {
            width: 52px;
        }
    }
}
</style>