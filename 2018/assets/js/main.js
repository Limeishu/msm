const getHook = () => {
  document.querySelectorAll('.hook').forEach(el => {
    console.log(el)
    el.addEventListener('click', e => {
      e = e || window.event
      e.preventDefault()
      var target = e.target || e.srcElement
      var targerHeight = document.querySelector(target.attributes.href.nodeValue).offsetTop
      scrollTo(document.querySelector('html'), targerHeight, 300)
    }, false)
  })
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

const scrollTo = (el, to, dur) => {
  var start = el.scrollTop,
    change = to - start,
    curTime = 0,
    increment = 10

  var animateScroll = () => {
    curTime += increment
    el.scrollTop = Math.easeInOutQuad(curTime, start, change, dur)
    if (curTime < dur) {
      setTimeout(animateScroll, increment)
    }
  }
  animateScroll()
}

(function () {
  getHook()
})()