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


    


    var scrollSpeed=10,
        step = 0;
    function scrollMarquee() {
        step -= 2;
        switch (step){
            case -1000:
                eleFadeIn($('#fadeIn_01'));
                break;
            case -3800:
                eleFadeIn($('#fadeIn_02'));
                break;
            case -4850:
                eleFadeIn($('#fadeIn_03'));
                eleFadeIn($('#fadeIn_04'),1500);
                eleFadeIn($('#fadeIn_05'),2500);
                break;
            case -6770:
                eleFadeIn($('#fadeIn_06'));
                eleFadeIn($('#fadeIn_07'),2000);
                break;
            case -7650:
                eleFadeIn($('#fadeIn_08'));
                eleFadeIn($('#fadeIn_09'),2000);
                break;
            case -16330:
                eleFadeIn($('#fadeIn_10'));
                break;
            case -19800:
                eleFadeIn($('#fadeIn_11'));
                break;
            case -20900:
                eleFadeIn($('#fadeIn_12'));
                break;
            case -22500:
                eleFadeIn($('#fadeIn_13'));
                break;
            case -23650:
                eleFadeIn($('#fadeIn_14'));
                break;
            case -25000:
                eleFadeIn($('#fadeIn_15'));
                break;
            case -26280:
                eleFadeIn($('#fadeIn_16'));
                break;
            case -29000:
                eleFadeIn($('#fadeIn_17'));
                break;
        }
        if(step <= -31100){
            $('#clockBtn').off();
            $('#clockBtn').remove();
            return;
        }
        console.log(step);
        $('#conBox').css('transform','translateY('+step/100+'rem)');
    }
    $('#clockBtn').on('touchstart',function () {
        $(this).find('span').addClass('act');
        timer1 = setInterval(scrollMarquee,scrollSpeed);
    });
    $('#clockBtn').on('touchend',function () {
        $(this).find('span').removeClass('act');
        clearInterval(timer1);
    });
    $('#clockBtn').on('contextmenu', function(e){
        e.preventDefault();
    });


    function eleFadeIn(ele,t) {
        if(t === null){
            t = 500;
        }
        ele.fadeIn(t);
    }
    
    
    
    
    //->MUSIC
    wx.config({
        debug: false
    });
    wx.ready(function () {
        function audioAutoPlay(id){
            var audio = document.getElementById(id),
                play = function(){
                    audio.play();
                    document.removeEventListener("touchstart",play, false);
                };
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                play();
            }, false);
            document.addEventListener('YixinJSBridgeReady', function() {
                play();
            }, false);
            document.addEventListener("touchstart",play, false);
        }
        audioAutoPlay('music');
    });
    
});