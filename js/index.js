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
        step--;
        $('#conBox').css('transform','translateY('+step+'px)');
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