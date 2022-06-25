<template>
  <div ref="rdContainer" class="rd-container">
    <div class="rd-jumbotron" ref="rdJumbotron">
      <span class="rd-description-placeholder rd-caption-text">
        <span class="rd-text-wrapper">
          <span class="rd-text-container rd-text-container-down">
            <span class="rd-text">Hubungi kami</span>
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
    </div>
    <form class="rd-form">
      <div v-for="(form, i) in structure.form" :key="i" :class="`rd-${form.type}-wrapper`">
        <label v-if="form.type === 'checkbox' || form.type === 'radio'" class="rd-input-text" :class="`rd-${form.type}-label`">{{ form.placeholder }}</label>
        <input v-else-if="form.type === 'text'" type="text" :name="form.name" class="rd-input rd-input-text" :placeholder="form.placeholder" :required="form.required">
        <input v-else-if="form.type === 'email'" type="text" :name="form.name" class="rd-input rd-input-text" :placeholder="form.placeholder" pattern=".+@globex\.com" :required="form.required" >
        <textarea v-else-if="form.type === 'textarea'" @input="resizeTextarea" :name="form.name" class="rd-input rd-input-text" :placeholder="form.placeholder" :required="form.required"></textarea>
        <div v-if="form.type === 'checkbox' || form.type === 'radio'" :class="`rd-${form.type}-selections`">
          <div v-for="(selection, j) in form.selections" :key="j" data-pin="link" :class="`rd-${form.type}-selection rd-input-text`">{{ selection }}</div>
        </div>
        <div v-if="form.type !== 'checkbox' && form.type !== 'radio'" class="rd-input-border-container">
          <div class="rd-input-border-filled"></div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Scrollbar from "smooth-scrollbar";

  import { baseStore } from "../../store/base";

  useHead({
    title: 'Hubungi Kami'
  })

  const baseState = baseStore.getState();
  const props = defineProps<{ pageState: string }>();
  const emit = defineEmits(["pin-elements", "unpin-elements", "exit-page"]);
  const router = useRouter();

  const bodyScrollbar = ref<Scrollbar>(null);

  const rdContainer = ref<HTMLDivElement>(null);
  const rdJumbotron = ref<HTMLDivElement>(null);

  interface StructureForm {
    placeholder: string;
    type: 'radio' | 'checkbox' | 'email' | 'text' | 'textarea' | 'submit';
    required: boolean;
    name: string;
    selections?: string[];
  }

  interface Structure {
    title: string;
    form: StructureForm[]
  }

  const structure: Structure = {
    title: 'Ceritakan apa yang anda pikirkan',
    form: [
      {
        type: 'checkbox',
        placeholder: 'Apa yang menarik perhatian anda?',
        required: true,
        name: 'interests',
        selections: ['Website development', 'Application development', 'UX / UI Design', 'Branding', 'Advertising']
      },
      {
        type: 'text',
        placeholder: 'Nama anda',
        required: true,
        name: 'name'
      },
      {
        type: 'email',
        placeholder: 'Email anda',
        required: true,
        name: 'email'
      },
      {
        type: 'textarea',
        placeholder: 'Ceritakan tentang projek anda',
        required: true,
        name: 'message'
      },
      {
        type: 'radio',
        placeholder: 'Berapa budget anda? (Rupiah)',
        required: true,
        name: 'budget',
        selections: ['5 jt - 10 jt', '10 jt - 20 jt', '20 jt - 30 jt', '30 jt - 40 jt', '40 jt +']
      }
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
      const rdTextContainer: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll(".rd-text-container")
      );
      const rdText: Element[] = gsap.utils.toArray(
        rdJumbotron.querySelectorAll(".rd-text")
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
        )
        
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
  }

  function resizeTextarea({ target }: InputEvent): void {
    if (target instanceof HTMLTextAreaElement) {
      target.style.height = `${target.scrollHeight}px`
    }
  }

  watch(
    () => props.pageState,
    (val: string) => {
      if (val !== "idle") {
        animate.exit(rdContainer.value, () => {
          router.push(val);
          emit("exit-page");
        })
      }
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
      margin: 7rem 0 3rem 0;
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
    }
    form.rd-form {
      position: relative;
      width: 100%;
      padding: 0 35vw 5vh 15vw;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .rd-text-wrapper,
      .rd-email-wrapper,
      .rd-textarea-wrapper,
      .rd-checkbox-wrapper,
      .rd-radio-wrapper {
        position: relative;
        width: 100%;
        margin-bottom: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        input.rd-input,
        textarea.rd-input {
          position: relative;
          width: 100%;
          height: 3rem;
          background: transparent;
          border: none;
          opacity: 0.5;
          padding: 0; 
          overflow: hidden;
          color: var(--font-color);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          transition: opacity 0.25s;
          &::placeholder {
            color: var(--font-color);
            opacity: 0.5;
          }
          &:hover,
          &:not(:placeholder-shown),
          &:focus {
            opacity: 1;
            outline: none;
          }
          &:hover + .rd-input-border-container::before {
            opacity: 0.375;
          }
          &:not(:placeholder-shown) + .rd-input-border-container > .rd-input-border-filled,
          &:focus + .rd-input-border-container > .rd-input-border-filled {
            width: 100%;
          }
        }
        textarea.rd-input {
          resize: none;
          padding: 0.75rem 0;
          box-sizing: border-box;
          // height: 9rem;
        }
        label.rd-checkbox-label,
        label.rd-radio-label {
          position: relative;
          width: 100%;
          height: 3rem;
          background: transparent;
          border: none;
          opacity: 0.25;
          padding: 0; 
          margin-bottom: 1rem;
          overflow: hidden;
          color: var(--font-color);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          transition: opacity 0.25s;
        }
        .rd-checkbox-selections,
        .rd-radio-selections {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          .rd-checkbox-selection,
          .rd-radio-selection {
            cursor: pointer;
            position: relative;
            height: 3rem;
            padding: 0 1rem;
            margin: 0 1rem 1rem 0;
            border-radius: 1.5rem;
            opacity: 0.375;
            border: 1px solid var(--font-color);
            background: var(--background-color);
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 0.25s;
            &:hover {
              opacity: 1;
            }
          }
        }
        .rd-input-border-container {
          position: relative;
          width: 100%;
          height: 1px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          .rd-input-border-filled {
            pointer-events: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: var(--font-color);
            transition: width 0.25s cubic-bezier(0.75, 0, 0.25, 1);
          }
          &::before {
            content: "";
            position: relative;
            width: 100%;
            height: 100%;
            background: var(--font-color);
            opacity: 0.125;
            transition: opacity 0.25s;
          }
        }
      }
      .rd-checkbox-wrapper,
      .rd-radio-wrapper {
        margin-bottom: 2rem;
      }
    }
    @media screen and (max-width: 1024px) {
      overflow-y: auto;
      .rd-jumbotron {
        width: 100vw;
        height: auto;
        padding: 0 2rem;
        flex-direction: column;
        span.rd-description-placeholder {
          left: 0;
        }
        h1.rd-description-title {
          left: 0;
          margin: 1rem 0;
        }
      }
      form.rd-form {
        padding: 0 2rem;
        .rd-text-wrapper,
        .rd-email-wrapper,
        .rd-textarea-wrapper,
        .rd-checkbox-wrapper,
        .rd-radio-wrapper {
          margin-bottom: 2rem;
          label.rd-checkbox-label,
          label.rd-radio-label {
            height: 2rem;
            margin-bottom: 0.75rem;
          }
          .rd-checkbox-selections,
          .rd-radio-selections {
            .rd-checkbox-selection,
            .rd-radio-selection {
              height: 2rem;
              padding: 0 0.75rem;
              margin: 0 0.75rem 0.75rem 0;
              border-radius: 1rem;
              opacity: 0.375;
            }
          }
        }
        .rd-checkbox-wrapper,
        .rd-radio-wrapper {
          margin-bottom: 1.25rem;
        }
      }
    }
  }
</style>