$(function(){
    // 验证手机号
    $(".itemShouJi input[name='phone']").on("blur", function () {
        var phone_ = $(".itemShouJi input[name='phone']").val();
        var reg = /^1[3578]\d{9}$/;
        if (phone_ == '') {
            $(this).siblings().text("用户名不能为空！");
        } else if (!reg.test(phone_)) {
            $(this).siblings().text("请输入合法的手机号码!");
        } else {
            $(this).siblings().text("输入正确！");
        }
    })

    // 验证验证码
    $(".itemYanZheng input[name='verificationCode']").on("blur", function () {
        var yanzheng_ = $(".itemYanZheng input[name='verificationCode']").val();
        var str = 'r2B7';
        if (yanzheng_ == '') {
            $(this).siblings('span').text("验证码不能为空！");
        } else if (yanzheng_ != str) {
            $(this).siblings('span').text("请输入正确的验证码!");
        } else {
            $(this).siblings('span').text("输入正确！");
        }
    })

    // 验证用户名
    $(".itemUser input[name='username']").on("blur", function () {
        var username_ = $(".itemUser input[name='username']").val();
        var reg = /^[\u4e00-\u9fa5]{2,4}$/;
        if (username_ == '') {
            $(this).siblings("").text("用户名不能为空！");
        } else if (!reg.test(username_)) {
            $(this).siblings("").text("请输入2-4位的汉字!");
        } else {
            $(this).siblings("").text("输入正确！");
        }
    })

    // 验证密码
    $(".itemPassword input[name='password']").on("blur", function () {
        var password_ = $(".itemPassword input[name='password']").val();
        var reg1 = /^[\w]{6,10}$/;
        if (password_ == '') {
            $(this).siblings().text("密码不能为空！");
        } else if (!reg1.test(password_)) {
            $(this).siblings().text("请输入正确的密码!");
        } else {
            $(this).siblings().text("输入正确！");
        }
    })

    // 验证第二次输入的密码
    $(".itemRepassword input[name='repassword']").on("blur", function () {
        var password_ = $(".itemPassword input[name='password']").val();
        var repassword_ = $(".itemRepassword input[name='repassword']").val();
        var reg2 = /^[\w]{6,10}$/;
        if (repassword_ == '') {
            $(this).siblings().text("密码不能为空！");
        } else if (!reg2.test(repassword_)) {
            $(this).siblings().text("请输入正确的密码!");
        }else if(repassword_ != password_){
            $(this).siblings().text("两次密码不一致！");
        }else {
            $(this).siblings().text("输入正确！");
        }
    })

    $(".zhuce").on("click",function(){
        var phone1_ = $(".itemShouJi span").text();
        var yanzheng1_ = $(".itemYanZheng span").text();
        var username1_ = $(".itemUser span").text();
        var password1_ = $(".itemPassword span").text();
        var repassword1_ = $(".itemRepassword span").text();
        console.log(phone1_,yanzheng1_,username1_,password1_,repassword1_);
        var str = '输入正确！'
        if(phone1_==str && yanzheng1_==str && username1_==str && password1_==str && repassword1_==str){
            alert("注册成功！");
        }else{
            alert("注册失败！");
        }
        $(".itemShouJi input[name='phone']").val("");
        $(".itemYanZheng input[name='verificationCode']").val("");
        $(".itemUser input[name='username']").val("");
        $(".itemPassword input[name='password']").val("");
        $(".itemRepassword input[name='repassword']").val("");
        $(".itemShouJi span").text("");
        $(".itemYanZheng span").text("");
        $(".itemUser span").text("");
        $(".itemPassword span").text("");
        $(".itemRepassword span").text("");
    })
})