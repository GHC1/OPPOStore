define(function(){
    function getdata(){
        // let goodsid = getCookie("goodsId")
        
        // alert(goodsid)
        $.get("../php/cart.php",function(data){
            var arr = JSON.parse(data)
            // alert(arr.length)
            let goodsArrs = getCookie("goods")
            var goodsArr = JSON.parse(goodsArrs)
            // alert(goodsArr.length)
            var newArr = []
            for(var i = 0; i<arr.length ; i++){
                for(var j = 0; j < goodsArr.length ; j++){
                    if(arr[i].goodsId == goodsArr[j].id){
                        arr[i].num = goodsArr[j].num;
                        newArr.push(arr[i])
                        break;
                    }
                }
            }
            // let arr = JSON.parse(data);
            var str = ``;
            for(var i =0;i < newArr.length;i++){
                str += `<div>
                    <nav class="nav1" id="${newArr[i].goodsId}">
                        <ul>
                            <li><input type="radio"></li>
                            <li><img src="${newArr[i].goodsImg}" alt=""></li>
                            <li>${newArr[i].goodsName}</li>
                            <li>￥${newArr[i].goodsPrice}.00</li>
                            <li class="li4">
                                <a class="a1" href="JavaScript:void(0)">-</a>
                                <span class="amount">${newArr[i].num}</span>
                                <a class="a2" href="JavaScript:void(0)">+</a>
                            </li>
                            
                            <li class="delet"><a href="JavaScript:void(0)">删除</a></li>
                        </ul>
                    </nav>
                    <nav class="nav2">
                        <a href="">赠品</a>
                        <img src="" alt="">
                        <p>蓝牙音箱</p>
                    </nav>
                </div>`
            }
            $(".form").html(str)
            increase();
            var totprs = 0
            for(var i = 0; i<newArr.length; i++){
                totprs +=newArr[i].goodsPrice * newArr[i].num
            }
            $(".price").text("￥"+totprs+".00")
            
        })
    }

    //增加和删除按钮的点击事件
    function increase(){
        var count=1
        
        $(".a2").click(function(){
            count++
            
            let goodsArrs = getCookie("goods")
            let goodsArrt = JSON.parse(goodsArrs);
            var id = $(this).parents(".nav1").attr("id");
            var totprs = 0;
            for(var i = 0;i<goodsArrt.length;i++){
                if(goodsArrt[i].id==id){
                    goodsArrt[i].num++
                    break;
                }
            }
           
            saveCookie("goods",JSON.stringify(goodsArrt))
            $(this).parents(".nav1").find(".amount").text(goodsArrt[i].num)
           
            location.href="cart.html";
        })
        $(".a1").click(function(){
            // count--
            let goodsArrs = getCookie("goods")
            let goodsArrt = JSON.parse(goodsArrs);
            var id = $(this).parents(".nav1").attr("id");
            for(var i = 0;i<goodsArrt.length;i++){
                if(goodsArrt[i].id==id){
                    goodsArrt[i].num--
                    break;
                }
            }
            saveCookie("goods",JSON.stringify(goodsArrt))
            $(this).parents(".nav1").find(".amount").text(goodsArrt[i].num)
           
            location.href="cart.html";
            
            
            //当数量为零时：
            if(goodsArrt[i].num == 0){
                $(this).parents(".nav1").remove()
                $(this).parents(".nav1").nextAll().remove()
                var id = $(this).parents(".nav1").attr("id");
                let goodsArrs = getCookie("goods")
                let goodsArrt = JSON.parse(goodsArrs);
                for(var i = 0;i<goodsArrt.length;i++){
                    if(goodsArrt[i].id==id){
                        goodsArrt.splice(i, 1);
                        break;
                    }
                }
                //判断数组是否为空
                if(!goodsArrt.length){
                    removeCookie("goods")
                    var str2 = `
                            <h1>还没有商品</h1>
                        `
                    $(".form").html(str2)
                }else{
                    saveCookie("goods", JSON.stringify(goodsArrt))
                }
                location.href="cart.html";
                }
        })

        //删除按钮
        $(".nav1").on("click",".delet",function(ev){
            $(this).parents(".nav1").remove()
            $(this).parents(".nav1").nextAll().remove()
            var id = $(this).parents(".nav1").attr("id");
            let goodsArrs = getCookie("goods")
            let goodsArrt = JSON.parse(goodsArrs);
            for(var i = 0;i<goodsArrt.length;i++){
                if(goodsArrt[i].id==id){
                    goodsArrt.splice(i, 1);
                    break;
                }
            }
            //判断数组是否为空
            if(!goodsArrt.length){
                removeCookie("goods")
                 var str2 = `
                        <h1>还没有商品</h1>
                    `
                $(".form").html(str2)
            }else{
                saveCookie("goods", JSON.stringify(goodsArrt))
            }
            location.href="cart.html";
        })
    }
    return{
        getdata:getdata,
        // increase:increase
    }
})