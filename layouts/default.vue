<template>
  <div class="layout">
    <div ref="header" class="header" :class="route === '/' ? '' : ' dark' ">
      <div ref="companyName" class="title" @click="menuHandler">Redian</div>
      <div class="menu-btn" @click="menuHandler">
        <div ref="menuBtnBg" class="background">
          <div class="bar bar-1"></div>
          <div class="bar bar-2"></div>
        </div>
        <div class="bar bar-1"></div>
        <div class="bar bar-2"></div>
      </div>
    </div>
    <div ref="menu" class="menu" :class="route === '/' ? '' : ' dark' ">
      <div ref="menuBg" class="menu-bg"></div>
      <div ref="menucontent" class="content">
        <div class="header-menu">
          <div class="button-exit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.86 494.13">
              <defs>
                <style>
                  .cls-1{
                    fill: none;
                    stroke: #272628;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 100px;
                  }
                  .cls-2 {
                    fill: none;
                    stroke: #272628;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 80px;
                  }
                </style>
                <clipPath id="svgPath1">
                  <path d="M199.73,199.47,57.16,342.05a33.49,33.49,0,0,1-47.35,0h0a33.47,33.47,0,0,1,0-47.35L152.38,152.12a33.47,33.47,0,0,1,47.35,0h0A33.47,33.47,0,0,1,199.73,199.47Z"/>
                </clipPath>
                <clipPath id="svgPath2">
                  <path d="M342.05,437,199.73,294.43a33.48,33.48,0,0,0-47.36,0L9.81,437a33.47,33.47,0,0,0,0,47.35h0a33.49,33.49,0,0,0,47.35,0L163,378.49a18.29,18.29,0,0,1,25.86,0L294.69,484.33a33.49,33.49,0,0,0,47.35,0l0,0A33.49,33.49,0,0,0,342.07,437Z"/>
                </clipPath>
                <clipPath id="svgPath3">
                  <path d="M342.05,152.34,199.73,9.82a33.47,33.47,0,0,0-47.36,0L9.81,152.37a33.47,33.47,0,0,0,0,47.35h0a33.49,33.49,0,0,0,47.35,0L163,93.88a18.29,18.29,0,0,1,25.86,0L258,163a18.28,18.28,0,0,1,0,25.85L216.79,230a33.49,33.49,0,0,0,0,47.35l0,0a33.47,33.47,0,0,0,47.32,0L342,199.7A33.48,33.48,0,0,0,342.05,152.34Z"/>
                </clipPath>
              </defs>
              <line clip-path="url(#svgPath1)" class="cls-2" x1="38.5" y1="323.33" x2="253.07" y2="109.9"/>
              <polyline clip-path="url(#svgPath2)" class="cls-1" points="39.17 465.22 183.17 321 418.17 557"/>
              <polyline clip-path="url(#svgPath3)" class="cls-1" points="39 180.64 181.61 38.5 323.44 180.2 110.17 394"/>
            </svg>
          </div>
          <div class="desc">LET'S TALK</div>
        </div>
        <div class="body-menu">
          <div class="sub-menu">
            <span class="text">MENU</span>
          </div>
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
            <div class="desc-mobile">LET'S TALK</div>
            <div ref="companyEmail" class="company email">hello@radian.com</div>
            <div ref="companyTelephone" class="company telephone">08953960988012</div>
            <div class="address">Jalan Mutiara Regency 34b,buduran, Gigatan, Sidoarjo</div>
          </div>
        </div>
      </div>
    </div>
    <nuxt />
  </div>   
</template>


<script>
import gsap from 'gsap'

