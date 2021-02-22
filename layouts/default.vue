<template>
  <div class="layout">
    <div class="layout__animation">
      <Animation />
    </div>
    <div class="layout__navigation">
      <Navigation />
    </div>
    <div class="layout__content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Animation from '~/components/Animation.vue'
export default {
  components: {
    Navigation, Animation
  }
}
</script>

<style>

</style>
