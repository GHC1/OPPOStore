define(function(){
	// 注册
    function register(){
        $(".register").click(function(){
            $.post(
				"addUser.php",
				{
					"username":$("#account").val(),
					"userpass":$("#pwd").val()
				},
				function(data){
					if(data=="success"){
						// $("#messageBox").css({"color":"green"});
						// $("#messageBox").html("恭喜您，注册成功！2秒后跳转到<a href='login.html'>登录</a>页面");
                        alert("恭喜您，注册成功！2秒后跳转到登录页面！")
                        setTimeout(()=>{
							location.href="login.html";
						},2000);
					}else if(data=="fail"){
						// $("#messageBox").css({"color":"red"});
                        // $("#messageBox").html("不好意思，注册失败!");
                        alert("不好意思，注册失败!")
					}else{
                        alert("不好意思，服务器出问题了!")
						// $("#messageBox").css({"color":"red"});
						// $("#messageBox").html("不好意思，服务器出问题了!");
					}
				}
			);
        })
	}
	
	
    return{
        register:register,
    }
})
