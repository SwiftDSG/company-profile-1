<template>
  <div class="rd-container" ref="rdContainer">
    <div class="rd-header">
      <div ref="rdHeaderTitle" class="rd-header-title">
        <span class="rd-letter-wrapper">
          <span class="rd-letter-container rd-letter-container-right">
            <span class="rd-letter">R</span>
          </span>
        </span>
        <span class="rd-letter-wrapper">
          <span class="rd-letter-container rd-letter-container-right">
            <span class="rd-letter">e</span>
          </span>
        </span>
        <span class="rd-letter-wrapper">
          <span class="rd-letter-container rd-letter-container-right">
            <span class="rd-letter">d</span>
          </span>
        </span>
        <span class="rd-letter-wrapper">
          <span class="rd-letter-container rd-letter-container-right">
            <span class="rd-letter">i</span>
          </span>
        </span>
        <span class="rd-letter-wrapper">
          <span class="rd-letter-container rd-letter-container-right">
            <span class="rd-letter">a</span>
          </span>
        </span>
        <span class="rd-letter-wrapper">
          <span class="rd-letter-container rd-letter-container-right">
            <span class="rd-letter">n</span>
          </span>
        </span>
      </div>
    </div>
    <div class="rd-body">
      <div ref="rdBackground" class="rd-background"></div>
      <div id="rd-logo-container" class="rd-logo-container">
        <svg
          ref="rdLogo"
          class="rd-logo rd-logo-redian"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 315.27 441.84"
        >
          <defs>
            <clipPath id="rd-logo-path-1">
              <rect
                x="-26.36"
                y="191.63"
                width="240"
                height="60"
                rx="30"
                transform="translate(-129.29 131.13) rotate(-45)"
              ></rect>
            </clipPath>
            <clipPath id="rd-logo-path-2">
              <path
                d="M285.27,199.71l21.21-21.22a30,30,0,0,0,0-42.42L179.2,8.79a30,30,0,0,0-42.43,0L9.49,136.07a30,30,0,0,0,0,42.42h0a30,30,0,0,0,42.43,0L147.38,83a15,15,0,0,1,21.21,0l63.64,63.64a15,15,0,0,1,0,21.22l-31.82,31.82a30,30,0,0,0,0,42.42h0a30,30,0,0,0,42.43,0l42.43-42.42Z"
              ></path>
            </clipPath>
            <clipPath id="rd-logo-path-3">
              <path
                d="M9.49,433.05h0a30,30,0,0,0,42.43,0l95.46-95.46a15,15,0,0,1,21.21,0l95.46,95.46a30,30,0,0,0,42.43,0h0a30,30,0,0,0,0-42.43L200.41,284.56,179.2,263.35a30,30,0,0,0-42.43,0L9.49,390.62A30,30,0,0,0,9.49,433.05Z"
              ></path>
            </clipPath>
          </defs>
          <line
            clip-path="url(#rd-logo-path-1)"
            class="rd-logo-svg rd-logo-svg-1"
            x1="30.41"
            y1="285.15"
            x2="221.32"
            y2="94.24"
          ></line>
          <path
            clip-path="url(#rd-logo-path-2)"
            class="rd-logo-svg rd-logo-svg-2"
            d="M31.11,157.17,137.18,51.1a30,30,0,0,1,42.42,0L264.52,136a30,30,0,0,1,.06,42.37L159.05,284.5"
          ></path>
          <path
            clip-path="url(#rd-logo-path-3)"
            class="rd-logo-svg rd-logo-svg-3"
            d="M420,546.08,179.6,305.66a30,30,0,0,0-42.42,0L31.11,411.73"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { gsap } from "gsap";

  import { baseStore } from "../store/base";

  const baseState = baseStore.getState();
  const rdHeaderTitle = ref(null);

  function shuffleArray(arrayOne: Element[], arrayTwo: Element[]) {
    for (let i = arrayOne.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayOne[i], arrayOne[j]] = [arrayOne[j], arrayOne[i]];
      [arrayTwo[i], arrayTwo[j]] = [arrayTwo[j], arrayTwo[i]];
    }
  }

  function init(rdHeaderTitle: Element, cb?: Function) {
    const tl: GSAPTimeline = gsap.timeline({
      onComplete() {
        if (cb) cb();
      },
    });
    const lettersContainer: Element[] = gsap.utils.toArray(
      rdHeaderTitle.querySelectorAll(".rd-letter-container")
    );
    const letters: Element[] = gsap.utils.toArray(
      rdHeaderTitle.querySelectorAll(".rd-letter")
    );

    shuffleArray(lettersContainer, letters);

    tl.to(
      lettersContainer,
      {
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      },
      "<0"
    ).to(
      letters,
      {
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      },
      "<0"
    );
  }

  // function initProject(
  //   mode,
  //   project,
  //   logo,
  //   background,
  //   placeholder,
  //   placeholderText,
  //   mainTitle,
  //   mainTitleWord,
  //   actionButton,
  //   cb
  // ) {
  //   const tl = gsap.timeline({
  //     onComplete() {
  //       if (cb) cb()
  //     },
  //   })

  //   const obj = {
  //     number: 0,
  //   }

  //   if (project === 'redian') {
  //     const pathOne = logo.children[1]
  //     const pathTwo = logo.children[2]
  //     const pathThree = logo.children[3]

  //     tl.to(
  //       pathOne,
  //       {
  //         strokeDashoffset: 543.9750366210938,
  //         duration: 0.5,
  //         ease: 'power2.out',
  //       },
  //       '<0'
  //     )
  //       .to(
  //         pathTwo,
  //         {
  //           strokeDashoffset: 1031.851318359375,
  //           duration: 0.5,
  //           ease: 'power2.out',
  //         },
  //         '<0.25'
  //       )
  //       .to(
  //         pathThree,
  //         {
  //           strokeDashoffset: 0,
  //           duration: 0.5,
  //           ease: 'power2.out',
  //         },
  //         '<0.25'
  //       )
  //       .to(
  //         obj,
  //         {
  //           number: 100,
  //           duration: 1,
  //           ease: 'power2.inOut',
  //           onUpdate() {
  //             gsap.to(background, {
  //               background: `radial-gradient(circle, rgba(55,41,47,1) 0%, rgba(38,25,31,1) ${obj.number}%)`,
  //               duration: 0,
  //             })
  //           },
  //         },
  //         '>0.25'
  //       )
  //   } else if (project === 'pezen') {
  //     const pathOne = logo.children[1]
  //     const pathTwo = logo.children[2]
  //     const pathThree = logo.children[3]

  //     tl.to(
  //       pathOne,
  //       {
  //         strokeDashoffset: 0,
  //         duration: 0.5,
  //         ease: 'power2.out',
  //       },
  //       '<0'
  //     )
  //       .to(
  //         pathTwo,
  //         {
  //           strokeDashoffset: 0,
  //           duration: 0.5,
  //           ease: 'power2.out',
  //         },
  //         '<0.25'
  //       )
  //       .to(
  //         pathThree,
  //         {
  //           strokeDashoffset: 0,
  //           duration: 0.5,
  //           ease: 'power2.out',
  //         },
  //         '<0.25'
  //       )
  //       .to(
  //         obj,
  //         {
  //           number: 100,
  //           duration: 1,
  //           ease: 'power2.inOut',
  //           onUpdate() {
  //             gsap.to(background, {
  //               background: `radial-gradient(circle, rgba(255,202,146,1) 0%, rgba(255,168,76,1) ${obj.number}%)`,
  //               duration: 0,
  //             })
  //           },
  //         },
  //         '>0.25'
  //       )
  //   }

  //   if (mode === 'desktop') {
  //     tl.to(mainTitleWord, {
  //       x: 0,
  //       duration: 0.5,
  //       ease: 'power2.out',
  //       stagger: 0.125,
  //     }).to(
  //       mainTitle,
  //       {
  //         x: 0,
  //         duration: 0.5,
  //         ease: 'power2.out',
  //         stagger: 0.125,
  //       },
  //       '<0'
  //     )
  //   } else {
  //     tl.to([...mainTitleWord].reverse(), {
  //       y: 0,
  //       duration: 0.5,
  //       ease: 'power2.out',
  //       stagger: 0.125,
  //     }).to(
  //       [...mainTitle].reverse(),
  //       {
  //         y: 0,
  //         duration: 0.5,
  //         ease: 'power2.out',
  //         stagger: 0.125,
  //       },
  //       '<0'
  //     )
  //   }

  //   tl.to(
  //     [placeholder, placeholderText],
  //     {
  //       y: 0,
  //       duration: 0.5,
  //       ease: 'power2.out',
  //     },
  //     '<0.25'
  //   )
  //     .to(
  //       [
  //         actionButton.children[0].children[0],
  //         actionButton.children[0].children[0].children,
  //       ],
  //       {
  //         x: 0,
  //         duration: 0.5,
  //         ease: 'power2.out',
  //       },
  //       '<0'
  //     )
  //     .to(
  //       actionButton.children[1].children[0],
  //       {
  //         strokeDashoffset: 0,
  //         duration: 0.5,
  //         ease: 'power2.inOut',
  //       },
  //       '<0'
  //     )
  //     .to(
  //       actionButton.children[1].children[1],
  //       {
  //         opacity: 1,
  //         ease: 'power2.out',
  //       },
  //       '<0.25'
  //     )

  //   return tl
  // }

  onMounted(() => {
    setTimeout(() => {
      init(rdHeaderTitle.value);
    }, 500);
  });