export default {
  data(){
    return{
      menuAnim: null,
      mediaQuery: null
    }
  },

 computed: {
    mode() {
      return this.$store.getters.mode
    },
    route() {
      return this.$route.path
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
    console.log(this.route)
  },

  methods: {
    init() {
      const {
        $refs: {
          header,
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

      if (this.mode === 'desktop') {
        tl.to(header, {
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, '<2')
      } else {
        tl.to(header, {
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
        }, this.mode === 'mobile' ? '>0.5' : null)
      }

    },

    resizeHandler(e) {
      if (e.matches) this.$store.dispatch('changeMode', 'mobile')
      else this.$store.dispatch('changeMode', 'desktop')
    },

    menuHandler() {
      if (!this.menuAnim) {
        const {
          $refs: {
            menuBg,
            menuBtnBg,
            menucontent,
            menu,
            menulist,
            companyName,
            companyEmail,
            companyTelephone
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
        console.log(menulist)
        this.menuAnim.to(menuBg, {
          x: diameter / 2,
          y: diameter / -2,
          width: diameter,
          height: diameter,
          duration: 0.5,
          ease: 'slow(0.5, 0.9,  false)'
        }).to(menuBtnBg, {
          scale: 1,
          rotate: 45,
          duration: 0.5,
          ease: 'power2.inOut'
        }, '<0').to(menucontent, {
          opacity: 1,
          display: 'flex',
        }, '<0.5').to(menulist.children, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out'
        }, '<0').to(menu, {
          pointerEvents: 'auto'
        }, '<0').to(companyName, {
          opacity: 0,
        }, '<0').to([companyEmail, companyTelephone], {
          y: 0,
          opacity: 1,
        }, '<0.25')
      } else {
        this.menuAnim.reverse()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.layout{
  position: relative;
  width: 100vw;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .header {
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 2rem;
    transform: translateY(-100%);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
      z-index: 2;
      position: relative;
      color:white;
      font-family: 'Exo';
      font-size: 1.2rem;
      font-weight: 700;
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

    &.dark {
      .title{
        color: black;
      }
      .menu-btn{
        background: black;
          .background{
            background: white;
            z-index: 1000;
            .bar{
              background: black;
            }
            .bar-1{
              background:black;
            }
          }
          .bar{
            background: white;
            &.bar-1{
              color:black;
              
            }
            &.bar-2{
              color: black;
            }
          }
      }
    }
  }
  .menu {
    z-index: 4;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    height: calc((var(--vh, 1vh) * 100));
    display: none;
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
      position: relative;
      width: 100%;
      height: 100%;
      opacity: 0;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .header-menu{
        position: absolute;
        top: 0;
        left: 0;
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
          align-items: center;
          justify-content: center;
          font-weight: 800;
          flex-shrink: 0;
          // flex-shrink: 0 biar ga gepeng
          svg{
            height: 1.5rem;
          } 
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
        position: relative;
        width: 100vw;
        padding: 0 20vw;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .sub-menu{
          position: relative;
          height: 100%;
          margin-right: 3rem;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          span.text {
            font-size: 0.5rem;
            transform: rotate(270deg) translateX(-50%);
            font-family: 'Manrope';
            letter-spacing: 0.125rem;
            font-weight: 800;
          }
        }
        .menu-list{
          display: flex;
          position: relative;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          .menu-word {
            cursor: pointer;
            user-select: none;
            position: relative;
            height: 100%;
            margin-bottom: 0.5rem;
            display: flex; 
            justify-content: flex-start;
            align-items: flex-start;
            opacity: 0; 
            transform: translateX(-2rem);
            span.name{
              display: flex;
              position: relative;
              font-size: 3rem;
              line-height: 1;
              font-weight: 900;
              font-family: 'Mulish';
              transform: translateX(-0.5rem);
              transition: 0.5s transform;
            }
            span.number {
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
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
        .company-info{
          position: relative;
          width: 15vw;
          height: 100%;
          margin-left: 10vw;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          .desc-mobile {
            position: relative;
            display: none;
            font-family: 'Manrope';
            font-size: 0.5rem;
            font-weight: 900;
            color: black;
            flex-shrink: 0;
            letter-spacing: 0.15rem;
          }
          .company {
            display: flex;
            position: relative;
            color: $primary-color;
            padding-bottom: 0.5rem;
            font-family: 'Mulish';
            font-size: 0.7rem;
            font-weight: 600;
            opacity: 0;
            transform: translateY(100%)
          }
          .address{
            display: flex;
            position: relative;
            font-family: 'Mulish';
            font-size: 0.7rem;
            line-height: 2;
          }
        }
      }
    }
    &.dark {
      .menu-bg{
        background: $background-color;
      }
      .content{
        .header-menu{
          .button-exit{
            background: $background-color;
            svg{
              background: $background-color;
              .cls-1{
                stroke: white;
              }
              .cls-2{
                stroke: white;
              }
            }
          }
          .desc{
            color: white;
          }
        }
        .body-menu{
          .sub-menu{
            span.text{
            color: white;
            }
          }
          .menu-list{
            .menu-word{
              span.name{
                color: white;
              }
              span.number{
                color: white;
              }
            }
          }
          .company-info{
            .desc-mobile{
              color: white; 
            }
          .address{
              color: #6f6f6f;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .header{
      padding : 1rem;
    }
    .menu {
      .menu-bg {
        top: 1rem;
        right: 1rem;
      }
      .content{
        .header-menu{
          padding: 1.3rem 0 1rem 1rem ;
          .button-exit{
            width: 1.3rem;
            height: 1.3rem;
          }
          .desc{
            display: none
          }
        }
        .body-menu{
          .sub-menu{
            display: none;
          }
          .menu-list{
            .menu-word{
              bottom: 3rem;
              right: 1rem; 
              span.name{
                font-size: 40px;
                line-height: 1;
              }
              span.number {
                display: none;
              }
            }
          }
            .company-info{
              top: 5rem;
              right: 10rem;
              .desc-mobile{
                display: flex;
                width: 5rem;
                bottom: 3rem;
                left: 0.2rem;
              }
              .address{ 
                display: none;
              }
            }
        }
      }
    }
  }
}
</style>

<style lang="scss">
::-webkit-scrollbar {
  display: none;
}
html, body {
  margin: 0;
  padding: 0;
  font-size: 24px;
  overflow-x: hidden;
}
</style>