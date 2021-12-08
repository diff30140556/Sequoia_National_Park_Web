$(document).ready(function () {
  const initialWidth = window.innerWidth;
// 偵測網頁寬度，針對小尺寸螢幕顯示不同排版內容
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
      $('.menu').addClass('rwd-menu');
      $('.open-menu').addClass('open-menu-rwd');
      $('.close-menu').addClass('close-menu-rwd');
      
      if(initialWidth!==width){
        $('.open-menu').show();
        $('.close-menu').hide();
        document.body.style.overflow = 'visible';
        $('.menu').hide();  
      }
    }
  }
// 監聽網頁滾動，下滑到一定高度顯示右側返回頂部按鈕
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

// 監聽網頁尺寸變化，加上100ms延遲避免觸發過多效能過重
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

// 下拉式選單-Park Views
  $('.dropMenu').click(function (e) { 
      e.preventDefault();
      $('.parkViewDrop').stop().slideToggle(300);
      $(this).toggleClass('active');
  });

// 點擊下拉式選單內容後自動收起
  $('.parkViewDrop li a').click(function (e) { 
      e.preventDefault();
      $('.parkViewDrop').slideUp();
      $('.dropMenu').removeClass('active');
      // RWD下的設定
      document.body.style.overflow = 'visible';
      $('.open-menu-rwd').toggle();
      $('.close-menu-rwd').toggle();
      $('.rwd-menu').hide();
  });

//點擊單個Menu後會收起下拉式選單 
  $('.menu-item').click(function (e) { 
      e.preventDefault();
      $('.parkViewDrop').slideUp();
      $('.dropMenu').removeClass('active');
      // RWD下的設定
      document.body.style.overflow = 'visible';
      $('.open-menu-rwd').toggle();
      $('.close-menu-rwd').toggle();
      $('.rwd-menu').hide();
  });

// 點擊info資訊會展開或收起內容
  $('.info-content li a').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass('active').parent().siblings().find('a').removeClass('active');

      $(this).siblings('p').stop().slideToggle();

      $(this).parent().siblings().find('p').slideUp();
  });

// Swiper設定
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

// Lightbox2設定
lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true,
      fadeDuration: 500,
      imageFadeDuration: 500,
      fitImagesInViewport: true
    })

// 點擊返回頂部按鈕
$('.top-arrow').click(function (e) { 
  e.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 600)
});

// 點擊單個Menu或下拉選單的內容會滑到相對應的區塊
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

// RWD下的設定 //

// 點擊圖示會顯示Menu，隱藏其他內容固定Menu在手機滿版，防止下滑
  $('.open-menu').click(function (e) { 
    e.preventDefault();
    document.body.style.overflow = 'hidden';

    $('.menu').show().addClass('open-menu-animation').removeClass('close-menu-animation');
    $('.close-menu').toggle();
    $('.open-menu').toggle();
  });

// 點擊圖示關閉Menu，網頁內容正常顯示
  $('.close-menu').click(function (e) { 
    e.preventDefault();
    document.body.style.overflow = 'visible';

    $('.menu').addClass('close-menu-animation').removeClass('open-menu-animation');
    $('.close-menu').toggle();
    $('.open-menu').toggle();
  });

});
