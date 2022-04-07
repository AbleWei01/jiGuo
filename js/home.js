// 轮播图的js
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