</script>

<style lang="scss" scoped>
  .rd-container {
    position: relative;
    width: 100%;
    height: 100vh;
    height: calc((var(--vh, 1vh) * 100));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .rd-header {
      position: absolute;
      top: 1rem;
      width: 100%;
      height: 3rem;
      padding: 0 2rem;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .rd-header-title {
        position: relative;
        transition: 0.2s color;
        font-family: "Raleway";
        font-weight: 675;
        display: flex;
        justify-content: flex-start;
        align-content: flex-end;
      }
    }
    .rd-body {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .rd-background {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .rd-logo-container {
        position: absolute;
        width: 35vw;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.05s transform ease-out;
        transform: perspective(1000px);
        svg.rd-logo {
          position: relative;
          height: 60vh;
          transform-style: preserve-3d;
          &.rd-logo-redian {
            .rd-logo-svg {
              stroke: #2e2026;
              fill: none;
              stroke-linecap: round;
              stroke-miterlimit: 10;
              stroke-width: 100px;
            }
            .rd-logo-svg-1 {
              stroke-dashoffset: 271.9875183105469px;
              stroke-dasharray: 271.9875183105469px;
            }
            .rd-logo-svg-2 {
              stroke-dashoffset: 515.9256591796875px;
              stroke-dasharray: 515.9256591796875px;
            }
            .rd-logo-svg-3 {
              stroke-dashoffset: 539.1181640625px;
              stroke-dasharray: 539.1181640625px;
            }
          }
        }
      }
    }
  }
</style>
