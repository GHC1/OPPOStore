define(function(){
    //从后端获取导航下拉框中的数据
    function getComboBox(){
        // var tli = $("#top").find("#navbar").find("li")

        $.ajax({
            type:"get",
            url:"../data/nav.json",
            success:function(arr){
                    var str=``;
                    // alert(arr.length)
                    var newarr = arr.Find
                    for(var i = 0; i < newarr.length; i++){
                        str +=`
                    
                        <li class = "li1"><a href="particulars.html?id=${newarr[i].id}">
                            <img src="${newarr[i].image}" alt="">
                            <p>${newarr[i].title}</p>
                        </a></li>
                    
                        `
                    }
                    $(".Combobox1").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        $.ajax({
            type:"get",
            url:"../data/nav.json",
            success:function(arr){
                    var str=``;
                    // alert(arr.length)
                    var newarr = arr.Reon
                    for(var i = 0; i < newarr.length; i++){
                        str +=`
                        
                        <li class = "li1"><a href="particulars.html?id=${newarr[i].id}">
                            <img src="${newarr[i].image}" alt="">
                            <p>${newarr[i].title}</p>
                        </a></li>
                    
                        `
                    }
                    $(".Combobox2").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        // R
        $.ajax({
            type:"get",
            url:"../data/nav.json",
            success:function(arr){
                    var str=``;
                    // alert(arr.length)
                    var newarr = arr.R
                    for(var i = 0; i < newarr.length; i++){
                        str +=`
                        
                        <li class = "li1"><a href="particulars.html?id=${newarr[i].id}">
                            <img src="${newarr[i].image}" alt="">
                            <p>${newarr[i].title}</p>
                        </a></li>
                    
                        `
                    }
                    $(".Combobox3").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        // A
        $.ajax({
            type:"get",
            url:"../data/nav.json",
            success:function(arr){
                    var str=``;
                    // alert(arr.length)
                    var newarr = arr.A
                    for(var i = 0; i < newarr.length; i++){
                        str +=`
                    
                        <li class = "li1"><a href="particulars.html?id=${newarr[i].id}">
                            <img src="${newarr[i].image}" alt="">
                            <p>${newarr[i].title}</p>
                        </a></li>
                
                        `
                    }
                    $(".Combobox4").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        //K
        $.ajax({
            type:"get",
            url:"../data/nav.json",
            success:function(arr){
                    var str=``;
                    // alert(arr.length)
                    var newarr = arr.K
                    for(var i = 0; i < newarr.length; i++){
                        str +=`
                    
                        <li class = "li1"><a href="particulars.html?id=${newarr[i].id}">
                            <img src="${newarr[i].image}" alt="">
                            <p>${newarr[i].title}</p>
                        </a></li>
                    
                        `
                    }
                    $(".Combobox5").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })

        //配件
        $.ajax({
            type:"get",
            url:"../data/nav.json",
            success:function(arr){
                    var str=``;
                    // alert(arr.length)
                    var newarr = arr.配件
                    for(var i = 0; i < newarr.length; i++){
                        str +=`
                    
                            <li class = "li1"><a href="particulars.html?id=${newarr[i].id}">
                                <img src="${newarr[i].image}" alt="">
                                <p>${newarr[i].title}</p>
                            </a></li>
                        
                        `
                    }
                    $(".Combobox6").html(str)
            },
            error:function(msg){
                console.log(msg)
            }
        })
    }


    
//利用委托添加移入移出事件
function topNavTab(){
    $("#bar").on("mouseenter","li",function(){
        var index = $(this).index();
        // alert(index)
        if(index>=0 &&  index<=5){
            $(".Combobox").css({display: "block" , height:"auto"})
            $(".Combobox").eq(index).css({display: "block"}).siblings(".Combobox").css("display","none")
            $(".Combobox").find("li").css({display: "block"})
            
        }
    })
   
    $(".Combobox").mouseleave(function(){
        $(".Combobox").css({display:"none"})
    })
}

    return{
        getComboBox:getComboBox,
        topNavTab:topNavTab
    }
})