<template>
  <div
    class="spotlight-container page"
  >
    <div class="spotlight">
      <div class="container">
        <h1 class="serif">活動列表</h1>
        <div
          v-for="active in actives"
          :key="active.title"
          class="content"
        >
          <h2 class="serif">{{ active.title }}</h2>
          <ul>
            <li><p>講師 : {{ active.speaker }}</p></li>
            <li><p>時間 : {{ active.time }}</p></li>
            <li><p>地點 : {{ active.place }}</p></li>
            <li><p>備註 : {{ active.note }}</p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import activeData from '../../static/json/active.json'

export default {
  data () {
    return {
      actives: activeData
    }
  }
}
</script>
