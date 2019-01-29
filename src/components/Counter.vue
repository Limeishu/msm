<template>
  <div class="counter-container">
    <div class="counter day">
      <p>{{ day.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }}</p>
      <span>天</span>
    </div>
    <p class="counter split">:</p>
    <div class="counter hour">
      <p>{{ hour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }}</p>
      <span>時</span>
    </div>
    <p class="counter split">:</p>
    <div class="counter min">
      <p>{{ min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }}</p>
      <span>分</span>
    </div>
    <p class="counter split">:</p>
    <div class="counter sec">
      <p>{{ sec.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }}</p>
      <span>秒</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      distance: 0
    }
  },
  mounted () {
    setInterval(() => { this.countTime() }, 1000)
  },
  props: {
    endDate: {
      default: () => {
        return new Date()
      },
      type: [Date, String]
    }
  },
  methods: {
    countTime () {
      this.distance = new Date(this.endDate).getTime() - new Date()
      this.day = Math.floor(this.distance / (1000 * 60 * 60 * 24))
      this.hour = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.min = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60))
      this.sec = Math.floor((this.distance % (1000 * 60)) / 1000)
    }
  }
}
</script>
