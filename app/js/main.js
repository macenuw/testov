$(function () {
  $('.select').styler();
  $('.recently__slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: 50,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
})