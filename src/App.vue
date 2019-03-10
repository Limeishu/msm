<template>
  <div id="app">
    <Header
      v-if="$route.meta.type === 'main'"
      :toggle="isToggleHeader"
      :isMobile="isMobile"
    />
    <transition :name="transitionMode" v-if="!isMobile || $route.meta.type === 'self'">
      <keep-alive>
        <router-view class="main-view" />
      </keep-alive>
    </transition>
    <div class="mobile-page-group" v-if="isMobile && $route.meta.type === 'main'">
      <Home />
      <Active />
      <Exhibition />
    </div>
  </div>
</template>

<script>
import Home from '@/view/Home'
import Active from '@/view/Active'
import Exhibition from '@/view/Exhibition'
import Header from '@/components/Header'

export default {
  components: {
    Header,
    Home,
    Active,
    Exhibition
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
    this.toggleMobile()
    if (this.$route.meta.type === 'main' && !this.isMobile) {
      window.addEventListener('mousewheel', this.scrollHandler, false)
      window.addEventListener('DOMMouseScroll', this.scrollHandler, false)
      window.addEventListener('resize', this.toggleMobile, false)
    }
  },
  methods: {
    toggleMobile () {
      if (document.documentElement.clientWidth <= 900 || /iPad|iPhone|Android/i.test(navigator.userAgent)) this.isMobile = true
      else this.isMobile = false
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
