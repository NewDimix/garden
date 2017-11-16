$(window).on('load', function () {
  $preloader = $('.js-loader'),
    $loader = $preloader.find('.loader__img');
  $loader.fadeOut();
  $preloader.delay(0).fadeOut('slow');
	
  var isMobile = $('.js-menu-btn').is(":visible");
	
$('.js-menu-btn').click(function (event) {
  $('.js-menu-content').slideToggle();
  event.stopPropagation();
  $('.js-menu-content > li span + ul').slideUp();
  $('.js-menu-content > li span').removeClass('open');
  $('.js-menu-btn').toggleClass('open');
});
  
$(document).mouseup(function (e) {
  var container = $('.js-menu li');
  if (container.has(e.target).length === 0) {
    $('.js-menu-content > li span + ul').slideUp();
    $('.js-menu-content > li span').removeClass('open');
    $('.js-menu-content > li').removeClass('active');
    $('.js-menu-content > li:first-child').addClass('active');
  }
  container = $('.js-menu');
  if (container.has(e.target).length === 0) {
    if ($(window).width() < '480') {
      $('.js-menu-content').slideUp();
      $('.js-menu-btn').removeClass('open');
    }
  }
});
  
$(function () {

  $.myfn = function (li) {
    $(li + ' > span').on('click', function () {
      var thisContent = $(this).siblings('ul');
      $(li + ' span + ul').not(thisContent).slideUp();
      $(this).siblings('ul').slideToggle();

      $(li + ' span').not(this).removeClass('open');
      $(this).toggleClass('open');
      
      $(li).not(this).removeClass('active');
      $(this).parent().toggleClass('active');
    });
  };

  $.myfn('.js-menu-content > li');
  $.myfn('.js-menu-content > li > ul > li');

});
  
  setTimeout(function () {
    $('.js-owl').toggleClass('jump');
  }, 1000);

  setTimeout(function () {
    $('.js-text').toggleClass('visible');
  }, 5500);
	
  setTimeout(function () {
    $('.js-escargot').toggleClass('move');
  }, 1400);

  $('.js-main-slider').slick({
    dots: true,
    infinite: true,
    speed: 900,
    fade: true,
    cssEase: 'linear',
	mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 5000,
	prevArrow: '<div class="slider-slick__prev-wrap"><div class="slider-slick__prev-img"></div></div>',
    nextArrow: '<div class="slider-slick__next-wrap"><div class="slider-slick__next-img"></div></div>'
  });

  $('.js-news-slider').slick({
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerMode: true,
          slidesToShow: 3
        }
      },
    ]
  });
});