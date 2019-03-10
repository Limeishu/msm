<template>
  <div
    id="header"
    class="spotlight-container banner has-bg column-center"
  >
    <div
      class="spotlight"
      :class="{ 'toggle': toggle }"
    >
      <div class="main-logo">
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <div class="active-logo">
        <img src="@/assets/images/active-logo.png" alt="">
        <div class="slogen">
          <span class="serif">一場追尋歷史遺跡，重塑時代記憶的展覽</span>
        </div>
      </div>
      <div class="active-date">
        <div class="year">2019</div>
        <div class="date">03/16-04/28</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggle: {
      default: false,
      type: Boolean
    }
  }
}
</script>
