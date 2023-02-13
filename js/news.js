$(function() {
    // 补零
    function padZero(n) {
        if (n < 10) {
            return '0' + n
        } else {
            return n
        }
    }

    template.defaults.imports.dateFormat = function(dtStr) {
        let dt = new Date(dtStr)
        let y = dt.getFullYear()
        let m = dt.getMonth() + 1
        let d = dt.getDate()
        let hh = dt.getHours()
        let mm = dt.getMinutes()
        let ss = dt.getSeconds()
        return `${y}-${m}-${d}-${hh}:${mm}:${ss}`
    }

    function getNewList() {
        $.get('http://www.liulongbin.top:3006/api/news', function(res) {
            if (res.status !== 200) {
                return alert('获取新闻失败！')
            }
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].tags = res.data[i].tags.split(',')
            }
            let htmlStr = template('tpl-news', res)
            $('#news-list').html(htmlStr)
        })
    }
    getNewList()
})