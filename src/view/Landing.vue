<template>
  <div>
    <div
      class="banner has-bg column-bottom"
      :style="{'background-image': 'url(https://image.limeishu.org.tw/images/museum/cca200001-fa-oilms0110.jpg)'}"
    >
      <div class="landing-header">
        <div class="logo">
          <img src="@/assets/images/logo.svg" alt>
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
    margin-bottom: 12rem;

    .logo {
      width: 40rem;
      filter: drop-shadow(0 0 10px $white);
      img {
        filter: drop-shadow(0 0 3px $black);
      }
    }
  }
}
</style>
