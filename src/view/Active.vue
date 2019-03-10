<template>
  <div
    class="spotlight-container page"
  >
    <div class="spotlight">
      <div class="container">
        <div
          v-for="active in actives"
          :key="active.title"
          class="content"
        >
          <h1 class="serif">{{ active.title }}</h1>
          <ul>
            <li><p>講師：{{ active.speaker }}</p></li>
            <li><p>時間：{{ active.time }}</p></li>
            <li><p>地點：{{ active.place }}</p></li>
            <li><p>備註：{{ active.note }}</p></li>
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
