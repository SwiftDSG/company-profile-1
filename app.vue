<template>
  <div
    ref="rdLayout"
    class="rd-layout"
    :class="cursorVisible ? 'rd-cursor-visible' : ''"
  >
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
      <div
        ref="rdNavBtn"
        data-default-pin="button"
        class="rd-navigation-button"
        @click="navHandler(navOpened ? 'close' : 'open')"
      >
        <div class="rd-navigation-button-bar"></div>
        <div class="rd-navigation-button-bar"></div>
      </div>
    </div>
    <div ref="rdBody" class="rd-body">
      <NuxtPage
        :page-state="pageState"
        @pin-elements="pinElements"
        @unpin-elements="unpinElements"
        @exit-page="pageState = 'idle'"
      />
    </div>
    <div ref="rdNav" class="rd-navigation">
      <div class="rd-navigation-overlay"></div>
      <div class="rd-navigation-container">
        <div class="rd-navigation-column">
          <a
            v-for="link in navLinks"
            ref="rdNavLinks"
            :key="link.to"
            class="rd-navigation-link rd-headline-2"
            :href="link.to"
            :class="
              navOpened && route === link.to ? 'rd-navigation-link-active' : ''
            "
            @click.prevent="changePage"
            data-default-pin="link"
          >
            <span class="rd-word-wrapper">
              <span class="rd-word-container rd-word-container-right">
                <span class="rd-word">{{ link.name }}</span>
              </span>
            </span>
            <span class="rd-navigation-underline"></span>
          </a>
        </div>
        <div class="rd-navigation-column-small">
          <a
            v-for="(social, i) in navSocials"
            ref="rdNavSocials"
            :key="i"
            class="rd-navigation-social rd-caption-text"
            data-default-pin="button"
          >
            <span class="rd-word-wrapper">
              <span class="rd-word-container rd-word-container-down">
                <span class="rd-word">{{ social.name }}</span>
              </span>
            </span>
          </a>
        </div>
        <div class="rd-navigation-row">
          <a
            ref="rdNavEmail"
            data-default-pin="link"
            href="mailto:hello@redian.id"
            class="rd-navigation-email rd-body-text"
          >
            <span class="rd-word-wrapper">
              <span class="rd-word-container rd-word-container-down">
                <span class="rd-word">hello@redian.id</span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div
      ref="rdCursor"
      v-if="baseState.viewMode === 'desktop'"
      class="rd-cursor"
      :class="cursorHover || cursorPinned || cursorText ? 'rd-cursor-grow' : ''"
    >
      <div v-if="cursorText" class="rd-cursor-text rd-headline-6">
        {{ cursorText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { gsap } from "gsap";
  import { ComputedRef } from "vue";

  import { baseStore } from "./store/base";

  const baseState = baseStore.getState();
  const pageState = ref("idle");

  const rdLayout = ref<HTMLDivElement>(null);
  const rdCursor = ref<HTMLDivElement>(null);
  const rdLogo = ref<SVGElement>(null);
  const rdBody = ref<HTMLDivElement>(null);
  const rdNav = ref<HTMLDivElement>(null);
  const rdNavBtn = ref<HTMLDivElement>(null);
  const rdNavLinks = ref<HTMLAnchorElement[]>(null);
  const rdNavSocials = ref<HTMLAnchorElement[]>(null);
  const rdNavEmail = ref<HTMLAnchorElement>(null);

  const rdPinnedButtons = ref([]);
  const rdPinnedLinks = ref([]);
  const rdPinnedTexts = ref([]);

  const cursorText = ref<string>("");
  const cursorPinned = ref(false);
  const cursorHover = ref(false);
  const cursorVisible = ref(false);

  const navOpened = ref(false);
  const navAnim = ref<GSAPTimeline>(null);
  const navSocials = [
    {
      name: "Fb",
      to: "",
    },
    {
      name: "Ig",
      to: "",
    },
    {
      name: "Tw",
      to: "",
    },
  ];
  const navLinks = [
    {
      name: "home",
      to: "/",
    },
    {
      name: "about",
      to: "/about",
    },
    {
      name: "work",
      to: "/work",
    },
    {
      name: "contact",
      to: "/contact",
    },
  ];

  const route: ComputedRef<string> = computed((): string => useRoute().path);
  const rem: ComputedRef<number> = computed((): number =>
    typeof getComputedStyle === "function"
      ? parseInt(getComputedStyle(document.body).fontSize)
      : 0
  );

  const animate = {
    init(rdNavBtn: Element) {
      const tl: GSAPTimeline = gsap.timeline();

      tl.to(rdNavBtn.children, {
        width: "1rem",
        x: 0,
        duration: 0.25,
      });
    },
    navHandler(
      rdNav: Element,
      rdNavLinks: Element[],
      rdNavSocials: Element[],
      rdNavEmail: Element,
      rdNavBtn: Element,
      cb?: () => void,
      rcb?: () => void
    ): GSAPTimeline {
      const tl: GSAPTimeline = gsap.timeline({
        onComplete() {
          if (cb) cb();
        },
        onReverseComplete() {
          if (rcb) rcb();
        },
        paused: true,
      });

      const rdNavOverlay: Element = rdNav.children[0];
      const rdNavContainer: Element = rdNav.children[1];
      const rdNavLinksWordContainer: Element[] = gsap.utils.toArray(
        rdNavContainer.children[0].querySelectorAll(".rd-word-container")
      );
      const rdNavLinksWord: Element[] = gsap.utils.toArray(
        rdNavContainer.children[0].querySelectorAll(".rd-word")
      );
      const rdNavSocialsWordContainer: Element[] = gsap.utils.toArray(
        rdNavContainer.children[1].querySelectorAll(".rd-word-container")
      );
      const rdNavSocialsWord: Element[] = gsap.utils.toArray(
        rdNavContainer.children[1].querySelectorAll(".rd-word")
      );
      const rdNavEmailWordContainer: Element[] = gsap.utils.toArray(
        rdNavContainer.children[2].querySelectorAll(".rd-word-container")
      );
      const rdNavEmailWord: Element[] = gsap.utils.toArray(
        rdNavContainer.children[2].querySelectorAll(".rd-word")
      );
      const barOne: Element = rdNavBtn.children[0];
      const barTwo: Element = rdNavBtn.children[1];

      tl.to(
        barOne,
        {
          x: "-0.5rem",
          width: 0,
          duration: 0.25,
        },
        "<0"
      )
        .to(
          barTwo,
          {
            x: "0.5rem",
            width: 0,
            duration: 0.25,
          },
          "<0"
        )
        .to(barOne, {
          y: "-0.5rem",
          rotateZ: 45,
          duration: 0,
        })
        .to(barTwo, {
          y: "-0.5rem",
          rotateZ: -45,
          duration: 0,
        })
        .to(rdNavContainer, {
          x: 0,
          duration: 0.5,
          ease: "power4.out",
        })
        .to(
          rdNavOverlay,
          {
            opacity: 1,
            duration: 0.5,
          },
          "<0"
        )
        .to(
          rdNavLinks,
          {
            opacity: 0.4,
            duration: 0.25,
            ease: "expo.out",
            stagger: 0.125,
          },
          "<0.25"
        )
        .to(
          rdNavLinksWordContainer,
          {
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          rdNavLinksWord,
          {
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          rdNavSocials,
          {
            opacity: 0.4,
            duration: 0.25,
            ease: "expo.out",
            stagger: 0.125,
          },
          "<0.25"
        )
        .to(
          rdNavSocialsWordContainer,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          rdNavSocialsWord,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          rdNavEmail,
          {
            opacity: 0.4,
            duration: 0.25,
            ease: "expo.out",
            stagger: 0.125,
          },
          "<0.25"
        )
        .to(
          rdNavEmailWordContainer,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          rdNavEmailWord,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          barOne,
          {
            x: 0,
            y: 0,
            width: "1rem",
            duration: 0.25,
          },
          "<0"
        )
        .to(
          barTwo,
          {
            x: 0,
            y: 0,
            width: "1rem",
            duration: 0.25,
          },
          "<0"
        );

      return tl;
    },
  };

  function resizeHandler(e: MediaQueryList | MediaQueryListEvent) {
    if (e.matches) baseStore.setViewMode("mobile");
    else baseStore.setViewMode("desktop");
  }

  function changePage({ target }: TouchEvent | MouseEvent) {
    if (target instanceof Element) {
      navHandler("close");
      pageState.value = target.getAttribute("href");
      target.classList.add("rd-navigation-link-blink");
      setTimeout(() => {
        target.classList.remove("rd-navigation-link-blink");
      }, 500);
    }
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

  function moveCursor({ clientX, clientY }: MouseEvent) {
    if (!cursorVisible.value) cursorVisible.value = true;
    if (!cursorPinned.value && !cursorHover.value) {
      gsap.to(rdCursor.value, {
        x: `${clientX - 0.25 * rem.value}`,
        y: `${clientY - 0.25 * rem.value}`,
      });
    }
  }

  function pinCursorButton() {
    cursorPinned.value = true;
  }
  function unpinCursorButton({ target }: MouseEvent) {
    if (target instanceof Element) {
      cursorPinned.value = false;
      gsap.to(target, {
        x: 0,
        y: 0,
      });
    }
  }
  function dragCursorButton({ target, clientX, clientY }: MouseEvent) {
    if (target instanceof Element) {
      const { top, left, height, width }: DOMRect =
        target.getBoundingClientRect();
      const cx = left + 0.5 * width;
      const cy = top + 0.5 * height;
      const dx = clientX - cx;
      const dy = clientY - cy;
      gsap.to(rdCursor.value, {
        x: `${cx - 1.25 * rem.value + dx * 0.25}`,
        y: `${cy - 1.25 * rem.value + dy * 0.25}`,
      });
      gsap.to(target, {
        x: `${dx * 0.25}`,
        y: `${dy * 0.25}`,
      });
    }
  }

  function pinCursorLink() {
    cursorHover.value = true;
  }
  function unpinCursorLink({ target }: MouseEvent) {
    if (target instanceof Element) {
      cursorHover.value = false;
      gsap.to(target, {
        x: 0,
        y: 0,
      });
    }
  }
  function dragCursorLink({ target, clientX, clientY }: MouseEvent) {
    if (target instanceof Element) {
      const { top, left, height, width }: DOMRect =
        target.getBoundingClientRect();
      const cx = left + 0.5 * width;
      const cy = top + 0.5 * height;
      const dx = clientX - cx;
      const dy = clientY - cy;
      gsap.to(rdCursor.value, {
        x: `${clientX - 1.25 * rem.value}`,
        y: `${clientY - 1.25 * rem.value}`,
      });
      gsap.to(target, {
        x: `${dx * 0.25}`,
        y: `${dy * 0.25}`,
      });
    }
  }

  function pinCursorText({ target }: MouseEvent) {
    if (target instanceof HTMLElement) {
      cursorText.value = target.dataset.text;
    }
  }
  function unpinCursorText() {
    setTimeout(() => {
      cursorText.value = "";
    }, 250);
  }

  function navHandler(state: "open" | "close") {
    if (!navAnim.value) {
      navAnim.value = animate.navHandler(
        rdNav.value,
        rdNavLinks.value,
        rdNavSocials.value,
        rdNavEmail.value,
        rdNavBtn.value,
        () => {
          navOpened.value = true;
        },
        () => {
          rdNav.value.style.zIndex = "-1";
        }
      );
    }
    if (state === "open") {
      rdNav.value.style.zIndex = "1";
      navAnim.value.play();
    } else {
      navOpened.value = false;
      navAnim.value.reverse();
    }
  }

  function pinElements(): void {
    if (baseState.viewMode === "desktop") {
      rdPinnedButtons.value = gsap.utils.toArray(
        rdBody.value.querySelectorAll("[data-pin=button]")
      );
      for (const rdButton of rdPinnedButtons.value) {
        rdButton.addEventListener("mouseenter", pinCursorButton);
        rdButton.addEventListener("mouseleave", unpinCursorButton);
        rdButton.addEventListener("mousemove", dragCursorButton);
      }

      rdPinnedLinks.value = gsap.utils.toArray(
        rdBody.value.querySelectorAll("[data-pin=link]")
      );
      for (const rdLink of rdPinnedLinks.value) {
        rdLink.addEventListener("mouseenter", pinCursorLink);
        rdLink.addEventListener("mouseleave", unpinCursorLink);
        rdLink.addEventListener("mousemove", dragCursorLink);
      }

      rdPinnedTexts.value = gsap.utils.toArray(
        rdBody.value.querySelectorAll("[data-pin=text]")
      );
      for (const rdText of rdPinnedTexts.value) {
        rdText.addEventListener("mouseenter", pinCursorText);
        rdText.addEventListener("mouseleave", unpinCursorText);
      }
    }
  }
  function unpinElements(): void {
    if (baseState.viewMode === "desktop") {
      for (const rdButton of rdPinnedButtons.value) {
        rdButton.removeEventListener("mouseenter", pinCursorButton);
        rdButton.removeEventListener("mouseleave", unpinCursorButton);
        rdButton.removeEventListener("mousemove", dragCursorButton);
      }
      rdPinnedButtons.value = [];

      for (const rdLink of rdPinnedLinks.value) {
        rdLink.removeEventListener("mouseenter", pinCursorLink);
        rdLink.removeEventListener("mouseleave", unpinCursorLink);
        rdLink.removeEventListener("mousemove", dragCursorLink);
      }
      rdPinnedLinks.value = [];

      for (const rdText of rdPinnedTexts.value) {
        rdText.removeEventListener("mouseenter", pinCursorText);
        rdText.removeEventListener("mouseleave", unpinCursorText);
      }
      rdPinnedTexts.value = [];
    }
  }

  watch(
    () => baseState.viewMode,
    (val, oldVal) => {
      if (val && oldVal) location.reload();
    }
  );
  watch(
    () => route.value,
    (val, oldVal) => {
      if (val !== "/") logoHandler(rdLogo.value, "show");
      else logoHandler(rdLogo.value, "hide");
    }
  );

  onMounted(() => {
    const event = new Event("resize");
    window.addEventListener("resize", () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    window.dispatchEvent(event);

    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addEventListener("change", resizeHandler);
    resizeHandler(mediaQuery);

    if (route.value !== "/") logoHandler(rdLogo.value, "show");

    if (baseState.viewMode === "desktop") {
      rdLayout.value.addEventListener("mousemove", moveCursor);
      rdLayout.value.addEventListener(
        "mouseenter",
        () => (cursorVisible.value = true)
      );
      rdLayout.value.addEventListener(
        "mouseleave",
        () => (cursorVisible.value = false)
      );

      const rdButtonPins: Element[] = gsap.utils.toArray(
        "[data-default-pin=button]"
      );
      for (const rdButton of rdButtonPins) {
        rdButton.addEventListener("mouseenter", pinCursorButton);
        rdButton.addEventListener("mouseleave", unpinCursorButton);
        rdButton.addEventListener("mousemove", dragCursorButton);
      }

      const rdLinkPins: Element[] = gsap.utils.toArray(
        "[data-default-pin=link"
      );
      for (const rdLink of rdLinkPins) {
        rdLink.addEventListener("mouseenter", pinCursorLink);
        rdLink.addEventListener("mouseleave", unpinCursorLink);
        rdLink.addEventListener("mousemove", dragCursorLink);
      }
    }

    animate.init(rdNavBtn.value);
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
      z-index: 0;
      position: relative;
      width: 100%;
      height: 100%;
    }
    .rd-navigation {
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      height: calc((var(--vh, 1vh) * 100));
      .rd-navigation-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.2);
      }
      .rd-navigation-container {
        position: absolute;
        top: 0;
        right: 0;
        width: 40%;
        height: 100%;
        padding-left: 4rem;
        box-sizing: border-box;
        background: var(--menu-color);
        transition: 0.5s linear background-color;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateX(100%);
        .rd-navigation-column {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          .rd-navigation-link {
            position: relative;
            opacity: 0;
            text-decoration: none;
            color: var(--font-color);
            margin: 1rem 0;
            text-transform: uppercase;
            transition: 0.2s opacity linear;
            .rd-navigation-underline {
              position: absolute;
              bottom: -0.2rem;
              left: 0.1rem;
              width: 0;
              height: 3px;
              background: var(--font-color);
              transition: 0.5s width cubic-bezier(0.165, 0.84, 0.44, 1);
            }
            &:hover {
              opacity: 1 !important;
            }
            &.rd-navigation-link-active {
              pointer-events: none;
              opacity: 1 !important;
              span.rd-navigation-underline {
                width: calc(100% - 0.4rem);
              }
            }
            &.rd-navigation-link-blink {
              animation: blink 0.2s ease-in-out infinite;
            }
          }
        }
        .rd-navigation-column-small {
          position: absolute;
          right: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          .rd-navigation-social {
            cursor: pointer;
            position: relative;
            opacity: 0;
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.2s opacity linear;
            overflow: hidden;
            &:hover {
              opacity: 1 !important;
            }
          }
        }
        .rd-navigation-row {
          position: absolute;
          bottom: 4rem;
          left: 4rem;
          display: flex;
          .rd-navigation-email {
            position: relative;
            text-decoration: none;
            opacity: 0;
            position: relative;
            color: var(--font-color);
            transition: 0.2s opacity linear;
            * {
              pointer-events: none;
            }
            &::before {
              content: "";
              position: absolute;
              top: 100%;
              width: 100%;
              height: 1px;
              background: var(--font-color);
              opacity: 0.4;
            }
            &::after {
              content: "";
              position: absolute;
              left: 0;
              top: 100%;
              width: 0;
              height: 1px;
              transition: 0.2s width;
              background: var(--font-color);
            }
            &:hover::after {
              width: 100%;
            }
            &:hover {
              opacity: 1 !important;
            }
          }
        }
      }
    }
    .rd-cursor {
      pointer-events: none;
      z-index: 10000000;
      position: fixed;
      width: 0;
      height: 0;
      border-radius: 50%;
      flex-shrink: 0;
      transition: 0.06125s transform ease-out, 0.25s width ease-in-out,
        0.25s height ease-in-out;
      backdrop-filter: invert(100%) hue-rotate(180deg);
      background: rgba(#fff, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      .rd-cursor-text {
        position: relative;
        line-height: 1;
        text-transform: uppercase;
        color: var(--background-color);
        opacity: 0;
        transition: 0.25s opacity ease-in-out;
      }
      &.rd-cursor-grow {
        width: 2.5rem !important;
        height: 2.5rem !important;
        transition: 0.06125s transform ease-out, 0.5s width ease-out,
          0.5s height ease-out;
        .rd-cursor-text {
          opacity: 1;
        }
      }
    }
    &.rd-cursor-visible {
      .rd-cursor {
        width: 0.5rem;
        height: 0.5rem;
      }
    }
    @media screen and (max-width: 1024px) {
      .rd-header {
        padding: 0 1rem 0 2rem;
      }
      .rd-navigation {
        .rd-navigation-container {
          width: 100%;
          padding: 0;
          .rd-navigation-column {
            align-items: center;
          }
          .rd-navigation-column-small {
            right: auto;
            bottom: 2rem;
            flex-direction: row;
            justify-content: center;
          }
          .rd-navigation-row {
            left: auto;
            bottom: 5rem;
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  :root {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    --var: 1vh;
    --font-color: #ede0e6;
    --background-color: #26191f;
    --menu-color: #21161b;
  }

  html,
  body {
    font-family: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
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
    @media only screen and (max-width: 1919px) and (min-width: 1600px) {
      font-size: 22px;
    }
    @media only screen and (max-width: 1599px) and (min-width: 1480px) {
      font-size: 21px;
    }
    @media only screen and (max-width: 1479px) and (min-width: 1380px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 1379px) and (min-width: 1320px) {
      font-size: 19px;
    }
    @media only screen and (max-width: 1319px) and (min-width: 1025px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 1024px) {
      .rd-headline-1 {
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
      }
      .rd-headline-2 {
        font-size: 1.25rem;
        letter-spacing: 0.1rem;
      }
      .rd-headline-3 {
      }
      .rd-headline-4 {
      }
      .rd-headline-5 {
      }
      .rd-caption-text {
        font-size: 0.65rem;
        letter-spacing: 0.05rem;
      }
      .rd-body-text {
        font-size: 0.75rem;
      }
    }
    @media only screen and (max-width: 410px) and (min-width: 321px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 17px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h5,
  p {
    margin: 0;
    padding: 0;
  }

  .rd-headline-1 {
    font-family: "Exo";
    font-weight: 500;
    font-size: 3rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    line-height: 1;
  }
  .rd-headline-2 {
    font-size: 2rem;
    font-family: "Exo";
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.15rem;
  }
  .rd-headline-3 {
    font-size: 1.25rem;
    font-family: "Exo";
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.125rem;
  }
  .rd-headline-4 {
    font-size: 1rem;
    font-family: "Exo";
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.1rem;
  }
  .rd-headline-5 {
    font-size: 0.75rem;
    font-family: "Exo";
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.075rem;
  }
  .rd-headline-6 {
    font-size: 0.55rem;
    font-family: "Exo";
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.075rem;
  }
  .rd-caption-text {
    font-family: "Raleway";
    font-size: 0.65rem;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }
  .rd-body-text {
    font-family: "Quicksand";
    font-size: 0.75rem;
  }
  .rd-placeholder-text {
    font-family: "Raleway";
    font-size: 0.55rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }

  span.rd-letter-wrapper,
  span.rd-text-wrapper,
  span.rd-word-wrapper,
  span.rd-image-wrapper {
    pointer-events: none;
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
      pointer-events: none;
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

  @keyframes blink {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.85);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.85);
    }
  }
</style>
