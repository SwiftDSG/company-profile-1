<template>
  <div class="container">
    <div class="background">
      <div ref="logoContainer" class="logo-container">
        <svg ref="logo" class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315.27 441.84">
          <defs>
            <style>
              .cls-1 {
                fill: none;
                stroke-linecap: round;
                stroke-miterlimit: 10;
                stroke-width: 100px;
              }
            </style>
            <clipPath id="svg-path-1">
              <rect x="-26.36" y="191.63" width="240" height="60" rx="30" transform="translate(-129.29 131.13) rotate(-45)"></rect>
            </clipPath>
            <clipPath id="svg-path-2">
              <path d="M285.27,199.71l21.21-21.22a30,30,0,0,0,0-42.42L179.2,8.79a30,30,0,0,0-42.43,0L9.49,136.07a30,30,0,0,0,0,42.42h0a30,30,0,0,0,42.43,0L147.38,83a15,15,0,0,1,21.21,0l63.64,63.64a15,15,0,0,1,0,21.22l-31.82,31.82a30,30,0,0,0,0,42.42h0a30,30,0,0,0,42.43,0l42.43-42.42Z"></path>
            </clipPath>
            <clipPath id="svg-path-3">
              <path d="M9.49,433.05h0a30,30,0,0,0,42.43,0l95.46-95.46a15,15,0,0,1,21.21,0l95.46,95.46a30,30,0,0,0,42.43,0h0a30,30,0,0,0,0-42.43L200.41,284.56,179.2,263.35a30,30,0,0,0-42.43,0L9.49,390.62A30,30,0,0,0,9.49,433.05Z"></path>
            </clipPath>
          </defs>
          <line clip-path="url(#svg-path-1)" class="cls-1 svg-elem-1" x1="30.41" y1="285.15" x2="221.32" y2="94.24"></line>
          <path clip-path="url(#svg-path-2)" class="cls-1 svg-elem-2" d="M31.11,157.17,137.18,51.1a30,30,0,0,1,42.42,0L264.52,136a30,30,0,0,1,.06,42.37L159.05,284.5"></path>
          <path clip-path="url(#svg-path-3)" class="cls-1 svg-elem-3" d="M420,546.08,179.6,305.66a30,30,0,0,0-42.42,0L31.11,411.73"></path>
        </svg>
        <svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444 458.77">
          <defs>
            <style>
              .cls-2 {
                stroke-width: 1px;
                stroke-miterlimit: 10;
              }
            </style>
          </defs>
          <path class="cls-2" d="M.35,458.42l269-269a22.51,22.51,0,0,0,0-31.82l-31.83-31.82a22.48,22.48,0,0,0-31.81,0L126.89,204.6a45,45,0,0,1-63.64,0h0a45,45,0,0,1,0-63.64L190.53,13.68a45,45,0,0,1,63.64,0L381.93,141.44A45,45,0,0,1,382,205l-64,64.19a45,45,0,0,0,.12,63.67L443.65,458"/>
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
            <div ref="bgButton" class="bg-animated"></div>
            <span ref="wordButton" @click="$router.push('/about')">GET TO KNOW US + </span>
          </div>
        </div>
      </div>
    </div>
    <div class="featured-content">
      <div class="title-container">
        <h1 class="title-featured">
          <span 
            v-for="(n, i) in titleFeatured.split(' ')"
            :key="i"
            class="word-container"
          >
            <span class="word">{{ n }}</span>
            <span ref="titleOverlay" class="overlay"></span>
          </span>
        </h1>
        <p class="subtitle-featured">
          Explore some of our latest website projects.
        </p>
      </div>
      <div class="image-container">
        <div class="image-wrapper">
          <div class="image"></div>
          <div class="desc-image">
            <span class="main">Optimal Dynamics</span>
            <span class="sub">Corporate Website</span>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="image"></div>
          <div class="desc-image">
            <span class="main">Optimal Dynamics</span>
            <span class="sub">Corporate Website</span>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="image"></div>
          <div class="desc-image">
            <span class="main">Optimal Dynamics</span>
            <span class="sub">Corporate Website</span>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="image"></div>
          <div class="desc-image">
            <span class="main">Optimal Dynamics</span>
            <span class="sub">Corporate Website</span>
          </div>
        </div>
      </div>
      <div class="more-work">
        <div class="bg-work"></div>
        <span>VIEW MORE WORK + </span>
      </div>
    </div>
    <div class="more-about">
       <div class="hero-wrapper">
        <div class="hero">
          <h2 ref="greetTwo" class="greet">
            <span 
              v-for="(n, i) in moreAbout.split('')"
              :key="i"
              class="letter"
              :style="n === ' ' ? 'margin: 0 0.25rem' : ''"
            >
              {{ n }}
            </span>
          </h2>
          <h1 class="title">
            <span 
              class="word-container"
            >
              We are a web design and development company, building websites that drive traffic, engagement, and conversion for industry-leading brands and startups in Indonesia.
            </span>
          </h1>
        </div>
      </div>
    </div>
    <div class="our-services">
     <div class="hero-wrapper">
        <div class="hero">
          <h2 ref="greetThree" class="greet">
            <span 
              v-for="(n, i) in ourServices.split('')"
              :key="i"
              class="letter"
              :style="n === ' ' ? 'margin: 0 0.25rem' : ''"
            >
              {{ n }}
            </span>
          </h2>
          <div class="list-service 1">
            <div class="service">
              <span class="name-service">Websites</span>
              <div class="image-service"></div>
            </div>
            <div class="desc">
              <span class="word-container">
                We build impactful experiences through great UX, design, and development.
              </span>
            </div>
            <div class="more-services">
              <div class="bg-services"></div>
              <span>VIEW OUR SERVICES + </span>
            </div>             
          </div>
          <div class="list-service 2">
          <div class="service">
            <span class="name-service">Creative</span>
            <div class="image-service"></div>
          </div>
          <div class="desc">
            <span class="word-container">
              We design visually-engaging marketing assets to help drive your brand foward.
            </span>
           
          </div>
          <div class="more-services">
            <div class="bg-services"></div>
            <span>VIEW OUR SERVICES + </span>
          </div>             
          </div>
          <div class="list-service 3">
          <div class="service">
            <span class="name-service">Strategy</span>
            <div class="image-service"></div>
          </div>
          <div class="desc">
            <span class="word-container">
              We identify businesses challenges and develop solutions to achieve your goals.
            </span>
          </div>   
          <div class="more-services">
            <div class="bg-services"></div>
            <span>VIEW OUR SERVICES + </span>
          </div>
         </div>
        </div>
     </div>
    </div>
    <div class="latest-insights">
      <div class="title-container">
        <h1 class="title-featured">
          <span 
            v-for="(n, i) in titleInsights.split(' ')"
            :key="i"
            class="word-container"
          >
            <span class="word">{{ n }}</span>
            <span ref="titleOverlay" class="overlay"></span>
          </span>
        </h1>
        <p class="subtitle-featured">
          Our thoughts and perspectives on digital.
        </p>
      </div>
      <div class="image-container">
        <div class="image-wrapper">
          <div class="image"></div>
          <div class="desc-image">
            <span class="main">WEB & DIGITAL DESIGN</span>
            <span class="sub">Design Systems for the Web</span>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="image"></div>
          <div class="desc-image">
            <span class="main">CUSTOMER TRENDS</span>
            <span class="sub">Building a Consumer-focus</span>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="image"></div>
          <div class="desc-image actions">
            <span class="main">WEB & DIGITAL DESIGN</span>
            <span class="sub">Build an inclusive Brand by Integrating Accesible Web Standards</span>
          </div>
        </div>
        <div class="image-wrapper">
          <div class="image"></div>
          <div class="desc-image">
            <span class="main">CUSTOMER TRENDS</span>
            <span class="sub">Driving Engagement Through Storytelling</span>
          </div>
        </div>
      </div>
      <div class="more-work">
        <div class="bg-work"></div>
        <span>VIEW MORE INSIGHTS + </span>
      </div>
    </div>
    <div class="footer">
      <div class="hero-wrapper">
        <div class="left-container">
          <div class="logo-brand">
           <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315.27 441.84">
              <defs>
                <style>
                  .cls-4 {
                    fill: none;
                    stroke-linecap: round;
                    stroke-miterlimit: 10;
                    stroke-width: 100px;
                  }
                </style>
                <clipPath id="svg-path-1">
                  <rect x="-26.36" y="191.63" width="240" height="60" rx="30" transform="translate(-129.29 131.13) rotate(-45)"></rect>
                </clipPath>
                <clipPath id="svg-path-2">
                  <path d="M285.27,199.71l21.21-21.22a30,30,0,0,0,0-42.42L179.2,8.79a30,30,0,0,0-42.43,0L9.49,136.07a30,30,0,0,0,0,42.42h0a30,30,0,0,0,42.43,0L147.38,83a15,15,0,0,1,21.21,0l63.64,63.64a15,15,0,0,1,0,21.22l-31.82,31.82a30,30,0,0,0,0,42.42h0a30,30,0,0,0,42.43,0l42.43-42.42Z"></path>
                </clipPath>
                <clipPath id="svg-path-3">
                  <path d="M9.49,433.05h0a30,30,0,0,0,42.43,0l95.46-95.46a15,15,0,0,1,21.21,0l95.46,95.46a30,30,0,0,0,42.43,0h0a30,30,0,0,0,0-42.43L200.41,284.56,179.2,263.35a30,30,0,0,0-42.43,0L9.49,390.62A30,30,0,0,0,9.49,433.05Z"></path>
                </clipPath>
              </defs>
              <line clip-path="url(#svg-path-1)" class="cls-4 svg-elem-1" x1="30.41" y1="285.15" x2="221.32" y2="94.24"></line>
              <path clip-path="url(#svg-path-2)" class="cls-4 svg-elem-2" d="M31.11,157.17,137.18,51.1a30,30,0,0,1,42.42,0L264.52,136a30,30,0,0,1,.06,42.37L159.05,284.5"></path>
              <path clip-path="url(#svg-path-3)" class="cls-4 svg-elem-3" d="M420,546.08,179.6,305.66a30,30,0,0,0-42.42,0L31.11,411.73"></path>
           </svg>
          </div>
          <span class="desc">Making great things in Indonesia</span>
        </div>
        <div class="right-container">
          <div class="top">
            <span class="title">GET IN TOUCH</span>
            <span class="email">hello@redian.com</span>
            <span class="number"> 081234588801</span>
          </div>
          <div class="bottom">
            <span class="title">EXPLORE</span>
            <div class="menu-list">
              <div class="menu">Work</div>
              <div class="menu">Services</div>
              <div class="menu">About</div>
              <div class="menu">Careers</div>
              <div class="menu">Insights</div>
              <div class="menu">Contact</div>
            </div>
            <span class="alamat">Mutiara Regency blok DD/54</span>
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
      mediaQuery: null,
      titleFeatured: 'Featured Work',
      titleInsights: 'Latest Insights',
      moreAbout: 'A DIGITAL AGENCY',
      ourServices: 'WHAT WE DO'
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
          logo,
          bgButton,
          wordButton,
          greetTwo,
          greetThree
        }
      } = this
      
      const pathOne = logo.children[1]
      const pathTwo = logo.children[2]
      const pathThree = logo.children[3]
      const pathFour = logo.nextElementSibling.children[1]
      
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
        }, '<0').to([...greetTwo.children], {
          x: 0,
          opacity:1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out'
        }, '<0').to([...greetThree.children], {
          x: 0,
          opacity:1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out'
        }, '<0').to(title.children, {
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.inOut'
        }, '<0').to(pathOne, {
          strokeDashoffset: 543.9750366210938,
          duration: 0.5,
          ease: 'power2.out'
        }, '>0').to(pathTwo, {
          strokeDashoffset: 1031.851318359375,
          duration: 0.5,
          ease: 'power2.out'
        }, '<0.25').to(pathThree, {
          strokeDashoffset: 0,
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
        }, '<0.5').to(bgButton,{
          x: 0,
          opacity: 1,
          ease: 'power2.inOut'
        },'<0').to(wordButton, {
          x: 0,
          stagger: 0.5, 
          opacity: 1,
          ease: 'power2.inOut'
        }).to(pathFour, {
          strokeDashoffset: 0,
          duration: 5,
          ease: 'power2.inOut'
        })
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
          strokeDashoffset: 543.9750366210938,
          duration: 0.5,
          ease: 'power2.out'
        }, '>0').to(pathTwo, {
          strokeDashoffset: 1031.851318359375,
          duration: 0.5,
          ease: 'power2.out'
        }, '<0.25').to(pathThree, {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, '<0.25').to(bgButton,{
          x: 0,
          opacity: 1,
          ease: 'power2.inOut'
        },'<0').to(wordButton, {
          x: 0,
          stagger: 0.5, 
          opacity: 1,
          ease: 'power2.inOut'
        },'>0')
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
    overflow: hidden;
    .logo-container {
      z-index: 1;
      position: relative;
      width: 40vw;
      height: 100vh;
      height: calc((var(--vh, 1vh) * 100));
      display: flex;
      justify-content: flex-end;
      align-items: center;
      svg.logo {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        transform: translateY(4rem);
        .cls-1{
          stroke: #272628;
        }
        .svg-elem-1 {
          stroke-dashoffset: 271.9875183105469px;
          stroke-dasharray: 271.9875183105469px;
        }
        .svg-elem-2 {
          stroke-dashoffset: 515.9256591796875px;
          stroke-dasharray: 515.9256591796875px;
        }
        .svg-elem-3 {
          stroke-dashoffset: 539.1181640625px;
          stroke-dasharray: 539.1181640625px;
        }
      }
      svg.line {
        position: absolute;
        width: 140.61017123339812526327008084612%;
        right: 0;
        bottom: 0;
        transform: translate(15%, 4rem);
        .cls-2 {
          stroke: $primary-color;
          stroke-dashoffset: 1591.5682373046875px;
          stroke-dasharray: 1591.5682373046875px;
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
    height: 100vh;
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
            opacity: 0;
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
            opacity: 0;
            transform: translateX(1rem);
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
  .featured-content{
    position: relative;
    width: 100%;
    padding: 5rem calc(12.5vw + 2rem);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .title-container{
      position: relative;
      display: flex;
      transform: translateX(-75%);
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      h1.title-featured{
        position: relative;
        font-family: 'Manrope';
        font-size: 2.75rem;
        // opacity: 0;
        font-weight: 800;
        line-height: 1.2;
        color: black;
        span.word-container {
          position: relative;
          margin-right: 0.65rem;
          // transform: translateY(1.5rem);
          padding: 0.125rem 0;
          overflow: hidden;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          span.overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: white;
          }
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      p.subtitle-featured {
        position: relative;
        font-family: 'Quicksand';
        font-size: 0.9rem;
        margin-right: 2rem;
        transform: translateY(-2.5rem);
        // transform: translateY(1rem);
        font-weight: 400;
        color: black;
        line-height: 1.75;
      }
    }
    .image-container{
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      .image-wrapper{
        position: relative;
        height: 26rem;
        width: calc(50% - 1.5rem);
        background:cyan;
        display: flex;
        flex-shrink: 0;
        margin-bottom: 3rem;
        .desc-image{
          position: relative;
          height: 100%;
          width: 100%;
          left: 1rem;
          display: flex;
          transform: translateY(-2rem);
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          span.main{
            font-family: 'Manrope';
            font-weight: 800;
            font-size: 36px;
            line-height: 70px;
          }
          span.sub{
            font-weight: 500;
            font-family: 'Quicksand';
            font-size: 16px;
            line-height: 1.3rem;
          }
        }
        &:nth-child(odd){
          // ganjil
          margin-right: 1.5rem;
        }
        &:nth-child(even){
          // genap
          margin-left: 1.5rem;
        }
      }
    }
    .more-work{
    cursor: pointer;
    position: relative;
    margin-top: 1.5rem;
    height: 2rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .bg-work{
      position: absolute;
      top: 0;
      left: 0;
      background: #F2F2F2;
      transform: translateX(1rem);
      width: 2rem;
      height: 2rem;
      border-radius: 1rem;
      transition: 0.25s width;
    }
    span{
      position: relative;
      font-family: 'Manrope';
      font-weight: 800;
      transform: translateX(1rem);
      letter-spacing: 0.2rem;
      font-size: 12px;
      color:black;
    }
    &:hover{
      .bg-work{
        width: 100%;
      }
    }
    }
  }
  .more-about{
    position: relative;
    width: 100%;
    height: 98vh;
    height: calc((var(--vh, 1vh) * 98));
    padding: 5rem calc(12.5vw + 2rem);
    background: $primary-color;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .hero-wrapper {
      position: relative;
      width: 100vw;
      height: calc(100vh - 6rem);
      height: calc((var(--vh, 1vh) * 100) - 6rem);
      padding: 0 12.5vw 2rem 12.5vw;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .hero {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        justify-content: center;
        align-items: flex-start;
        h2.greet {
          position: relative;
          font-family: 'Oswald';
          font-size: 0.5rem;
          font-weight: 400;
          color:  white;
          letter-spacing: 0.4rem;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start ;
          span.letter {
            display: inline-block;
            transform: translateX(-24px);
            opacity: 0;
          }
        }
        h1.title {
          position: relative;
          width: 70%;
          left: 2rem;
          font-family: 'Manrope';
          font-size: 30px;
          font-weight: 800;
          margin: 1rem 0;
          line-height: 70px;
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
      }
    }
  }
  .our-services{
    position: relative;
    width: 100%;
    min-height: 100vh;
    min-height: calc((var(--vh, 1vh) * 100));
    padding: 5rem calc(12.5vw + 2rem);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .hero-wrapper {
      position: relative;
      width: 100vw;
      padding: 5rem calc(12.5vw + 2rem);
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .hero {
        position: relative;
        width: 100%;
        margin-top: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        h2.greet {
          position: relative;
          font-family: 'Oswald';
          font-size: 0.75rem;
          font-weight: 400;
          width: 100%;
          color: black;
          letter-spacing: 0.4rem;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start ;
          span.letter {
            display: inline-block;
            transform: translateX(-24px);
            opacity: 0;
          }
        }
        .list-service{
          position: relative;
          width: 100%;
          padding-bottom: 8rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          .service{
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            span.name-service{
            position: absolute;
            display: flex;
            top: 1rem;
            transform: translateY(2rem);
            letter-spacing: 0.5rem;
            font-family: 'Mulish';
            font-weight: 750;
            font-size: 8rem;
            color: rgba(black, 0.1);
            }
            .image-service{
              position: relative;
              width: 11rem;
              height: 20rem;
              z-index: 1;
              transform: scale(1) rotate(35deg);
              background: cyan;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .desc {
            position: relative;
            overflow: hidden;
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            transform: translateY(-5rem);
              span.word-container {
                font-family: 'Manrope';
                font-size: 0.6rem;
                width: 28%;
                transform: translateX(-2rem);
                font-weight: 600;
                color: rgba(black, 0.6);
              }
          }
          .more-services{
            cursor: pointer;
            position: relative;
            margin-top: 1.5rem;
            transform: translateX(-2rem);
            height: 2rem;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            .bg-services{
              position: absolute;
              top: 0;
              left: 0;
              background: #F2F2F2;
              transform: translateX(1rem);
              width: 2rem;
              height: 2rem;
              border-radius: 1rem;
              transition: 0.25s width;
            }
            span{
              position: relative;
              font-family: 'Manrope';
              font-weight: 800;
              transform: translateX(1rem);
              letter-spacing: 0.2rem;
              font-size: 12px;
              color:black;
            }
            &:hover{
              .bg-services{
                width: 100%;
              }
            }
          }

          &.3{
            .more-services{
              opacity:1;
            }
          }
        } 
     }
    }
  }
  .latest-insights{
    position: relative;
    width: 100%;
    padding: 5rem calc(12.5vw + 2rem);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .title-container{
      position: relative;
      display: flex;
      transform: translateX(-75%);
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      h1.title-featured{
        position: relative;
        font-family: 'Manrope';
        font-size: 2.75rem;
        // opacity: 0;
        font-weight: 800;
        line-height: 1.2;
        color: black;
        span.word-container {
          position: relative;
          margin-right: 0.65rem;
          // transform: translateY(1.5rem);
          padding: 0.125rem 0;
          overflow: hidden;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          span.overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: white;
          }
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      p.subtitle-featured {
        position: relative;
        font-family: 'Quicksand';
        font-size: 0.9rem;
        margin-right: 2rem;
        transform: translateY(-2.5rem);
        // transform: translateY(1rem);
        font-weight: 400;
        color: black;
        line-height: 1.75;
      }
    }
    .image-container{
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      .image-wrapper{
        position: relative;
        height: 26rem;
        width: calc(50% - 1.5rem);
        display: flex;
        flex-shrink: 0;
        margin-bottom: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .image{
          position: relative;
          height: 80%;
          width: 100%;
          background: red;
          display: flex;
        }
        .desc-image{
          position: relative;
          height: 20%;
          width: 100%;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          span.main{
            font-family: 'Manrope';
            font-weight: 500;
            font-size: 16px;
            padding-left: 1rem;
            line-height: 28px;
            letter-spacing: 0.15rem;
          }
          span.sub{
            font-weight: 500;
            font-family: 'Quicksand';
            padding-left: 1rem;
            font-size: 26px;
            margin-top: 1rem;
            line-height: 1.3rem;
          }

          &.actions {
            top: 1rem;
          }
        }
        &:nth-child(odd){
          // ganjil
          margin-right: 1.5rem;
        }
        &:nth-child(even){
          // genap
          margin-left: 1.5rem;
        }
      }
    }
    .more-work{
    cursor: pointer;
    position: relative;
    margin-top: 1.5rem;
    height: 2rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .bg-work{
      position: absolute;
      top: 0;
      left: 0;
      background: #F2F2F2;
      transform: translateX(1rem);
      width: 2rem;
      height: 2rem;
      border-radius: 1rem;
      transition: 0.25s width;
    }
    span{
      position: relative;
      font-family: 'Manrope';
      font-weight: 800;
      transform: translateX(1rem);
      letter-spacing: 0.2rem;
      font-size: 12px;
      color:black;
    }
    &:hover{
      .bg-work{
        width: 100%;
      }
    }
    }
  }
  .footer{
    position: relative;
    width: 100%;
    height: 75vh;
    height: calc((var(--vh, 1vh) * 75));
    padding: 5rem calc(12.5vw + 2rem);
    background: $background-color;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
     .hero-wrapper {
      position: relative;
      width: 100%;
      height: 80%;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .left-container{
        position: relative;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: flex-start;
        .logo-brand{
          z-index: 1;
          position: relative;
          width: 2.5rem;
          height: 2.5rem;
          border: 4px solid white;
          border-radius: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
            svg.logo {
            position: relative;
            right: 0;
            bottom: 0;
            width: 1.5rem;
            height: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .cls-4{
              stroke: #fefdfc;
            }
           }
          }
          span.desc{
           position: relative;
           top: 2rem;
           color: white;
           width: 10rem;
           font-family: 'Manrope';
           font-size: 24px;
           font-weight: 600;
           line-height: 36px;
          }
      }
      .right-container{
        position: relative;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: flex-start;
        .top{
          position: relative;
          height: 50%;
          width: 100%;
          span.email{
            display: flex;
            position: relative;
            color: $primary-color;
            padding-bottom: 0.5rem;
            font-family: 'Mulish';
            font-size: 0.7rem;
            font-weight: 600;
          }
          span.number{
            display: flex;
            position: relative;
            color: $primary-color;
            padding-bottom: 0.5rem;
            font-family: 'Mulish';
            font-size: 0.7rem;
            font-weight: 600;
          }
        }
        .bottom{
          position: relative;
          height: 50%;
          width: 100%;
          top: 4rem;
         .menu-list{
           position: relative;
           display: flex;
           justify-content: flex-start;
           align-items: flex-start;
           .menu{
             font-size: 0.8rem;
             color: #9c9c9c;
             font-family: 'Manrope';
             margin-right: 0.5rem;
           }
         }
         span.alamat{
           font-family: 'Manrope';
           color: #6f6f6f;
         }
        }
        span.title{
          color: white;
          font-size: 18px;
          font-family: 'Manrope';
          font-weight: 800;
          margin-bottom: 3rem;
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