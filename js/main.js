$(function(){
  $(".pop-up .close .colse_pop-up").click(function(){
    $(".pop-up").hide();
 })
    skillFlag = 1;
    // scroll 이벤트

    $(window).scroll(function(){
        curr = $(this).scrollTop();

        // Navbar
        header = $('.header').height();
        if(header < curr) {
            $('.header').addClass('on')
        }else {
            $('.header').removeClass('on')
        }

        // Arrow up button
        home = $('.home').offset().top ;
        if(home < curr) {
            $('.arrow-up').addClass('on')
        } else {
            $('.arrow-up').removeClass('on')
        }
    });

    gsap.to('.scroll span',{
          y:40,
        //   x:'-50%',
          yoyo:true,
          repeat:-1,
          duration:1,
      })


      //about text
      var words = document.getElementsByClassName('word');
            var wordArray = [];
            var currentWord = 0;

            words[currentWord].style.opacity = 1;
            for (var i = 0; i < words.length; i++) {
            splitLetters(words[i]);
            }

            function changeWord() {
            var cw = wordArray[currentWord];
            var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
            for (var i = 0; i < cw.length; i++) {
                animateLetterOut(cw, i);
            }

            for (var i = 0; i < nw.length; i++) {
                nw[i].className = 'letter behind';
                nw[0].parentElement.style.opacity = 1;
                animateLetterIn(nw, i);
            }

            currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
            }

            function animateLetterOut(cw, i) {
            setTimeout(function() {
                cw[i].className = 'letter out';
            }, i * 80);
            }

            function animateLetterIn(nw, i) {
            setTimeout(function() {
                nw[i].className = 'letter in';
            }, 340 + (i * 80));
            }

            function splitLetters(word) {
            var content = word.innerHTML;
            word.innerHTML = '';
            var letters = [];
            for (var i = 0; i < content.length; i++) {
                var letter = document.createElement('span');
                letter.className = 'letter';
                letter.innerHTML = content.charAt(i);
                word.appendChild(letter);
                letters.push(letter);
            }

            wordArray.push(letters);
            }
            changeWord();
            setInterval(changeWord, 3000);

    total = $('html').height()+2000-$(window).height();
      gsap.to('.precent span',{
        scrollTrigger: {
            trigger: "html",
            start: "top top",
            end: total,
             scrub: 1,
            //  markers:true,
          },
          width:'100%',

      })


    let home = gsap.timeline({
        scrollTrigger: {
          trigger: ".home",
          pin: true,  
          start: "top top", 
          end: "+=2000", 
          scrub: 1, 
        }
      });
      home.to('.home .bg',{scale:0})
      .fromTo('.home .txt_wrap',{opacity:0},{opacity:1})
      .to('.header',{y:0})


    let about = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "top 100%",
          end: "bottom", 
          scrub: 1, 
        }
      });
      about.to('.home .bg',{y:'50%'})

    
      gsap.to('.about_wrap .skills ul li',{
        scrollTrigger: {
            trigger: ".about_wrap .skills",
            start: "top 100%",
            end: "bottom",
            // scrub: 1,
          },
          duration:1,
          opacity:1,
          stagger:0.1

      })
     
      gsap.to('.work_wrap .sub_txt.txt03',{
        scrollTrigger: {
            trigger: ".item01",
            start: "top 100%",
            end: "bottom",
            scrub: 1,
          },
          x:'-30%',
      })
      gsap.to('.work_wrap .sub_txt.txt04',{
        scrollTrigger: {
            trigger: ".item02",
            start: "top 100%",
            end: "bottom",
            scrub: 1,
          },
          x:'30%',
      })
      gsap.to('.work_wrap .sub_txt.txt05',{
        scrollTrigger: {
            trigger: ".item03",
            start: "top 100%",
            end: "bottom",
            scrub: 1,
          },
          x:'-30%',
      })
      gsap.to('.work_wrap .sub_txt.txt06',{
        scrollTrigger: {
            trigger: ".item04",
            start: "top 100%",
            end: "bottom",
            scrub: 1,
          },
          x:'30%',
      })
      gsap.to('.work_wrap .sub_txt.txt07',{
        scrollTrigger: {
            trigger: ".item05",
            start: "top 100%",
            end: "bottom",
            scrub: 1,
          },
          x:'-30%',
      })

    //top button

    $('.arrow-up').click(function(){
        $('html').animate({scrollTop : 0})
    })

    //target 찾아 이동

    $('.header .navbar_item a').click(function(){
        el = $(this).data('target');
        eloff = $(el).offset().top;
        $('html,body').animate({scrollTop:eloff},300)
    })

    $('.txt_wrap .more_btn').click(function(){
      el = $(this).data('target');
      eloff = $(el).offset().top;
      $('html,body').animate({scrollTop:eloff},300)
  })

    //마우스
    document.body.addEventListener("mousemove", evt => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;
      

      gsap.set(".cursor", {
          x: mouseX,
          y: mouseY
      });

      gsap.to(".shape", {
          x: mouseX,
          y: mouseY,
          stagger: -0.1
      });
  });

    $(".chover").on("mouseenter",function(){
      // alert("hover");
      $(".cursor").stop().animate({
          width: "80px",
          height: "80px",
          opacity: 0.5
      },300)
  });
  $(".chover").on("mouseleave",function(){
      $(".cursor").stop().animate({
          width: "20px",
          height: "20px",
          opacity: 1
      })
     
  })
    

//하단 contact me
    $('aside .chover').click(function(){
      $('aside').toggleClass('height');
  })
  //contact me-copied 복사하기

  function copyToClipboard(val) {
      var t = document.createElement("textarea");
      document.body.appendChild(t);
      t.value = val;
      t.select();
      document.body.removeChild(t);
  }
  $(window).scroll(function(){
    var pos = $(window).scrollTop();
   if(pos>=$(document).height() - $(window).height()- $("#footer").height()){
       $('aside').css("z-index","-1");
        } else{
            $('aside').css("z-index","9999");
            
        }
   
   });
        
    wow = new WOW({ 
        boxClass: 'wow', 
        animateClass: 'animated', 
        offset: 0, 
        mobile: true, 
        live: true  }) 
        wow.init();

})
