<template>
  <div id="app">
    <Header
      v-if="$route.meta.type === 'main'"
      :toggle="isToggleHeader"
      :isMobile="isMobile"
    />
    <SlideDown v-if="!isMobile && $route.meta.type === 'main'" />
    <transition :name="transitionMode" v-if="!isMobile || $route.meta.type === 'self'">
      <keep-alive>
        <router-view class="main-view" />
      </keep-alive>
    </transition>
    <div class="mobile-page-group" v-if="isMobile && $route.meta.type === 'main'">
      <Home />
      <Intro />
      <Active />
      <Exhibition />
    </div>
  </div>
</template>

<script>
import Home from '@/view/Home'
import Active from '@/view/Active'
import Intro from '@/view/Intro'
import Exhibition from '@/view/Exhibition'
import Header from '@/components/Header'
import SlideDown from '@/components/SlideDown'

export default {
  components: {
    Header,
    Home,
    Active,
    Intro,
    Exhibition,
    SlideDown
  },
  data () {
    return {
      transitionMode: 'slide-left',
      isToggleHeader: false,
      isMobile: false,
      routerList: [],
      routerAt: 0,
      stop: false
    }
  },
  mounted () {
    this.routerList = this.$router.options.routes.filter(item => item.meta && item.meta.type === 'main').sort((a, b) => (a.meta.index > b.meta.index)).map(ele => (ele.name))
    this.routerAt = this.routerList.indexOf(this.$route.name)
    this.toggleHeader()
    this.toggleDevice()
    window.addEventListener('resize', this.toggleDevice, false)
  },
  methods: {
    toggleDevice () {
      if (document.documentElement.clientWidth <= 900 || /iPad|iPhone|Android|Mobile/i.test(navigator.userAgent)) this.isMobile = true
      else this.isMobile = false

      if (this.$route.meta.type === 'main' && !this.isMobile) {
        window.addEventListener('mousewheel', this.scrollHandler, false)
        window.addEventListener('DOMMouseScroll', this.scrollHandler, false)
      } else {
        this.$router.push({ name: 'Home' })
        window.removeEventListener('mousewheel', this.scrollHandler)
        window.removeEventListener('DOMMouseScroll', this.scrollHandler)
      }
    },
    toggleHeader () {
      if (this.$route.name !== 'Home') this.isToggleHeader = true
      else this.isToggleHeader = false
    },
    scrollHandler (event) {
      event = window.event || event
      event.preventDefault()

      if (!this.stop) {
        this.stop = true
        let delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)))

        if (delta < 0) {
          this.routerAt = this.routerAt === this.routerList.length ? this.routerAt : this.routerAt + 1
        } else {
          this.routerAt = this.routerAt === 0 ? this.routerAt : this.routerAt - 1
        }

        this.$router.push({name: this.routerList[this.routerAt]})

        setTimeout(() => {
          this.stop = false
        }, 1000)
      }
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
