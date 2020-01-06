jQuery(function ($) {


  var testimonialsSwiper = new Swiper('.testimonials-section .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerColumn: 1,
    slidesOffsetAfter: 0,
    spaceBetween: 60,
    loop: false,
    roundLengths: true,
    speed: 700,
    autoplay: false,
    navigation: {
      nextEl: '.testimonials-controls .swiper-button-next',
      prevEl: '.testimonials-controls .swiper-button-prev'
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
  });


  // slow scroll by click link
  /*$(".scroll-link-list").on("click","a", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 400);
  });*/

});