<template>
  <div>
    <div
      class="banner has-bg column-center"
      :style="{'background-image': 'url(/2019/static/img/bg1-horizon.jpg)'}"
    >
      <div class="landing-header">
        <div class="logo">
          <img src="@/assets/images/logo.svg" alt>
        </div>
        <div class="filter-box">
          <h1>
            2019 梅樹月 3/16～4/28 在三峽 <br />
            邀您一同共襄盛舉
          </h1>
        </div>
        <Counter :endDate="endDate" v-if="endDate.getTime() > new Date().getTime()"/>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter'

export default {
  data () {
    return {
      endDate: new Date('2019/03/16')
    }
  },
  components: {
    Counter
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_color";

.landing {
  &-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    .filter-box {
      filter: drop-shadow(0 0 10px $white);
    }

    h1, p {
      color: $white;
      filter: drop-shadow(0 0 3px $black);
      text-align: center;
    }

    h1 {
      font-size: 24pt;
      margin: 7pt 0;

      @media screen and (max-width: 600px) {
        font-size: 20pt;
      }

      @media screen and (max-width: 475px) {
        font-size: 16pt;
      }

    }

    .logo {
      width: 40rem;

      @media screen and (max-width: 840px) {
        width: 80%;
      }

      @media screen and (max-width: 600px) {
        width: 100%;
      }

      filter: drop-shadow(0 0 10px $white);
      img {
        filter: drop-shadow(0 0 3px $black);
      }
    }
  }
}
</style>
