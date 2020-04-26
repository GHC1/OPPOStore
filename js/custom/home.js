
define(function(){
function my(){
    let myid = getCookie("userId")
    let str=``
    if(myid==""){
            str = `<p><a href="login.html">购物车</a></p>
        <p><a href="login.html">个人中心</a></p>
        <p><a href="login.html">登录</a></p>`
    }else{
        str = `<p><a id="cart" href="cart.html">购物车</a></p>
        <p><a href="JavaScript:void(0)">欢迎您${myid}</a></p>
        <p><a id="quit" href="JavaScript:void(0)">退出账户</a></p>`
    }
    // 如果已经登录则给按钮添加点击事件
    $("#shopping").on("click","#cart",function(){
        location.href="index.html";
    })
    $("#shopping").on("click","#quit",function(){
        removeCookie("userId")
        location.href="index.html";
    })

    $("#shopping").html(str)
    
}
//给商城按钮添加点击事件
function show(){
    var correct = true;
    $("#ifont").click(function(){
        if(correct == false){
            $("#shopping").css("display" , "none")
        }else if(correct == true){
            $("#shopping").css("display" , "block")
        }
        correct = false;
    })
}

//轮播
function lunbo(){
    var iNow = 0;
    setInterval(function(){
        iNow++
        // alert(iNow)
        $(".Cli").animate({left: -1519 * iNow},300 , function(){
                if(iNow == 3){
                iNow = -1;
            }
            
        });
        
    },3000)
}

//从后端获取轮播图数据
    function getcarousel(){
        $.ajax({
            type:"get",
            url:"../data/Carousel.json",
            success:function(arr){
                var str = ``;
                // var newArr = JSON.stringify(arr)
                for(var i = 0; i<arr.length; i++){
                    str +=`<li class= Cli>
                        <a href="particulars.html">
                            <div>
                                <h1>${arr[i].title}</h1>
                                <p>${arr[i].brief}</p>
                                <a class="liji" href="particulars.html?id=${arr[i].id}">立即购买</a>
                            </div>
                            <img src="${arr[i].image}" alt="">
                        </a></li> 
                        `
                    if(i == 3){
                        // str.style.color = "#fff"
                        // str.addClass(".libai")
                        // str.css("color","#fff")
                        $(this).css("color","#fff")
                    }   
                }
                $("#Carousel").html(str)
                // str.appendTo("#Carousel")
                
                // alert(str)
            },error:function(msg){
                // console.log(msg)
                alert(msg)
            }
        });
    }
        
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
                    <li class = "li1">
                        <a href="particulars.html?id=${newarr[i].id}" >
                            <img src="${newarr[i].image}" alt="">
                            <p>${newarr[i].title}</p>
                        </a>
                    </li>
                    `
                    //给a标签添加点击事件并传递商品id
                    // $(".Combobox1").find("img").click(function(){
                    //     // 跳转到Default2.aspx页面并将s传给Default2.aspx
                    //     Response.Redirect("particulars.html?aaa="+ `${newarr[i].id}`);
                    // })
                    // $(".Combobox1").find("a").on('click',function(){
                    //     alert();
                    //     $(".Combobox1").find("a").attr("href","particulars.html?data=" + `${newarr[i].id}`);
                    // })

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


//获取中间大图数据
    function getcenterBig(){
        $.ajax({
            type:"get",
            url:"../data/centersBig.json",
            success:function(arr){
            //第一
                // var newarrs = JSON.stringify(arr);
                var newarrs = arr.one;
                var str = ``;
                var node1 = $("#center").find(".first");
                    str += 
                    `
                   
                        <button class="but1">新品</button>
                        <div class="introduce">
                            <div class="title">
                                <p>${newarrs[0].name}</p>
                                <h1>${newarrs[0].brief}</h1>
                                <div>
                                    <a href="JavaScript:void(0)"><span></span></a>
                                    <a href="JavaScript:void(0)"><span></span></a>
                                    <a href="JavaScript:void(0)"><span></span></a>
                                    <a href="JavaScript:void(0)"><span></span></a>
                                </div>
                                
                            </div>
                            <div class="price">
                                <p>${newarrs[0].price}</p>
                                <a href="particulars.html?id=${newarrs[0].id}"><button>立即预约</button></a>
                            </div>
                        </div>
                    
                    `
                    
                    node1.html(str)
                    node1.css("background-image",'url(' + `${newarrs[0].img[0]}` + ')')
                
                // alert(newarrs.img)
            //添加委托实现超链接转换图片
            $("#big").find(".byi").on("click","a",function(){
                var index = $(this).index();
                // var pindex = $(this).parents(".first").index();
                // alert(index)
                $(this).parents(".first").css("background-image",'url(' + `${newarrs[0].img[index]}` + ')')
            })
            
            // 第二个
            var tnewarrs = arr.tow;
            var str2 = ``;
            var node2 = $("#center").find(".ber");
           
            for(var i = 0; i <tnewarrs.length; i++){
                str2 += 
                `
            
                <div class="introduce">
                    <div class="title">
                        <p>${tnewarrs[i].name}</p>
                        <h1>${tnewarrs[i].brief}</h1>
                        <div>
                            <a href="JavaScript:void(0)"><span></span></a>
                            <a href="JavaScript:void(0)"><span></span></a>
                            <a href="JavaScript:void(0)"><span></span></a>
                            <a href="JavaScript:void(0)"><span></span></a>
                        </div>
                        
                    </div>
                    <div class="price">
                        <p>${tnewarrs[i].price}</p>
                        <a href="particulars.html?id=${newarrs[0].id}"><button>立即预约</button></a>
                    </div>
                </div>
           
                `
                node2.html(str2)
                var index = $(".first").index()
                // alert(index)
                // $(".ber").css("background-image",'url(' + `${tnewarrs[i].image2}` + ')')
                node2.css("background-image",'url(' + `${tnewarrs[0].img[0]}` + ')')
            }

            $("#big").find(".ber").on("click","a",function(){
                var index = $(this).index();
                // var pindex = $(this).parents(".first").index();
                // alert(index)
                $(this).parents(".first").css("background-image",'url(' + `${tnewarrs[0].img[index]}` + ')')
            })

        //第三
        var hnewarrs = arr.three;
        var str3 = ``;
        var node3 = $("#center").find(".bsan");
       
        for(var i = 0; i <hnewarrs.length; i++){
            str3 += 
            `
        
            <button class="but1">新品</button>
            <div class="introduce">
                <div class="title">
                    <p>${hnewarrs[i].name}</p>
                    <h1>${hnewarrs[i].brief}</h1>
                    <div>
                        <a href="JavaScript:void(0)"><span></span></a>
                        <a href="JavaScript:void(0)"><span></span></a>
                        <a href="JavaScript:void(0)"><span></span></a>
                    </div>
                    
                </div>
                <div class="price">
                    <p>${hnewarrs[i].price}</p>
                    <a href="particulars.html?id=${newarrs[0].id}"><button>立即预约</button></a>                </div>
            </div>
       
            `
            node3.html(str3)
            // var index = $(this).index()
            // alert(index)
            // $(".bsan").css("background-image",'url(' + `${hnewarrs[i].image2}` + ')')
            node3.css("background-image",'url(' + `${hnewarrs[0].img[0]}` + ')')
        }

        $("#big").find(".bsan").on("click","a",function(){
            var index = $(this).index();
            // var pindex = $(this).parents(".first").index();
            // alert(index)
            $(this).parents(".first").css("background-image",'url(' + `${hnewarrs[0].img[index]}` + ')')
        })


                
            },error:function(msg){
                console.log(msg)
                alert(msg)
            }
        })
    }

// 获取中间小图数据
    function getcenterSmall(){
        $.ajax({
            type:"get",
            url:"../data/centerSmall.json",
            success:function(arr){
                var newarr = arr.second1;
                // var newarrs = JSON.stringify(newarr);
                var str = ``;
                // alert(newarr[0].name)
                for(var i = 0; i < newarr.length; i++){
                    str += `
                    <a href="particulars.html?id=${newarr[i].id}">
                        <div class="noe">
                            <img src="${newarr[i].img[1]}" alt="">
                            <a href="" class="hint">直降500</a>
                            <div class="xia">
                                <div>
                                    <a href="JavaScript:void(0)"></a>
                                    <a href="JavaScript:void(0)"></a>
                                    <a href="JavaScript:void(0)"></a>
                                </div>
                                <p class="p1">${newarr[i].name}</p>
                                <p class="p2">${newarr[i].brief}</p>
                                <p class="p3">${newarr[i].price}</p>
                            </div>
                        </div>
                    </a>
                `
                }
                $(".second1").html(str)

                $(".second1").find(".noe").find(".xia").on("click" , "a" , function(){
                    var Oindex = $(this).parents(".noe").index()
                    var index = $(this).index();
                    // alert(Oindex)
                    $(this).parents(".noe").find("img").attr("src" , `${newarr[Oindex].img[index]}`)
                    // $(".second1").find(".noe").find("img").attr("src" , `${newarr[0].img[index]}`)
                })

            },errpr:function(msg){
                close.log(msg);
                alert("加载失败")
            }
        })


        //二
        $.ajax({
            type:"get",
            url:"../data/centerSmall.json",
            success:function(arr){
                var newarr = arr.second2;
                // var newarrs = JSON.stringify(newarr);
                
                var str = ``;
                for(var i = 0; i < newarr.length; i++){
                    str += `
                    <a href="particulars.html?id=${newarr[i].id}">
                        <div class="noe">
                            <img src="${newarr[i].img[0]}" alt="">
                            <a href="" class="hint">直降500</a>
                            <div class="xia">
                                <div>
                                    <a href="JavaScript:void(0)"></a>
                                    <a href="JavaScript:void(0)"></a>
                                    <a href="JavaScript:void(0)"></a>
                                </div>
                                <p class="p1">${newarr[i].name}</p>
                                <p class="p2">${newarr[i].brief}</p>
                                <p class="p3">${newarr[i].price}</p>
                            </div>
                        </div>
                    </a>
                `
                }
                $(".second2").html(str)
                $(".second2").find(".noe").find(".xia").on("click" , "a" , function(){
                    var Oindex = $(this).parents(".noe").index()
                    var index = $(this).index();
                    // alert(Oindex)
                    $(this).parents(".noe").find("img").attr("src" , `${newarr[Oindex].img[index]}`)
                    // $(".second1").find(".noe").find("img").attr("src" , `${newarr[0].img[index]}`)
                })
            },errpr:function(msg){
                close.log(msg);
                alert("加载失败")
            }
        })

        //三
        $.ajax({
            type:"get",
            url:"../data/centerSmall.json",
            success:function(arr){
                var newarr = arr.second3;
                // var newarrs = JSON.stringify(newarr);
                
                var str = ``;
                for(var i = 0; i < newarr.length; i++){
                    str += `
                    <a href="particulars.html?id=${newarr[i].id}">
                        <div class="noe">
                        <img src="${newarr[i].img[0]}" alt="">
                            <a href="" class="hint">直降500</a>
                            <div class="xia">
                                <div>
                                    <a href="JavaScript:void(0)"></a>
                                    <a href="JavaScript:void(0)"></a>
                                    <a href="JavaScript:void(0)"></a>
                                </div>
                                <p class="p1">${newarr[i].name}</p>
                                <p class="p2">${newarr[i].brief}</p>
                                <p class="p3">${newarr[i].price}</p>
                            </div>
                        </div>
                    </a>
                `
                }
                $(".second3").html(str);
                
                $(".second3").find(".noe").find(".xia").on("click" , "a" , function(){
                    var Oindex = $(this).parents(".noe").index()
                    var index = $(this).index();
                    // alert(Oindex)
                    $(this).parents(".noe").find("img").attr("src" , `${newarr[Oindex].img[index]}`)
                    // $(".second1").find(".noe").find("img").attr("src" , `${newarr[0].img[index]}`)
                })
            },errpr:function(msg){
                close.log(msg);
                alert("加载失败")
            }
        })

        //四
        $.ajax({
            type:"get",
            url:"../data/centerSmall.json",
            success:function(arr){
                var newarr = arr.second4;
                // var newarrs = JSON.stringify(newarr);
                
                var str = ``;
                for(var i = 0; i < newarr.length; i++){
                    str += `
                    <a href="particulars.html?id=${newarr[i].id}">
                        <div class="noe">
                            <img src="${newarr[i].img[0]}" alt="">  
                            <a href="" class="hint">直降500</a>
                            <div class="xia">
                                <div>
                                    <a href="JavaScript:void(0)"></a>
                                    <a href="JavaScript:void(0)"></a>
                                    <a href="JavaScript:void(0)"></a>
                                </div>
                                <p class="p1">${newarr[i].name}</p>
                                <p class="p2">${newarr[i].brief}</p>
                                <p class="p3">${newarr[i].price}</p>
                            </div>
                        </div>
                    </a>
                `
                }
                $(".second4").html(str)
            //是用委托给超链接添加点击事件
                $(".second4").find(".noe").find(".xia").on("click" , "a" , function(){
                    var Oindex = $(this).parents(".noe").index()
                    var index = $(this).index();
                    // alert(Oindex)
                    $(this).parents(".noe").find("img").attr("src" , `${newarr[Oindex].img[index]}`)
                    // $(".second1").find(".noe").find("img").attr("src" , `${newarr[0].img[index]}`)
                })
            },errpr:function(msg){
                close.log(msg);
                alert("加载失败")
            }
        })
    }

//获取配件数据
    function getmountings(){
        $.ajax({
            type:"get",
            url:"../data/mountings.json",
            success:function(arr){
                var newarr = arr.title;
                var str = ``;
                // alert(newarr.length)
                for(var i = 0; i < newarr.length; i++){
                    str += `
                    <span>配件</span>
                    <ul>
                    <li><a href="">${newarr[i].recommend}</a></li>
                    <li><a href="">${newarr[i].headset}</a></li>
                    <li><a href="">${newarr[i].USB}</a></li>
                    <li><a href="">${newarr[i].power_bank}</a></li>
                    <li><a href="">${newarr[i].set_meal}</a></li>
                    <li><a href="">${newarr[i].phone_shell}</a></li>
                    <li><a href="">${newarr[i].rests}</a></li>
                </ul>`
                }
                $("#part").find(".nav").html(str)
                
                //推荐
                var mendarr = arr.recommend;
                var ostr = ``;
                // alert(onewarr.length)
                for(var i = 0; i < mendarr.length; i++){
                    ostr = $(`
                    <a href="particulars.html?id=${mendarr[i].id}">
                    <div class="yi">
                        <button>新品</button>
                        <nav>
                            <p class="p1">${mendarr[i].title}</p>
                            <p class="p2">${mendarr[i].price}</p>
                        </nav>
                        <img src="${mendarr[i].img}" alt="">
                    </div>
                </a>
                    `)
                if(i != 0){
                    ostr.removeClass("yi")
                    ostr.addClass("er")
                }
              
                ostr.appendTo("#part .recommend")
                }
            //耳机
                
            var headarr = arr.headset;
            var hstr = ``;
            for(var i = 0; i < headarr.length; i++){
                hstr = $(`
            <a href="particulars.html?id=${headarr[i].id}">
                <div class="yi">
                    <button>新品</button>
                    <nav>
                        <p class="p1">${headarr[i].title}</p>
                        <p class="p2">${headarr[i].price}</p>
                    </nav>
                    <img src="${headarr[i].img}" alt="">
                </div>
            </a>
                `)
                if(i != 0){
                    hstr.removeClass("yi")
                    hstr.addClass("er")
                }
                hstr.appendTo("#part .headset")
            }
            
        //数据线、适配器
        var usbarr = arr.USB;
        var ustr = ``;
        for(var i = 0; i < usbarr.length; i++){
            ustr = $(`
            <a href="particulars.html?id=${usbarr[i].id}">
            <div class="yi">
                <button>新品</button>
                <nav>
                    <p class="p1">${usbarr[i].title}</p>
                    <p class="p2">${usbarr[i].price}</p>
                </nav>
                <img src="${usbarr[i].img}" alt="">
            </div>
            </a>
            `)
            if(i != 0){
                ustr.removeClass("yi")
                ustr.addClass("er")
            }
            ustr.appendTo("#part .USB")
        }
                
    
        //移动电源
        var powerarr = arr.power_bank;
        var pstr = ``;
        for(var i = 0; i < powerarr.length; i++){
            pstr = $(`
            <a href="particulars.html?id=${powerarr[i].id}">
            <div class="yi">
                <button>新品</button>
                <nav>
                    <p class="p1">${powerarr[i].title}</p>
                    <p class="p2">${powerarr[i].price}</p>
                </nav>
                <img src="${powerarr[i].img}" alt="">
            </div>
            </a>
            `)
            if(i != 0){
                pstr.removeClass("yi")
                pstr.addClass("er")
            }
            pstr.appendTo("#part .power_bank")
        }


        // 超值套餐
        var setarr = arr.set_meal;
        var sstr = ``;
        for(var i = 0; i < setarr.length; i++){
            sstr = $(`
            <a href="particulars.html?id=${setarr[i].id}">
            <div class="yi">
                <button>新品</button>
                <nav>
                    <p class="p1">${setarr[i].title}</p>
                    <p class="p2">${setarr[i].price}</p>
                </nav>
                <img src="${setarr[i].img}" alt="">
            </div>
            </a>
            `)
            if(i != 0){
                sstr.removeClass("yi")
                sstr.addClass("er")
            }
            sstr.appendTo("#part .set_meal")
        }

                

        // /保护壳
        var phonearr = arr.phone_shell;
        var phstr = ``;
        for(var i = 0; i < phonearr.length; i++){
            phstr = $(`
            <a href="particulars.html?id=${phonearr[i].id}">
            <div class="yi">
                <button>新品</button>
                <nav>
                    <p class="p1">${phonearr[i].title}</p>
                    <p class="p2">${phonearr[i].price}</p>
                </nav>
                <img src="${phonearr[i].img}" alt="">
            </div>
            </a>
            `)
            if(i != 0){
                phstr.removeClass("yi")
                phstr.addClass("er")
            }
            phstr.appendTo("#part .phone_shell")
        }


        //其他
            var restsearr = arr.rests;
            var restr = ``;
            for(var i = 0; i < restsearr.length; i++){
                restr = $(`
                <a href="particulars.html?id=${restsearr[i].id}">
                <div class="yi">
                    <button>新品</button>
                    <nav>
                        <p class="p1">${restsearr[i].title}</p>
                        <p class="p2">${restsearr[i].price}</p>
                    </nav>
                    <img src="${restsearr[i].img}" alt="">
                </div>
                </a>
                `)
                if(i != 0){
                    restr.removeClass("yi")
                    restr.addClass("er")
                }
                restr.appendTo("#part .rests")
            }


            },error:function(msg){
                console.log(msg)
                alert("加载失败")
            }
        })
    }

    //使用委托给配件的导航添加移入移出事件
        $("#part").find(".nav").on("mouseover","li",function(){
            // alert($(this).index())
            var liindex = $(this).index();
            $(".hide").hide();
            if(liindex==0){
                $(".hide").hide();
                $(".recommend").show()
            }else
            if(liindex==1){
                $(".hide").hide();
                $(".headset").show()
            }else
            if(liindex==2){
                $(".hide").hide();
                $(".USB").show()
            }else
            if(liindex==3){
                $(".hide").hide();
                $(".power_bank").show()
            }else
            if(liindex==4){
                $(".hide").hide();
                $(".set_meal").show()
            }else
            if(liindex==5){
                $(".hide").hide();
                $(".phone_shell").show()
            }else
            if(liindex==6){
                $(".hide").hide();
                $(".rests").show()
            }
            

            
        })


    return {
        lunbo :lunbo,
        //从后端获取轮播图数据
        getcarousel:getcarousel,
         //从后端获取导航下拉框中的数据
         getComboBox:getComboBox,
         getcenterBig:getcenterBig,
         getcenterSmall:getcenterSmall,
        //  drop_down:drop_down,
         topNavTab : topNavTab,
         getmountings: getmountings,
        //  hmgeSwilcher : hmgeSwilcher
        show:show,
        my:my
        }
})




