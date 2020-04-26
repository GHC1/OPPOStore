console.log("加载成功");
require.config({
    paths:{
        "jQery": "jquery-1.11.3",
        "register":"custom/register"
    }
})
require(["register"],function(register){
    register.register();
})