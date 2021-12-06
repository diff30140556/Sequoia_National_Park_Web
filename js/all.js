$(document).ready(function () {

    window.onscroll = function(){
      const height = window.document.documentElement.scrollTop;
      const arrow = document.querySelector('.top-arrow');
      console.log(height);
      
      if (height>730){
        arrow.classList.add('top-arrow-animation');
      } else {
        arrow.classList.remove('top-arrow-animation');
      }
    }

    $('.dropMenu').click(function (e) { 
        e.preventDefault();
        $('.parkViewDrop').stop().slideToggle(300);
        $(this).toggleClass('active');
    });

    $('.parkViewDrop li a').click(function (e) { 
        e.preventDefault();
        $('.parkViewDrop').slideUp();
        $('.dropMenu').removeClass('active');
    });

    $('.menu-item').click(function (e) { 
        e.preventDefault();
        $('.parkViewDrop').slideUp();
        $('.dropMenu').removeClass('active');
    });

    $('.info-content li a').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');

        $(this).siblings('p').stop().slideToggle();

        $(this).parent().siblings().find('p').slideUp();
    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
          },
        effect: 'fade',
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });

  lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true,
        fadeDuration: 500,
        imageFadeDuration: 500,
        fitImagesInViewport: true
      })
  
  $('.top-arrow').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 600)
  });

  $('.menu').on('click','a', function (e) {
    e.preventDefault();
    const anchor = $(this).attr('href');
    console.log(anchor);

    if (anchor == '#drop'){
      return;
    }

    const scroll = $(anchor).offset().top;
    console.log(scroll);
    $('html,body').animate({
      scrollTop: scroll
    },1000)
  });

});