<template>
    <figure class="code-snippet">
        <header class="code-snippet__header">
            <div class="code-snippet__user-head"></div>
            <div class="code-snippet__user-data">
                <h4 class="code-snippet__user-name">@davidwilliams</h4>
                <p class="code-snippet__user-time">5 months ago</p>
            </div>
            <h5 class="code-snippet__user-details">details</h5>
        </header>
        <p class="code-snippet__code-display">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident totam saepe, cumque odio
            itaque repudiandae quis corporis fuga, earum obcaecati sed tenetur iste suscipit ullam eaque ipsum.
            ratione ea voluptas
        </p>
    </figure>
</template>

<style scoped lang="scss">
.code-snippet {
    &__header {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
    }

    &__user-head {
        width: 36px;
        height: 36px;
        background: url('@/assets/icons/user-img_1.svg') no-repeat center / 100%;
        margin-right: 10px;
    }

    &__user-data {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    &__user-name {
        color: $blueHex-06;
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
    }

    &__user-time {
        color: $blueHex-05;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    }

    &__user-details {
        color: $blueHex-05;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        display: flex;
        column-gap: 5px;
        cursor: url('@/assets/icons/finger-icon.svg') 0 0, pointer;

        &::before {
            content: '';
            width: 18px;
            height: 18px;
            background: url('@/assets/icons/comments-icon.svg');
        }

        &:hover {
            color: $whiteHex;
        }
    }

    &__code-display {
        margin-top: 10px;
        border-radius: 15px;
        border: 1px solid $blueHex-03;
        background: $blueHex-02;
        padding: 24px;
        color: $blueHex-05;
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
        text-align: justify;
    }
}
</style>