console.log("加载成功");
require.config({
    paths:{
        "parabola": "parabola.js",
        "home": "custom/home",
        "jQery": "jquery-1.11.3",
        "cookieTools":"cookieTools"
    }
})

require(["home", "jQery","cookieTools"], function(home,jQery,cookieTools){
    // var nav = document.getElementsByClassName("nLi")

    home.getcenterBig();
    home.getcenterSmall();
    home.getcarousel();
    home.getComboBox();
    
    // home.ComboBox(nav,box);
    home.lunbo();
    // home.drop_down()
    home.topNavTab();
    home.getmountings()
    home.show();
    home.my();
})

