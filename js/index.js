$(document).ready(function () {



    // 轮播图
    banner();
    function banner(){


        var i=-1;
        var timer=0;
        var topBox = $(".wrap .top");
        var mainBox = $(".wrap .main");
        var liBox = $(".bannerBox>ul>li");
        var liList = $('.carousel-indicators>li');
        var conLeft = $('.wrap .main .left');
        var conRight = $('.wrap .main .right');
        var mask = $(".wrap .mask");
        var btnMore = $(".btnMore");

        // 初始化
        move();


        timer=setInterval(move,4000);

        liBox.hover(function(){
            clearInterval(timer);
            liList.fadeOut(100);
            mainBox.stop().animate({"top":"149px"},450);
            topBox.stop().animate({"height":"70px"},450);
        },function(){
            timer=setInterval(move,4000);
            liList.fadeIn(1000);
            mainBox.stop().animate({"top":"109px"},450);
            topBox.stop().animate({"height":"108px"},450);
        });



        liList.click(function(){
            var liIndex=$(this).index()-1;
            i=liIndex;
            move();
        });



        conLeft.click(function() {
            clearInterval(timer);
            i -=2;
            move();
        });
        conRight.click(function() {
            clearInterval(timer);
            move();
        });



        function move() {
            // 动画重置
            $(".one-li h1").css({opacity:0.01,"top":"5%"});
            $(".one-li p").eq(0).css({opacity:0.01,"top":"30%"});
            $(".one-li p").eq(1).css({opacity:0.01,"top":"45%"});
            $(".one-li .btnMore").css({opacity:0.01,"top":"65%"});
            $(".two-li h1").css({opacity:0.01,"left":"75%"});
            $(".two-li p").css({opacity:0.01,"left":"75%"});
            $(".two-li .listTab").css({opacity:0.01,"left":"75%"});
            $(".three-li h1").css({opacity:0.01,"left":"25%"});
            $(".three-li p").css({opacity:0.01,"left":"25%"});
            $(".three-li .listTab").css({opacity:0.01,"left":"25%"});



            i++;
            if (i <= -1) {
                i = 2;
            }
            if (i >= 3) {
                i = 0;
            }
            if (i < 3) {
                if (i == 0) {
                    liList.eq(i).addClass('active').siblings().removeClass('active');
                    liBox.eq(i).css("display","block").fadeIn(100).siblings().fadeOut();
                    $(".one-li h1").stop().animate({opacity:1,"top":"20%"},750);
                    $(".one-li p").eq(0).stop().animate({opacity:1,"top":"45%"},750);
                    $(".one-li p").eq(1).stop().animate({opacity:1,"top":"60%"},750);
                    $(".one-li .btnMore").stop().animate({opacity:1,"top":"80%"},750);
                    mask.eq(i).fadeIn().siblings().filter(".mask").fadeOut();
                }
                if (i == 1) {
                    liList.eq(i).addClass('active').siblings().removeClass('active');
                    liBox.eq(i).css("display","block").fadeIn().siblings().fadeOut();
                    $(".two-li h1").stop().animate({opacity:1,"left":"60%"},750);
                    $(".two-li p").stop().animate({opacity:1,"left":"60%"},750);
                    $(".two-li .listTab").stop().animate({opacity:1,"left":"60%"},750);
                    mask.eq(i).fadeIn().siblings().filter(".mask").fadeOut();
                }
                if (i == 2) {
                    liList.eq(i).addClass('active').siblings().removeClass('active');
                    liBox.eq(i).css("display","block").fadeIn().siblings().fadeOut();
                    $(".three-li h1").stop().animate({opacity:1,"left":"40%"},750);
                    $(".three-li p").stop().animate({opacity:1,"left":"40%"},750);
                    $(".three-li .listTab").stop().animate({opacity:1,"left":"40%"},750);
                    mask.eq(i).fadeIn().siblings().filter(".mask").fadeOut();
                }
            }
        }

    };


});
