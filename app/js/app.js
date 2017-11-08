$(window).on('load', function () {
  $preloader = $('.loader'),
    $loader = $preloader.find('.loader__img');
  $loader.fadeOut();
  $preloader.delay(0).fadeOut('slow');
	
  var isMobile = $('.js-menu-btn').is(":visible");
  $('.js-menu-btn').on('click', function () {
    $(this).toggleClass('open');
    $('.js-menu-content').toggleClass('open');
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

  $('.slider-slick').slick({
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
                   
  $('.variable-width').slick({
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});