//
var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000, // 每隔3秒切换一张图片
        stopOnLastSlide: false, //是否停留在最后一张  true是 （再loop模式下无效） false 不停留在最后一张
        disableOnInteraction: false, //用户操作swiper时 是否停止自动切换 true是  false 否
    },
})
// 轮播图热门试用内容数据
function hot_() {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:3000/report/new",
        success: (function (res_hot) {
            var res = []
            for (var i = 0; i < 4; i++) {
                res.push(res_hot[i])
            }
            const daoGou_new = template('tpl', {
                res: res
            })
            console.log(res)
            $(".trial").html(daoGou_new);//渲染到页面
        })
    })
}
hot_()

// 报告精选  数据渲染
function repor_() {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:3000/report/new",
        success: (function (res_repor) {
            var res_repor_ = []
            for (var i = 0; i < 8; i++) {
                res_repor_.push(res_repor[i])
            }
            const daoGou_new = template('tpl', {
                res_repor_: res_repor_
            })
            console.log(res_repor_)
            $(".repor_s").html(daoGou_new);//渲染到页面
        })
    })
}
repor_()
//导购精选 数据渲染
function guid_() {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:3000/guid/new",
        success: (function (res_guid) {
            var res_guid_ = []
            for (var i = 0; i < 4; i++) {
                res_guid_.push(res_guid[i])
            }
            const guid = template('tpl', {
                res_guid_: res_guid_
            })
            console.log(res_guid_)
            $(".guid_s").html(guid);//渲染到页面
        })
    })
}
guid_()
// 酷玩数据渲染
function play_() {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:3000/play/new",
        success: (function (res_play) {
            var res_play_ = []//双重循环得到数组中的数据
            for (var item of res_play) {
                for (var i of item) {
                    res_play_.push(i);
                }
            }
            const kuwan_new = template('tpl', {
                res_play_: res_play_
            })
            // console.log(res_play_)
            $(".play_s").html(kuwan_new);//渲染到页面
        })
    })
}
play_();