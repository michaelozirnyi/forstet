jQuery(function ($) {

  //iframe height in content
  if( $('.content iframe').is('iframe')) {
    var iframeEl = $('iframe'),
        iframeWidth = iframeEl.width(),
        iframeHeight = iframeWidth * .5625;  //16x9

    iframeEl.height(iframeHeight);
  }

  //Map height in contact page
  if( $('.map #mapContact-us').is('div')) {
    var mapEl = $('#mapContact-us'),
        mapWidth = mapEl.width(),
        mapHeight = mapWidth * .7;

    mapEl.height(mapHeight);
  }

  // banner height ( 1/2 ) in food page
  if( $('.food-page').is('div')) {
    var linkBunner = $('.banner-link'),
        linkBunnerWidth = linkBunner.width(),
        linkBunnerHeight = linkBunnerWidth * 1.2;

    linkBunner.height(linkBunnerHeight);
  }

  // brands height in brands section
  if( $('.brands-section').is('section')) {
    var brandEl = $('.brand'),
        brandWidth = brandEl.width();

    brandEl.height(brandWidth);
  }

  //see more brands
  var $numResources = $('.brand.hidden'),
      $moreBtn = $('.see-more-link'),
      numberShow = 4,
      hidTimeBtnBerch = 4;

  $moreBtn.on("click", function () {

    $('.brand.hidden').slice(0, numberShow ).removeClass('hidden');

    hidTimeBtnBerch += numberShow;
    if($numResources.length < hidTimeBtnBerch) {
      $moreBtn.addClass('hidden');
    }
  });

  if( $('.cocktail-recipes-page').is('div')) {

    maintainSameHeight($('.cocktail'));

    function maintainSameHeight($list) {
      var height = 0;

      $list.each(function () {
        var $this = $(this);
        if ($this.outerHeight() > height) {
          height = $this.outerHeight();
        }
      });

      $list.css("height", height);
    }

    // init Isotope in spirits cocktail page
    var $grid = $('.cocktails-wrap').isotope({ });

    // filter cocktails on button click
    $('.dropdown_by-styles ul').on( 'click', 'button', function() {

      var filterSelectText = $(this).text(),
          spanStyleEl = $('#spanStyle'),
          selectInp = $('#cocktail-style');

      spanStyleEl.text(filterSelectText);
      selectInp.prop("checked", false);
    });

    // filter cocktails on button click
    $('.dropdown_by-spirits ul').on( 'click', 'button', function() {

      var filterSelectText = $(this).text(),
          spanStyleEl = $('#spanSpirit'),
          selectInp = $('#cocktailSpirit');

      spanStyleEl.text(filterSelectText);
      selectInp.prop("checked", false);
    });


    // store filter for each group
    var filters = {};

    $('.dropdown_wrapper ul').on( 'click', 'button', function() {
      var $this = $(this);

      // get group key
      var $buttonGroup = $this.parents('.dropdown_wrapper');
      var filterGroup = $buttonGroup.attr('data-filter-group');
      // set filter for group
      filters[ filterGroup ] = $this.attr('data-filter');
      // combine filters
      var filterValue = concatValues( filters );
      $grid.isotope({ filter: filterValue });

      if($('.hide-after-filt')) {
        $('.hide-after-filt').remove();
      }

      // because hidden has animation time
      setTimeout(function() {
        if($('.cocktail:visible').length == 0)
        {
          $('.cocktails-wrap').append( '<h4 class="hide-after-filt">Sorry, not find cocktails by your filter</h4>' );
        }
      }, 500);
    });

    // flatten object by concatting values
    function concatValues( obj ) {
      var value = '';
      for ( var prop in obj ) {
        value += obj[ prop ];
      }
      return value;
    }
  }

  // slow scroll by click link
  $(".scroll-link-list").on("click","a", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 400);
  });




  // menu logic
  $(".menu-link a").on("click", function (event) {
    event.preventDefault();

    if ($('.menu-link').hasClass('menu-open')) {
      $('.menu-link').removeClass('menu-open');

      $('.menu-dialog').removeClass('show-menu');

      setTimeout(function() {
        $('.menu').removeClass('menu-bg');
      }, 200);
    } else {
      $('.menu-link').addClass('menu-open');

      $('.menu-dialog').addClass('show-menu');

      $('.menu').addClass('menu-bg');
    }
  });
});