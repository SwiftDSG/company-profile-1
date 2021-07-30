<template>
  <div class="container">
    <div class="background">
      <div ref="logoContainer" class="logo-container">
        <svg ref="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.86 494.13">
          <defs>
            <style>
              .cls-1{
                fill: none;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 100px;
              }
              .cls-2 {
                fill: none;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 80px;
              }
            </style>
            <clipPath id="svg-path-1">
              <path d="M199.73,199.47,57.16,342.05a33.49,33.49,0,0,1-47.35,0h0a33.47,33.47,0,0,1,0-47.35L152.38,152.12a33.47,33.47,0,0,1,47.35,0h0A33.47,33.47,0,0,1,199.73,199.47Z"/>
            </clipPath>
            <clipPath id="svg-path-2">
              <path d="M342.05,437,199.73,294.43a33.48,33.48,0,0,0-47.36,0L9.81,437a33.47,33.47,0,0,0,0,47.35h0a33.49,33.49,0,0,0,47.35,0L163,378.49a18.29,18.29,0,0,1,25.86,0L294.69,484.33a33.49,33.49,0,0,0,47.35,0l0,0A33.49,33.49,0,0,0,342.07,437Z"/>
            </clipPath>
            <clipPath id="svg-path-3">
              <path d="M342.05,152.34,199.73,9.82a33.47,33.47,0,0,0-47.36,0L9.81,152.37a33.47,33.47,0,0,0,0,47.35h0a33.49,33.49,0,0,0,47.35,0L163,93.88a18.29,18.29,0,0,1,25.86,0L258,163a18.28,18.28,0,0,1,0,25.85L216.79,230a33.49,33.49,0,0,0,0,47.35l0,0a33.47,33.47,0,0,0,47.32,0L342,199.7A33.48,33.48,0,0,0,342.05,152.34Z"/>
            </clipPath>
          </defs>
          <line clip-path="url(#svg-path-1)" class="cls-2 svg-elem-1" x1="38.5" y1="323.33" x2="253.07" y2="109.9"/>
          <polyline clip-path="url(#svg-path-2)" class="cls-1 svg-elem-2" points="39.17 465.22 183.17 321 418.17 557"/>
          <polyline clip-path="url(#svg-path-3)" class="cls-1 svg-elem-3" points="39 180.64 181.61 38.5 323.44 180.2 110.17 394"/>
        </svg>
      </div>
      <div ref="overlay" class="overlay"></div>
    </div>
    <div ref="mainContent" class="content">
      <div class="hero-wrapper">
        <div class="hero">
          <h2 ref="greet" class="greet">
            <span 
              v-for="(n, i) in heroGreet.split('')"
              :key="i"
              class="letter"
              :style="n === ' ' ? 'margin: 0 0.25rem' : ''"
            >
              {{ n }}
            </span>
          </h2>
          <h1 ref="title" class="title">
            <span 
              v-for="(n, i) in heroTitle.split(' ')"
              :key="i"
              class="word-container"
            >
              <span class="word">{{ n }}</span>
              <span ref="titleOverlay" class="overlay"></span>
            </span>
          </h1>
          <p ref="description" class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum enim omnis qui perferendis autem repellendus sapiente officiis?</p>
          <div class="about-company">
            <div class="bg-animated"></div>
            <span>GET TO KNOW US</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  layout: "default",
  data() {
    return {
      menuAnim: null,
      heroGreet: 'WE ARE REDIAN',
      heroTitle: 'The only digital agency you\'ll need.',
      mediaQuery: null
    }
  },
  computed: {
    mode() {
      return this.$store.getters.mode
    }
  },
  mounted() {
    // CSS 1vh var
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
    // Media Query
    this.mediaQuery = window.matchMedia('(max-width: 1024px)')
    this.mediaQuery.addListener(this.resizeHandler)
    this.resizeHandler(this.mediaQuery)
    this.init()
  },
  methods: {
    init() {
      const {
        $refs: {
          text,
          overlay,
          greet,
          title,
          titleOverlay,
          description,
          logo
        }
      } = this
      
      const pathOne = logo.children[1]
      const pathTwo = logo.children[2]
      const pathThree = logo.children[3]
      
      const tl = gsap.timeline()

      if (this.mode === 'desktop') {
        tl.to(text, {
          x: 0,
          duration: 1,
          ease: 'power2.inOut'
        }).to(overlay, {
          x: 0,
          duration: 1,
          ease: 'power2.inOut',
          onComplete() {
            gsap.to(title, {
              opacity: 1,
              duration: 0
            })
          }
        }).to([...greet.children].reverse(), {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out'
        }, '<0').to(title.children, {
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.inOut'
        }, '<0').to(pathOne, {
          strokeDashoffset: 609.2855834960938,
          duration: 0.5,
          ease: 'power2.out'
        }, '>0').to(pathTwo, {
          strokeDashoffset: 1077.700927734375,
          duration: 0.5,
          ease: 'power2.out'
        }, '<0.25').to(pathThree, {
          strokeDashoffset: 1411.638427734375,
          duration: 0.5,
          ease: 'power2.out'
        }, '<0.25').to(titleOverlay, {
          y: '-100%',
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.inOut'
        }, '<0').to(description, {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'power2.inOut'
        }, '<0.5')
      } else {
        tl.to(text, {
          x: 0,
          duration: 0,
        }).to(overlay, {
          x: 0,
          duration: 0
        }).to(title, {
          opacity: 1,
          duration: 0
        }).to([...greet.children].reverse(), {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out'
        }, '<0').to(title.children, {
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.inOut'
        }, '<0.25').to(titleOverlay, {
          y: '-100%',
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.inOut'
        }, '<0').to(description, {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'power2.inOut'
        }, '<0').to(pathOne, {
          strokeDashoffset: 609.2855834960938,
          duration: 0.5,
          ease: 'power2.out'
        }, '>0').to(pathTwo, {
          strokeDashoffset: 1077.700927734375,
          duration: 0.5,
          ease: 'power2.out'
        }, '<0.25').to(pathThree, {
          strokeDashoffset: 1411.638427734375,
          duration: 0.5,
          ease: 'power2.out'
        }, '<0.25')
      }

    },
    resizeHandler(e) {
      if (e.matches) this.$store.dispatch('changeMode', 'mobile')
      else this.$store.dispatch('changeMode', 'desktop')
    },
  }  
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  min-height: calc((var(--vh, 1vh) * 100));
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  > .background {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    height: calc((var(--vh, 1vh) * 100));
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .logo-container {
      z-index: 1;
      position: relative;
      width: 40vw;
      height: 100vh;
      height: calc((var(--vh, 1vh) * 100));
      overflow: hidden;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      svg {
        width: 100%;
        transform: translateY(12.5%);
        .svg-elem-1 {
          stroke-dashoffset: 304.6427917480469px;
          stroke-dasharray: 304.6427917480469px;
        }
        .svg-elem-2 {
          stroke-dashoffset: 538.8504638671875px;
          stroke-dasharray: 538.8504638671875px;
        }
        .svg-elem-3 {
          stroke-dashoffset: 705.8192138671875px;
          stroke-dasharray: 705.8192138671875px;
        }
        .cls-1{
          stroke: #272628;
        }
        .cls-2{
          stroke: #272628;
        }
      }
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      height: calc((var(--vh, 1vh) * 100));
      background: $background-color;
      transform: translateX(-100vw);
    }
  }
  .content {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    .hero-wrapper {
      position: relative;
      width: 100vw;
      height: calc(100vh - 6rem);
      height: calc((var(--vh, 1vh) * 100) - 6rem);
      padding: 6rem 12.5vw 0 12.5vw;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .hero {
        position: relative;
        width: 50%;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
        h2.greet {
          position: relative;
          font-family: 'Oswald';
          font-size: 0.65rem;
          font-weight: 400;
          color: $primary-color;
          letter-spacing: 0.4rem;
          span.letter {
            display: inline-block;
            transform: translateX(-24px);
            opacity: 0;
          }
        }
        h1.title {
          position: relative;
          left: 2rem;
          font-family: 'Manrope';
          font-size: 2.75rem;
          font-weight: 800;
          opacity: 0;
          margin: 1rem 0;
          line-height: 1.2;
          color: #fff;
          span.word-container {
            position: relative;
            margin-right: 0.65rem;
            transform: translateY(1.5rem);
            padding: 0.125rem 0;
            overflow: hidden;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            span.overlay {
              position: absolute;
              width: 100%;
              height: 100%;
              background: $background-color;
            }
            &:first-child {
              margin-left: 0;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
        p.description {
          position: relative;
          left: 2rem;
          font-family: 'Quicksand';
          font-size: 0.75rem;
          margin-right: 2rem;
          transform: translateY(1rem);
          opacity: 0;
          font-weight: 300;
          color: #fefdfc;
          line-height: 1.75;
        }
        .about-company{
          cursor: pointer;
          position: relative;
          margin-top: 1.5rem;
          left: 2rem;
          height: 2rem;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          .bg-animated{
            position: absolute;
            top: 0;
            left: 0;
            background: #272628;
            width: 2rem;
            height: 2rem;
            border-radius: 1rem;
            transition: 0.25s width;
          }
          span{
            position: relative;
            font-family: 'Manrope';
            font-weight: 800;
            letter-spacing: 0.2rem;
            font-size: 12px;
            color: white;
          }

          &:hover{
            .bg-animated{
              
              width: 100%;
            }
          }

        }
      }
    }
  }
  
  @media screen and (max-width: 1024px) {
    .background{
      .logo-container{
        width: 100%;
        height: 100%;
        height: calc((var(--vh, 1vh) * 100));
        svg{
          width: 60%;
        }
      }
    }
    .content {
      .hero-wrapper {
        height: 100vh;
        height: calc((var(--vh, 1vh) * 100));
        padding: 8rem 15vw 4rem 1rem;
        .hero {
          width: 100%;
          overflow: hidden;
          h2.greet {
            font-size: 0.55rem;
          }
          h1.title {
            left: 0;
            font-size: 1.5rem;
            margin: 0.5rem 0;
            span.word-container {
              margin-right: 0.25rem;
            }
          }
          p.description {
            left: 0;
            font-size: 0.55rem;
          }
          .about-company{
            left: 0;
          }
        }
      }
    }
  }
}
</style>