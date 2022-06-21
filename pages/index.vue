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
      <div ref="rdLogoContainer" class="rd-logo-container">
        <svg
          v-if="activeProject === 'redian'"
          ref="rdLogo"
          class="rd-logo rd-logo-redian"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 315.27 441.84"
        >
          <defs>
            <clipPath id="rd-logo-redian-path-1">
              <rect
                x="-26.36"
                y="191.63"
                width="240"
                height="60"
                rx="30"
                transform="translate(-129.29 131.13) rotate(-45)"
              ></rect>
            </clipPath>
            <clipPath id="rd-logo-redian-path-2">
              <path
                d="M285.27,199.71l21.21-21.22a30,30,0,0,0,0-42.42L179.2,8.79a30,30,0,0,0-42.43,0L9.49,136.07a30,30,0,0,0,0,42.42h0a30,30,0,0,0,42.43,0L147.38,83a15,15,0,0,1,21.21,0l63.64,63.64a15,15,0,0,1,0,21.22l-31.82,31.82a30,30,0,0,0,0,42.42h0a30,30,0,0,0,42.43,0l42.43-42.42Z"
              ></path>
            </clipPath>
            <clipPath id="rd-logo-redian-path-3">
              <path
                d="M9.49,433.05h0a30,30,0,0,0,42.43,0l95.46-95.46a15,15,0,0,1,21.21,0l95.46,95.46a30,30,0,0,0,42.43,0h0a30,30,0,0,0,0-42.43L200.41,284.56,179.2,263.35a30,30,0,0,0-42.43,0L9.49,390.62A30,30,0,0,0,9.49,433.05Z"
              ></path>
            </clipPath>
          </defs>
          <line
            clip-path="url(#rd-logo-redian-path-1)"
            class="rd-logo-svg rd-logo-svg-1"
            x1="30.41"
            y1="285.15"
            x2="221.32"
            y2="94.24"
          ></line>
          <path
            clip-path="url(#rd-logo-redian-path-2)"
            class="rd-logo-svg rd-logo-svg-2"
            d="M31.11,157.17,137.18,51.1a30,30,0,0,1,42.42,0L264.52,136a30,30,0,0,1,.06,42.37L159.05,284.5"
          ></path>
          <path
            clip-path="url(#rd-logo-redian-path-3)"
            class="rd-logo-svg rd-logo-svg-3"
            d="M420,546.08,179.6,305.66a30,30,0,0,0-42.42,0L31.11,411.73"
          ></path>
        </svg>
        <svg
          v-else-if="activeProject === 'pezen'"
          ref="rdLogo"
          class="rd-logo rd-logo-pezen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 510"
        >
          <defs>
            <clipPath id="rd-logo-pezen-path-1">
              <path
                d="M300,149.83a149.84,149.84,0,0,1-150,151H0a60,60,0,0,1,60-60h90a89.94,89.94,0,0,0,90-88.19c1-49.68-39.06-91.13-88.74-91.8a90,90,0,0,0-91.24,90h0C23.62,150.87.55,112,17.77,80A150,150,0,0,1,148,.88C230.81-.23,299.43,67,300,149.83Z"
              ></path>
            </clipPath>
            <clipPath id="rd-logo-pezen-path-2">
              <path
                d="M0,330.87H60a0,0,0,0,1,0,0v120a60,60,0,0,1-60,60H0a0,0,0,0,1,0,0v-180A0,0,0,0,1,0,330.87Z"
              ></path>
            </clipPath>
            <clipPath id="rd-logo-pezen-path-3">
              <path
                d="M150,105.87a45,45,0,1,0,45,45A45,45,0,0,0,150,105.87Zm0,67.5a22.5,22.5,0,1,1,22.5-22.5A22.5,22.5,0,0,1,150,173.37Z"
              ></path>
            </clipPath>
          </defs>
          <path
            clip-path="url(#rd-logo-pezen-path-1)"
            class="rd-logo-svg rd-logo-svg-1"
            d="M0,270H150A120,120,0,0,0,270,150h0A120,120,0,0,0,150,30h0A120,120,0,0,0,30,150v90"
          ></path>
          <line
            clip-path="url(#rd-logo-pezen-path-2)"
            class="rd-logo-svg rd-logo-svg-2"
            x1="30"
            y1="330"
            x2="30"
            y2="510"
          ></line>
          <rect
            clip-path="url(#rd-logo-pezen-path-3)"
            class="rd-logo-svg-4 rd-logo-svg-3"
            x="116.25"
            y="116.25"
            width="67.5"
            height="67.5"
            rx="33.75"
          ></rect>
        </svg>
      </div>
      <div class="rd-details-container">
        <div class="rd-title-section">
          <p ref="rdPlaceholder" class="rd-placeholder rd-caption-text">
            <span class="rd-text-wrapper">
              <span class="rd-text-container rd-text-container-down">
                <span class="rd-text">{{
                  projects[activeProject].placeholder
                }}</span>
              </span>
            </span>
          </p>
          <h1 ref="rdTitle" class="rd-title rd-headline-1">
            <span
              v-for="n in projects[activeProject].title.split(' ')"
              class="rd-word-wrapper"
              :key="n"
            >
              <span
                ref="mainTitle"
                class="rd-word-container"
                :class="
                  baseState.viewMode === 'desktop'
                    ? 'rd-word-container-left'
                    : 'rd-word-container-down'
                "
              >
                <span ref="mainTitleWord" class="rd-word">{{ n }}</span>
              </span>
            </span>
          </h1>
        </div>
        <div class="rd-action-section">
          <div
            ref="rdActionButton"
            class="rd-action-button"
            @click="exit(projects[activeProject].href)"
            data-pin="link"
          >
            <span class="rd-action-name rd-caption-text">
              <span class="rd-text-wrapper">
                <span class="rd-text-container rd-text-container-left">
                  <span class="rd-text">{{
                    projects[activeProject].action
                  }}</span>
                </span>
              </span>
            </span>
            <span v-if="baseState.viewMode === 'mobile'" class="line"></span>
            <svg
              class="rd-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <circle class="rd-circle-1" cx="24" cy="24" r="23" />
              <circle class="rd-circle-2" cx="24" cy="24" r="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="rd-footer">
      <div ref="rdSocialsContainer" class="rd-social-container">
        <a
          v-for="(social, i) in socials"
          :key="i"
          class="rd-social rd-caption-text"
          data-pin="button"
        >
          <span class="rd-word-wrapper">
            <span class="rd-word-container rd-word-container-down">
              <span class="rd-word">{{ social.name }}</span>
            </span>
          </span>
        </a>
      </div>
      <div ref="rdBarContainer" class="rd-bar-container">
        <div
          v-for="project in Object.keys(projects)"
          :key="project"
          :class="activeProject === project ? 'rd-bar-active' : ''"
          class="rd-bar"
          @click="selectProject(project)"
        >
          <div v-if="activeProject === project" class="rd-bar-filled"></div>
        </div>
      </div>
      <div ref="rdWorksContainer" class="rd-works-container">
        <a class="rd-works rd-caption-text" data-pin="link">
          <span class="rd-word-wrapper">
            <span class="rd-word-container rd-word-container-down">
              <span class="rd-word">Karya Kami</span>
            </span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { gsap } from "gsap";

  import { baseStore } from "../store/base";

  const baseState = baseStore.getState();
  const props = defineProps<{ pageState: string }>();
  const emit = defineEmits(["pin-elements", "unpin-elements", "exit-page"]);
  const router = useRouter();

  const rdHeaderTitle = ref(null);
  const rdBarContainer = ref(null);
  const rdLogo = ref(null);
  const rdLogoContainer = ref(null);
  const rdBackground = ref(null);
  const rdPlaceholder = ref(null);
  const rdTitle = ref(null);
  const rdActionButton = ref(null);
  const rdSocialsContainer = ref(null);
  const rdWorksContainer = ref(null);

  let projectTimeout: GSAPTween = null;
  let projectChanging: boolean = false;
  const activeProject = ref("redian");
  const projects = {
    redian: {
      placeholder: "Digital Agency",
      title: "Redian Grup",
      action: "Tentang Kami",
      href: "/about",
    },
    pezen: {
      placeholder: "Application",
      title: "Pezen",
      action: "Telusuri",
      href: "/work/pezen",
    },
  };
  const socials = [
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

  const animate = {
    init(
      rdHeaderTitle: Element,
      rdBarContainer: Element,
      rdSocialsContainer: Element,
      rdWorksContainer: Element,
      cb?: () => void
    ) {
      const tl: GSAPTimeline = gsap.timeline({
        onComplete() {
          if (cb) cb();
        },
      });
      const rdLettersContainer: Element[] = gsap.utils.toArray(
        rdHeaderTitle.querySelectorAll(".rd-letter-container")
      );
      const rdLetters: Element[] = gsap.utils.toArray(
        rdHeaderTitle.querySelectorAll(".rd-letter")
      );
      const rdBars: Element[] = gsap.utils.toArray(
        rdBarContainer.querySelectorAll(".rd-bar")
      );
      const rdSocialWordContainer: Element[] = gsap.utils.toArray(
        rdSocialsContainer.querySelectorAll(".rd-word-container")
      );
      const rdSocialWord: Element[] = gsap.utils.toArray(
        rdSocialsContainer.querySelectorAll(".rd-word")
      );
      const rdWorkWordContainer: Element[] = gsap.utils.toArray(
        rdWorksContainer.querySelectorAll(".rd-word-container")
      );
      const rdWorkWord: Element[] = gsap.utils.toArray(
        rdWorksContainer.querySelectorAll(".rd-word")
      );

      shuffleArray(rdLettersContainer, rdLetters);

      tl.to(
        rdLettersContainer,
        {
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "<0"
      )
        .to(
          rdLetters,
          {
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdBars,
          {
            width: "100%",
            duration: 0.5,
            ease: "power1.inOut",
          },
          "<0"
        )
        .to(
          [...rdSocialWordContainer, ...rdWorkWordContainer],
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          [...rdSocialWord, ...rdWorkWord],
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        );
    },
    exit(
      rdHeaderTitle: Element,
      rdBarContainer: Element,
      rdSocialsContainer: Element,
      rdWorksContainer: Element,
      cb?: () => void
    ) {
      const tl: GSAPTimeline = gsap.timeline({
        onComplete() {
          if (cb) cb();
        },
      });
      const rdLettersContainer: Element[] = gsap.utils.toArray(
        rdHeaderTitle.querySelectorAll(".rd-letter-container")
      );
      const rdLetters: Element[] = gsap.utils.toArray(
        rdHeaderTitle.querySelectorAll(".rd-letter")
      );
      const rdBars: Element[] = gsap.utils.toArray(
        rdBarContainer.querySelectorAll(".rd-bar")
      );
      const rdSocialWordContainer: Element[] = gsap.utils.toArray(
        rdSocialsContainer.querySelectorAll(".rd-word-container")
      );
      const rdSocialWord: Element[] = gsap.utils.toArray(
        rdSocialsContainer.querySelectorAll(".rd-word")
      );
      const rdWorkWordContainer: Element[] = gsap.utils.toArray(
        rdWorksContainer.querySelectorAll(".rd-word-container")
      );
      const rdWorkWord: Element[] = gsap.utils.toArray(
        rdWorksContainer.querySelectorAll(".rd-word")
      );

      tl.to(
        rdLettersContainer,
        {
          x: "100%",
          duration: 0.5,
          stagger: 0.1,
          ease: "power4.in",
        },
        "<0"
      )
        .to(
          rdLetters,
          {
            x: "-100%",
            duration: 0.5,
            stagger: 0.1,
            ease: "power4.in",
          },
          "<0"
        )
        .to(
          rdBars,
          {
            opacity: 0,
            duration: 0.25,
          },
          "<0"
        )
        .to(
          [...rdSocialWordContainer, ...rdWorkWordContainer],
          {
            y: "100%",
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          [...rdSocialWord, ...rdWorkWord],
          {
            y: "-100%",
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        );
    },
    initProject(
      mode: "desktop" | "mobile",
      project: string,
      rdLogo: Element,
      rdBackground: Element,
      rdPlaceholder: Element,
      rdTitle: Element,
      rdActionButton: Element,
      cb?: () => void
    ) {
      const tl = gsap.timeline({
        onComplete() {
          if (cb) cb();
        },
      });

      const obj = {
        number: 0,
      };

      const rdPlaceholderTextContainer: Element[] = gsap.utils.toArray(
        rdPlaceholder.querySelectorAll(".rd-text-container")
      );
      const rdPlaceholderText: Element[] = gsap.utils.toArray(
        rdPlaceholder.querySelectorAll(".rd-text")
      );
      const rdMainTitleWordContainer: Element[] = gsap.utils.toArray(
        rdTitle.querySelectorAll(".rd-word-container")
      );
      const rdMainTitleWord: Element[] = gsap.utils.toArray(
        rdTitle.querySelectorAll(".rd-word")
      );
      const rdActionTextContainer: Element[] = gsap.utils.toArray(
        rdActionButton.querySelectorAll(".rd-text-container")
      );
      const rdActionText: Element[] = gsap.utils.toArray(
        rdActionButton.querySelectorAll(".rd-text")
      );

      if (project === "redian") {
        const pathOne = rdLogo.children[1];
        const pathTwo = rdLogo.children[2];
        const pathThree = rdLogo.children[3];

        tl.to(
          pathOne,
          {
            strokeDashoffset: 543.9750366210938,
            duration: 0.5,
            ease: "power2.out",
          },
          "<0"
        )
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
          )
          .to(
            obj,
            {
              number: 100,
              duration: 1,
              ease: "power2.inOut",
              onUpdate() {
                gsap.to(rdBackground, {
                  background: `radial-gradient(circle, rgba(55,41,47,1) 0%, rgba(38,25,31,1) ${obj.number}%)`,
                  duration: 0,
                });
              },
            },
            ">0.25"
          );
      } else if (project === "pezen") {
        const pathOne = rdLogo.children[1];
        const pathTwo = rdLogo.children[2];
        const pathThree = rdLogo.children[3];

        tl.to(
          pathOne,
          {
            strokeDashoffset: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "<0"
        )
          .to(
            pathTwo,
            {
              strokeDashoffset: 0,
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
          )
          .to(
            obj,
            {
              number: 100,
              duration: 1,
              ease: "power2.inOut",
              onUpdate() {
                gsap.to(rdBackground, {
                  background: `radial-gradient(circle, rgba(255,202,146,1) 0%, rgba(255,168,76,1) ${obj.number}%)`,
                  duration: 0,
                });
              },
            },
            ">0.25"
          );
      }

      if (mode === "desktop") {
        tl.to(rdMainTitleWord, {
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.125,
        }).to(
          rdMainTitleWordContainer,
          {
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        );
      } else {
        tl.to([...rdMainTitleWord].reverse(), {
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.125,
        }).to(
          [...rdMainTitleWordContainer].reverse(),
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        );
      }

      tl.to(
        [...rdPlaceholderText, ...rdPlaceholderTextContainer],
        {
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<0.25"
      ).to(
        [...rdActionTextContainer, ...rdActionText],
        {
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<0"
      );

      if (mode === "desktop") {
        tl.to(
          rdActionButton.children[1].children[0],
          {
            strokeDashoffset: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<0"
        ).to(
          rdActionButton.children[1].children[1],
          {
            opacity: 0.5,
            ease: "power2.out",
          },
          "<0.25"
        );
      } else {
        tl.to(
          rdActionButton.children[1],
          {
            scaleY: 1,
            transformOrigin: "center top",
            ease: "power2.out",
          },
          "<0"
        )
          .to(
            rdActionButton.children[2].children[0],
            {
              strokeDashoffset: 0,
              duration: 0.5,
              ease: "power2.inOut",
            },
            "<0"
          )
          .to(
            rdActionButton.children[2].children[1],
            {
              opacity: 0.5,
              ease: "power2.out",
            },
            "<0.25"
          );
      }
    },
    exitProject(
      mode: "desktop" | "mobile",
      project: string,
      rdLogo: Element,
      rdBackground: Element,
      rdPlaceholder: Element,
      rdTitle: Element,
      rdActionButton: Element,
      cb?: () => void,
      nextProject?: string
    ) {
      const rdPlaceholderTextContainer: Element[] = gsap.utils.toArray(
        rdPlaceholder.querySelectorAll(".rd-text-container")
      );
      const rdPlaceholderText: Element[] = gsap.utils.toArray(
        rdPlaceholder.querySelectorAll(".rd-text")
      );
      const rdMainTitleWordContainer: Element[] = gsap.utils.toArray(
        rdTitle.querySelectorAll(".rd-word-container")
      );
      const rdMainTitleWord: Element[] = gsap.utils.toArray(
        rdTitle.querySelectorAll(".rd-word")
      );
      const rdActionTextContainer: Element[] = gsap.utils.toArray(
        rdActionButton.querySelectorAll(".rd-text-container")
      );
      const rdActionText: Element[] = gsap.utils.toArray(
        rdActionButton.querySelectorAll(".rd-text")
      );

      const tl = gsap.timeline({
        onComplete() {
          if (cb) cb();
          if (nextProject) {
            rdPlaceholderTextContainer.forEach((a) =>
              a.removeAttribute("style")
            );
            rdPlaceholderText.forEach((a) => a.removeAttribute("style"));
            if (project === "redian") {
              const pathOne = rdLogo.children[1];
              const pathTwo = rdLogo.children[2];
              const pathThree = rdLogo.children[3];
              pathOne.removeAttribute("style");
              pathTwo.removeAttribute("style");
              pathThree.removeAttribute("style");
            } else if (project === "pezen") {
              const pathOne = rdLogo.children[1];
              const pathTwo = rdLogo.children[2];
              const pathThree = rdLogo.children[3];
              pathOne.removeAttribute("style");
              pathTwo.removeAttribute("style");
              pathThree.removeAttribute("style");
            }
          }
        },
      });

      const obj = {
        number: 100,
      };

      if (!nextProject) {
        tl.to(rdActionTextContainer, {
          x: "100%",
          duration: 0.25,
          ease: "power2.in",
        }).to(
          rdActionText,
          {
            x: "-100%",
            duration: 0.25,
            ease: "power2.in",
          },
          "<0"
        );

        if (mode === "desktop") {
          tl.to(
            rdActionButton.children[1].children[1],
            {
              opacity: 0,
              duration: 0.25,
              ease: "power2.in",
            },
            "<0"
          ).to(
            rdActionButton.children[1].children[0],
            {
              strokeDashoffset: 146.51326206513048,
              duration: 0.25,
              ease: "power2.inOut",
            },
            "<0.25"
          );
        } else {
          tl.to(
            rdActionButton.children[1],
            {
              scaleY: 0,
              transformOrigin: "center bottom",
              ease: "power2.in",
            },
            "<0"
          )
            .to(
              rdActionButton.children[2].children[1],
              {
                opacity: 0,
                duration: 0.25,
                ease: "power2.in",
              },
              "<0"
            )
            .to(
              rdActionButton.children[2].children[0],
              {
                strokeDashoffset: 146.51326206513048,
                duration: 0.25,
                ease: "power2.inOut",
              },
              "<0.25"
            );
        }
      }

      if (project === "redian") {
        const pathOne = rdLogo.children[1];
        const pathTwo = rdLogo.children[2];
        const pathThree = rdLogo.children[3];

        tl.to(
          pathOne,
          {
            strokeDashoffset: 271.9875183105469,
            duration: 0.75,
            ease: "power4.inOut",
          },
          "<0"
        )
          .to(
            pathTwo,
            {
              strokeDashoffset: 515.9256591796875,
              duration: 0.75,
              ease: "power4.inOut",
            },
            "<0.25"
          )
          .to(
            pathThree,
            {
              strokeDashoffset: 539.1181640625,
              duration: 0.75,
              ease: "power4.inOut",
            },
            "<0.25"
          )
          .to(
            obj,
            {
              number: 0,
              duration: 0.25,
              ease: "power2.out",
              onUpdate() {
                gsap.to(rdBackground, {
                  background: `radial-gradient(circle, rgba(55, 41, 47, 1) 0%, rgba(38, 25, 31, 1) ${obj.number}%)`,
                });
              },
            },
            "<0.5"
          );
      } else if (project === "pezen") {
        const pathOne = rdLogo.children[1];
        const pathTwo = rdLogo.children[2];
        const pathThree = rdLogo.children[3];

        tl.to(
          pathOne,
          {
            strokeDashoffset: 807.5662841796875,
            duration: 0.75,
            ease: "power4.inOut",
          },
          "<0"
        )
          .to(
            pathTwo,
            {
              strokeDashoffset: 182,
              duration: 0.75,
              ease: "power4.inOut",
            },
            "<0.25"
          )
          .to(
            pathThree,
            {
              strokeDashoffset: 213.7148895263672,
              duration: 0.75,
              ease: "power4.inOut",
            },
            "<0.25"
          )
          .to(
            obj,
            {
              number: 0,
              duration: 0.25,
              ease: "power2.out",
              onUpdate() {
                gsap.to(rdBackground, {
                  background: `radial-gradient(circle, rgba(255,202,146,1) 0%, rgba(255,168,76,1) ${obj.number}%)`,
                });
              },
            },
            "<0.5"
          );
      }

      if (mode === "desktop") {
        tl.to(rdMainTitleWord, {
          x: "100%",
          duration: 0.25,
          ease: "power2.in",
          stagger: 0.125,
        })
          .to(
            rdMainTitleWordContainer,
            {
              x: "-100%",
              duration: 0.25,
              ease: "power2.in",
              stagger: 0.125,
            },
            "<0"
          )
          .to(
            rdPlaceholderTextContainer,
            {
              y: "-100%",
              duration: 0.25,
              ease: "power2.in",
            },
            "<0.25"
          )
          .to(
            rdPlaceholderText,
            {
              y: "100%",
              duration: 0.25,
              ease: "power2.in",
            },
            "<0"
          );
      } else {
        tl.to(rdMainTitleWord.reverse(), {
          y: "100%",
          duration: 0.25,
          ease: "power2.in",
          stagger: 0.125,
        })
          .to(
            rdMainTitleWordContainer.reverse(),
            {
              y: "-100%",
              duration: 0.25,
              ease: "power2.in",
              stagger: 0.125,
            },
            "<0"
          )
          .to(
            rdPlaceholderTextContainer,
            {
              y: "100%",
              duration: 0.25,
              ease: "power2.in",
            },
            "<0.25"
          )
          .to(
            rdPlaceholderText,
            {
              y: "-100%",
              duration: 0.25,
              ease: "power2.in",
            },
            "<0"
          );
      }

      if (nextProject) {
        tl.to(rdActionTextContainer, {
          x: "100%",
          duration: 0.25,
          ease: "power2.in",
        }).to(
          rdActionText,
          {
            x: "-100%",
            duration: 0.25,
            ease: "power2.in",
          },
          "<0"
        );

        if (mode === "desktop") {
          tl.to(
            rdActionButton.children[1].children[1],
            {
              opacity: 0,
              duration: 0.25,
              ease: "power2.in",
            },
            "<0"
          ).to(
            rdActionButton.children[1].children[0],
            {
              strokeDashoffset: 146.51326206513048,
              duration: 0.25,
              ease: "power2.inOut",
            },
            "<0.25"
          );
        } else {
          tl.to(
            rdActionButton.children[1],
            {
              scaleY: 0,
              transformOrigin: "center bottom",
              ease: "power2.in",
            },
            "<0"
          )
            .to(
              rdActionButton.children[2].children[1],
              {
                opacity: 0,
                duration: 0.25,
                ease: "power2.in",
              },
              "<0"
            )
            .to(
              rdActionButton.children[2].children[0],
              {
                strokeDashoffset: 146.51326206513048,
                duration: 0.25,
                ease: "power2.inOut",
              },
              "<0.25"
            );
        }

        if (nextProject === "redian") {
          tl.to(rdBackground, {
            background: "#26191f",
            duration: 0.5,
            onStart() {
              document.documentElement.style.setProperty(
                "--font-color",
                "#ede0e6"
              );
              document.documentElement.style.setProperty(
                "--background-color",
                "#26191f"
              );
              document.documentElement.style.setProperty(
                "--menu-color",
                "#21161b"
              );
            },
          });
        } else if (nextProject === "pezen") {
          tl.to(rdBackground, {
            background: "#ffa84c",
            duration: 0.5,
            onStart() {
              document.documentElement.style.setProperty(
                "--font-color",
                "#9d5524"
              );
              document.documentElement.style.setProperty(
                "--background-color",
                "#ffa84c"
              );
              document.documentElement.style.setProperty(
                "--menu-color",
                "#ffa84c"
              );
            },
          });
        }
      }

      return tl;
    },
  };

  function count(
    val: number,
    trackLength: number,
    outMin: number,
    outMax: number
  ): number {
    return (val / trackLength) * (outMax - outMin) + outMin;
  }

  function mouseMove({ x, y }: MouseEvent): void {
    const dx = count(x, window.innerWidth, -12, 12);
    const dy = count(y, window.innerHeight, -12, 12);
    gsap.to(rdLogoContainer.value, {
      rotateX: -dy,
      rotateY: dx,
    });
    gsap.to(rdTitle.value, {
      x: 1.25 * -dx,
      y: 1.25 * -dy,
    });
    gsap.to(rdPlaceholder.value, {
      x: -dx,
      y: -dy,
    });
    gsap.to(rdActionButton.value, {
      x: dx,
      y: dy,
    });
  }
  function mouseLeave(): void {
    gsap.to(rdLogoContainer.value, {
      rotateX: 0,
      rotateY: 0,
    });
    gsap.to(rdTitle.value, {
      x: 0,
      y: 0,
    });
    gsap.to(rdPlaceholder.value, {
      x: 0,
      y: 0,
    });
    gsap.to(rdActionButton.value, {
      x: 0,
      y: 0,
    });
  }

  function shuffleArray<T>(arrayOne: T[], arrayTwo: T[]): void {
    for (let i = arrayOne.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayOne[i], arrayOne[j]] = [arrayOne[j], arrayOne[i]];
      [arrayTwo[i], arrayTwo[j]] = [arrayTwo[j], arrayTwo[i]];
    }
  }

  function startTimeout(): void {
    projectChanging = false;
    const nextProject = Object.keys(projects).indexOf(activeProject.value) + 1;
    projectTimeout = gsap.to(
      rdBarContainer.value.querySelector(".rd-bar-filled"),
      {
        width: "100%",
        duration: 10,
        ease: "linear",
        onComplete() {
          selectProject(
            Object.keys(projects)[nextProject] || Object.keys(projects)[0]
          );
        },
      }
    );
  }
  function selectProject(project: string): void {
    if (
      Object.keys(projects).includes(project) &&
      !projectChanging &&
      project !== activeProject.value
    ) {
      projectChanging = true;
      mouseLeave();
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
      if (projectTimeout?.isActive) {
        projectTimeout.kill();
        projectTimeout = null;
      }
      animate.exitProject(
        baseState.viewMode,
        activeProject.value,
        rdLogo.value,
        rdBackground.value,
        rdPlaceholder.value,
        rdTitle.value,
        rdActionButton.value,
        () => {
          activeProject.value = project;
          setTimeout(init, 100);
        },
        project
      );
    }
  }

  function init(init: boolean = false): void {
    animate.initProject(
      baseState.viewMode,
      activeProject.value,
      rdLogo.value,
      rdBackground.value,
      rdPlaceholder.value,
      rdTitle.value,
      rdActionButton.value,
      () => {
        if (init) {
          emit("pin-elements");
          animate.init(
            rdHeaderTitle.value,
            rdBarContainer.value,
            rdSocialsContainer.value,
            rdWorksContainer.value
          );
        }
        if (baseState.viewMode === "desktop") {
          window.addEventListener("mousemove", mouseMove);
          window.addEventListener("mouseleave", mouseLeave);
        }
        startTimeout();
      }
    );
  }
  function exit(path: string) {
    projectChanging = true;
    if (baseState.viewMode === "desktop") {
      mouseLeave();
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
    }
    if (projectTimeout?.isActive) {
      projectTimeout.kill();
      projectTimeout = null;
    }
    animate.exitProject(
      baseState.viewMode,
      activeProject.value,
      rdLogo.value,
      rdBackground.value,
      rdPlaceholder.value,
      rdTitle.value,
      rdActionButton.value,
      () => {
        animate.exit(
          rdHeaderTitle.value,
          rdBarContainer.value,
          rdSocialsContainer.value,
          rdWorksContainer.value,
          () => {
            router.push(path);
            emit("exit-page");
          }
        );
      }
    );
  }

  watch(
    () => props.pageState,
    (val: string) => {
      if (val !== "idle") {
        exit(val);
      }
    }
  );

  onMounted(() => {
    setTimeout(() => {
      init(true);
    }, 500);
  });

  onBeforeUnmount(() => {
    emit("unpin-elements");
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseleave", mouseLeave);
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
      z-index: 1;
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
      z-index: 0;
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .rd-background {
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
          &.rd-logo-pezen {
            .rd-logo-svg,
            .rd-logo-svg-4 {
              fill: none;
              stroke-miterlimit: 10;
              stroke-width: 60px;
              stroke: #ffb96f;
            }
            .rd-logo-svg-4 {
              stroke-width: 22.5px;
            }
            .rd-logo-svg-1 {
              stroke-dashoffset: 807.5662841796875px;
              stroke-dasharray: 807.5662841796875px;
            }
            .rd-logo-svg-2 {
              stroke-dashoffset: 182px;
              stroke-dasharray: 182px;
            }
            .rd-logo-svg-3 {
              stroke-dashoffset: 213.7148895263672px;
              stroke-dasharray: 213.7148895263672px;
            }
          }
        }
      }
      .rd-details-container {
        position: relative;
        width: 100%;
        height: 80%;
        padding: 0 10vw;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .rd-title-section {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          transition: 0.05s transform ease-out;
          p.rd-placeholder {
            left: -0.05rem;
            position: relative;
            text-transform: uppercase;
          }
          h1.rd-title {
            left: -0.2rem;
            position: relative;
            margin-top: 1rem;
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
        }
        .rd-action-section {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          transition: 0.05s transform ease-out;
          .rd-action-button {
            cursor: pointer;
            position: relative;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            span.rd-action-name {
              position: relative;
              text-transform: uppercase;
              transition: 0.25s color;
              margin-right: 1rem;
            }
            svg.rd-circle {
              position: relative;
              width: 2rem;
              height: 2rem;
              * {
                pointer-events: none;
              }
              .rd-circle-1 {
                fill: none;
                stroke: var(--font-color);
                stroke-width: 2px;
                stroke-dashoffset: 146.51326206513048px;
                stroke-dasharray: 146.51326206513048px;
              }
              .rd-circle-2 {
                fill: var(--font-color);
                opacity: 0;
              }
            }
          }
        }
      }
    }
    .rd-footer {
      z-index: 1;
      position: absolute;
      bottom: 1.75rem;
      width: 100vw;
      height: 1.5rem;
      padding: 0 2rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .rd-social-container,
      .rd-works-container {
        position: relative;
        height: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .rd-social,
        .rd-works {
          cursor: pointer;
          position: relative;
          width: 2rem;
          height: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.2s opacity linear;
          overflow: hidden;
        }
        .rd-works {
          width: auto;
          height: 1rem;
          justify-content: flex-end;
        }
      }
      .rd-bar-container {
        position: absolute;
        left: 37.5vw;
        width: 25vw;
        height: 6px;
        display: flex;
        gap: 0.5rem;
        flex-shrink: 0;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        .rd-bar {
          cursor: pointer;
          position: relative;
          width: 0;
          height: 100%;
          overflow: hidden;
          display: flex;
          flex-shrink: 1;
          justify-content: flex-start;
          align-items: center;
          .rd-bar-filled {
            pointer-events: none;
            position: absolute;
            top: 2px;
            left: 0;
            width: 0;
            height: 2px;
            border-radius: 1px;
            background: var(--font-color);
          }
          &::before {
            content: "";
            position: relative;
            width: 100%;
            height: 2px;
            border-radius: 1px;
            background: var(--font-color);
            opacity: 0.25;
            transition: 0.2s opacity linear;
          }
          &.rd-bar-active::before {
            opacity: 0.5;
          }
        }
      }
    }
    @media screen and (max-width: 1024px) {
      .rd-body {
        .rd-logo-container {
          width: 100vw;
          svg.rd-logo {
            width: 21.36231774vh;
            height: 30vh;
          }
        }
        .rd-details-container {
          position: absolute;
          top: 0;
          left: 0;
          height: 100vh;
          height: calc((var(--vh, 1vh) * 100));
          padding-top: 4rem;
          box-sizing: border-box;
          flex-direction: column;
          align-items: center;
          .rd-title-section {
            height: calc(27.5vh - 4rem);
            justify-content: center;
            align-items: center;
            p.rd-placeholder {
              left: 0;
              text-align: center;
            }
            h1.rd-title {
              left: 0;
              text-align: center;
              align-items: center;
              margin-top: 0.5rem;
            }
          }
          .rd-action-section {
            height: 27.5vh;
            padding-bottom: 2rem;
            box-sizing: border-box;
            justify-content: center;
            .rd-action-button {
              flex-direction: column;
              justify-content: flex-start;
              span.rd-action-name {
                margin: 0;
              }
              span.line {
                position: relative;
                width: 1px;
                height: 1.25rem;
                margin: calc(0.75rem - 2px) 0 0.75rem 0;
                background: var(--font-color);
                transform: scaleY(0);
                transform-origin: center top;
              }
              svg.rd-circle {
                width: 1.5rem;
                height: 1.5rem;
              }
            }
          }
        }
      }
      .rd-footer {
        bottom: 0.5rem;
        .rd-social-container {
          display: none;
        }
        .rd-bar-container {
          left: 25vw;
          width: 50vw;
        }
      }
    }
  }
</style>
