$(document).ready(function () {
  $(".info-slider").slick({
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          dots: true,
          arrows: false,
          infinite: false,
          variableWidth: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 501,
        settings: {
          dots: true,
          arrows: false,
          infinite: false,
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });
  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".main-menu li button").on("click", function () {
    $(this).closest("li").find(".sub-menu").toggleClass("open");
  });

  $bannerSlider = false;
  function slider() {
    if ($(window).width() < 1025) {
      if (!$bannerSlider) {
        $(".banner-slider").slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 501,
              settings: {
                dots: true,
                arrows: false,
                infinite: false,
                variableWidth: false,
                slidesToShow: 1,
              },
            },
          ],
        });
        $bannerSlider = true;
      }
    } else if ($(window).width() > 1025) {
      if ($bannerSlider) {
        $(".banner-slider").slick("unslick");
        $bannerSlider = false;
      }
    }
  }

  slider();

  $(window).on("resize", function () {
    slider();
  });

  $newsIn = false;
  function slider2() {
    if ($(window).width() < 1025) {
      if (!$newsIn) {
        $(".news-in-slider").slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 501,
              settings: {
                dots: true,
                arrows: false,
                infinite: false,
                variableWidth: false,
                slidesToShow: 1,
              },
            },
          ],
        });
        $newsIn = true;
      }
    } else if ($(window).width() > 1025) {
      if ($newsIn) {
        $(".news-in-slider").slick("unslick");
        $newsIn = false;
      }
    }
  }

  slider2();

  $(window).on("resize", function () {
    slider2();
  });

  $news = false;
  function slider3() {
    if ($(window).width() < 1025) {
      if (!$news) {
        $(".news-slider").slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 501,
              settings: {
                dots: true,
                arrows: false,
                infinite: false,
                variableWidth: false,
                slidesToShow: 1,
              },
            },
          ],
        });
        $news = true;
      }
    } else if ($(window).width() > 1025) {
      if ($news) {
        $(".news-slider").slick("unslick");
        $news = false;
      }
    }
  }

  slider3();

  $(window).on("resize", function () {
    slider3();
  });

  $(".drop-menu").on("click", function () {
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(".okey").on("click", function () {
    $(".fixed-block").addClass("hide");
    $("body, html").css({ overflow: "visible" });
  });

  $(".tab-menu li button").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-item").removeClass("active");
    $(".tab-content-item").eq(index).addClass("active");
  });

  AOS.init();
});
