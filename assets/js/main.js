var app = new Vue({
    el: '#app',
    data: {
        title: '',
        msgs: '',
        count: {
            dd: '',
            hh: '',
            mm: '',
            ss: ''
        },
        end: ''
    }
})

var content = {},
    distance

function init() {
    app.end = new Date(parseInt((content.end).split(',')[0]), parseInt((content.end).split(',')[1]), parseInt((content.end).split(',')[2])).getTime()
    app.title = content.title
    app.msgs = content.msgs
}

function time() {
    distance = app.end - new Date().getTime()
    app.count.dd = Math.floor(distance / (1000 * 60 * 60 * 24))
    app.count.hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    app.count.mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    app.count.ss = Math.floor((distance % (1000 * 60)) / 1000)
}

$(document).ready(function () {
    $.getJSON('./config.json', (data) => {
        content = data
        init()
    })
    setInterval("time()", 1000)
})