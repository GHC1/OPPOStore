console.log("加载成功");
require.config({
    paths:{
        "login":"custom/login",
        "jQery":"jquery-1.11.3",
        "cooke":"cookieTools"
    }
})
require(["login","jQery","cooke"],function(login,jQery,cooke){
    login.switch1();
    login.loginSend();
})