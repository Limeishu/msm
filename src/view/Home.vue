<template>
  <div>
    <div class="banner">
      <Counter :endDate="endDate" v-if="endDate.getTime() > new Date().getTime()" />
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
