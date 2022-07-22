//header scroll
$(document).ready(function(){
    //조건 : 스크롤바의 탑 위치가 0보다 크면 header에 on클래스적용, 그렇지 않으면 제거
    //스크롤바의 위치 변경 확인은 scroll이벤트가 처리
    $(window).scroll(function(){
        //스크롤바 탑 위치를 담는 변수
        var top = $(window).scrollTop();
        
        if(top > 0){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }
    });
});

//gnb
$(document).ready(function(){
    
    //창사이즈에 따라 gnb가 다르게 처리
    $(window).resize(function(){
        /* 미디어 스크린의 창사이즈와 제이쿼리 창사이즈가 다름 */
        /* 제이쿼리 width()는 스크롤바 사이즈를 뺀 -17px로 시작 */
        /* 자바스크립트가 인식하는 innderWidth로 처리하면 미디어 쿼리와 계산이 맞음 */
        var w = $(window).innerWidth(); 
        
        if(w >= 1024){ //pc해상도라면
            //모바일 패널이 모두 닫혀야 함
            $('.panelBtn a').removeClass('on');
            $('.tNav, .gnb').removeClass('on');

            $('.gnb .subNav').slideUp(0);
            $('.gnb .topNav').removeClass('on');
            $('.gnb .topNav').off('click');
            
            pcGnb();
        }else{ //태블릿과 모바일 해상도라면
            //1024보다 큰적이 있으면 hover이벤트가 계속 발생
            //1024보다 작으면 이벤트 제거
            $('.gnb').off('mouseenter');
            $('.gnb').off('mouseleave');
            $('.gnb .subNav').css('height','auto');
            
            //웹접근성관련 이벤트도 제거
            $('.gnb .topNav').off('focus');
            $('.gnb .subNav li:last-child a').off('focus');
            
            mtGnb();
        }
    });
    
    //초기실행에도 명령이 발생
    $(window).trigger('resize');
    
    //패널버튼 클릭시
    $('.panelBtn a').click(function(){
        $(this).toggleClass('on');
        $('.tNav, .gnb').toggleClass('on');
        
        $('.gnb .subNav').stop().slideUp(0);
        $('.gnb .topNav').removeClass('on'); 
    });
    
    
    function mtGnb(){
        //클릭이벤트가 계속 중복 되므로 기존것을 제거 후 다시 실행
        $('.gnb .topNav').off('click');
        $('.gnb .topNav').click(function(){
            var is = $(this).next().is(':hidden'); 
            
            if(is){
                $('.gnb .subNav').stop().slideUp(0);
                $(this).next().stop().slideDown('fast');
                $('.gnb .topNav').removeClass('on');
                $(this).addClass('on');
            }else{
                $('.gnb .subNav').stop().slideUp(0);
                $('.gnb .topNav').removeClass('on');
            }
            
        });
    }
    
    /*=============================pc gnb를 처리할 함수====================*/
    function pcGnb(){
        $('.gnb').hover(function(){
            $('.gnb .subNav, .subNavBg').stop().slideDown('fast');
        }, function(){
            $('.gnb .subNav, .subNavBg').stop().slideUp('fast');
        });
        
        //웹접근성
        $('.gnb .topNav').focus(function(){
            $('.gnb .subNav, .subNavBg').stop().slideDown('fast');
        
            $('.gnb .topNav').removeClass('on');
            $(this).addClass('on');
        });
        $('.gnb .subNav li:last a').keydown(function(e){
            if(e.keyCode==9){ 
                if(!e.shiftKey){ 
                    $('.gnb .subNav, .subNavBg').stop().slideUp('fast');
                    $('.gnb .topNav').removeClass('on');
                }
            } 
        });
        $('.gnb .subNav li:last-child a').focus(function(){
            $('.gnb .topNav').removeClass('on');
            $(this).parents('.subNav').prev().addClass('on');
        });
        $('.gnb .topNav').keydown(function(e){
            if(e.keyCode==9){ 
                if(e.shiftKey){ 
                    $('.gnb .subNav, .subNavBg').stop().slideUp('fast');
                    $('.gnb .topNav').removeClass('on');
                }
            }
        });
    }
});


//addrmobile
$(document).ready(function(){
    $('.addrwrap').slideUp(0);
    $('.addrmobile .arrow').addClass('on');
    
    $('.addrmobile button').click(function(){
        $('.addrwrap').slideToggle('fast');
        $('.addrmobile .arrow').toggleClass('on');
    });
});