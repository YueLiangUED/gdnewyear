/**
 * Created by wangbiaozy on 2018/2/3.
 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
$(function () {
    $('#loader').css('height',$(document).height());
    $('#main').css('height',$(document).height());

    var music = document.getElementById('music'),
        ms1 = document.getElementById('ms1'),
        ms2 = document.getElementById('ms2'),
        ms3 = document.getElementById('ms3'),
        ms4 = document.getElementById('ms4'),
        ms5 = document.getElementById('ms5');
    music.load();
    ms1.load();
    ms2.load();
    ms3.load();
    ms4.load();
    ms5.load();
    var scrollSpeed= 10,
        step = 0;
    function scrollMarquee() {
        step -= 2;
        switch (step){
            case -1000:
                eleFadeIn($('#fadeIn_01'));
                break;
            case -1206:
                eleFadeIn($('#say1'));
                break;
            case -2412:
                eleFadeIn($('#fadeIn_cbd'),2000);
                break;
            case -3618:
                eleFadeIn($('#fadeIn_02'));
                ms1.play();
                window.setTimeout(function () {
                    ms1.pause();
                },1000);
                break;
            case -3800:
                eleFadeIn($('#say2'));
                break;
            case -4800:
                eleFadeIn($('#fadeIn_03'));
                ms1.play();
                window.setTimeout(function () {
                    eleFadeIn($('#fadeIn_04'));
                    ms1.play();
                },1000);
                window.setTimeout(function () {
                    eleFadeIn($('#fadeIn_05'));
                    ms1.play();
                },2000);
                eleFadeIn($('#say3'));
                window.setTimeout(function () {
                    eleFadeIn($('#fadeIn_iphone'),1000);
                    window.setTimeout(function () {
                        ms2.play();
                    },800);
                },3500);
                window.setTimeout(function () {
                    ms1.pause();
                },3800);
                break;
            case -6700:
                ms3.play();
                eleFadeIn($('#fadeIn_06'));
                eleFadeIn($('#fadeIn_07'),2000);
                break;
            case -7850:
                eleFadeIn($('#fadeIn_08'));
                eleFadeIn($('#fadeIn_09'),2000);
                break;
            case -8050:
                eleFadeIn($('#say4'));
                break;
            case -9400:
                eleFadeIn($('#say5'));
                break;
            case -10200:
                ms4.play();
                break;
            case -10800:
                eleFadeIn($('#say6'));
                break;
            case -11374:
                eleFadeIn($('#say7'));
                break;
            case -12300:
                eleFadeIn($('#say8'));
                break;
            case -13786:
                eleFadeIn($('#say9'));
                eleFadeIn($('#fadeIn_10'));
                break;
            case -13986:
                eleFadeIn($('#fadeIn_10'));
                break;
            case -15900:
                ms5.play();
                break;
            case -17720:
                eleFadeIn($('#fadeIn_11'));
                break;
            case -19000:
                eleFadeIn($('#fadeIn_12'));
                break;
            case -20310:
                eleFadeIn($('#fadeIn_13'));
                break;
            case -21000:
                eleFadeIn($('#fadeIn_14'));
                break;
            case -21200:
                eleFadeIn($('#m1'));
                break;
            case -21350:
                eleFadeIn($('#m2'));
                break;
            case -21500:
                eleFadeIn($('#m3'));
                break;
            case -21650:
                eleFadeIn($('#m4'));
                break;
            case -22800:
                eleFadeIn($('#fadeIn_15'));
                break;
            case -24200:
                eleFadeIn($('#fadeIn_16'));
                break;
            case -25500:
                eleFadeIn($('#say10'));
                break;
            case -26700:
                eleFadeIn($('#fadeIn_17'));
                break;
            case -27390:
                eleFadeIn($('#say11'));
                break;
            case -28200:
                eleFadeIn($('#say12'),2000);
                break;
        }
        if(step <= -28980){
            $('#clockBtn').off();
            $('#clockBtn').remove();
            return;
        }
        //console.log(step);
        $('#conBox').css('transform','translateY('+step/100+'rem)');
    }


    $('#clockBtn').on('contextmenu', function(e){
        e.preventDefault();
    });

    //聊天气泡淡入
    function eleFadeIn(ele,t) {
        if(t === null){
            t = 1000;
        }
        ele.fadeIn(t);
    }
    
    //底部按钮动画
    var arrowL = 25,
        $arrowBox = $('#arrowBox'),
        $arrow_1 = $('#arrow_1'),
        $arrow_2 = $('#arrow_2'),
        $arrow_3 = $('#arrow_3'),
        $arrow_4 = $('#arrow_4');
    function arrowBoxAnimate() {
        arrowL++;
        if(arrowL >= 410){
            arrowL = 25;
        }
        $arrowBox.css('transform','translateX('+arrowL/100+'rem)');
    }
    var timerArrowBox = setInterval(arrowBoxAnimate,5);
    function arrowAnimate() {
        if($arrow_4.css('display') == 'block'){
            $arrow_1.hide();
            $arrow_2.hide();
            $arrow_3.hide();
            $arrow_4.hide();
        }
        $arrow_1.fadeIn(300);
        $arrow_2.fadeIn(600);
        $arrow_3.fadeIn(900);
        $arrow_4.fadeIn(1200);
    }
    var timerArrow = setInterval(arrowAnimate,2000);

    //页面底部跳转按钮
    var jumpBtn = document.getElementById('jumpBtn'),
        ww,jumpFlag = false;
    jumpBtn.addEventListener('touchstart',function (e) {
        $arrowBox.hide();
        var touches = e.touches[0];
        ww = touches.clientX - jumpBtn.offsetLeft;
    });
    jumpBtn.addEventListener('touchmove',function (e) {
        jumpFlag = true;
        var touches = e.touches[0];
        var oLeft = (touches.clientX - ww)/50;
        //console.log(oLeft);
        if(oLeft <= .23) {
            oLeft = .23;
        }else if(oLeft > document.documentElement.clientWidth - jumpBtn.offsetWidth) {
            oLeft = (document.documentElement.clientWidth - jumpBtn.offsetWidth);
        }else if(oLeft >= 5.8){
            oLeft = 5.8;
        }
        jumpBtn.style.left = oLeft + "rem";
    });
    jumpBtn.addEventListener('touchend',function (e) {
        $arrowBox.show();
        if(jumpFlag){
            $arrowBox.hide();
            jumpBtn.style.left = 5.8 + 'rem';
            _hmt.push(['_trackEvent','按钮检测','open','跳转',1]);
            window.location.href = 'http://h5.gmccopen.com/act/mixllnb!index.action?storeid=&channelId=redian';
        }
    });

    var timer4 = setInterval(function () {
        $('#jumpBtn').addClass('act');
        window.setTimeout(function () {
            $('#jumpBtn').removeClass('act');
        },500);
    },1000);

    //bgMusic
    wx.config({
        debug: false
    });
    wx.ready(function () {
        function audioAutoPlay(id){
            var audio = document.getElementById(id),
                play = function(){
                    audio.play();
                    audio.pause();
                    document.removeEventListener("touchstart",play, false);
                };
            audio.play();
            audio.pause();
            document.addEventListener("WeixinJSBridgeReady", function () {
                play();
                music.play();
            }, false);
            document.addEventListener('YixinJSBridgeReady', function() {
                play();
                music.play();
            }, false);
            document.addEventListener("touchstart",play, false);
        }
        music.play();
        audioAutoPlay('ms1');
        audioAutoPlay('ms2');
        audioAutoPlay('ms3');
        audioAutoPlay('ms4');
        audioAutoPlay('ms5');
    });
    ~function () {
        var musicMenu = document.getElementById('musicMenu'),
            musicAudio = document.getElementById('music');

        musicMenu.addEventListener('click', function () {
            if (musicAudio.paused) {//->暂停
                musicAudio.play();
                musicMenu.className = 'music move';
                return;
            }
            musicAudio.pause();
            musicMenu.className = 'music';
        }, false);

        function controlMusic() {
            musicAudio.volume = 0.5;
            musicAudio.play();
            musicAudio.addEventListener('canplay', function () {
                musicMenu.style.display = 'block';
                //console.log(1);
                musicMenu.className = 'music move';
            }, false);
        }
        window.setTimeout(controlMusic, 1000);
    }();

    $('#yd').on('click',function () {
        hideMask();
        $('#conBox>div:nth-child(1)').addClass('none');
        firFadeIn();
        setTimeout(firTxtShow,2000);
    });
    $('#mask').on('click',function () {
        hideMask();
        $('#conBox>div:nth-child(1)').addClass('none');
        firFadeIn();
        setTimeout(firTxtShow,2000);
    });

    var page2TxtShow = document.getElementById('page2TxtShow'),
        page2Txt = document.getElementById('page2Txt');

    $('#clockBtn').on('touchstart',function (e) {
        e.preventDefault();
        if(page2Txt.innerHTML == page2TxtShow.innerHTML && typeof (timer1) === 'undefined'){
            if(e.originalEvent.targetTouches.length ==1){
                $(this).find('span').addClass('act');
                timer1 = setInterval(scrollMarquee,scrollSpeed);
            }else{
                return;
            }
        }else if(page2Txt.innerHTML == page2TxtShow.innerHTML && typeof (timer1) !== 'undefined'){
            clearInterval(timer1);
            if(e.originalEvent.targetTouches.length ==1){
                $(this).find('span').addClass('act');
                timer1 = setInterval(scrollMarquee,scrollSpeed);
            }else{
                return;
            }
        }

    });
    $('#clockBtn').on('touchend',function (e) {
        if(page2Txt.innerHTML == page2TxtShow.innerHTML && typeof (timer1) !== 'undefined'){
            $(this).find('span').removeClass('act');
            clearInterval(timer1);
        }
    });

    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }



    /*//分享验证配置
    wx.config({
        debug: false,
        appId: '',
        timestamp: '',
        nonceStr: '',
        signature: '',
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'
        ]
    });
    //分享信息配置
    window.share_config = {
        "share": {
            "imgUrl": "../images/share.jpg",
            "desc" : "这，就是回家的意义吧",
            "title" : '无论你漂到哪里，总有人在家里等你',
            "link": window.location.href,
            "success":function(){

            },
            'cancel': function () {

            }
        }
    };
    wx.ready(function () {
        wx.onMenuShareAppMessage(share_config.share);//分享给好友
        wx.onMenuShareTimeline(share_config.share);//分享到朋友圈
        wx.onMenuShareQQ(share_config.share);//分享给手机QQ
    });*/
});