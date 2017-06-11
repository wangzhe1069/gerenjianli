jQuery(window).bind("load", function() {
    jQuery("div#slider1").codaSlider()
    // jQuery("div#slider2").codaSlider()
    // etc, etc. Beware of cross-linking difficulties if using multiple sliders on one page.
    new WOW().init()
		
		
		$(".tab1").click(function(){
			new WOW().init()		
	})
	
	function qtjn(){
        var timer = null;
        var timer1 = null;
        var timer2= null;
        var timer3= null;

        function fun1(f,g){
            var c = document.getElementById(f);
            var d =  document.getElementById(g);
            var ctx = c.getContext("2d");

//起始一条路径
            ctx.beginPath();
//设置当前线条的宽度
            ctx.lineWidth = 10; //10px
//设置笔触的颜色
            ctx.strokeStyle = '#fff';
//arc() 方法创建弧/曲线（用于创建圆或部分圆）
            ctx.arc(60, 60,50, 0, 2 * Math.PI);
//绘制已定义的路径
            ctx.stroke();
            var x = 0;

            return function fun(){
                ctx.beginPath();
                ctx.lineWidth = 10;
                ctx.strokeStyle = '#f30';
//设置开始处为0点钟方向(-90 * Math.PI / 180)
//x为百分比值(0-100)
                d.innerHTML = x+"%"
                ctx.arc(60, 60, 50, -90 * Math.PI / 180, (x * 3.6 - 90) * Math.PI / 180);
                ctx.stroke();
                if(x==80){
                    clearInterval(timer)
                    timer = null
                }
                if(x==71){
                    clearInterval(timer1)
                    timer1 = null
                }
                if(x==71){
                    clearInterval(timer2)
                    timer2 = null
                }
                if(x==66){
                    clearInterval(timer3)
                    timer3 = null
                }
                x++
            }

        }

        var a = fun1('canvas1',"span1")
        timer = setInterval(a,20)
        var b = fun1('canvas2',"span2")
        timer1 = setInterval(b,20)
        var c = fun1('canvas3',"span3")
        timer2 = setInterval(c,20)
        var d = fun1('canvas4',"span4")
        timer3 = setInterval(d,20)
//var d = fun1('canvas4',"span4")
//timer3 = setInterval("d(70)",10)

    }



    function jbjn(){
        //var d = document.getElementsByClassName("tab2")
        var b = [365,365,350,345]
        //f[0].onclick =e[0].onclick =c[0].onclick = function (){
        //    for(var i=0;i<4;i++){
        //        a[i].style="width:"+b[i]+"px;"
        //    }
        //}
        $(".tab2").click(function (){
            qtjn()
            for(var i=0;i<4;i++){
               // a[i].style="animation: myfirst 1s linear ;width:"+b[i]+"px;"
               $(".em_textZ").eq(i).css({width:0}).stop().animate({width:b[i]}, 1000)
            }
        })
    }
    jbjn()
    //function port_imgzzc (){
    //    var b = document.getElementsByClassName("port_imgF")
    //    var a = document.getElementsByClassName("port_imgZ")
    //for(var i=0;i<4;i++){
    //     b[i].c = i
    //    a[i].style = "display:none;"
    //    b[i].onmouseover = function(){
    //
    //        a[this.c].style = "display:block;animation: zzc3 .2s linear ;top:1px;left:1px;"
    //
    //
    //    }
    //   b[i].onmouseout = function(){
    //
    //        a[this.c].style = "display:block;animation: zzc5 .3s linear;top:-151px;"
    //
    //    }
    //}
    //}
    //port_imgzzc ()
     $('.port_imgF').hover(function(e) {
     	//获取当前的四条边的偏移值；
     	var left = $(this).offset().left,
     		top = $(this).offset().top,
     		right = left + $(this).width(),
     		bottom = top + $(this).height();
     	//获取当前的鼠标坐标；在函数里穿參e;
     	var x = e.pageX;
     	var y = e.pageY;
     	//计算鼠标到边框的距离；Math.abs去绝对值 正数；
     	var oTop = Math.abs(top - y),
     		oLeft = Math.abs(left - x),
     		oBottom = Math.abs(bottom - y),
     		oRight = Math.abs(right - x);
     	//筛选最小值;
     	var min = Math.min(oTop,oLeft,oBottom,oRight);
        console.log(0)
     	if (min == oTop) {
     		$(this).find('.port_imgZ').css({left:'1px',top:'-100%'}).stop().animate({left: '1px', top: '1px'}, 200);
     	}else if(min == oBottom){
     		$(this).find('.port_imgZ').css({left:'1px',top:'100%'}).stop().animate({left: '1px', top:'1px'}, 200);
     	}else if(min == oRight){
     		$(this).find('.port_imgZ').css({left:'100%',top:'1px'}).stop().animate({left: '1px', top: '1px'}, 200);
     	}else if(min == oLeft){
     		$(this).find('.port_imgZ').css({left:'-100%',top:'1px'}).stop().animate({left:'1px', top: '1px'}, 200);
     	}

     }, function(e) {
     	//获取当前的四条边的偏移值；
     	var left = $(this).offset().left,
     		top = $(this).offset().top,
     		right = left + $(this).width(),
     		bottom = top + $(this).height();
     	//获取当前的鼠标坐标；在函数里穿參e;
     	var x = e.pageX;
     	var y = e.pageY;
     	//计算鼠标到边框的距离；Math.abs去绝对值 正数；
     	var oTop = Math.abs(top - y),
     		oLeft = Math.abs(left - x),
     		oBottom = Math.abs(bottom - y),
     		oRight = Math.abs(right - x);
     	//筛选最小值;
     	var min = Math.min(oTop,oLeft,oBottom,oRight)

     	if (min == oTop) {
     		$(this).find('.port_imgZ').stop().animate({left: '1px', top: '-100%'}, 200);
     	}else if(min == oBottom){
     		$(this).find('.port_imgZ').stop().animate({left: '1px', top: '100%'}, 200);
     	}else if(min == oRight){
     		$(this).find('.port_imgZ').stop().animate({left: '100%', top: '1px'}, 200);
     	}else if(min == oLeft){
     		$(this).find('.port_imgZ').stop().animate({left: '-100%', top: '1px'}, 200);
     	}

     });
	 $(".port_imgbtn").click(function(){
		var index=$(".port_imgbtn").index(this);
		$(".portfolio_xq").eq(index).css("display","block");
	 })
		 $(".portfolio_xqxx h3 button").click(function(){
			$(".portfolio_xq").css("display","none")
	 });
});