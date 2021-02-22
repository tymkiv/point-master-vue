<template>
  <div class="container">
    <h1 class="js-split"> Aboutpage </h1>
  </div>
</template>

<script>
import gsap from 'gsap';
import Splitter from 'split-html-to-chars';

export default {
  mounted() {
    const els = [...this.$el.querySelectorAll('.js-split')];

    els.forEach((el) => {
      el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
    });

  },
  transition: {
    name: 'test',
    mode: 'out-in',
    css: false,
    enter: function (el, done) {

      const els = el.querySelectorAll('.letter');
      gsap.timeline({onComplete: done})
        // .set(els, {alpha: 0, y: -20}, 0)
        .staggerFromTo(els, 0.5, {alpha: 0, y: -20}, {alpha: 1, y: 0}, 0.05, 0)
    },
    leave: (el, done) => {
      gsap.timeline({onComplete: done})
        .to(el, {duration: 0.3, alpha: 0, x: -100})
    }

  }
}
</script>

<style>

  .letter {
    display: inline-block;
    /* opacity: 0; */
  }
</style>
