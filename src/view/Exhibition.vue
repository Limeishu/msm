<template>
  <div
    class="spotlight-container page"
  >
    <div class="spotlight">
      <div class="container">
        <h1 class="serif">展覽資訊</h1>
        <div
          v-for="exhibition in exhibitions"
          :key="exhibition.title"
          class="content"
        >
          <h2 class="serif">{{ exhibition.title }}</h2>
          <ul>
            <li v-if="exhibition.subtitle"><p class="bold subtitle">{{ exhibition.subtitle }}</p></li>
            <li v-if="exhibition.place"><p>展點位置<span>{{ exhibition.place }}</span></p></li>
            <li v-if="exhibition.description"><p>展覽介紹 <span>{{ exhibition.description }}</span></p></li>
            <li v-if="exhibition.info"><p>展點資訊 <span>{{ exhibition.info }}</span></p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import exhibitionData from '../../static/json/exhibition.json'

export default {
  data () {
    return {
      exhibitions: exhibitionData
    }
  }
}
</script>
