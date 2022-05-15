<template>
  <div class="rd-container">
    <div class="rd-body">
      <div class="rd-work-description">
        <div class="rd-work-type-container">
          <span
            v-for="(project, i) in projects"
            :class="activeIndex === i ? 'rd-work-active' : ''"
            :key="project.title"
            ref="rdWorkType"
            class="rd-work-type rd-caption-text"
          >
            <span class="rd-word-wrapper">
              <span class="rd-word-container rd-word-container-down">
                <span class="rd-word">{{ project.type }}</span>
              </span>
            </span>
          </span>
        </div>
        <div class="rd-work-title-container">
          <span
            v-for="(project, i) in projects"
            :class="activeIndex === i ? 'rd-work-active' : ''"
            :key="project.title"
            ref="rdWorkTitle"
            class="rd-work-title rd-headline-1"
          >
            <span
              v-for="(letter, j) in project.title"
              :key="j"
              class="rd-letter-wrapper"
            >
              <span class="rd-letter-container rd-letter-container-down">
                <span class="rd-letter">{{ letter }}</span>
              </span>
            </span>
          </span>
        </div>
      </div>
      <div class="rd-work-slider" ref="rdWorkSlider">
        <div v-for="(n, i) in projects" :key="i" class="rd-work" ref="rdWork">
          <span class="rd-image-wrapper">
            <span class="rd-image-container rd-image-container-down">
              <img
                class="rd-image"
                :src="`/about-photo-${i + 1}.jpg`"
                :class="i === activeIndex ? 'rd-image-active' : ''"
              />
            </span>
          </span>
        </div>
      </div>
      <div class="rd-work-details">
        <div ref="rdWorkTags" class="rd-work-tags">
          <div class="rd-work-tags-row">
            <div class="rd-work-tag rd-placeholder-text">
              <span class="rd-text-wrapper">
                <span class="rd-text-container rd-text-container-down">
                  <span class="rd-text">Website</span>
                </span>
              </span>
            </div>
            <div class="rd-work-tag-divider"></div>
            <div class="rd-work-tag rd-placeholder-text">
              <span class="rd-text-wrapper">
                <span class="rd-text-container rd-text-container-down">
                  <span class="rd-text">Application</span>
                </span>
              </span>
            </div>
          </div>
          <div class="rd-work-tags-row">
            <div class="rd-work-tag rd-placeholder-text">
              <span class="rd-text-wrapper">
                <span class="rd-text-container rd-text-container-down">
                  <span class="rd-text">Branding</span>
                </span>
              </span>
            </div>
            <div class="rd-work-tag-divider"></div>
            <div class="rd-work-tag rd-placeholder-text">
              <span class="rd-text-wrapper">
                <span class="rd-text-container rd-text-container-down">
                  <span class="rd-text">Advertising</span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div
          v-for="(n, i) in projects"
          :key="i"
          ref="rdWorkAction"
          class="rd-action-button"
          :style="activeIndex !== i ? 'pointer-events: none' : ''"
        >
          <span class="rd-action-name rd-caption-text">
            <span class="rd-text-wrapper">
              <span class="rd-text-container rd-text-container-down">
                <span class="rd-text">Telusuri</span>
              </span>
            </span>
          </span>
          <span class="line"></span>
          <svg
            class="rd-circle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            data-pin="link"
          >
            <circle class="rd-circle-1" cx="24" cy="24" r="23" />
            <circle class="rd-circle-2" cx="24" cy="24" r="3" />
          </svg>
        </div>
        <div class="rd-work-captions">
          <div
            ref="rdWorkCaptions"
            v-for="(project, i) in projects"
            :key="i"
            class="rd-work-caption-wrapper"
          >
            <div
              v-for="(caption, j) in project.caption"
              :key="j"
              class="rd-work-caption rd-placeholder-text"
            >
              <span class="rd-text-wrapper">
                <span class="rd-text-container rd-text-container-down">
                  <span class="rd-text">{{ caption }}</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { gsap } from "gsap";
  import { ComputedRef } from "vue";

  import { baseStore } from "../../store/base";

  const baseState = baseStore.getState();
  const props = defineProps<{ pageState: string }>();
  const emit = defineEmits(["pin-elements", "unpin-elements", "exit-page"]);

  const prevIndex = ref<number>(-1);
  const activeIndex = ref<number>(-1);
  const activeAnim = ref<GSAPTimeline>(null);

  const rdWork = ref<HTMLDivElement[]>(null);
  const rdWorkType = ref<HTMLSpanElement[]>(null);
  const rdWorkTitle = ref<HTMLSpanElement[]>(null);
  const rdWorkAction = ref<HTMLDivElement[]>(null);
  const rdWorkTags = ref<HTMLDivElement>(null);
  const rdWorkCaptions = ref<HTMLDivElement>(null);
  const rdWorkSlider = ref<HTMLDivElement>(null);

  const projects = [
    {
      route: "/work/redian",
      title: "Redian",
      type: "Branding",
      tags: ["branding", "website", "advertising"],
      caption: [
        "Lorem ipsum dolor sit amet",
        "adipiscing elit. Proin gravida ac dui",
      ],
    },
    {
      route: "/work/pezen",
      title: "Pezen",
      type: "Application",
      tags: ["branding", "website", "application", "advertising"],
      caption: [
        "ut congue. Donec a tellus ligula.",
        "Quisque odio tellus, tincidunt",
      ],
    },
    {
      route: "/work/otmilti",
      title: "Otmilti",
      type: "Website",
      tags: ["website"],
      caption: [
        "vitae, blandit nec quam. Cras",
        "und amet sit dolor Ipsum Lorem",
      ],
    },
  ];
  const slide: {
    isSliding: boolean;
    currEvent: MouseEvent | TouchEvent;
    lastEvent: MouseEvent | TouchEvent;
    interval: NodeJS.Timer;
    multiplier: number;
    rawVelocity: number;
    velocity: number;
    movementX: number;
    totalMovementX: number;
    snapPos: number;
    snapPosDist: number;
    timeout: NodeJS.Timeout;
    timedOut: boolean;
  } = {
    isSliding: false,
    currEvent: null,
    lastEvent: null,
    interval: null,
    multiplier: null,
    rawVelocity: null,
    velocity: null,
    movementX: null,
    totalMovementX: null,
    snapPos: null,
    snapPosDist: null,
    timeout: null,
    timedOut: false,
  };

  const rem: ComputedRef<number> = computed((): number =>
    typeof getComputedStyle === "function"
      ? parseInt(getComputedStyle(document.body).fontSize)
      : 0
  );
  const step: ComputedRef<number> = computed((): number =>
    baseState.viewMode === "desktop"
      ? (window ? window.innerWidth : 1920) * 0.4 + 8 * (rem.value || 24)
      : (window ? window.innerWidth : 1024) - 2 * (rem.value || 24)
  );
  const trackLength: ComputedRef<number> = computed(
    (): number => step.value * (projects.length - 1)
  );
  const accelMultiplier: ComputedRef<number> = computed((): number =>
    baseState.viewMode === "desktop" ? 0.025 : 0.1
  );

  const animate = {
    init(
      mode: "desktop" | "mobile",
      rdWorkSlider: Element,
      rdWorkTags: Element,
      cb?: () => void
    ): void {
      const tl = gsap.timeline({
        onComplete() {
          // rdImage.forEach((a) => a.removeAttribute('style'))
          if (cb) cb();
        },
      });

      const rdImageContainer: Element[] = gsap.utils.toArray(
        rdWorkSlider.querySelectorAll(".rd-image-container")
      );
      const rdImage: Element[] = gsap.utils.toArray(
        rdWorkSlider.querySelectorAll(".rd-image")
      );
      const rdTagsDivider: Element[] = gsap.utils.toArray(
        rdWorkTags.querySelectorAll(".rd-work-tag-divider")
      );
      const rdTagsContainer: Element[] = gsap.utils.toArray(
        rdWorkTags.querySelectorAll(".rd-text-container")
      );
      const rdTags: Element[] = gsap.utils.toArray(
        rdWorkTags.querySelectorAll(".rd-text")
      );

      tl.to(rdImageContainer, {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: mode === "desktop" ? 0.125 : 0,
      })
        .to(
          rdImage,
          {
            y: 0,
            scale: 1.25,
            duration: 0.5,
            ease: "power2.out",
            stagger: mode === "desktop" ? 0.125 : 0,
          },
          "<0"
        )
        .to(
          rdTagsDivider,
          {
            scaleX: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          rdTagsContainer,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          rdTags,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        );
    },
    initProject(
      rdWorkType: Element,
      rdWorkTitle: Element,
      rdWorkAction: Element,
      rdWorkCaptions: Element,
      cb?: () => void
    ): GSAPTimeline {
      const tl = gsap.timeline({
        onComplete() {
          if (cb) cb();
        },
      });

      const rdWordContainer: Element[] = gsap.utils.toArray(
        rdWorkType.querySelectorAll(".rd-word-container")
      );
      const rdWord: Element[] = gsap.utils.toArray(
        rdWorkType.querySelectorAll(".rd-word")
      );
      const rdLetterContainer: Element[] = gsap.utils.toArray(
        rdWorkTitle.querySelectorAll(".rd-letter-container")
      );
      const rdLetter: Element[] = gsap.utils.toArray(
        rdWorkTitle.querySelectorAll(".rd-letter")
      );
      const rdActionTextContainer: Element[] = gsap.utils.toArray(
        rdWorkAction.querySelectorAll(".rd-text-container")
      );
      const rdActionText: Element[] = gsap.utils.toArray(
        rdWorkAction.querySelectorAll(".rd-text")
      );
      const rdCaptionTextContainer: Element[] = gsap.utils.toArray(
        rdWorkCaptions.querySelectorAll(".rd-text-container")
      );
      const rdCaptionText: Element[] = gsap.utils.toArray(
        rdWorkCaptions.querySelectorAll(".rd-text")
      );

      tl.to(rdActionTextContainer, {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
        .to(
          rdActionText,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdWorkAction.children[1],
          {
            scaleY: 1,
            transformOrigin: "center top",
            duration: 0.5,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdWorkAction.children[2].children[0],
          {
            strokeDashoffset: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<0"
        )
        .to(
          rdWorkAction.children[2].children[1],
          {
            opacity: 0.5,
            duration: 0.5,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdCaptionTextContainer,
          {
            y: 0,
            duration: 0.5,
            stagger: 0.25,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdCaptionText,
          {
            y: 0,
            duration: 0.5,
            stagger: 0.25,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdWordContainer,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdWord,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdLetterContainer,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          rdLetter,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        );

      return tl;
    },
    exitProject(
      rdWorkType: Element,
      rdWorkTitle: Element,
      rdWorkAction: Element,
      rdWorkCaptions: Element,
      cb?: () => void
    ): GSAPTimeline {
      const tl = gsap.timeline({
        onComplete() {
          gsap.to(
            [
              ...rdWordContainer,
              ...rdLetterContainer,
              ...rdActionTextContainer,
              ...rdCaptionTextContainer,
            ],
            {
              y: "100%",
              duration: 0,
            }
          );
          gsap.to([...rdWord, ...rdLetter, ...rdActionText, ...rdCaptionText], {
            y: "-100%",
            duration: 0,
          });
          gsap.to(rdWorkAction.children[2], {
            rotateX: 0,
            duration: 0,
          });
          if (cb) cb();
        },
      });

      const rdWordContainer: Element[] = gsap.utils.toArray(
        rdWorkType.querySelectorAll(".rd-word-container")
      );
      const rdWord: Element[] = gsap.utils.toArray(
        rdWorkType.querySelectorAll(".rd-word")
      );
      const rdLetterContainer: Element[] = gsap.utils.toArray(
        rdWorkTitle.querySelectorAll(".rd-letter-container")
      );
      const rdLetter: Element[] = gsap.utils.toArray(
        rdWorkTitle.querySelectorAll(".rd-letter")
      );
      const rdActionTextContainer: Element[] = gsap.utils.toArray(
        rdWorkAction.querySelectorAll(".rd-text-container")
      );
      const rdActionText: Element[] = gsap.utils.toArray(
        rdWorkAction.querySelectorAll(".rd-text")
      );
      const rdCaptionTextContainer: Element[] = gsap.utils.toArray(
        rdWorkCaptions.querySelectorAll(".rd-text-container")
      );
      const rdCaptionText: Element[] = gsap.utils.toArray(
        rdWorkCaptions.querySelectorAll(".rd-text")
      );

      tl.to(
        rdWorkAction.children[2],
        {
          rotateX: 180,
          duration: 0,
        },
        "<0"
      )
        .to(rdActionTextContainer, {
          y: "-100%",
          duration: 0.5,
          ease: "power2.out",
        })
        .to(
          rdActionText,
          {
            y: " 100%",
            duration: 0.5,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdWorkAction.children[1],
          {
            scaleY: 0,
            transformOrigin: "center bottom",
            duration: 0.5,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdWorkAction.children[2].children[0],
          {
            strokeDashoffset: 146.51326206513048,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<0"
        )
        .to(
          rdWorkAction.children[2].children[1],
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdCaptionTextContainer,
          {
            y: "-100%",
            duration: 0.5,
            stagger: 0.25,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdCaptionText,
          {
            y: "100%",
            duration: 0.5,
            stagger: 0.25,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdWordContainer,
          {
            y: "-100%",
            duration: 0.5,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdWord,
          {
            y: "100%",
            duration: 0.5,
            ease: "power2.out",
          },
          "<0"
        )
        .to(
          rdLetterContainer,
          {
            y: "-100%",
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          rdLetter,
          {
            y: "100%",
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        );

      return tl;
    },
  };

  function replaceEvent(e: MouseEvent | TouchEvent): void {
    slide.currEvent = e;
  }

  function slideStart(): void {
    if (baseState.viewMode === "desktop") {
      document.documentElement.addEventListener("mousemove", replaceEvent);
    } else {
      document.documentElement.addEventListener("touchmove", replaceEvent);
    }

    slide.isSliding = true;
    slide.currEvent = null;
    slide.lastEvent = null;
    slide.multiplier = null;
    slide.rawVelocity = null;
    slide.velocity = null;
    slide.movementX = null;
    slide.totalMovementX = null;
    slide.snapPos = null;
    slide.snapPosDist = null;
    slide.timedOut = false;

    slide.timeout = setTimeout(() => {
      slide.timedOut = true;
    }, 500);

    slide.interval = setInterval(() => {
      if (slide.currEvent && slide.lastEvent) {
        const { x } = rdWorkSlider.value.getBoundingClientRect();

        if (activeIndex.value !== -1) exitProject();
        if (
          slide.currEvent instanceof MouseEvent &&
          slide.lastEvent instanceof MouseEvent
        ) {
          slide.movementX = slide.currEvent.x - slide.lastEvent.x;
        } else if (
          slide.currEvent instanceof TouchEvent &&
          slide.lastEvent instanceof TouchEvent
        ) {
          slide.movementX =
            slide.currEvent.touches[0].clientX -
            slide.lastEvent.touches[0].clientX;
        }
        slide.totalMovementX += slide.movementX;
        slide.rawVelocity = slide.movementX * 60;
        if (Math.abs(slide.rawVelocity) >= 3600) {
          slide.rawVelocity = slide.rawVelocity > 0 ? 3600 : -3600;
        }

        if (baseState.viewMode === "desktop") {
          slide.multiplier =
            Math.abs(slide.rawVelocity) >= 60 ? 1 : slide.multiplier * 0.99;
          if (slide.multiplier <= 0.001) slide.multiplier = 0;
          if (slide.rawVelocity) {
            slide.velocity = slide.rawVelocity;
          } else {
            slide.velocity *= slide.multiplier;
          }

          if (
            (x >= 0 && slide.velocity > 0) ||
            (x <= -trackLength.value && slide.velocity < 0)
          )
            slide.velocity *= 0.25;
          gsap.to(rdWorkSlider.value, {
            x: `+=${slide.velocity / 60}`,
            duration: 0,
          });
        } else {
          if (
            (x >= 0 && slide.rawVelocity > 0) ||
            (x <= -trackLength.value && slide.rawVelocity < 0)
          )
            slide.rawVelocity *= 0.25;
          gsap.to(rdWorkSlider.value, {
            x: `+=${slide.rawVelocity / 60}`,
            duration: 0,
          });
        }
      }
      slide.lastEvent = slide.currEvent;
    }, 50 / 3);
  }

  function slideStop() {
    slide.isSliding = false;
    slide.currEvent = null;
    slide.lastEvent = null;
    slide.multiplier = null;
    slide.movementX = null;
    slide.timedOut = false;
    clearTimeout(slide.timeout);
    clearInterval(slide.interval);

    movementHandler();

    if (baseState.viewMode === "desktop") {
      document.documentElement.removeEventListener("mousemove", replaceEvent);
    } else {
      document.documentElement.removeEventListener("touchmove", replaceEvent);
    }
  }

  function movementHandler(): void {
    if (!slide.isSliding) {
      const { x } = rdWorkSlider.value.getBoundingClientRect();
      if (slide.totalMovementX) {
        if (!slide.snapPos) {
          const dist = x + slide.velocity * 0.208623872;
          let index = -1;
          if (dist >= 0) {
            index = 0;
            slide.snapPos = 0;
          } else if (dist <= -trackLength.value) {
            index = Math.round(dist / step.value);
            slide.snapPos = -trackLength.value;
          } else if (!slide.timedOut) {
            index =
              slide.velocity < 0
                ? Math.floor(dist / step.value)
                : Math.ceil(dist / step.value);
            slide.snapPos = index * step.value;
          } else {
            index = Math.round(dist / step.value);
            slide.snapPos = index * step.value;
          }
          initProject(Math.abs(index));
          slide.snapPosDist = slide.snapPos - x;
        }
        if (Math.abs(slide.snapPosDist) > 0.1) {
          requestAnimationFrame(movementHandler);
          slide.snapPosDist = slide.snapPos - x;
          slide.movementX = slide.snapPosDist * accelMultiplier.value;
          gsap.to(rdWorkSlider.value, {
            x: `+=${slide.movementX}`,
            duration: 0,
          });
        } else {
          gsap.to(rdWorkSlider.value, {
            x: `+=${slide.snapPosDist}`,
            duration: 0,
          });
        }
      } else if (activeIndex.value !== -1) {
        if (!slide.snapPos) {
          slide.snapPos = -activeIndex.value * step.value;
          slide.snapPosDist = slide.snapPos - x;
        }
        if (Math.abs(slide.snapPosDist) > 0.1) {
          requestAnimationFrame(movementHandler);
          slide.snapPosDist = slide.snapPos - x;
          slide.movementX = slide.snapPosDist * 0.025;
          gsap.to(rdWorkSlider.value, {
            x: `+=${slide.movementX}`,
            duration: 0,
          });
        } else {
          gsap.to(rdWorkSlider.value, {
            x: `+=${slide.snapPosDist}`,
            duration: 0,
          });
        }
      }
    }
  }

  function initProject(index: number): void {
    if (projects[index] && activeIndex.value === -1) {
      activeIndex.value = index;
      if (activeAnim.value && activeIndex.value === prevIndex.value)
        activeAnim.value.kill();
      activeAnim.value = animate.initProject(
        rdWorkType.value[index],
        rdWorkTitle.value[index],
        rdWorkAction.value[activeIndex.value],
        rdWorkCaptions.value[activeIndex.value],
        () => {
          activeAnim.value = null;
        }
      );
    }
  }

  function exitProject(): void {
    if (activeIndex.value !== -1) {
      gsap.to(rdWork.value[activeIndex.value], {
        rotateX: 0,
        rotateY: 0,
      });
      gsap.to(rdWorkAction.value[activeIndex.value], {
        x: 0,
        y: 0,
      });
      if (activeAnim.value) activeAnim.value.kill();
      activeAnim.value = animate.exitProject(
        rdWorkType.value[activeIndex.value],
        rdWorkTitle.value[activeIndex.value],
        rdWorkAction.value[activeIndex.value],
        rdWorkCaptions.value[activeIndex.value],
        () => {
          activeAnim.value = null;
        }
      );
      prevIndex.value = activeIndex.value;
      activeIndex.value = -1;
    }
  }

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
    if (activeIndex.value !== -1) {
      gsap.to(rdWork.value[activeIndex.value], {
        rotateX: -dy,
        rotateY: dx,
      });
      gsap.to(rdWorkAction.value[activeIndex.value], {
        x: 0.5 * dx,
        y: 0.5 * dy,
      });
    }
    gsap.to(rdWorkType.value, {
      x: dx,
      y: dy,
    });
    gsap.to(rdWorkTitle.value, {
      x: 0.5 * dx,
      y: 0.5 * dy,
    });
  }
  function mouseLeave(): void {
    gsap.to(rdWorkType.value, {
      x: 0,
      y: 0,
    });
    gsap.to(rdWorkTitle.value, {
      x: 0,
      y: 0,
    });
  }

  onMounted(() => {
    setTimeout(() => {
      animate.init(
        baseState.viewMode,
        rdWorkSlider.value,
        rdWorkTags.value,
        () => {
          initProject(0);
          if (baseState.viewMode === "desktop") {
            rdWorkSlider.value.addEventListener("mousedown", slideStart);
            document.documentElement.addEventListener("mouseup", slideStop);
            window.addEventListener("mousemove", mouseMove);
            window.addEventListener("mouseleave", mouseLeave);
            emit("pin-elements");
          } else {
            rdWorkSlider.value.addEventListener("touchstart", slideStart);
            document.documentElement.addEventListener("touchend", slideStop);
          }
        }
      );
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
    .rd-body {
      position: relative;
      width: 100vw;
      height: 100vh;
      height: calc((var(--vh, 1vh) * 100));
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .rd-work-description {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 27.5vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .rd-work-type-container {
          position: relative;
          height: 0.75rem;
          display: flex;
          justify-content: center;
          align-items: center;
          span.rd-work-type {
            position: absolute;
            height: 0.75rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
        .rd-work-title-container {
          position: relative;
          height: 3rem;
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          span.rd-work-title {
            position: absolute;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .rd-work-slider {
        position: absolute;
        top: 27.5vh;
        left: 0;
        height: 45vh;
        padding: 0 calc(30vw - 4rem);
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .rd-work {
          position: relative;
          width: 40vw;
          height: 45vh;
          margin: 0 4rem;
          display: flex;
          flex-shrink: 0;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          overflow: hidden;
          transition: 0.05s transform ease-out;
          transform: perspective(1000px);
          // img.rd-image {
          //   transform: scale(1.25);
          //   transition: transform 0.75s cubic-bezier(0.77, 0, 0.175, 1);
          //   &.rd-image-active {
          //     transition: transform 1s cubic-bezier(0.215, 0.61, 0.355, 1);
          //     transform: scale(1);
          //   }
          // }
        }
      }
      .rd-work-details {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 27.5vh;
        box-sizing: border-box;
        padding: 0 30vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .rd-work-tags {
          position: relative;
          height: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          .rd-work-tags-row {
            position: relative;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .rd-work-tag {
              text-transform: uppercase;
            }
            .rd-work-tag-divider {
              position: relative;
              width: 1rem;
              height: 2px;
              margin: 0 0.75rem;
              background: var(--font-color);
              opacity: 0.5;
              transform: scaleX(0);
              transform-origin: center left;
            }
          }
        }
        .rd-action-button {
          cursor: pointer;
          position: absolute;
          left: 50%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          transform: translateX(-50%);
          span.rd-action-name {
            position: relative;
            text-transform: uppercase;
            transition: 0.25s color;
          }
          span.line {
            position: relative;
            width: 1px;
            height: 1.25rem;
            margin: calc(0.75rem - 2px) 0 0.75rem 0;
            background: var(--font-color);
            opacity: 0.5;
            transform: scaleY(0);
            transform-origin: center top;
          }
          svg.rd-circle {
            position: relative;
            width: 1.5rem;
            height: 1.5rem;
            transform: rotate(-90deg);
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
        .rd-work-captions {
          position: relative;
          height: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          .rd-work-caption-wrapper {
            position: absolute;
            right: 0;
            bottom: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            .rd-work-caption {
              position: relative;
              line-height: 1.375;
              text-align: right;
              white-space: nowrap;
            }
          }
        }
      }
      .rd-work-active {
        z-index: 10;
      }
    }
    @media screen and (max-width: 1024px) {
      .rd-body {
        .rd-work-description {
          padding-top: 4rem;
          box-sizing: border-box;
          .rd-work-title-container {
            margin-top: 0.5rem;
            height: 1.5rem;
            span.rd-work-title {
              height: 1.5rem;
            }
          }
        }
        .rd-work-slider {
          padding: 0 1rem;
          .rd-work {
            width: calc(100vw - 4rem);
            margin: 0 1rem;
          }
        }
        .rd-work-details {
          .rd-work-tags {
            display: none;
          }
          .rd-work-captions {
            display: none;
          }
        }
      }
    }
  }
</style>
