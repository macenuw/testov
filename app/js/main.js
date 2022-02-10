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
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          centerPadding: 50,
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $(".user__item-mob--search").on("click", function () {
    $(".header-mob__search-inner").toggleClass("active");
  })
  $(".header-mob__search-btn-close").on("click", function () {
    $(".header-mob__search-inner").removeClass("active");
  })
  $(".header-mob__menu-item--company").on("click", function () {
    $(".header-mob__menu-item--company").toggleClass("active");
  })
  $(".header-mob__btn").on("click", function () {
    $(".header-mob__btn").toggleClass("active");
    $(".header-mob__menu").toggleClass("active");
  })
  $(".filter__title").on("click", function () {
    $(".filter").toggleClass("active");
  })
})