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

var content, distance

function init() {
    $.getJSON('./config.json', (data) => {
        content = data
    })
}

function time() {
    app.end = new Date(content.end).getTime()
    distance = app.end - new Date().getTime()
    app.count.dd = Math.floor(distance / (1000 * 60 * 60 * 24))
    app.count.hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    app.count.mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    app.count.ss = Math.floor((distance % (1000 * 60)) / 1000)
}

function go() {
    app.title = content.title
    app.msgs = content.msgs
    setInterval("time()", 1000)
}

$(document).ready(function () {
    go()
})

init()
go()