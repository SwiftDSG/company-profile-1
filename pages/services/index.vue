<template>
  <div class="container">
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
        <p ref="description" class="description">Building great things in the heart Indonesia.</p>
      </div>
    </div>
  </div>
</template>


<script>
import gsap from 'gsap'

export default {
  data(){
    return{
      heroGreet: "WHAT WE DO",
      heroTitle: "Driving brands fowards online.",
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
          greet,
          title,
          titleOverlay,
          description,
        }
      } = this
      
      
      const tl = gsap.timeline()

      if (this.mode === 'desktop') {
        tl.to([...greet.children].reverse(), {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out'
        }, '<0').to(title.children, {
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          opacity: 1,
          ease: 'power2.inOut'
        }, '<0').to(titleOverlay, {
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
        tl.to(title, {
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
        }, '<0')}
    },


   resizeHandler(e) {
      if (e.matches) this.$store.dispatch('changeMode', 'mobile')
      else this.$store.dispatch('changeMode', 'desktop')
    },
  }
}
</script>



<style lang="scss" scoped>
.container{
  position: relative;
  width: 100vw;
  min-height: 100vh;
  min-height: calc((var(--vh, 1vh) * 100));
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
          letter-spacing: 0.4rem;
          span.letter {
            display: inline-block;
            color: $primary-color;
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
          margin: 1rem 0;
          line-height: 1.2;
          color: black;
          span.word-container {
            position: relative;
            margin-right: 0.65rem;
            transform: translateY(1.5rem);
            padding: 0.125rem 0;
            opacity: 0;
            overflow: hidden;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            span.overlay {
              position: absolute;
              width: 100%;
              height: 100%;
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
          width: 70vw;
          left: 2rem;
          font-family: 'Quicksand';
          font-size: 0.75rem;
          margin-right: 2rem;
          transform: translateY(3rem);
          opacity: 0;
          font-weight: 300;
          color: #6f6f6f;
          line-height: 1.75;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }
      }
  }
      
}
</style>