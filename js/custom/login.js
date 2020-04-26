
define(function(){
    //切换登录方式
    function switch1(){
     $(".pwd").click(function(){
            $(".form2").hide();
            $(".form1").show();
            $(".pwd").css("background-color","#999")
            $(".note").css("background-color","#fff")
        })
        $(".note").click(function(){
            $(".form1").hide();
            $(".form2").show();
            $(".note").css("background-color","#999")
            $(".pwd").css("background-color","#fff")
        })
    }

    function loginSend(){
        $(".postlogin").click(function(){
            $.ajax({
                type:"post",
                url:"../php/login.php",
                data:{
                    "userId":$("#ID").val(),
                    "userPass":$("#Pwd").val(),
                },
                success:function(arr){
                       
                        
                       
                        if(arr=="1"){
                             // 登录成功！
                            //  保存cooke
                            saveCookie("userId",$("#ID").val());
                            
                            location.href="index.html";
                            alert("登陆成功")
                        }else{
                            alert("账号或密码错误")
                        }
                       
                },
                error:function(msg){
                    // console.log(msg)
                    alert("登录失败")
                    
                }
            })
		});
        
    }

   return{
    switch1:switch1,
    loginSend:loginSend
   }
})