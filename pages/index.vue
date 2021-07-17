<template>
  <div class="container">
    <div class="background">
      <div class="text-container">
        <div ref="text" class="text"></div>
        <div ref="textOverlay" class="text-overlay"></div>
      </div>
      <div ref="overlay" class="overlay"></div>
    </div>
    <div class="content">
      <div class="header">
        <div class="title"></div>
        <div  class="menu-btn" @click="menuHandler">
          <div ref="menuBtnBg" class="background">
            <div class="bar bar-1"></div>
            <div class="bar bar-2"></div>
          </div>
          <div class="bar bar-1"></div>
          <div class="bar bar-2"></div>
        </div>
      </div>
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
        </div>
      </div>
    </div>
    <div class="menu">
      <div ref="menuBg" class="menu-bg"></div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      menuAnim: null,
      heroGreet: 'WE ARE REDIAN',
      heroTitle: 'The only digital agency you\'ll ever need.'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const {
        $refs: {
          text,
          overlay,
          textOverlay,
          greet,
          title,
          titleOverlay
        }
      } = this
      const tl = gsap.timeline({})

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
      }).to(textOverlay, {
        x: 0,
        duration: 1,
        ease: 'power2.inOut'
      }, '<0').to([...greet.children].reverse(), {
        x: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.05,
        ease: 'power2.out'
      }).to(title.children, {
        y: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power2.out'
      }, '<0').to(titleOverlay, {
        y: '-100%',
        duration: 0.75,
        stagger: 0.1,
        ease: 'power2.out'
      }, '<0')
    },
    menuHandler() {
      if (!this.menuAnim) {
        const {
          $refs: {
            menuBg,
            menuBtnBg
          }
        } = this
        const screenHeight = window.innerHeight
        const screenWidth = window.innerWidth
        const diameter = 
          2 * Math.sqrt(
            Math.pow(screenHeight, 2) +
            Math.pow(screenWidth, 2)
          )
        this.menuAnim = gsap.timeline({
          onReverseComplete: () => {this.menuAnim = null}
        })
        this.menuAnim.to(menuBg, {
          x: diameter / 2,
          y: diameter / -2,
          width: diameter,
          height: diameter,
          duration: 0.5,
          ease: 'power2.inOut'
        }).to(menuBtnBg, {
          scale: 1,
          rotate: 45,
          duration: 0.5,
          ease: 'power2.inOut'
        }, '<0')
      } else {
        this.menuAnim.reverse()
      }
    }
  }  
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  > .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .text-container {
      z-index: 1;
      position: relative;
      width: 20vw;
      height: 100vh;
      margin-right: 20vw;
      background: #fff;
      overflow: hidden;
      .text {
        position: relative;
        width: 100%;
        height: 100%;
        background: #000;
        transform: translateX(-100%);
      }
      .text-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #999;
        transform: translateX(100%);
      }
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
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
    .header {
      position: relative;
      width: 100%;
      padding: 2rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .menu-btn {
        z-index: 3;
        cursor: pointer;
        position: relative;
        width: 2rem;
        height: 2rem;
        background: #fff;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .background {
          position: absolute;
          width: 2rem;
          height: 2rem;
          background: $background-color;
          border-radius: 50%;
          transform: scale(0) rotate(45deg);
          display: flex;
          justify-content: center;
          align-items: center;
          .bar {
            position: absolute;
            background: #fff;
            margin: 0 !important;
          }
          .bar-1 {
            width: 1px;
            height: 0.75rem;
          }
        }
        .bar {
          position: relative;
          width: 0.75rem;
          height: 1px;
          background: #1F1E1D;
          &.bar-1 {
            margin-bottom: 0.1rem;
          }
          &.bar-2 {
            margin-top: 0.1rem;
          }
        }
      }
    }
    .hero-wrapper {
      position: relative;
      width: 100vw;
      height: calc(100vh - 6rem);
      padding: 0 12.5vw 6rem 12.5vw;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .hero {
        position: relative;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        h2.greet {
          position: relative;
          font-family: 'Raleway';
          font-size: 0.75rem;
          font-weight: 400;
          color: $primary-color;
          letter-spacing: 0.2rem;
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
            margin: 0 0.25rem;
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
      }
    }
  }
  .menu {
    pointer-events: none;
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .menu-bg {
      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 2rem;
      height: 2rem;
      background: #fff;
      border-radius: 50%;
    }
  }
}
</style>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  font-size: 24px;
}
</style>