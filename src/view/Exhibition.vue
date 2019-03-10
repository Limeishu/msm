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
            <li><p>{{ exhibition.subtitle }}</p></li>
            <li><p>展點 : {{ exhibition.place }}</p></li>
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
