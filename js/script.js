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

  $(".favorite-icon").on("click", function () {
    $(this).addClass("remove");
  });

  $(".favorite-icon2").on("click", function () {
    $(this).addClass("add");
  });

  $(".favorite-icon3").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("add");
  });

  $(".load-more").on("click", function () {
    $(".news-items .news-item").removeClass("hide");
  });

  $(".accordion-list-item .item-heading").on("click", function (e) {
    e.preventDefault();
    if ($(this).find("span").hasClass("minus")) {
      $(this).find("span").removeClass("minus");
    } else {
      $(".accordion-list-item span").removeClass("minus");
      $(this).find("span").addClass("minus");
    }
    $(".accordion-list-item").removeClass("opened");
    $(".item-body").removeClass("active");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body")
      .addClass("active");
    $(this).closest(".accordion-list-item").addClass("opened");
    $(".item-body:not(.active)").slideUp();
    $(".accordion-list-item:not(.opened)").removeClass("active");
    $(this).closest(".accordion-list-item").find(".item-body").slideToggle();
    $(this).closest(".accordion-list-item").toggleClass("active");
  });

  $(".tabs-menu > li a").on("click", function (e) {
    e.preventDefault();
    $(".tabs-menu > li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-wrap .tab-content").removeClass("active");
    $(".tab-content-wrap .tab-content").eq(index).addClass("active");

    var selectedTab = $(this).closest("li").data("index");

    $("#tab-select").val(selectedTab);
    $("#tab-select").trigger("change");
  });

  $("#tab-select").on("change", function (e) {
    var selectedTab = $(this).val();
    var index = parseInt($(this).val()) - 1;

    $(".tabs-menu > li").removeClass("active");
    $(".tabs-menu > li").eq(index).addClass("active");
    $(".tab-content-wrap .tab-content").removeClass("active");
    $(".tab-content-wrap .tab-content").eq(index).addClass("active");
  });

  $(".section-container .sections").on("click", function () {
    $(".section-container .sections").removeClass("active");
    $(this).addClass("active");
  });

  $(".links button").hover(function () {
    $(".links button").removeClass("active");
    $(this).addClass("active");
    var value = $(this).attr("data-src");
    $(".hover-img-wrap img").attr("src", value);
  });

  gsap.to(".text-animate svg", {
    scale: 72,
    duration: 4,
    x: "-80vw",
    scrollTrigger: {
      scrub: -1,
      start: "top top",
      end: "bottom",
      pin: ".text-animate",
    },
    onComplete: function () {
      $(".gsap-wrapper").addClass("hidden");
      $(".animate-wrap").addClass("visible");
      // $(".header").removeClass("fix");
    },
    onUpdate: function () {
      if ($(".gsap-wrapper").hasClass("hidden")) {
        $(".gsap-wrapper").removeClass("hidden");
        $(".animate-wrap").removeClass("visible");
        // $(".header").addClass("fix");
      }
    },
  });

  $(window).scroll(function () {
    var sticky = $(".header.fixed"),
      scroll = $(window).scrollTop();

    if (scroll >= 10) sticky.removeClass("fix");
    else sticky.addClass("fix");
  });

  // const main = document.querySelector(".main");

  // gsap.to(".animate-wrap .info1", {
  //   x: "0",
  //   scale: 0.5,
  //   opacity: 0,
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: ".info1",
  //     scrub: -1,
  //     start: "top top",
  //     end: () => main.offsetWidth / 2,
  //   },
  // });

  // gsap.to(".animate-wrap .info2", {
  //   x: "0",
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: ".info1",
  //     scrub: -1,
  //     start: "center top",
  //     end: () => main.offsetWidth / 2,
  //     pin: true,
  //   },
  // });

  // gsap.to(".animate-wrap .info3", {
  //   x: "0",
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: ".info2",
  //     scrub: -1,
  //     start: "center top",
  //     end: () => main.offsetWidth / 2,
  //     pin: true,
  //   },
  // });

  // gsap.to(".animate-wrap .info4", {
  //   x: "0",
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: ".info3",
  //     scrub: -1,
  //     start: "center top",
  //     end: () => main.offsetWidth / 2,
  //     pin: true,
  //   },
  // });

  $(window)
    .scroll(function () {
      // selectors
      var $window = $(window),
        $body = $(".infos-wrap"),
        $panel = $(".info");

      // Change 33% earlier than scroll position so colour is there when you arrive.
      var scroll = $window.scrollTop() + $window.height() / 3;

      $panel.each(function () {
        var $this = $(this);

        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if (
          $this.position().top <= scroll &&
          $this.position().top + $this.height() > scroll
        ) {
          // Remove all classes on body with color-
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
          });

          // Add class of currently active div
          $body.addClass("color-" + $(this).data("color"));
        }
      });
    })
    .scroll();

  AOS.init();
});
