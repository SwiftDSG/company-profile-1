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
        <p ref="description" class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum enim omnis qui perferendis autem repellendus sapiente officiis?</p>
        <div class="about-company">
          <div class="bg-animated"></div>
          <span>GET TO KNOW US</span>
        </div>
      </div>
    </div>
      <!-- <span class="conjungtion"> WHO WE ARE </span>
      <div class="sub-content">
        <span class="desc"> A Passionate team, rooted in digital</span>
        <span class="subDesc"> Building great things in the heart Sidoarjo.</span>
      </div> -->
  </div>
</template>


<script>

export default {
  data(){
    return{
      heroGreet: "WHO WE ARE",
      heroTitle: "A Passionate team, rooted in digital"
    }
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
  align-items: center;
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
          color: #BLACK;
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
</style>