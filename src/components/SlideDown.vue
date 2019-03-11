<template>
  <div
    class="slide-down"
    :class="{ 'home': $route.name === 'Home' }"
  >
    <div class="hint">
      <p>捲動以瀏覽更多內容</p>
    </div>
    <div class="mouse">
      <div class="wheel"></div>
    </div>
  </div>
</template>
