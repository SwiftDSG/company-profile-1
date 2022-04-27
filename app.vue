<template>
  <div class="rd-layout">
    <div class="rd-header">
      <div class="rd-home-button">
        <svg
          ref="rdLogo"
          class="rd-home-button-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 351.86 494.13"
          width="351.8599853515625"
          height="494.1300048828125"
        >
          <defs>
            <clipPath id="rd-home-button-logo-path-1">
              <rect
                x="-26.36"
                y="191.63"
                width="240"
                height="60"
                rx="30"
                transform="translate(-129.29 131.13) rotate(-45)"
                class="rd-home-button-logo-elem-1"
              ></rect>
            </clipPath>
            <clipPath id="rd-home-button-logo-path-2">
              <path
                d="M285.27,199.71l21.21-21.22a30,30,0,0,0,0-42.42L179.2,8.79a30,30,0,0,0-42.43,0L9.49,136.07a30,30,0,0,0,0,42.42h0a30,30,0,0,0,42.43,0L147.38,83a15,15,0,0,1,21.21,0l63.64,63.64a15,15,0,0,1,0,21.22l-31.82,31.82a30,30,0,0,0,0,42.42h0a30,30,0,0,0,42.43,0l42.43-42.42Z"
                class="rd-home-button-logo-elem-2"
              ></path>
            </clipPath>
            <clipPath id="rd-home-button-logo-path-3">
              <path
                d="M9.49,433.05h0a30,30,0,0,0,42.43,0l95.46-95.46a15,15,0,0,1,21.21,0l95.46,95.46a30,30,0,0,0,42.43,0h0a30,30,0,0,0,0-42.43L200.41,284.56,179.2,263.35a30,30,0,0,0-42.43,0L9.49,390.62A30,30,0,0,0,9.49,433.05Z"
                class="rd-home-button-logo-elem-3"
              ></path>
            </clipPath>
          </defs>
          <line
            clip-path="url(#rd-home-button-logo-path-1)"
            class="rd-home-button-logo-clip rd-home-button-logo-elem-1"
            x1="30.41"
            y1="285.15"
            x2="221.32"
            y2="94.24"
          ></line>
          <path
            clip-path="url(#rd-home-button-logo-path-2)"
            class="rd-home-button-logo-clip rd-home-button-logo-elem-2"
            d="M31.11,157.17,137.18,51.1a30,30,0,0,1,42.42,0L264.52,136a30,30,0,0,1,.06,42.37L159.05,284.5"
          ></path>
          <path
            clip-path="url(#rd-home-button-logo-path-3)"
            class="rd-home-button-logo-clip rd-home-button-logo-elem-3"
            d="M420,546.08,179.6,305.66a30,30,0,0,0-42.42,0L31.11,411.73"
          ></path>
        </svg>
      </div>
      <div ref="rdNav" class="rd-navigation-button">
        <div class="rd-navigation-button-bar"></div>
        <div class="rd-navigation-button-bar"></div>
      </div>
    </div>
    <div class="rd-body">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { gsap } from "gsap";

  import { baseStore } from "./store/base";

  const baseState = baseStore.getState();
  const rdNav = ref(null);
  const rdLogo = ref(null);

  function resizeHandler(e: MediaQueryListEvent) {
    if (e.matches) baseStore.setViewMode("mobile");
    else baseStore.setViewMode("desktop");
  }

  function init(rdNav: Element) {
    const tl: GSAPTimeline = gsap.timeline();

    tl.to(rdNav.children, {
      width: "1rem",
      x: 0,
      duration: 0.25,
    });
  }

  function logoHandler(rdLogo: Element, state: "show" | "hide") {
    const tl: GSAPTimeline = gsap.timeline();

    const pathOne: Element = rdLogo.children[1];
    const pathTwo: Element = rdLogo.children[2];
    const pathThree: Element = rdLogo.children[3];

    if (state === "show") {
      tl.to(pathOne, {
        strokeDashoffset: 543.9750366210938,
        duration: 0.5,
        ease: "power2.out",
      })
        .to(
          pathTwo,
          {
            strokeDashoffset: 1031.851318359375,
            duration: 0.5,
            ease: "power2.out",
          },
          "<0.25"
        )
        .to(
          pathThree,
          {
            strokeDashoffset: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "<0.25"
        );
    } else {
      tl.to(pathOne, {
        strokeDashoffset: 271.9875183105469,
        duration: 0.5,
        ease: "power2.inOut",
      })
        .to(
          pathTwo,
          {
            strokeDashoffset: 515.9256591796875,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<0.25"
        )
        .to(
          pathThree,
          {
            strokeDashoffset: 539.1181640625,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<0.25"
        );
    }
  }

  // watch(
  //   () => baseState.viewMode,
  //   (val) => {
  //     if (val === "desktop") logoHandler(rdLogo.value, "hide");
  //     else logoHandler(rdLogo.value, "show");
  //   }
  // );

  onMounted(() => {
    const event = new Event("resize");
    window.addEventListener("resize", () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    window.dispatchEvent(event);

    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addEventListener("change", resizeHandler);

    init(rdNav.value);
  });
</script>

<style lang="scss" scoped>
  .rd-layout {
    position: relative;
    width: 100vw;
    height: 100vh;
    height: calc((var(--vh, 1vh) * 100));
    overflow: hidden;
    background: var(--background-color);
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .rd-header {
      pointer-events: none;
      z-index: 2;
      position: absolute;
      top: 1rem;
      width: 100%;
      height: 3rem;
      padding: 0 2rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .rd-home-button {
        position: relative;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        svg.rd-home-button-logo {
          cursor: pointer;
          position: absolute;
          top: 0.5rem;
          left: 0;
          width: 1.4241596341043854856009552142149rem;
          height: 2rem;
          .rd-home-button-logo-clip {
            fill: none;
            stroke-linecap: round;
            stroke-miterlimit: 10;
            stroke-width: 100px;
          }
          * {
            pointer-events: none;
          }
          .rd-home-button-logo-elem-1 {
            stroke: var(--font-color);
            stroke-dashoffset: 271.9875183105469px;
            stroke-dasharray: 271.9875183105469px;
          }
          .rd-home-button-logo-elem-2 {
            stroke: var(--font-color);
            stroke-dashoffset: 515.9256591796875px;
            stroke-dasharray: 515.9256591796875px;
          }
          .rd-home-button-logo-elem-3 {
            stroke: var(--font-color);
            stroke-dashoffset: 539.1181640625px;
            stroke-dasharray: 539.1181640625px;
          }
        }
      }
      .rd-navigation-button {
        z-index: 3;
        cursor: pointer;
        position: relative;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .rd-navigation-button-bar {
          pointer-events: none;
          position: absolute;
          width: 0;
          height: 1.5px;
          background: var(--font-color);
          &:first-child {
            transform: translateY(-0.125rem) translateX(-0.5rem);
          }
          &:last-child {
            transform: translateY(0.125rem) translateX(0.5rem);
          }
        }
      }
    }
    .rd-body {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
</style>

<style lang="scss">
  :root {
    --var: 1vh;
    --font-color: #ede0e6;
    --background-color: #26191f;
    --menu-color: #21161b;
  }

  html,
  body {
    font-family: "DMSans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    font-size: 24px;
    color: var(--font-color);
    word-spacing: 1px;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    @media only screen and (max-width: 1919px) {
      font-size: 22px;
    }
    @media only screen and (max-width: 1599px) {
      font-size: 21px;
    }
    @media only screen and (max-width: 1479px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 1379px) {
      font-size: 19px;
    }
    @media only screen and (max-width: 1319px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 410px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 17px;
    }
  }

  span.rd-letter-wrapper,
  span.rd-text-wrapper,
  span.rd-word-wrapper,
  span.rd-image-wrapper {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    span.rd-letter-container,
    span.rd-text-container,
    span.rd-word-container,
    span.rd-image-container {
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      &.rd-letter-container-up,
      &.rd-text-container-up,
      &.rd-word-container-up,
      &.rd-image-container-up {
        transform: translateY(-100%);
        span.rd-letter,
        span.rd-text,
        span.rd-word,
        img.rd-image {
          transform: translateY(100%);
        }
      }
      &.rd-letter-container-down,
      &.rd-text-container-down,
      &.rd-word-container-down,
      &.rd-image-container-down {
        transform: translateY(100%);
        span.rd-letter,
        span.rd-text,
        span.rd-word,
        img.rd-image {
          transform: translateY(-100%);
        }
      }
      &.rd-letter-container-left,
      &.rd-text-container-left,
      &.rd-word-container-left,
      &.rd-image-container-left {
        transform: translateX(-100%);
        span.rd-letter,
        span.rd-text,
        span.rd-word,
        img.rd-image {
          transform: translateX(100%);
        }
      }
      &.rd-letter-container-right,
      &.rd-text-container-right,
      &.rd-word-container-right,
      &.rd-image-container-right {
        transform: translateX(100%);
        span.rd-letter,
        span.rd-text,
        span.rd-word,
        img.rd-image {
          transform: translateX(-100%);
        }
      }
    }
  }

  span.rd-image-wrapper {
    width: 100%;
    height: 100%;
    span.rd-image-container {
      width: 100%;
      height: 100%;
      img.rd-image {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.25);
      }
    }
  }
</style>
