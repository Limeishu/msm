const getHook = () => {
  document.querySelectorAll('.hook').forEach(el => {
    el.addEventListener('click', e => {
      e = e || window.event
      e.preventDefault()
      var target = e.target || e.srcElement
      var targerHeight = document.querySelector(target.attributes.href.nodeValue).offsetTop
      scrollTo(targerHeight, 300)
    }, false)
  })
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

const scrollTo = (to, dur) => {
  var start = document.body.scrollTop || document.querySelector('html').scrollTop,
    change = to - start,
    curTime = 0,
    increment = 10

  var animateScroll = () => {
    curTime += increment
    document.body.scrollTop = Math.easeInOutQuad(curTime, start, change, dur)
    document.querySelector('html').scrollTop = Math.easeInOutQuad(curTime, start, change, dur)
    if (curTime < dur) {
      setTimeout(animateScroll, increment)
    }
  }
  animateScroll()
}

(function () {
  getHook()
})()