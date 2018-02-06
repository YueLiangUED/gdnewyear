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
    //文字进入效果
    function sayShow(txt1,txt2) {
        var i = 0,
            txt2 = document.getElementById(txt2),
            txt1 = document.getElementById(txt1);
        var timer_txt = setInterval(function(){
            txt2.innerHTML = txt1.innerHTML.substring(0, i);
            i++;
            if(txt1.innerHTML == txt2.innerHTML){
                clearInterval(timer_txt);
            };
        },60);
    }
    var scrollSpeed=10,
        step = 0;
    function scrollMarquee() {
        step -= 2;
        switch (step){
            case -1000:
                eleFadeIn($('#fadeIn_01'));
                break;
            case -1400:
                sayShow('say1','say1Show');
                break;
            case -2240:
                sayShow('say2','say2Show');
                break;
            case -3800:
                eleFadeIn($('#fadeIn_02'));
                break;
            case -4850:
                eleFadeIn($('#fadeIn_03'));
                eleFadeIn($('#fadeIn_04'),1500);
                eleFadeIn($('#fadeIn_05'),2500);
                break;
            case -5600:
                sayShow('say3','say3Show');
                break;
            case -6770:
                eleFadeIn($('#fadeIn_06'));
                eleFadeIn($('#fadeIn_07'),2000);
                break;
            case -7650:
                eleFadeIn($('#fadeIn_08'));
                eleFadeIn($('#fadeIn_09'),2000);
                break;
            case -8400:
                sayShow('say4','say4Show');
                break;
            case -9800:
                sayShow('say5','say5Show');
                break;
            case -11200:
                sayShow('say6','say6Show');
                break;
            case -11700:
                sayShow('say7','say7Show');
                break;
            case -12340:
                sayShow('say8','say8Show');
                break;
            case -14400:
                sayShow('say9','say9Show');
                break;
            case -14430:
                sayShow('say10','say10Show');
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
            case -28400:
                sayShow('say11','say11Show');
                break;
            case -29000:
                eleFadeIn($('#fadeIn_17'));
                break;
            case -29500:
                sayShow('say12','say12Show');
                break;
            case -30700:
                sayShow('say13','say13Show');
                break;
        }
        if(step <= -31080){
            $('#clockBtn').off();
            $('#clockBtn').remove();
            return;
        }
        //console.log(step);
        $('#conBox').css('transform','translateY('+step/100+'rem)');
    }
    /*var clockBtn = document.getElementById('clockBtn');
    clockBtn.addEventListener('touchstart',function (e) {

    },false);
    clockBtn.addEventListener('touchstart',function (e) {

    },false);*/
    $('#clockBtn').on('touchstart',function (e) {
        if(e.originalEvent.targetTouches.length ==1){
            $(this).find('span').addClass('act');
            timer1 = setInterval(scrollMarquee,scrollSpeed);
        }else{
            return;
        }
    });
    $('#clockBtn').on('touchend',function (e) {
        $(this).find('span').removeClass('act');
        clearInterval(timer1);
    });
    $('#clockBtn').on('contextmenu', function(e){
        e.preventDefault();
    });

    //聊天气泡淡入
    function eleFadeIn(ele,t) {
        if(t === null){
            t = 500;
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
        ww;
    jumpBtn.addEventListener('touchstart',function (e) {
        var touches = e.touches[0];
        ww = touches.clientX - jumpBtn.offsetLeft;
    });
    jumpBtn.addEventListener('touchmove',function (e) {
        var touches = e.touches[0];
        var oLeft = (touches.clientX - ww)/50;
        console.log(oLeft);
        if(oLeft <= .23) {
            oLeft = .23;
        }else if(oLeft > document.documentElement.clientWidth - jumpBtn.offsetWidth) {
            oLeft = (document.documentElement.clientWidth - jumpBtn.offsetWidth);
        }else if(oLeft >= 5.8){
            oLeft = 5.8;
        }else if(oLeft >= 5){
            window.location.href = '';
        }
        jumpBtn.style.left = oLeft + "rem";
    });
    jumpBtn.addEventListener('touchend',function (e) {
        jumpBtn.style.left = .23 + 'rem';
    });
    
    
});