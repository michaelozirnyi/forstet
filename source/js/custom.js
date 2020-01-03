jQuery(function ($) {

  //iframe height in content
  if( $('.content iframe').is('iframe')) {
    var iframeEl = $('iframe'),
        iframeWidth = iframeEl.width(),
        iframeHeight = iframeWidth * .5625;  //16x9

    iframeEl.height(iframeHeight);
  }

  // slow scroll by click link
  $(".scroll-link-list").on("click","a", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 400);
  });

});