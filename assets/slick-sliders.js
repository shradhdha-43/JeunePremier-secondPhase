
$(function () {
  function slidersInit1() {

    $('.slider-nav').slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      focusOnSelect: true,
      asNavFor: '.slider-for',
      infinite: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true
          }
        }
      ]
    });

    $('.slider-for').slick({
      speed: 300,
      arrows: false,
      infinite : false,
      useTransform: true,
      touchThreshold: 100,
      draggable: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      mobileFirst: false,
      asNavFor: '.slider-nav',
      dots: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
          }
        }
      ]
    });

    $('.slider-for-2').slick({
      speed: 300,
      arrows: false,
      useTransform: true,
      touchThreshold: 100,
      draggable: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      mobileFirst: true,
      asNavFor: '.slider-nav',
      dots: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
          }
        }
      ]
    });

    var $thumbnails = $('.slider-nav');
    var thumbnailsCount = $thumbnails.slick('getSlick').slideCount;
    $thumbnails.on('wheel', (function (e) {
      var currentIndex = $thumbnails.find('.slick-current').attr('data-slick-index');

      if (e.originalEvent.deltaY < 0 && currentIndex > 0) {
        e.preventDefault();
        $thumbnails.slick('slickPrev');
      } else if (e.originalEvent.deltaY > 0 && currentIndex < (thumbnailsCount - 1)) {
        e.preventDefault();
        $thumbnails.slick('slickNext');
      }
    }));
  }

  slidersInit1();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit1();
    });
  }
});

$(function () {
  function slidersInit2() {
    $('.related-products-preview').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: true,
      infinite: false,
      loop: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true
          }
        }
      ]
    });
  }
  slidersInit2();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit2();
    });
  }
});

$(function () {
  function slidersInit3() {
    $('.show-cross-upsell .cross-sell-body').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      dots: false,
      prevArrow: $(".show-cross-upsell .cross-sell-left-arrow"),
      nextArrow: $(".show-cross-upsell .cross-sell-right-arrow"),
      appendDots: $(".show-cross-upsell .accessories_dots"),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true
          }
        }
      ]
    });
  }
  slidersInit3();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit3();
    });
  }
});

$(function () {
  function slidersInit4() {
    $('.custom_review_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinite: true,
      prevArrow: $(".arrow_wrapper .left-arrorw-wrap"),
      nextArrow: $(".arrow_wrapper .right-arrorw-wrap"),
      appendDots: $(".review_dots"),
      responsive: [
  
      ]
    });
  }
  slidersInit4();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit4();
    });
  }
});

$(function () {
  function slidersInit5() {
    $('.bestseller-products').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            padding: '60px',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
  }
  slidersInit5();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit5();
    });
  }
});

$(function () {
  function slidersInit6() {
    $('.upsell-inner-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    });
  }
  slidersInit6();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit6();
    });
  }
});

$(function () {
  function slidersInit7() {
    $('.ergos-mob').slick({
      padding: '60px',
      slidesToShow: 1.2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: false
    });
  }
  slidersInit7();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit7();
    });
  }
});

$(function () {
  function slidersInit8() {
    $('.jp-product-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            padding: '60px',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
  }
  slidersInit8();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit8();
    });
  }
});

$(function () {
  function slidersInit9() {
    $('.jp-product-slider-2').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      dots: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            padding: '60px',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
  }
  slidersInit9();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit9();
    });
  }
});

$(function () {
  function slidersInit10() {
    $('.jp-team-slider').slick({
      slidesToShow: 4.5,
      slidesToScroll: 4,
      arrows: true,
      dots: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            padding: '60px',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
  }
  slidersInit10();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit10();
    });
  }
});

$(function () {
  function slidersInit11() {
    $('.announcement-bar').on('init', function (event, slick) {
      window.headerHeight = $('.jp-header-wrapper').height();
      // $('.jp-header-wrapper').css('height', headerHeight+'px');
    });
    
    $('.announcement-bar').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: false,
      loop: true,
      autoplaySpeed: 5000
    });
  }
  slidersInit11();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit11();
    });
  }
});

$(function () {
  function slidersInit12() {
    $('.keychain-letter-select').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      loop: false,
      rows: 0,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true
          }
        }
      ]
    });
  }
  slidersInit12();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit12();
    });
  }
});

$(function () {
  function slidersInit13() {
    $('.keychain-charm-select').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      loop: false,
      rows: 0,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true
          }
        }
      ]
    });
  }
  slidersInit13();

  if (Shopify.designMode) {
    document.addEventListener("shopify:section:load", () => {
      slidersInit13();
    });
  }
});

$(function () {
  $('.slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var $currentSlide = $(slick.$slides.get(currentSlide));
    var $video = $currentSlide.find('video');
  
    if ($video.length) {
      $video[0].pause();
    }
  });
  
  $('.slider-for').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var $currentSlide = $(slick.$slides.get(currentSlide));
    var $video = $currentSlide.find('video');
  
    if ($video.length) {
      $video[0].play();
    }
  });
});

$(function () {
  function JpSizeChartBe() {
    $('.slider-be').slick({
      dots: true,
      slidesToShow: 5.5,
      slidesToScroll: 1,
      autoplay: false,
      infinite: false,
      arrows: true,
      variableWidth: false,
      appendDots: $('.slick-slider-dots-be'),
      prevArrow: $('.prev-be'),
      nextArrow: $('.next-be'),
      responsive: [
        {
          breakpoint: 1299,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 568,
          settings: {
            variableWidth: true,
            slidesToShow: 1.1,
          },
        },
      ],
    });
  }
  JpSizeChartBe();

  if (Shopify.designMode) {
    document.addEventListener('shopify:section:load', () => {
      JpSizeChartBe();
    });
  }
});

$(function () {
  function JpSizeChartFr() {
    $('.slider-fr').slick({
      dots: true,
      slidesToShow: 5.5,
      slidesToScroll: 1,
      autoplay: false,
      infinite: false,
      arrows: true,
      variableWidth: false,
      appendDots: $('.slick-slider-dots-fr'),
      prevArrow: $('.prev-fr'),
      nextArrow: $('.next-fr'),
      responsive: [
        {
          breakpoint: 1299,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 568,
          settings: {
            variableWidth: true,
            slidesToShow: 1.1,
          },
        },
      ],
    });
  }
  JpSizeChartFr();

  if (Shopify.designMode) {
    document.addEventListener('shopify:section:load', () => {
      JpSizeChartFr();
    });
  }
});