<template>
  <div id="app">
    <Header :class="{ 'toggle': isToggleHeader }" />
    <transition :name="transistionMode">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  },
  data () {
    return {
      transitionMode: 'slide-left',
      isToggleHeader: false
    }
  },
  mounted () {
    this.toggleHeader()
  },
  methods: {
    toggleHeader () {
      if (this.$route.name !== 'Home') this.isToggleHeader = true
      else this.isToggleHeader = false
    }
  },
  watch: {
    $route () {
      this.toggleHeader()
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
