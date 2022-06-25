<template>
  <div class="rd-container" ref="rdContainer">
    <div class="rd-jumbotron" ref="rdJumbotron">
      <span class="rd-description-placeholder rd-caption-text">
        <span class="rd-text-wrapper">
          <span class="rd-text-container rd-text-container-down">
            <span class="rd-text">Tentang kami</span>
          </span>
        </span>
      </span>
      <h1 class="rd-description-title rd-headline-1">
        <span
          v-for="(n, i) in structure.title.split(' ')"
          :key="i"
          class="rd-word-wrapper"
        >
          <span class="rd-word-container rd-word-container-down">
            <span class="rd-word">{{ n }}</span>
          </span>
        </span>
      </h1>
      <p class="rd-description rd-body-text">
        <span
          v-for="(n, i) in structure.description.split(' ')"
          :key="i"
          class="rd-word-wrapper"
        >
          <span class="rd-word-container rd-word-container-down">
            <span class="rd-word">{{ n }}</span>
          </span>
        </span>
      </p>
    </div>
    <div class="rd-image-full-container">
      <span class="rd-image-wrapper">
        <span class="rd-image-container rd-image-container-left">
          <img class="rd-image" :src="structure.image" data-scrub="parallax" />
        </span>
      </span>
    </div>
    <div
      v-for="(content, i) in structure.contents"
      ref="rdContents"
      :data-type="content.type"
      :key="i"
      :class="content.type"
    >
      <div
        v-if="content.type === 'rd-chapter'"
        class="rd-chapter-details-container"
      >
        <span class="rd-chapter-subtitle rd-headline-5">
          <span class="rd-text-wrapper">
            <span class="rd-text-container rd-text-container-down">
              <span class="rd-text">{{ content.subtitle }}</span>
            </span>
          </span>
        </span>
      </div>
      <div
        v-if="content.type === 'rd-chapter'"
        class="rd-chapter-description-container"
      >
        <h2 class="rd-chapter-title rd-headline-2">
          <span
            v-for="(n, i) in content.title.split(' ')"
            :key="i"
            class="rd-word-wrapper"
          >
            <span class="rd-word-container rd-word-container-down">
              <span class="rd-word">{{ n }}</span>
            </span>
          </span>
        </h2>
        <p class="rd-chapter-description rd-body-text">
          <span
            v-for="(n, i) in content.description.split(' ')"
            :key="i"
            class="rd-word-wrapper"
          >
            <span class="rd-word-container rd-word-container-down">
              <span class="rd-word">{{ n }}</span>
            </span>
          </span>
        </p>
      </div>
      <div
        v-if="content.type === 'rd-chapter-alternative'"
        class="rd-chapter-alternative-title-container"
      >
        <h3
          class="rd-chapter-alternative-title"
          :class="
            baseState.viewMode === 'desktop' ? 'rd-headline-3' : 'rd-headline-2'
          "
        >
          <span
            v-for="(n, i) in content.title.split(' ')"
            :key="i"
            class="rd-word-wrapper"
          >
            <span class="rd-word-container rd-word-container-down">
              <span class="rd-word">{{ n }}</span>
            </span>
          </span>
        </h3>
      </div>
      <div
        v-if="content.type === 'rd-chapter-alternative'"
        class="rd-chapter-alternative-description-container"
      >
        <p class="rd-chapter-alternative-description rd-body-text">
          <span
            v-for="(n, i) in content.description.split(' ')"
            :key="i"
            class="rd-word-wrapper"
          >
            <span class="rd-word-container rd-word-container-down">
              <span class="rd-word">{{ n }}</span>
            </span>
          </span>
        </p>
      </div>
      <div
        v-if="content.type === 'rd-picture-full'"
        class="rd-image-full-container"
      >
        <span class="rd-image-wrapper">
          <span class="rd-image-container rd-image-container-left">
            <img class="rd-image" :src="content.image" data-scrub="parallax" />
          </span>
        </span>
      </div>
      <div
        v-if="content.type === 'rd-picture-large'"
        class="rd-image-large-container"
      >
        <span class="rd-image-wrapper">
          <span class="rd-image-container rd-image-container-left">
            <img class="rd-image" :src="content.image" data-scrub="parallax" />
          </span>
        </span>
      </div>
      <div
        v-if="content.type === 'rd-gallery'"
        class="rd-image-gallery-container"
      >
        <div
          v-for="(col, j) in content.images"
          :key="j"
          class="rd-image-gallery-column"
        >
          <span v-for="(image, k) in col" :key="k" class="rd-image-wrapper">
            <span
              class="rd-image-container"
              :class="
                baseState.viewMode === 'desktop'
                  ? 'rd-image-container-down'
                  : 'rd-image-container-left'
              "
            >
              <img class="rd-image" :src="image" data-scrub="parallax" />
            </span>
          </span>
        </div>
      </div>
    </div>
    <div ref="rdFooter" class="rd-footer">
      <div class="rd-footer-container" data-scrub="parallax-footer">
        <span class="rd-footer-placeholder rd-caption-text">
          Punya ide bisnis?
        </span>
        <h1 class="rd-footer-title rd-headline-1">Mari bicara bersama kami</h1>
        <div class="rd-action-button" data-pin="link">
          <span class="rd-action-name rd-caption-text">Hubungi Kami</span>
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
</template>

