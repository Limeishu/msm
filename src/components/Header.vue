<template>
  <div
    id="header"
    class="spotlight-container banner has-bg column-center"
    :class="{ 'is-mobile': isMobile }"
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
        <div class="footer">
          <p><span class="property">主辦單位</span><span>李梅樹紀念館（財團法人李梅樹文教基金會）</span></p>
          <p><span class="property">合辦單位</span><span>國立臺北大學（圖書館，民俗藝術與文化資產研究所）</span></p>
          <p><span class="property">指導單位</span><span>文化部，教育部，新北市政府文化局</span></p>
          <p><span class="property">協辦單位</span><span>日本長野縣塩尻市本洗馬歷史里資料館，台灣創價學會（財團法人創價文教基金會），林育淳，林柏亭，長流美術館，長野澄子，財團法人陳進紀念文化藝術基金會，財團法人陳澄波文化基金會財團法人新北市三峽長福巖清水祖師公，國立臺灣圖書館，國史館臺灣文獻館，雄獅圖書股份有限公司，郭雪湖基金會，順益台灣原住民博物館，新北市三峽區成福國小，臺北市立美術館</span></p>
          <p><span class="property">贊助單位</span><span>天美藝術基金會，康百力建設股份有限公司，富邦產物保險股份有限公司，新北市三峽區公所，新北市三峽區長福平面停車場，新北市三峽區龍恩里辦公處</span></p>

          <div class="copyright">
            <a class="footer-logo" href="https://limeishu.org.tw/" title="李梅樹紀念館官網" target="_blank" rel="noopener noreferrer">
              <img src="/2019/static/img/logo-min-white.svg" alt="">
            </a>
            <div class="content">
              <p>© 1995 - 2018 李梅樹紀念館</p>
              <p>
                本著作係採用
                <a href="https://raw.githubusercontent.com/Limeishu/limeishu.org/beta/LICENSE" target="_blank">MIT 授權條款</a> 授權
              </p>
              <p>我們推薦使用
                <a href="https://www.mozilla.org/firefox/" target="_blank">Firefox Quantum</a> 瀏覽以獲得更好的瀏覽體驗
              </p>
            </div>
          </div>
        </div>
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
    },
    isMobile: {
      default: false,
      type: Boolean
    }
  }
}
</script>
