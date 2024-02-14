<template>
  <div class="code-snippet__wrapper">
    <h6 class="code-snippet__title">// Code snippet showcase:</h6>
    <figure class="code-snippet" data-aos="flip-down">
      <header class="code-snippet__header">
        <div class="code-snippet__user-head"></div>
        <div class="code-snippet__user-data">
          <h4 class="code-snippet__user-name">@geevarjacob-me</h4>
          <p class="code-snippet__user-time">5 months ago</p>
        </div>
        <h5 class="code-snippet__user-details">details</h5>
      </header>
      <div class="code-snippet__code-display">
        <p class="code-snippet__code-lines">
          <span class="code-snippet__code-lines--green-font">function </span
          ><span class="code-snippet__code-lines--yellow-font"
            >initializeModelChunk(<span class="code-snippet__code-lines--pink-font">chunk</span
            >)</span
          >
          {
        </p>
        <p class="code-snippet__code-lines">
          <span class="code-snippet__code-lines--green-font">const </span>value =
          parseModel(chunk._response, chunk._value);
        </p>
        <p class="code-snippet__code-lines">
          <span class="code-snippet__code-lines--green-font">const</span>initializedChunk = chunk;
        </p>
        <p class="code-snippet__code-lines">initializedChunk._status = INITIALIZED;</p>
        <p class="code-snippet__code-lines">initializedChunk._value = value;</p>
        <p class="code-snippet__code-lines">
          <span class="code-snippet__code-lines--green-font">return</span> value;
        </p>
        <p class="code-snippet__code-lines">}</p>
      </div>
    </figure>
    <figure class="code-snippet" data-aos="flip-down">
      <header class="code-snippet__header">
        <div class="code-snippet__user-head"></div>
        <div class="code-snippet__user-data">
          <h4 class="code-snippet__user-name">@geevarjacob-me</h4>
          <p class="code-snippet__user-time">5 months ago</p>
        </div>
        <h5 class="code-snippet__user-details">details</h5>
      </header>
      <div class="code-snippet__code-display">
        <p class="code-snippet__code-lines">
          <span class="code-snippet__code-lines--green-font">function </span
          ><span class="code-snippet__code-lines--yellow-font"
            >initializeModelChunk(<span class="code-snippet__code-lines--pink-font">chunk</span
            >)</span
          >
          {
        </p>
        <p class="code-snippet__code-lines">
          <span class="code-snippet__code-lines--green-font">const </span>value =
          parseModel(chunk._response, chunk._value);
        </p>
        <p class="code-snippet__code-lines">
          <span class="code-snippet__code-lines--green-font">const</span>initializedChunk = chunk;
        </p>
        <p class="code-snippet__code-lines">initializedChunk._status = INITIALIZED;</p>
        <p class="code-snippet__code-lines">initializedChunk._value = value;</p>
        <p class="code-snippet__code-lines">
          <span class="code-snippet__code-lines--green-font">return</span> value;
        </p>
        <p class="code-snippet__code-lines">}</p>
      </div>
    </figure>
    <figure class="code-snippet" data-aos="flip-down">
      <header class="code-snippet__header">
        <div class="code-snippet__user-head"></div>
        <div class="code-snippet__user-data">
          <h4 class="code-snippet__user-name">@geevarjacob-me</h4>
          <p class="code-snippet__user-time">5 months ago</p>
        </div>
        <h5 class="code-snippet__user-details">details</h5>
      </header>
      <div class="code-snippet__code-display">
        <p class="code-snippet__code-lines">
          <span class="code-snippet__code-lines--green-font">export function </span>
          <span class="code-snippet__code-lines--yellow-font">parseModelTuple( </span>
        </p>
        <p class="code-snippet__code-lines code-snippet__code-lines--pink-font">
          response: Response,
        </p>
        <p class="code-snippet__code-lines code-snippet__code-lines--pink-font">
          value: {+[key: string]: JSONValue} | $ReadOnlyArray,
        </p>

        <p class="code-snippet__code-lines">
          <span class="code-snippet__code-lines--yellow-font">): any </span>{
        </p>
        <p class="code-snippet__code-lines">
          <span class="code-snippet__code-lines--green-font">const </span> tuple:[mixed, mixed,
          mixed, mixed]=(value:any);
        </p>
      </div>
    </figure>
  </div>
</template>

<style scoped lang="scss">
.code-snippet {
  margin-top: 32px;

  &__wrapper {
    padding-inline: 27px;
    margin-block: 38px;
    @media #{$break-tab-sm} {
      border-left: 1px solid $blueHex-03;
    }
  }

  &__title {
    color: $whiteHex;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 17px;
  }

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
    padding: 10px;
    color: $blueHex-05;
    counter-reset: custom-li;
    overflow-x: auto;
    white-space: pre;
  }

  &__code-lines {
    counter-increment: custom-li;
    position: relative;
    padding-left: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: $grayHex-02;

    &::before {
      position: absolute;
      left: 0;
      content: counter(custom-li);
    }

    &:not(:first-child):not(:last-child) {
      padding-left: 34px;
    }

    &--green-font {
      color: $greenHex-02;
    }

    &--yellow-font {
      color: $yellowHex-02;
    }

    &--pink-font {
      color: $pinkHex-01;
    }
  }
}
</style>