<script lang="ts" setup>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Scrollbar from "smooth-scrollbar";

  import { baseStore } from "../../store/base";

  useHead({
    title: "Tentang Kami"
  })

  const baseState = baseStore.getState();
  const props = defineProps<{ pageState: string }>();
  const emit = defineEmits(["pin-elements", "unpin-elements", "exit-page"]);
  const router = useRouter();

  const bodyScrollbar = ref<Scrollbar>(null);

  const rdContainer = ref<HTMLDivElement>(null);
  const rdJumbotron = ref<HTMLDivElement>(null);
  const rdContents = ref<HTMLDivElement[]>(null);

  interface StructureContents {
    type:
      | "rd-chapter"
      | "rd-picture-full"
      | "rd-picture-large"
      | "rd-chapter-alternative"
      | "rd-gallery";
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    images?: string[][];
  }

  interface Structure {
    title: string;
    description: string;
    image: string;
    contents: StructureContents[];
  }

  const structure: Structure = {
    title: 'Digitizing the World Through Innovation',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    image: '/about-photo-1.jpg',
    contents: [
      {
        type: "rd-chapter-alternative",
        title: "A streamlined user experience",
        description:
          "One of the key objectives for the Optimal Dynamics website was to educate potential customers with clear and concise messaging. Starting with the homepage landing experience we collaborated with their marketing team to develop an effective content strategy and streamlined user experience.",
      },
      {
        type: "rd-gallery",
        images: [
          ["/about-photo-1.jpg"],
          ["/about-photo-2.jpg"]
        ],
      },
    ]
  }

  const animate = {
    init(rdJumbotron: HTMLElement, cb?: () => void): GSAPTimeline {
      const tl = gsap.timeline({
        paused: true,
        onComplete() {
          if (cb) cb();
        },
      });

      const rdTitleWordContainer: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll("h1.rd-description-title .rd-word-container")
      );
      const rdTitleWord: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll("h1.rd-description-title .rd-word")
      );
      const rdDescriptionWordContainer: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll("p.rd-description .rd-word-container")
      );
      const rdDescriptionWord: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll("p.rd-description .rd-word")
      );
      const rdTextContainer: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll(".rd-text-container")
      );
      const rdText: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll(".rd-text")
      );
      const rdImageContainer: Element[] = gsap.utils.toArray(
        rdJumbotron.nextElementSibling.querySelectorAll(".rd-image-container")
      );
      const rdImage: Element[] = gsap.utils.toArray(
        rdJumbotron.nextElementSibling.querySelectorAll(".rd-image")
      );
      

      tl.to(
          rdTitleWordContainer.reverse(),
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0.25"
        )
        .to(
          rdTitleWord.reverse(),
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        )
        .to(
          rdTextContainer,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0.25"
        )
        .to(
          rdText,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          },
          "<0"
        ).to(
          rdDescriptionWordContainer,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.005,
          },
          "<0.25"
        )
        .to(
          rdDescriptionWord,
          {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.005,
          },
          "<0"
        ).to(rdImageContainer, {
          x: 0,
          duration: 1,
          ease: "power4.inOut",
        }, "<0.25")
          .to(
            rdImage,
            {
              x: 0,
              duration: 1,
              ease: "power4.inOut",
            },
            "<0"
          );

      return tl;
    },
    exit(rdContainer: HTMLElement, cb?: () => void): void {
      const tl = gsap.timeline({
        onComplete() {
          if (cb) cb();
        },
      });

      tl.to(rdContainer, {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.out'
      })
    },
    reveal(rdContents: HTMLElement[]): void {
      for (const rdContent of rdContents) {
        const type: string = rdContent.dataset.type;

        if (type === "rd-chapter") {
          const tl: GSAPTimeline = gsap.timeline({
            scrollTrigger: {
              start: "top 75%",
              trigger: rdContent,
            },
          });

          const rdSubtitleTextContainer: HTMLElement = rdContent.querySelector(
            ".rd-chapter-subtitle .rd-text-container"
          );
          const rdSubtitleText: HTMLElement = rdContent.querySelector(
            ".rd-chapter-subtitle .rd-text"
          );
          const rdTitleWordContainer: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-chapter-title .rd-word-container")
          );
          const rdTitleWord: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-chapter-title .rd-word")
          );
          const rdDescriptionWordContainer: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(
              ".rd-chapter-description .rd-word-container"
            )
          );
          const rdDescriptionWord: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-chapter-description .rd-word")
          );

          tl.to(rdSubtitleTextContainer, {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          })
            .to(
              rdSubtitleText,
              {
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              },
              "<0"
            )
            .to(
              rdTitleWordContainer,
              {
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.125,
              },
              "<0.25"
            )
            .to(
              rdTitleWord,
              {
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.125,
              },
              "<0"
            )
            .to(
              rdDescriptionWordContainer,
              {
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.005,
              },
              "<0.25"
            )
            .to(
              rdDescriptionWord,
              {
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.005,
              },
              "<0"
            );
        } else if (type === "rd-chapter-alternative") {
          const tl: GSAPTimeline = gsap.timeline({
            scrollTrigger: {
              start: "top 75%",
              trigger: rdContent,
            },
          });

          const rdTitleWordContainer: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(
              ".rd-chapter-alternative-title .rd-word-container"
            )
          );
          const rdTitleWord: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-chapter-alternative-title .rd-word")
          );
          const rdDescriptionWordContainer: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(
              ".rd-chapter-alternative-description .rd-word-container"
            )
          );
          const rdDescriptionWord: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(
              ".rd-chapter-alternative-description .rd-word"
            )
          );

          tl.to(rdTitleWordContainer, {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.125,
          })
            .to(
              rdTitleWord,
              {
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.125,
              },
              "<0"
            )
            .to(
              rdDescriptionWordContainer,
              {
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.005,
              },
              "<0.25"
            )
            .to(
              rdDescriptionWord,
              {
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.005,
              },
              "<0"
            );
        } else if (type === "rd-picture-full" || type === "rd-picture-large") {
          const tl: GSAPTimeline = gsap.timeline({
            scrollTrigger: {
              start: "top 75%",
              trigger: rdContent,
            },
          });

          const rdImageContainer: HTMLElement = rdContent.querySelector(
            ".rd-image-container"
          );
          const rdImage: HTMLElement = rdContent.querySelector(".rd-image");

          tl.to(rdImageContainer, {
            x: 0,
            duration: 1,
            ease: "power4.out",
          }).to(
            rdImage,
            {
              x: 0,
              duration: 1,
              ease: "power4.out",
            },
            "<0"
          );
        } else if (type === "rd-gallery") {
          const rdImageContainer: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-image-container")
          );
          const rdImage: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-image")
          );

          for (let i = 0; i < rdImage.length; i++) {
            gsap.to([rdImageContainer[i], rdImage[i]], {
              y: 0,
              x: 0,
              duration: 1,
              ease: "power4.out",
              scrollTrigger: {
                start: "top 75%",
                trigger: rdImage[i],
              },
            });
          }
        }
      }
    },
  }
  
  function exit(path: string): void {
    animate.exit(rdContainer.value, () => {
      router.push(path);
      emit("exit-page");
    })
  }

  watch(
    () => props.pageState,
    (val: string) => {
      if (val !== "idle") exit(val)
    }
  );

  onMounted(() => {
    const el = rdContainer.value;

    bodyScrollbar.value = Scrollbar.init(el, {
      damping: 0.05,
    });
    bodyScrollbar.value.setPosition(0, 0);
    bodyScrollbar.value.track.xAxis.element.remove();

    ScrollTrigger.scrollerProxy(el, {
      scrollTop(value) {
        if (arguments.length) bodyScrollbar.value.scrollTop = value;
        return bodyScrollbar.value.scrollTop;
      },
    });
    ScrollTrigger.defaults({
      scroller: el,
    });

    bodyScrollbar.value.addListener(ScrollTrigger.update);

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

    setTimeout(() => {
      const animInit = animate.init(rdJumbotron.value, () => {
        emit("pin-elements");
      });
      setTimeout(() => {
        gsap.utils.toArray("[data-scrub]").forEach((el: HTMLElement, i) => {
          el.removeAttribute('style')
          if (el.dataset.scrub === "parallax") {
            gsap.to(el, {
              yPercent: i !== 0 ? -20 : 0,
              duration: 0,
            });
            gsap.to(el, {
              yPercent: 20,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: i !== 0 ? "top bottom" : 0,
                end: "bottom top",
                scrub: 0,
              },
            });
          } else if (el.dataset.scrub === "parallax-footer") {
            gsap.to(el, {
              yPercent: -100,
              duration: 0,
            });
            gsap.to(el, {
              yPercent: 0,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0,
              },
            });
          }
        });

        animInit.play();
        animate.reveal(rdContents.value);
      }, 400);
    }, 100);
  })

  onBeforeUnmount(() => {
    emit("unpin-elements")
  })
