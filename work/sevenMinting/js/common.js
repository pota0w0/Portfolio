// 'use strict';

let coverImg, cover;
let scrollTop = 0;

gsap.registerPlugin(ScrollTrigger);

var seventl = gsap.timeline({
    scrollTrigger: {
        trigger: ".landing",
        start: "-50% top",
        scrub: 2,
        //pin: true,
        end: "50% 0%",
        toggleActions: "play reverse none reverse"
    }
});
seventl.to('.s1', {
    x: -500,
    y: -400,
    opacity: 0
})
seventl.to('.s1', {
    x: 0,
    y: 0,
    opacity: 1
})

var seventl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".landing",
        start: "-50% top",
        scrub: 2,
        // pin: true,
        end: "50% 0%",
        toggleActions : "play reverse none reverse"
    }
});
seventl2.to('.s2',{x:-500, y: -600, opacity: 0})
seventl2.to('.s2',{x: 0,  y: 0, opacity: 1})

var seventl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".landing",
        start: "-50% top",
        scrub: 2,
        // pin: true,
        end: "50% 0%",
        toggleActions : "play reverse none reverse"
    }
});
seventl3.to('.s3',{x: 500, y: -20, opacity: 0})
seventl3.to('.s3',{x: 0,  y: 0, opacity: 1})

var seventl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".landing",
        start: "-50% top",
        scrub: 2,
        // pin: true,
        end: "50% 0%",
        toggleActions : "play reverse none reverse"
    }
});
seventl4.to('.s4',{x: 500, y: 200, opacity: 0})
seventl4.to('.s4',{x: 0,  y: 0, opacity: 1})

var seventl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".landing",
        start: "-50% top",
        scrub: 2,
        // pin: true,
        end: "50% 0%",
        toggleActions : "play reverse none reverse"
    }
});
seventl5.to('.s5',{x: -500, y: 200, opacity: 0})
seventl5.to('.s5',{x: 0,  y: 0, opacity: 1})

var seventl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".landing",
        start: "-50% top",
        scrub: 2,
        // pin: true,
        end: "50% 0%",
        toggleActions : "play reverse none reverse"
    }
});
seventl6.to('.s6',{x: -300, y: -300, opacity: 0})
seventl6.to('.s6',{x: 0,  y: 0, opacity: 1})

var seventl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".landing",
        start: "-50% top",
        scrub: 2,
        // pin: true,
        end: "50% 0%",
        toggleActions : "play reverse none reverse"
    }
});
seventl7.to('.s7',{x: 500, y: -100, opacity: 0})
seventl7.to('.s7',{x: 0,  y: 0, opacity: 1})


var sevenMoodOp = gsap.timeline({
    scrollTrigger: {
        trigger: ".landing",
        start: "-60% top",
        scrub: 2,
        end: "60% 0%",
        delay: 4,
        duration: 8,
        toggleActions: "play reverse none reverse"
    }
});
sevenMoodOp.to('.sevenMoodNoSeven', {
    opacity: 0
})
sevenMoodOp.to('.sevenMoodNoSeven', {
    opacity: 1,
})
var mintingDayOp = gsap.timeline({
    scrollTrigger: {
        trigger: ".landing",
        start: "-60% top",
        scrub: 1,
        end: "60% 0%",
        delay: 4,
        duration: 8,
        toggleActions: "play reverse none reverse"
    }
});
mintingDayOp.to('.mintingD_day', {
    y: 300,
    opacity: 0
})
mintingDayOp.to('.mintingD_day', {
    y: 20,
    opacity: 1,
})



const langBox = document.querySelector('.langBox');
const langBoxUl = langBox.querySelector('ul');
const langBoxUlLi = langBoxUl.querySelectorAll('li');

langBoxUl.addEventListener('click', ()=>{
    let _target = event.target;
    langBoxUlLi.forEach((el, idx) =>{
        if(_target == el){
            el.classList.add('langOn');
        }else{
            el.classList.remove('langOn');
        };

    });
});

window.onload = function () {
    coverImg = document.querySelector(".background");
    const result = document.querySelector('#result');

    $(window).scroll(function(s){
        scrollTop = document.documentElement.scrollTop;
        coverImg.style.transform = "translateY("+ (-scrollTop/1000) +"%)";
    });

    $(document).mousemove(function (e) {
        $('#result').css("top", e.pageY);
        $('#result').css("left", e.pageX);
    });
    let elm = ".section";
    $(elm).each(function (index) {
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            let delta = 0;
            // if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (e) {}
                }
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) {}
                }
            }
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800,
                complete: function () {}
            });
        });
    });

}
$(document).ready(function () {
    $('#upper').addClass("loaded")
})
$(document).ready(function () {
    $('#lower').addClass("loaOp")
})

let windowWidth = $(window).width();
let windowHeight = $(window).height();

for (let i = 0; i < 700; i++) {
    let toLeft = Math.round(Math.random() * windowWidth);
    let toTop = Math.round((Math.random() * windowHeight) / 2);

    $("<div/>")
        .addClass("star-sm")
        .attr("style", "top:" + toTop + "px; left:" + toLeft + "px;")
        .appendTo("#upper");

    if (i % 5 == 0) {
        $("<div/>")
            .addClass("star-md")
            .attr("style", "top:" + toTop + "px; left:" + toLeft + "px;")
            .appendTo('#upper');

    } else if (i % 25 == 0) {
        $('<div/>')
            .addClass("star-lg")
            .attr("style", "top:" + toTop + "px; left:" + toLeft + "px;")
            .appendTo('#upper');

    };
};
for (let i = 0; i < 200; i++) {
    let toLeft = Math.round(Math.random() * windowWidth);
    let toTop = Math.round((Math.random() * windowHeight) / 2);

    $("<div/>")
        .addClass("star-sm")
        .attr("style", "top:" + toTop + "px; left:" + toLeft + "px;")
        .appendTo("#lower");

    if (i % 5 == 0) {
        $("<div/>")
            .addClass("star-md")
            .attr("style", "top:" + toTop + "px; left:" + toLeft + "px;")
            .appendTo('#lower');

    } else if (i % 25 == 0) {
        $('<div/>')
            .addClass("star-lg")
            .attr("style", "top:" + toTop + "px; left:" + toLeft + "px;")
            .appendTo('#lower');

    };
};
var isVisible = false;

$(window).on('scroll', function () {
    if (checkVisible($('.backNeon')) && !isVisible) {
        $('.st0')
            .addClass('dash')
            .delay(3000)
        $('.st1')
            .addClass('dash')
            .delay(3000)
        $('.st2')
            .addClass('dash')
            .delay(3000)
        $('.st3')
            .addClass('dash')
            .delay(3000)
        $('.neon').css('opacity', '1')
        $('.neon').css('transition', 'all 2s')
        isVisible = true;
    }
});

function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
};

