/**
 * Created by 61720 on 2016.09.17.
 */
$(document).ready(function () {

    // 顶部条效果
    $(window).scroll(function () {

        var docHeight = $(document).scrollTop();
        var top = $(".top");
        if(docHeight<10){
            top.css({"height":"109px","background-color":"rgba(221,221,221,0.2)"});
        }else {
            top.css({"height":"50px","background-color":"rgba(0,0,0,0.4)","position":"fixed","top":"0px","left":"0px"});
        }
    })


    // 加载音乐列表
    // 模拟后端数据
    loadMusicList();
    function loadMusicList() {

        var json0 = [[{"herf":"#","src":"img/musicList01.png","name":"故人叹0","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"}],[{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"}]];
        var json1 = [[{"herf":"#","src":"img/musicList01.png","name":"故人叹1","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"}],[{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"}]];
        var json2 = [[{"herf":"#","src":"img/musicList01.png","name":"故人叹2","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"}],[{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"},{"herf":"#","src":"img/musicList01.png","name":"故人叹","type":"唯美钢琴"}]];
        var musicList = $(".musicList");
        var load = $(".musicList img");
        var more = $(".btnMore");
        var control = $(".musicTab>ul>li");
        var playBox = $(".playBox");

        control.eq(1).click(function () {
            playBox.slideUp("slow");
            loadLi(json0);
        });
        control.eq(2).click(function () {
            playBox.slideUp("slow");
            loadLi(json1);
        });
        control.eq(3).click(function () {
            playBox.slideUp("slow");
            loadLi(json2);
        });


        loadLi(json0);

        function loadLi(json) {
            var html = "";

            more.css("display","block").fadeIn();
            $(".musicList .page01").html(html);
            more.html("加载更多");
            json[0].map(function (val) {
                html = "<li>"+"<a href='"+ val.herf+"'  target='_self'>"+"<img src = '"+ val.src+"'/>" + "</a>" +"<p>" +"<em>"+ val.name +"</em><br>" +val.type +"</p>" +"</li>";
                $(html).appendTo(".musicList .page01");
            });



            // 加载更多
            var i = 1;
            more.unbind('click').click(function () {


                if(i < json.length){
                    more.html("加载更多");
                    load.stop().animate({"opacity":"1"},450);
                    var html = "";
                    json[i].map(function (val) {
                        html = "<li>"+"<a href='"+ val.herf+"'  target='_self'>"+"<img src = '"+ val.src+"'/>" + "</a>" +"<p>" +"<em>"+ val.name +"</em><br>" +val.type +"</p>" +"</li>";
                        $(html).appendTo(".musicList .page01");
                        load.stop().animate({"opacity":"0"},450);
                    });
                    i++;
                }else {
                    more.html("没有了");
                }
            });
        }

    }

    // 播放器显示
    musicPlay();

    function musicPlay() {
        var playBox = $(".playBox");
        var musicLi = $(".musicList>ul");
        var img = $(".playBox .img");
        var paper = $("#paper01");
        var json = [{"src":"img/musicList01.png","lycris":"风吹过月的光， 透过我的窗， 默默伴我轻声唱， 歌声为谁悲伤， 消逝的时光， 为何总那么匆忙， 如果你听到了我的歌唱， 那就让我为了你流浪， 流浪只为了忘却那忧伤， 只为了那忧伤， 也是刻骨的浪漫我多想去远方， 陌生的地方， 从未有过的疯狂， 离开尘世繁华， 往事都遗忘， 只带走我的浪漫， 如果你听到了我的歌唱， 那就让我为了你流浪， 如果你听到了我的歌唱， 让我为你忧伤， 消逝的时光， 为何总那么匆忙， 离开尘世繁华， 往事都遗忘， 只带走我的浪漫， 这个需要后端支持。"}];var json1 = [{"src":"img/musicList01.png"},{"lycris":"风吹过月的光， 透过我的窗， 默默伴我轻声唱， 歌声为谁悲伤， 消逝的时光， 为何总那么匆忙， 如果你听到了我的歌唱， 那就让我为了你流浪， 流浪只为了忘却那忧伤， 只为了那忧伤， 也是刻骨的浪漫我多想去远方， 陌生的地方， 从未有过的疯狂， 离开尘世繁华， 往事都遗忘， 只带走我的浪漫， 如果你听到了我的歌唱， 那就让我为了你流浪， 如果你听到了我的歌唱， 让我为你忧伤， 消逝的时光， 为何总那么匆忙， 离开尘世繁华， 往事都遗忘， 只带走我的浪漫， 这个需要后端支持。"}];
        var timer;
        musicLi.on("click","a",function () {
            playBox.slideDown("slow");
            img.css("background-image","url('"+json[0].src+"')");
            write();
        });

        // 歌词显示
        // 模拟后台

        function write() {
            var json = [{"src":"img/musicList01.png","lycris":"风吹过月的光， 透过我的窗， 默默伴我轻声唱， 歌声为谁悲伤， 消逝的时光， 为何总那么匆忙， 如果你听到了我的歌唱， 那就让我为了你流浪， 流浪只为了忘却那忧伤， 只为了那忧伤， 也是刻骨的浪漫我多想去远方， 陌生的地方， 从未有过的疯狂， 离开尘世繁华， 往事都遗忘， 只带走我的浪漫， 如果你听到了我的歌唱， 那就让我为了你流浪， 如果你听到了我的歌唱， 让我为你忧伤， 消逝的时光， 为何总那么匆忙， 离开尘世繁华， 往事都遗忘， 只带走我的浪漫， 这个需要后端支持。"}];var json1 = [{"src":"img/musicList01.png"},{"lycris":"风吹过月的光， 透过我的窗， 默默伴我轻声唱， 歌声为谁悲伤， 消逝的时光， 为何总那么匆忙， 如果你听到了我的歌唱， 那就让我为了你流浪， 流浪只为了忘却那忧伤， 只为了那忧伤， 也是刻骨的浪漫我多想去远方， 陌生的地方， 从未有过的疯狂， 离开尘世繁华， 往事都遗忘， 只带走我的浪漫， 如果你听到了我的歌唱， 那就让我为了你流浪， 如果你听到了我的歌唱， 让我为你忧伤， 消逝的时光， 为何总那么匆忙， 离开尘世繁华， 往事都遗忘， 只带走我的浪漫， 这个需要后端支持。"}];

            // 打字机效果初始化
            paper.html("").css("visibility","visible");
            var code = json[0].lycris;
            // 歌词字符串处理
            var arr = code.split("");
            var i = 0;
            // 防止反复使用定时器



                clearInterval(timer);
                timer = setInterval(arrMap,100);


            function arrMap() {
                if(i<arr.length){
                    if( arr[i]=== " "){
                        paper.append("<br>");
                    }else{
                        paper.append(arr[i]);
                    }
                }else{
                    paper[0].classList.add("end");
                    clearInterval(timer);
                }
                i++;
            }
        }
    }






})
