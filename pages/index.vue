<template>
  <div class="container">
    <div class="background">
      <div class="text-container">
        <div ref="text" class="text"></div>
        <div ref="textOverlay" class="text-overlay"></div>
      </div>
      <div ref="overlay" class="overlay"></div>
    </div>
    <div ref="mainContent" class="content">
      <div ref="header" class="header">
        <div ref="companyName" class="title" @click="menuHandler">REDIAN</div>
        <div class="menu-btn" @click="menuHandler">
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
          <p ref="description" class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum enim omnis qui perferendis autem repellendus sapiente officiis?</p>
        </div>
      </div>
    </div>
  <div ref="menu" class="menu">
    <div ref="menuBg" class="menu-bg"></div>
    <div ref="menucontent" class="content">
      <div class="header-menu">
        <div class="button-exit" >^</div>
        <div class="desc">LET'S TALK</div>
      </div>
      <div class="body-menu">
        <div class="sub-menu">MENU</div>
        <div ref="menulist" class="menu-list">
          <div class="menu-word">
            <span class="number">01</span>
            <span class="name">Work</span>
          </div>
          <div class="menu-word">
            <span class="number">02</span>
            <span class="name" >Services</span>
          </div>
          <div class="menu-word">
            <span class="number">03</span>
            <span class="name">About</span>
          </div>
          <div class="menu-word">
            <span class="number">04</span>
            <span class="name">Insights</span>
          </div>
          <div class="menu-word">
            <span class="number">05</span>
            <span class="name">Contact</span>
          </div>
        </div>
        <div class="company-info">
          <div class="company email">hello@radian.com</div>
          <div class="company telephone">08953960988012</div>
          <div class="address">Jalan Mutiara Regency 34b,buduran, Gigatan Sidoarjo </div>
          <div class="social-media">
  
          </div>
        </div>
       </div>
    </div>
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
      heroTitle: 'The digital agency you\'ll need.',
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
        mode,
        $refs: {
          header,
          text,
          overlay,
          textOverlay,
          greet,
          title,
          titleOverlay,
          description,
          menu
        }
      } = this
      const tl = gsap.timeline({
        onComplete() {
          gsap.to(menu, {
            display: 'block',
            duration: 0
          })
        }
      })

      if (mode === 'desktop') {
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
        }, '<0')
      } else {
        tl.to(text, {
          x: 0,
          duration: 0,
        }).to(overlay, {
          x: 0,
          duration: 0
        }).to(textOverlay, {
          x: 0,
          duration: 0,
        }).to(title, {
          opacity: 1,
          duration: 0
        })
      }

      tl.to(header, {
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      }, mode === 'mobile' ? '>0.5' : null).to([...greet.children].reverse(), {
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
      }, '<0.5')
    },
    resizeHandler(e) {
      if (e.matches) this.$store.dispatch('changeMode', 'mobile')
      else this.$store.dispatch('changeMode', 'desktop')
    },

    // menuList(){
    //   const {
    //     $refs: {
    //       work,
    //       services,
    //       about,
    //       insights,
    //       contact,
    //     }
    //   } = this 
    //   const tl = gsap.timeline({})
    //   tl.to()
    // },

    menuHandler() {
      if (!this.menuAnim) {
        const {
          $refs: {
            menuBg,
            menuBtnBg,
            menucontent,
            mainContent,
            menu,
            menulist,
            companyName
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
        }, '<0').to(menucontent,{
          opacity: 1,
          display: 'flex',
        }, '<0.5').to(menulist.children,{
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out'
        },'<0').to([...mainContent.children].slice(1),{
          pointerEvents: 'none'
        }, '<0').to(menu,{
          pointerEvents: 'auto'
        }, '<0').to(companyName,{
          opacity:0,
        },'<0')
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
    z-index: -1;
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
      z-index: 5;
      position: relative;
      width: 100%;
      padding: 2rem;
      transform: translateY(-100%);
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title{
        z-index: 2;
        position: relative;
        display: fixed;
        color:white;
        font-family: 'Manrope';
        font-size: 1.2rem;
        font-weight: 800;
      }
      .menu-btn {
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
        margin-top: 2rem;
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
          font-family: 'Raleway';
          font-size: 0.75rem;
          margin-right: 2rem;
          transform: translateY(1rem);
          opacity: 0;
          font-weight: 450;
          color: #fefdfc;
          line-height: 1.75;
        }
      }
    }
  }
  .menu {
    display: none;
    pointer-events: none;
    z-index: 4;
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
    .content{
      display: none;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      opacity: 0;
      position: fixed;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .header-menu{
        position: relative;
        display: flex;
        width: 100vw;
        padding: 2rem;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        .button-exit{
          display: flex;
          position: relative;
          width: 1.5rem;
          height: 1.5rem;
          background: white;
          border: 3px black solid;
          border-radius: 1.5rem; 
          align-items: center;
          justify-content: center;
          font-weight: 800;
          flex-shrink: 0;
          // flex-shrink: 0 biar ga gepeng 
        }
        .desc{
          position: relative;
          right: 3rem;
          display: flex;
          font-family: 'Manrope';
          font-size: 0.5rem;
          font-weight: 900;
          color: black;
          flex-shrink: 0;
          letter-spacing: 0.15rem;
        }
      }
      .body-menu{
        display: flex;
        position: relative;
        width: 100vw;
        height: 80vh;
        flex-direction: row;
        justify-content: flex-start;
        margin-left: 5rem;
        align-items: flex-start;
        .sub-menu{
          display: flex;
          position: relative;
          padding-right: 2rem;
          transform: rotate(270deg);
          font-size: 0.5rem;
          font-family: 'Manrope';
          letter-spacing: 0.2rem;
          font-weight: bold;
        }
        .menu-list{
          display: flex;
          position: relative;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          .menu-word {
            display: flex; 
            position: relative;
            width: 12rem;
            height: 100%;
            opacity: 0; 
            transform: translateX(-2rem);
            padding-bottom: 0.5rem;
            justify-content: flex-start;
            align-items: flex-start;
            .name{
              display: flex;
              position: relative;
              font-size: 3rem;
              line-height: 1;
              font-weight: 900;
              font-family: 'Mulish';
              transform: translateX(-0.5rem);
              transition: 0.5s transform;
            }
            .number {
              display: flex;
              position: relative;
              justify-content: flex-start;
              align-items: flex-start;
              font-size: 0.5rem;
              opacity: 0;
              font-family: 'Raleway';
              transform: translateX(1rem);
              letter-spacing: 0.125rem;
              font-weight: 700;
              top: 0.5rem;
              right: 0.5rem;
              transition: 0.5s transform, 0.5s opacity;
            }
            &:hover {
              .name{
                transform: translateX(0)
              }
              .number{
                transform: translateX(0);
                opacity: 1;
              }
              
            }
          } 
        }
        .company-info{
          display: flex;
          position: relative;
          flex-direction: column;
          left: 17rem;
          top: 12.5rem;
          width: 13rem;
          .company {
            display: flex;
            position: relative;
            color: $primary-color;
            padding-bottom: 0.5rem;
            font-family: 'Mulish';
            font-size: 0.7rem;
          }
          .address{
            display: flex;
            position: relative;
            font-family: 'Mulish';
            font-size: 0.7rem;
            line-height: 2;
          }
          .social-media{

          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .content {
      .header {
        padding: 1rem;
      }
      .hero-wrapper {
        height: calc(100vh - 4rem);
        padding: 0 1rem 4rem 1rem;
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
        }
      }
    }
    .menu {
      .menu-bg {
        top: 1rem;
        right: 1rem;
      }
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