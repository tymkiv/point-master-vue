<template>
  <div class="container">
    <h1> This is homepage </h1>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  transition: {
    name: 'test',
    mode: 'out-in',
    css: false,
    enter: (el, done) => {
      gsap.timeline({onComplete: done})
        .fromTo(el, {duration: 0.3, alpha: 0, y: 100}, {alpha: 1, y: 0})
    },
    leave: (el, done) => {
      gsap.timeline({onComplete: done})
        .to(el, {duration: 0.3, alpha: 0, x: -100})
    }

  }
}
</script>

<style>
  .container {
    color: #fff;
  }
  .page-enter-active,
  .page-leave-active {
    transition: all 0.5s;
  }
  .page-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .page-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
  .page-enter-to {
    opacity: 1;
    transform: translateX(0);
  }

  



  
</style>