</script>

<style lang="scss" scoped>
  .rd-container {
    position: relative;
    width: 100%;
    height: 100vh;
    height: calc((var(--vh, 1vh) * 100));
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    * {
      flex-shrink: 0;
    }
    .rd-jumbotron {
      position: relative;
      width: 100%;
      margin: 7rem 0;
      padding: 1rem 35vw 5vh 15vw;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      span.rd-description-placeholder {
        position: relative;
        left: -0.05rem;
      }
      h1.rd-description-title {
        position: relative;
        left: -0.2rem;
        margin: 2rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        span.rd-word-wrapper {
          margin-right: 2%;
        }
      }
      p.rd-description {
        position: relative;
        width: 100%;
        padding: 0 25% 0 2rem;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        span.rd-word-wrapper {
          margin-right: 1%;
        }
      }
    }
    .rd-chapter {
      position: relative;
      width: 100%;
      margin: 9rem 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .rd-chapter-details-container {
        position: relative;
        width: calc(175vw / 4);
        height: 100%;
        padding-top: 1rem;
        padding-left: 15vw;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        span.rd-chapter-subtitle {
          position: relative;
          text-transform: uppercase;
        }
      }
      .rd-chapter-description-container {
        position: relative;
        width: calc(225vw / 4);
        height: 100%;
        padding-right: 25vw;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        h2.rd-chapter-title {
          position: relative;
          margin: 1rem 0;
          text-transform: uppercase;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          span.rd-word-wrapper {
            margin-right: 2%;
          }
        }
        p.rd-chapter-description {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          span.rd-word-wrapper {
            margin-right: 1%;
          }
        }
      }
    }
    .rd-chapter-alternative {
      position: relative;
      width: 100%;
      margin: 9rem 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .rd-chapter-alternative-title-container {
        position: relative;
        width: 50vw;
        height: 100%;
        padding: 0 2rem 0 15vw;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        h3.rd-chapter-alternative-title {
          position: relative;
          text-transform: uppercase;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          span.rd-word-wrapper {
            margin-right: 2%;
          }
        }
      }
      .rd-chapter-alternative-description-container {
        position: relative;
        width: 50vw;
        height: 100%;
        padding-right: 15vw;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        p.rd-chapter-alternative-description {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          span.rd-word-wrapper {
            margin-right: 1%;
          }
        }
      }
    }
    .rd-picture-full {
      position: relative;
      width: 100vw;
      height: 56.25vw;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      .rd-image-full-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .rd-picture-large {
      position: relative;
      width: calc(100vw - 8rem);
      height: calc(56.25vw - 8rem);
      margin: 5rem 4rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      .rd-image-large-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .rd-gallery {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      .rd-image-gallery-container {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .rd-image-gallery-column {
          position: relative;
          width: 30vw;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          .rd-image-wrapper {
            position: relative;
            width: 100%;
            height: 35vw;
            margin-bottom: 2rem;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          &:first-child {
            margin-right: 1rem;
          }
          &:last-child {
            margin-top: 8.75vw;
            margin-left: 1rem;
          }
        }
      }
    }
    .rd-footer {
      position: relative;
      width: 100vw;
      height: 100vh;
      margin-top: 5rem;
      background: var(--font-color);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .rd-footer-container {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0 45vw 0 15vw;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        span.rd-footer-placeholder {
          position: relative;
          left: -0.05rem;
          color: var(--background-color);
        }
        h1.rd-footer-title {
          position: relative;
          left: -0.2rem;
          width: 100%;
          margin: 2rem 0 3rem 0;
          color: var(--background-color);
        }
        .rd-action-button {
          cursor: pointer;
          position: relative;
          margin: 2rem 2rem 0 0;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          span.rd-action-name {
            position: relative;
            text-transform: uppercase;
            transition: 0.25s color;
            margin-right: 1rem;
            color: var(--background-color);
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
              stroke: var(--background-color);
              stroke-width: 2px;
            }
            .rd-circle-2 {
              fill: var(--background-color);
              opacity: 0.5;
            }
          }
        }
      }
    }
    @media screen and (max-width: 1024px) {
      overflow-y: auto;
      .rd-jumbotron {
        width: 100vw;
        height: auto;
        padding: 0 2rem;
        margin: 7rem 0 5rem 0;
        flex-direction: column;
        span.rd-description-placeholder {
          left: 0;
        }
        h1.rd-description-title {
          left: 0;
          margin: 1rem 0;
        }
        p.rd-description {
          padding: 0;
        }
      }
      .rd-chapter,
      .rd-chapter-alternative {
        width: 100vw;
        margin: 5rem 0;
        flex-direction: column;
        align-items: center;
        .rd-chapter-details-container,
        .rd-chapter-alternative-title-container {
          width: 100%;
          height: auto;
          padding: 0 2rem;
          margin-bottom: 0.5rem;
          box-sizing: border-box;
        }
        .rd-chapter-description-container,
        .rd-chapter-alternative-description-container {
          width: 100%;
          padding: 0 2rem;
          box-sizing: border-box;
        }
      }
      .rd-picture-full,
      .rd-picture-large {
        width: 100vw;
        height: 75vw;
        margin: 0;
      }
      .rd-gallery {
        width: 100vw;
        flex-direction: column;
        .rd-image-gallery-container {
          flex-direction: column;
          .rd-image-gallery-column {
            width: 100%;
            margin: 0 0 1rem 0 !important;
            .rd-image-wrapper {
              height: 75vw;
              margin-bottom: 1rem;
              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }
      }
      .rd-footer {
        .rd-footer-container {
          padding: 0 2rem;
          span.rd-footer-placeholder {
            left: 0;
          }
          h1.rd-footer-title {
            left: 0;
            width: 100%;
            margin: 2rem 0;
          }
        }
      }
    }
  }
</style>