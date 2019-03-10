<template>
  <div id="app">
    <Header :toggle="isToggleHeader" />
    <transition :name="transitionMode">
      <keep-alive>
        <router-view class="main-view" />
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
      isToggleHeader: false,
      routerList: [],
      routerAt: 0
    }
  },
  mounted () {
    this.routerList = this.$router.options.routes.filter(item => item.meta && item.meta.type === 'main').sort((a, b) => (a.meta.index > b.meta.index)).map(ele => (ele.name))
    this.routerAt = this.routerList.indexOf(this.$route.name)
    this.toggleHeader()
    window.addEventListener('mousewheel', this.scrollHandler, false)
    window.addEventListener('DOMMouseScroll', this.scrollHandler, false)
  },
  methods: {
    toggleHeader () {
      if (this.$route.name !== 'Home') this.isToggleHeader = true
      else this.isToggleHeader = false
    },
    scrollHandler (event) {
      event = window.event || event
      event.preventDefault()
      window.removeEventListener('mousewheel', this.scrollHandler)
      window.removeEventListener('DOMMouseScroll', this.scrollHandler)

      let delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)))

      if (delta < 0) {
        this.routerAt = this.routerAt === this.routerList.length ? this.routerAt : this.routerAt + 1
      } else {
        this.routerAt = this.routerAt === 0 ? this.routerAt : this.routerAt - 1
      }

      this.$router.push({name: this.routerList[this.routerAt]})

      setTimeout(() => {
        window.addEventListener('mousewheel', this.scrollHandler, false)
        window.addEventListener('DOMMouseScroll', this.scrollHandler, false)
      }, 1000)
    }
  },
  watch: {
    $route (from, to) {
      this.toggleHeader()
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      this.transitionMode = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";
</style>
