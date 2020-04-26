define(function(){
    function getdata(){
        let id = location.search.split("=")[1];
        $.get("../php/getGoodsInfo.php",{"id":id},function(data){
            let arr = JSON.parse(data);
            // alert(arr.goodsName)
            let htmlStr=` <div id="Carousel">
            <div class="left">
                <div class="big" id="big">
                    <ul>
                        <li  class="oli blick">
                            <img src="${arr.goodsImg}" alt="">
                            <div class="odiv"></div>
                        </li>
                        <li  class="oli"><img src="${arr.beiyong1}" alt=""></li>
                        <li  class="oli"><img src="${arr.beiyong2}" alt=""></li>
                        <li  class="oli"><img src="${arr.beiyong3}" alt=""></li>
                    </ul>
                   
                </div>
                <div class="small">
                    <ul>
                        <li><a href="JavaScript:void(0)"><img src="${arr.beiyong4}" alt=""></a></li>
                        <li><a href="JavaScript:void(0)"><img src="${arr.beiyong5}" alt=""></a></li>
                        <li><a href="JavaScript:void(0)"><img src="${arr.beiyong6}" alt=""></a></li>
                        <li><a href="JavaScript:void(0)"><img src="${arr.beiyong7}" alt=""></a></li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <!-- 放大镜 -->
                <nav id="magnifying">
                    <img src="${arr.goodsImg}" alt="">  
                </nav>
                <div class="one">
                    <p class="p1">${arr.goodsName}</p>
                    <p class="p2">
                        <span><a>【新品开售 | 享6期免息 | 赠蓝牙音箱 |  加价购真无线耳机立减80】</a></span>
                        ${arr.goodsDesc}
                        <a href="">Reno3火热开售中 >>></a>
                    </p>
                    <p class="p3">￥3999.00</p>
                    <p class="p4">商品支持：花呗分期 6期免息<a href="">以旧换新</a></p>
                </div>
                <div class="tow">
                    <p class="p1">颜色</p>
                    <nav>
                        <a href="">日出印象</a>
                        <a href="">月夜黑</a>
                        <a href="">经典蓝</a>
                        <a href="">蓝色星夜</a>
                        <a href="">雾月白</a>
                    </nav>
                    <p class="p1">配置</p>
                    <nav>
                        <a href="">12G+156G</a>
                        <a href="">8G+128G</a>
                       
                    </nav>
                    <p class="p1">赠品</p>
                    <nav class="nav3">
                        <a href="">
                            <img src="https://dsfs.oppo.com/archives/201912/201912131012355df2f5730c17d.png" alt="">
                            <p>真无线耳机黑色</p>
                        </a>
                        
                    </nav>
                    <p class="p1">加价购</p>
                    <nav class="nav3">
                        <a href="">
                            <img src="https://dsfs.oppo.com/archives/201912/201912300712415e09e545c078b.png" alt="">
                            <p>蓝牙信箱N6</p>
                        </a>
                        <a href="">
                            <img src="https://dsfs.oppo.com/archives/201912/201912311112545e0abe5a0414b.png" alt="">
                            <p>蓝牙信箱N6</p>
                        </a>
                        <a href="">
                            <img src="https://dsfs.oppo.com/archives/201912/201912131012335df2f4091c73e.png" alt="">
                            <p>蓝牙信箱N6</p>
                        </a>
                       
                    </nav>
                    <p class="p1">选择数量</p>
                    <nav class="nav4">
                        <a href="">-</a>
                        <input type="text">
                        <a href="">+</a>
                    </nav>
                </div>
                <div class="therr">
                    <a class="a1 register" href="cart.html">加入购物车</a>
                    <a class="a2 register" href="cart.html">立即购买</a>
                </div>
            </div>
        </div>`;
        $("#Carousels").html(htmlStr); 
        })
        // var part = JSON.parse(particular)
    }
    function intro(){
        let id = location.search.split("=")[1];
        // 使用cooker把选中商品的id传入购物车页面
        // $("#Carousels").on("click",".register",function(){
        //     saveCookie("goodsId",id)
        // })



        //点击加入购物车把当前商品的id和num保存到cooker数组中
        $("#Carousels").on("click",".register",function(){
            var goodsId = id
            // alert(goodsId)
            // 1、判断是否是第一次添加
            var first = getCookie("goods");
            // alert(first)
            // first == null ? true : false;
            //如果first为true则为第一次添加
            if(first==""){
                var arr = [{id: goodsId,num: 1}];
                //cookie只能存储字符串所以吧数组转为字符串
                saveCookie("goods",JSON.stringify(arr))
            }else{
                //之前添加过商品
                var cookieStr = getCookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                //假设改商品之前没有添加过
                var same = false;
                for(var i = 0;i<cookieArr.length;i++){
                    // 当改商品的id在cookieArr中存在时说明添加过
                    if(cookieArr[i].id == goodsId){
                        same = true;
                        cookieArr[i].num++;
                        break;
                    }
                }
                // 如果没添加过则新增一条数据
                if(same==false){
                    var obj = {id: goodsId, num: 1};
                    cookieArr.push(obj);
                }
                saveCookie("goods", JSON.stringify(cookieArr))
            }
        })

    }
        
    


    // 放大镜
    function magnifyings(){
        $("#Carousels").on("mouseenter" , ".oli" , function(){
            // alert()
            $("#Carousels").find(".oli").find(".odiv").show();
            $("#magnifying").show();
        })
        $("#Carousels").on("mouseleave" , ".oli" , function(){
            $("#Carousels").find(".oli").find(".odiv").hide();
            $("#magnifying").hide();
        })
        $("#Carousels").on("mousemove" , ".oli" , function(ev){
            var l = ev.clientX - $(this).offset().left - 50;
            if(l <= 0){
                l = 0;
            }
            if(l >= 300){
                l = 300;
            }

            var t = ev.clientY - $(this).offset().top - 50;
            if(t <= 0){
                t = 0;
            }
            if(t >= 300){
                t = 300;
            }
            $(".odiv").css({
                left: l,
                top: t,
            })

            $("#magnifying").find("img").css({
                left: -3 * l,
                top: -3 * t,
            })
        })
       
    }

    // 使用委托实现切换图片事件
    // function cut(){
    //     $("#Carousel").find(".small").on("click" , "li" , function(){
    //         var index = $(this).index();
    //         $("#big").find("li").eq(index).css({
    //             left:"0px",
    //             backgroundColor: "#059157",
    //             display:"block"
    //         })        
    //     })
    // }
    return{
        
        getdata:getdata,
        intro:intro,
        magnifyings:magnifyings,
        // cut:cut,
    }
})