// 两个按钮切换颜色
$(".cont_btn span").click(function () {
    $(this).attr("index","1").siblings().removeAttr("index")
    $(this).addClass("col").siblings().removeClass("col")
})
// 大众试用  全部
function all_() {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:3000/report/new",
        success: (function (res_all) {
            const all_ = template('tpl', {
                res_all: res_all
            })
            // console.log(res_all)
            $(".goods_g").html(all_);//渲染到页面
        })
    })
}
all_()
// 大众试用  申请中
function apply_() {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:3000/report/hot",
        success: (function (res_apply) {
            const apply_ = template('tpl', {
                res_apply: res_apply
            })
            // console.log(res_apply)
            $(".goods_g").html(apply_);//渲染到页面
        })
    })
}
// 大众试用  试用中
function trail_() {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:3000/report/new",
        success: (function (res_trail) {
            const trail_ = template('tpl', {
                res_trail: res_trail
            })
            // console.log(res_trail)
            $(".goods_g").html(trail_);//渲染到页面
        })
    })
}
// 大众试用  已结束
function over_() {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:3000/report/hot",
        success: (function (res_over) {
            const over_ = template('tpl', {
                res_over: res_over
            })
            // console.log(res_over)
            $(".goods_g").html(over_);//渲染到页面
        })
    })
}
// 四个按钮绑定的事件
$(".all_").click(function () {
    if ($(".public_").attr('index') == "1") {
        all_()
    }else{
        apply_()
    }
    $(this).addClass("coll").siblings().removeClass("coll")
})
$(".apply_").click(function () {
    if ($(".public_").attr('index') == "1") {
        apply_()
    }else{
        all_()
    }
    $(this).addClass("coll").siblings().removeClass("coll")
})
$(".trail_").click(function () {
    
    if ($(".public_").attr('index') == "1") {
        trail_()
    }else{
        over_()
    }
    $(this).addClass("coll").siblings().removeClass("coll")
})
$(".over_").click(function () {
    if ($(".public_").attr('index') == "1") {
        over_()
    }else{
        trail_()
    }
    $(this).addClass("coll").siblings().removeClass("coll")
})

$(".cont_btn span").click(function () {
    $(this).addClass("col").siblings().removeClass("col")
})