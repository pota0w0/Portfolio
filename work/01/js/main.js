//mslider
$(document).ready(function(){
    $('.flexslider').flexslider({
        slideshowSpeed: 7000,
        directionNav: false,
        pausePlay: true
    });
});

//franchise
//ready() - DOM(요소, 텍스트컨텐츠)이 전부 읽혀지고 난 후 발생될 코드 작성
//load() - 요소 중 렌더링이 필요한 멀티미디어까지 전부 읽혀지고 난 후 발생될 코드 작성
$(window).load(function(){
    $(window).resize(function(){
        //창의 가로폭을 담는 변수
        var w = $(window).width();
        var h = $('.franchise li').height(); //높이를 숫자로만 반환
        
        if(w >= 1024){
            $('.franchise .titleWrap').css('height',h);
        }else{
            $('.franchise .titleWrap').css('height','auto');
        }
    });
    
    //초기실행 - 리사이즈이벤트 강제 발생
    $(window).trigger('resize');
});













