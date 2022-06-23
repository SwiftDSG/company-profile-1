<template>
  <div ref="rdContainer" class="rd-container">
    <div ref="rdJumbotron" class="rd-jumbotron">
      <div class="rd-description-container">
        <span class="rd-description-placeholder rd-caption-text">
          <span class="rd-text-wrapper">
            <span class="rd-text-container rd-text-container-down">
              <span class="rd-text">Karya Kami</span>
            </span>
          </span>
        </span>
        <h1 class="rd-description-title rd-headline-1">
          <span v-for="(n, i) in project.name.split(' ')" :key="i" class="rd-word-wrapper">
            <span class="rd-word-container rd-word-container-down">
              <span class="rd-word">{{ n }}</span>
            </span>
          </span>
        </h1>
        <div class="rd-description-details">
          <span class="rd-description-details-placeholder rd-placeholder-text">
            <span class="rd-text-wrapper">
              <span class="rd-text-container rd-text-container-down">
                <span class="rd-text">Layanan</span>
              </span>
            </span>
          </span>
          <div class="rd-description-details-divider"></div>
          <span v-for="(n, i) in project.services" :key="i" class="rd-description-details-value rd-headline-5">
            <span class="rd-text-wrapper">
              <span class="rd-text-container rd-text-container-down">
                <span class="rd-text">{{ n }}</span>
              </span>
            </span>
          </span>
        </div>
        <div v-if="baseState.viewMode !== 'desktop'" class="rd-attraction-container">
          <span class="rd-image-wrapper">
            <span class="rd-image-container rd-image-container-left">
              <img
                class="rd-image"
                :src="project.image"
                data-scrub="parallax"
              />
            </span>
          </span>
        </div>
        <div
          v-if="baseState.viewMode !== 'desktop'"
          ref="rdActionButton"
          class="rd-action-button"
          data-pin="link"
        >
          <span class="rd-action-name rd-caption-text">
            <span class="rd-text-wrapper">
              <span class="rd-text-container rd-text-container-left">
                <span class="rd-text">Buka Projek</span>
              </span>
            </span>
          </span>
          <svg
            class="rd-circle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <circle class="rd-circle-1" cx="24" cy="24" r="23" />
            <circle class="rd-circle-2" cx="24" cy="24" r="3" />
          </svg>
        </div>
        <div class="rd-description-details">
          <span class="rd-description-details-placeholder rd-placeholder-text">
            <span class="rd-text-wrapper">
              <span class="rd-text-container rd-text-container-down">
                <span class="rd-text">Kategori</span>
              </span>
            </span>
          </span>
          <div class="rd-description-details-divider"></div>
          <span v-for="(n, i) in project.tags" :key="i" class="rd-description-details-value rd-headline-5">
            <span class="rd-text-wrapper">
              <span class="rd-text-container rd-text-container-down">
                <span class="rd-text">{{ n }}</span>
              </span>
            </span>
          </span>
        </div>
        <div class="rd-description-details">
          <span class="rd-description-details-placeholder rd-placeholder-text">
            <span class="rd-text-wrapper">
              <span class="rd-text-container rd-text-container-down">
                <span class="rd-text">Klien</span>
              </span>
            </span>
          </span>
          <div class="rd-description-details-divider"></div>
          <span class="rd-description-details-value rd-headline-5">
            <span class="rd-text-wrapper">
              <span class="rd-text-container rd-text-container-down">
                <span class="rd-text">{{ project.client }}</span>
              </span>
            </span>
          </span>
        </div>
        <div
          v-if="baseState.viewMode === 'desktop'"
          ref="rdActionButton"
          class="rd-action-button"
          data-pin="link"
        >
          <span class="rd-action-name rd-caption-text">
            <span class="rd-text-wrapper">
              <span class="rd-text-container rd-text-container-left">
                <span class="rd-text">Buka Projek</span>
              </span>
            </span>
          </span>
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
      <div v-if="baseState.viewMode === 'desktop'" class="rd-attraction-container">
        <span class="rd-image-wrapper">
          <span class="rd-image-container rd-image-container-left">
            <img
              class="rd-image"
              :src="project.image"
              data-scrub="parallax"
            />
          </span>
        </span>
      </div>
    </div>
    <div
      v-for="(content, i) in project.contents"
      ref="rdContents"
      :data-type="content.type"
      :key="i"
      :class="content.type"
    >
      <div v-if="content.type === 'rd-chapter'" class="rd-chapter-details-container">
        <span class="rd-chapter-subtitle rd-headline-5">
          <span class="rd-text-wrapper">
            <span class="rd-text-container rd-text-container-down">
              <span class="rd-text">{{ content.subtitle }}</span>
            </span>
          </span>
        </span>
      </div>
      <div v-if="content.type === 'rd-chapter'" class="rd-chapter-description-container">
        <h2 class="rd-chapter-title rd-headline-2">
          <span v-for="(n, i) in content.title.split(' ')" :key="i" class="rd-word-wrapper">
            <span class="rd-word-container rd-word-container-down">
              <span class="rd-word">{{ n }}</span>
            </span>
          </span>
        </h2>
        <p class="rd-chapter-description rd-body-text">
          <span v-for="(n, i) in content.description.split(' ')" :key="i" class="rd-word-wrapper">
            <span class="rd-word-container rd-word-container-down">
              <span class="rd-word">{{ n }}</span>
            </span>
          </span>
        </p>
      </div>
      <div v-if="content.type === 'rd-chapter-alternative'" class="rd-chapter-alternative-title-container">
        <h3 class="rd-chapter-alternative-title rd-headline-3">
          <span v-for="(n, i) in content.title.split(' ')" :key="i" class="rd-word-wrapper">
            <span class="rd-word-container rd-word-container-down">
              <span class="rd-word">{{ n }}</span>
            </span>
          </span>
        </h3>
      </div>
      <div v-if="content.type === 'rd-chapter-alternative'" class="rd-chapter-alternative-description-container">
        <p class="rd-chapter-alternative-description rd-body-text">
          <span v-for="(n, i) in content.description.split(' ')" :key="i" class="rd-word-wrapper">
            <span class="rd-word-container rd-word-container-down">
              <span class="rd-word">{{ n }}</span>
            </span>
          </span>
        </p>
      </div>
      <div v-if="content.type === 'rd-picture-full'" class="rd-image-full-container">
        <span class="rd-image-wrapper">
          <span class="rd-image-container rd-image-container-left">
            <img
              class="rd-image"
              :src="content.image"
              data-scrub="parallax"
            />
          </span>
        </span>
      </div>
      <div v-if="content.type === 'rd-picture-large'" class="rd-image-large-container">
        <span class="rd-image-wrapper">
          <span class="rd-image-container rd-image-container-left">
            <img
              class="rd-image"
              :src="content.image"
              data-scrub="parallax"
            />
          </span>
        </span>
      </div>
      <div v-if="content.type === 'rd-gallery'" class="rd-image-gallery-container">
        <div v-for="(col, j) in content.images" :key="j" class="rd-image-gallery-column">
          <span v-for="(image, k) in col" :key="k" class="rd-image-wrapper">
            <span class="rd-image-container rd-image-container-down">
              <img class="rd-image" :src="image" data-scrub="parallax" />
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ComputedRef } from "vue";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Scrollbar from "smooth-scrollbar";

  import { baseStore } from "../../../store/base";

  const baseState = baseStore.getState();
  const props = defineProps<{ pageState: string }>();
  const emit = defineEmits(["pin-elements", "unpin-elements", "exit-page"]);
  const router = useRouter();

  const bodyScrollbar = ref<Scrollbar>(null)

  const rdContainer = ref<HTMLDivElement>(null)
  const rdJumbotron = ref<HTMLDivElement>(null)
  const rdContents = ref<HTMLDivElement[]>(null)

  interface ProjectContents {
    type: 'rd-chapter' | 'rd-picture-full' | 'rd-picture-large' | 'rd-chapter-alternative' | 'rd-gallery',
    title?: string,
    subtitle?: string,
    description?: string,
    image?: string,
    images?: string[][]
  }

  interface Project {
    name: string,
    client: string,
    image: string,
    services: string[],
    tags: string[],
    colors: {
      font: string,
      background: string,
      menu: string
    }
    contents: ProjectContents[]
  }

  const project: Project = {
    name: 'Pezen',
    client: 'PT. Redian Grup Sejahtera',
    image: '/about-photo-1.jpg',
    services: ['Web design & development'],
    tags: ['UX / UI Design', 'Ecommerce'],
    colors: {
      font: "#9d5524",
      background: "#ffa84c",
      menu: "#ffa84c"
    },
    contents: [
      {
        type: 'rd-chapter',
        title: 'Tim yang berdedikasi untuk memberikan hasil terbaik.',
        subtitle: 'the challenge',
        description: 'Lorem Ipsum dolor sit Amet, tema tis rolod morel muspee tis librue arqic cisseb bosnia roll posca tema tis rolod Lorem Ipsum dolor sit Amet, tema tis rolod morel tis rolod morel muspee tis librue arqic cisseb bosnia roll roll posca tis rolod morel Lorem Ipsum dolor sit Amet, tema tis rolod morel roll posca rame jancok asu udin love karina.'
      },
      {
        type: 'rd-picture-full',
        image: '/about-photo-2.jpg',
      },
      {
        type: 'rd-chapter-alternative',
        title: 'A streamlined user experience',
        description: 'One of the key objectives for the Optimal Dynamics website was to educate potential customers with clear and concise messaging. Starting with the homepage landing experience we collaborated with their marketing team to develop an effective content strategy and streamlined user experience.'
      },
      {
        type: 'rd-gallery',
        images: [
          ['/about-photo-1.jpg', '/about-photo-2.jpg'],
          ['/about-photo-3.jpg', '/about-photo-1.jpg'],
        ],
      },
      {
        type: 'rd-chapter-alternative',
        title: 'A streamlined user experience',
        description: 'One of the key objectives for the Optimal Dynamics website was to educate potential customers with clear and concise messaging. Starting with the homepage landing experience, we collaborated with their marketing team to develop an effective content strategy and streamlined user experience.'
      },
      {
        type: 'rd-picture-large',
        image: '/about-photo-3.jpg',
      },
    ],
  }

  const animate = {
    init(rdJumbotron: HTMLElement, cb?: () => void): void {
      const tl = gsap.timeline({
        onComplete() {
          if (cb) cb();
        },
      });

      const rdActionButton: Element = rdJumbotron.querySelector('.rd-action-button')
      const rdImageContainer: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll(".rd-image-container")
      );
      const rdImage: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll(".rd-image")
      );
      const rdWordContainer: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll(".rd-word-container")
      );
      const rdWord: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll(".rd-word")
      );
      const rdTextContainer: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll(".rd-text-container")
      );
      const rdText: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll(".rd-text")
      );
      const rdActionTextContainer: Element[] = gsap.utils.toArray(
        rdActionButton.querySelectorAll(".rd-text-container")
      );
      const rdActionText: Element[] = gsap.utils.toArray(
        rdActionButton.querySelectorAll(".rd-text")
      );

      tl.to(rdImageContainer, {
        x: 0,
        duration: 1,
        ease: 'power4.out',
      }).to(rdImage, {
        x: 0,
        duration: 1,
        ease: 'power4.out', 
      }, '<0').to(rdWordContainer.reverse(), {
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.125,
      }, '<0.25').to(rdWord.reverse(), {
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.125,
      }, '<0').to(rdTextContainer, {
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.125,
      }, '<0.25').to(rdText, {
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.125,
      }, '<0').to(rdActionTextContainer, {
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.125,
      }, '<0.25').to(rdActionText, {
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.125,
      }, '<0').to(rdActionButton.children[1].children[0], {
        strokeDashoffset: 0,
        duration: 0.5,
        ease: "power2.inOut",
      },"<0").to(rdActionButton.children[1].children[1], {
        opacity: 0.5,
        ease: "power2.out",
      }, "<0.25")
    },
    reveal(rdContents: HTMLElement[]): void {
      for (const rdContent of rdContents) {
        const type: string = rdContent.dataset.type

        if (type === 'rd-chapter') {
          const tl: GSAPTimeline = gsap.timeline({
            scrollTrigger: {
              start: 'top 75%',
              trigger: rdContent,
            },
          })

          const rdSubtitleTextContainer: HTMLElement = rdContent.querySelector('.rd-chapter-subtitle .rd-text-container')
          const rdSubtitleText: HTMLElement = rdContent.querySelector('.rd-chapter-subtitle .rd-text')
          const rdTitleWordContainer: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-chapter-title .rd-word-container")
          );
          const rdTitleWord: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-chapter-title .rd-word")
          );
          const rdDescriptionWordContainer: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-chapter-description .rd-word-container")
          );
          const rdDescriptionWord: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-chapter-description .rd-word")
          );

          tl.to(rdSubtitleTextContainer, {
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
          }).to(rdSubtitleText, {
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
          }, '<0').to(rdTitleWordContainer, {
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.125
          }, '<0.25').to(rdTitleWord, {
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.125
          }, '<0').to(rdDescriptionWordContainer, {
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.005
          }, '<0.25').to(rdDescriptionWord, {
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.005
          }, '<0')
        } else if (type === 'rd-chapter-alternative') {
          const tl: GSAPTimeline = gsap.timeline({
            scrollTrigger: {
              start: 'top 75%',
              trigger: rdContent,
            },
          })

          const rdTitleWordContainer: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-chapter-alternative-title .rd-word-container")
          );
          const rdTitleWord: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-chapter-alternative-title .rd-word")
          );
          const rdDescriptionWordContainer: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-chapter-alternative-description .rd-word-container")
          );
          const rdDescriptionWord: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-chapter-alternative-description .rd-word")
          );

          tl.to(rdTitleWordContainer, {
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.125
          }).to(rdTitleWord, {
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.125
          }, '<0').to(rdDescriptionWordContainer, {
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.005
          }, '<0.25').to(rdDescriptionWord, {
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.005
          }, '<0')
        } else if (type === 'rd-picture-full' || type === 'rd-picture-large') {
          const tl: GSAPTimeline = gsap.timeline({
            scrollTrigger: {
              start: 'top 75%',
              trigger: rdContent,
            },
          })

          const rdImageContainer: HTMLElement = rdContent.querySelector(".rd-image-container")
          const rdImage: HTMLElement = rdContent.querySelector(".rd-image")

          tl.to(rdImageContainer, {
            x: 0,
            duration: 1,
            ease: 'power4.out',
          }).to(rdImage, {
            x: 0,
            duration: 1,
            ease: 'power4.out', 
          }, '<0')
        } else if (type === 'rd-gallery') {
          const rdImageContainer: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-image-container")
          );
          const rdImage: Element[] = gsap.utils.toArray(
            rdContent.querySelectorAll(".rd-image")
          );

          for (let i = 0; i < rdImage.length; i++) {
            gsap.to([rdImageContainer[i], rdImage[i]], {
              y: 0,
              duration: 1,
              ease: 'power4.out',
              scrollTrigger: {
                start: 'top 75%',
                trigger: rdImage[i],
              },
            })
          }
        }
      }
    }
  }

  watch(
    () => props.pageState,
    (val: string) => {
      if (val !== "idle") {
        console.log(val)
      }
    }
  );

  onBeforeMount(async () => {
    gsap.registerPlugin(ScrollTrigger);
  });

  onMounted(() => {
    const el = rdContainer.value
    if (baseState.viewMode === 'desktop') {
      bodyScrollbar.value = Scrollbar.init(el);
      bodyScrollbar.value.setPosition(0, 0);
      bodyScrollbar.value.track.xAxis.element.remove();
  
      ScrollTrigger.scrollerProxy(el, {
        scrollTop(value) {
          if (arguments.length) bodyScrollbar.value.scrollTop = value;
          return bodyScrollbar.value.scrollTop;
        },
      });
      ScrollTrigger.defaults({
        scroller: el
      });
  
      bodyScrollbar.value.addListener(ScrollTrigger.update)
    } else {
      ScrollTrigger.defaults({
        scroller: el
      });
    }

    document.documentElement.style.setProperty(
      "--font-color",
      project.colors.font
    );
    document.documentElement.style.setProperty(
      "--background-color",
      project.colors.background
    );
    document.documentElement.style.setProperty(
      "--menu-color",
      project.colors.menu
    );

    setTimeout(() => {
      gsap.utils.toArray('[data-scrub]').forEach((el: HTMLElement, i) => {
        if (el.dataset.scrub === 'parallax') {
          gsap.to(el, {
            yPercent: i !== 0 ? -20 : 0,
            duration: 0,
          })
          gsap.to(el, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: i !== 0 ? 'top bottom' : 0,
              end: 'bottom top',
              scrub: 0,
            },
          })
        } else if (el.dataset.scrub === 'parallax-footer') {
          gsap.to(el, {
            yPercent: -100,
            duration: 0,
          })
          gsap.to(el, {
            yPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0,
            },
          })
        }
      })

      animate.init(rdJumbotron.value, () => {
        emit("pin-elements");
      })
      animate.reveal(rdContents.value)
    }, 500)

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
    height: 37.5vw;
    margin-top: 7rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .rd-description-container {
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
      span.rd-description-placeholder {
        position: relative;
        left: -0.05rem;
      }
      h1.rd-description-title {
        position: relative;
        left: -0.2rem;
        margin: 2rem 0 3rem 0;
      }
      .rd-description-details {
        position: relative;
        margin-bottom: 2rem;
        padding-left: 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .rd-description-details-divider {
          position: relative;
          width: 100%;
          height: 0.5rem;
        }
        span.rd-description-details-value {
          line-height: 1.5;
        }
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
    .rd-attraction-container {
      position: relative;
      width: calc(225vw / 4);
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      overflow: hidden;
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
  @media screen and (max-width: 1024px) {
    overflow-y: auto;
    .rd-jumbotron {
      width: 100vw;
      height: auto;
      flex-direction: column;
      .rd-description-container {
        width: 100%;
        padding: 0 2rem;
        box-sizing: border-box;
        align-items: center;
        span.rd-description-placeholder {
          left: 0;
        }
        h1.rd-description-title {
          left: 0;
          margin: 2rem 0;
          align-items: center;
        }
        .rd-attraction-container {
          position: relative;
          width: 100vw;
          height: calc(225vw / 4);
          margin-bottom: 2rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          overflow: hidden;
        }
        .rd-description-details {
          width: 100%;
          padding-left: 0;
          align-items: center;
        }
        .rd-action-button {
          margin: 0 0 2rem 0;
        }
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
        align-items: center;
        h3.rd-chapter-alternative-title {
          text-align: center;
          align-items: center;
          justify-content: center;
        }
      }
      .rd-chapter-description-container,
      .rd-chapter-alternative-description-container {
        width: 100%;
        padding: 0 2rem;
        box-sizing: border-box;
        align-items: center;
        h2.rd-chapter-title {
          text-align: center;
          align-items: center;
          justify-content: center;
        }
        p.rd-chapter-description,
        p.rd-chapter-alternative-description {
          text-align: center;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .rd-picture-full,
    .rd-picture-large {
      width: 100vw;
      height: 56.25vw;
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
  }
}
</style>