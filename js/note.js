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








})

