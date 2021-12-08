$(document).ready(function () {
  const initialWidth = window.innerWidth;
// rwd
  detectWidth();
  function detectWidth(){
    const width = window.innerWidth;
    
    if(width>768){
      document.body.style.overflow = 'visible';
      $('.menu').removeClass('rwd-menu');
      $('.open-menu').removeClass('open-menu-rwd');
      $('.close-menu').removeClass('close-menu-rwd');
      $('.open-menu').hide();
      $('.close-menu').hide();
      $('.menu').show().css('display','flex');
    } else if(width<=768){
      document.body.style.overflow = 'visible';
      $('.menu').addClass('rwd-menu');
      $('.open-menu').addClass('open-menu-rwd');
      $('.close-menu').addClass('close-menu-rwd');
      $('.open-menu').show();
      $('.close-menu').hide();
      $('.menu').hide();
    }
  }

  window.onscroll = function(){

    const width = window.innerWidth;
    const height = window.document.documentElement.scrollTop;
    const arrow = document.querySelector('.top-arrow');
    if (width>760){
      if (height>730){
        arrow.classList.add('top-arrow-animation');
      } else {
        arrow.classList.remove('top-arrow-animation');
      }
    } else if(width<=760){
      if (height>410){
        arrow.classList.add('top-arrow-animation');
      } else {
        arrow.classList.remove('top-arrow-animation');
      }
    }
    
  }

// rwd
  var resizeTimer = null;
  $(window).resize(function(){
    if(resizeTimer){
        clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(function(){
      detectWidth();  
      },100)
    }
  )

  $('.dropMenu').click(function (e) { 
      e.preventDefault();
      $('.parkViewDrop').stop().slideToggle(300);
      $(this).toggleClass('active');
  });

  $('.parkViewDrop li a').click(function (e) { 
      e.preventDefault();
      $('.parkViewDrop').slideUp();
      $('.dropMenu').removeClass('active');
      // rwd
      document.body.style.overflow = 'visible';
      $('.open-menu-rwd').toggle();
      $('.close-menu-rwd').toggle();
      $('.rwd-menu').hide();
  });

  $('.menu-item').click(function (e) { 
      e.preventDefault();
      $('.parkViewDrop').slideUp();
      $('.dropMenu').removeClass('active');
      // rwd
      document.body.style.overflow = 'visible';
      $('.open-menu-rwd').toggle();
      $('.close-menu-rwd').toggle();
      $('.rwd-menu').hide();
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
      fadeEffect: {
        crossFade: true
       },
    
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

  if (anchor == '#drop'){
    return;
  }

  const scroll = $(anchor).offset().top;
  $('html,body').animate({
    scrollTop: scroll
  },1000)
});

// responsice webiste

  $('.open-menu').click(function (e) { 
    e.preventDefault();
    document.body.style.overflow = 'hidden';

    $('.menu').show().addClass('open-menu-animation').removeClass('close-menu-animation');
    $('.close-menu').toggle();
    $('.open-menu').toggle();
  });

  $('.close-menu').click(function (e) { 
    e.preventDefault();
    document.body.style.overflow = 'visible';

    $('.menu').addClass('close-menu-animation').removeClass('open-menu-animation');
    $('.close-menu').toggle();
    $('.open-menu').toggle();
  });

});
