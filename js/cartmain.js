console.log("加载成功");
require.config({
    paths:{
        "top":"custom/top",
        "jQery": "jquery-1.11.3",
        "car":"custom/car",
        "cookieTools":"cookieTools"
    }
})
require(["top" , "jQery","car","cookieTools"],function(top , jQery , car,cookieTools){
    top.getComboBox();
    top.topNavTab();
    // car.getid();
    car.getdata();
    // car.increase()
}) 