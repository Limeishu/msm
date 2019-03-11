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
            <li v-if="active.speaker"><p>講師<span>{{ active.speaker }}</span></p></li>
            <li v-if="active.time"><p>時間<span>{{ active.time }}</span></p></li>
            <li v-if="active.place"><p>地點<span>{{ active.place }}</span></p></li>
            <li v-if="active.note"><p>備註<span>{{ active.note }}</span></p></li>
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
