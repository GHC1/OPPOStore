console.log("加载成功");
require.config({
    paths:{
        "top":"custom/top",
        "jQery": "jquery-1.11.3",
        "particulars":"custom/particulars",
        "cookieTools":"cookieTools"
    }
})

require(["top" , "jQery" ,"particulars","cookieTools"],function(top , jQery,particulars,cookieTools){
    top.getComboBox();
    top.topNavTab()
    
    
    particulars.getdata();
    particulars.intro();
    particulars.magnifyings();
    
    // particulars.cut();
    
}) 