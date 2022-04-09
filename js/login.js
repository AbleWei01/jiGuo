$(function () {
    $(".itemUser input[name='username']").on("blur", function () {
        var username_ = $(".itemUser input[name='username']").val();
        var reg = /^1[3578]\d{9}$|^[\u4e00-\u9fa5]{2,4}$/;
        if (username_ == '') {
            $(this).siblings("span").text("用户名不能为空！");
        } else if (!reg.test(username_)) {
            $(this).siblings("span").text("请输入手机号或者2-4位的汉字!");
        } else {
            $(this).siblings("span").text("输入正确！");
        }
    })

    $(".itemPassword input[name='password']").on("blur", function () {
        var password_ = $(".tableItem input[name='password']").val();
        var reg1 = /^\w{6,10}$/;
        if (password_ == '') {
            $(this).siblings("span").text("密码不能为空！");
        } else if (!reg1.test(password_)) {
            $(this).siblings("span").text("请输入合法的密码6-10位");
        } else {
            $(this).siblings("span").text("输入正确！");
        }
    })

    $(".denglu").on("click",function(){
        var username1_ = $(".itemUser span").text();
        var password1_ = $(".itemPassword span").text();
        //console.log(phone1_,yanzheng1_,username1_,password1_,repassword1_);
        var str = '输入正确！'
        if(username1_==str && password1_==str){
            alert("登录成功！");
        }else{
            alert("登录失败！");
        }
        $(".itemUser input[name='username']").val("");
        $(".itemPassword input[name='password']").val("");
        $(".itemUser span").text("");
        $(".itemPassword span").text("");
    })
})