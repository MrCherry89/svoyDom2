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

  $(".main-menu li").on("click", function (e) {
    e.preventDefault();
    $(this).find(".sub-menu").toggleClass("open");
  });

  $slickGreen = false;
  function greenSlider() {
    if ($(window).width() < 1025) {
      if (!$slickGreen) {
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
        $slickGreen = true;
      }
    } else if ($(window).width() > 1025) {
      if ($slickGreen) {
        $(".banner-slider").slick("unslick");
        $slickGreen = false;
      }
    }
  }

  greenSlider();

  $(window).on("resize", function () {
    greenSlider();
  });

  $(document).ready(function () {
    // RangeSlider 1 - start
    var rangeSlider_1 = document.getElementById("range-slider-1");
    var input1_1 = document.getElementById("input1-1");
    var input1_2 = document.getElementById("input1-2");
    var inputs_1 = [input1_1, input1_2];

    noUiSlider.create(rangeSlider_1, {
      start: [0, 200],
      connect: true,
      range: {
        min: 0,
        max: 200,
      },
      format: {
        to: (v) => v | 0,
        from: (v) => v | 0,
      },
    });

    rangeSlider_1.noUiSlider.on("update", function (values, handle) {
      inputs_1[handle].value = values[handle];
    });

    inputs_1.forEach(function (input, handle) {
      input.addEventListener("change", function () {
        rangeSlider_1.noUiSlider.setHandle(handle, this.value);
      });
    });
    // RangeSlider 1 - end

    // RangeSlider 2 - start
    var rangeSlider_2 = document.getElementById("range-slider-2");
    var input2_1 = document.getElementById("input2-1");
    var input2_2 = document.getElementById("input2-2");
    var inputs_2 = [input2_1, input2_2];

    noUiSlider.create(rangeSlider_2, {
      start: [0, 1000000],
      connect: true,
      range: {
        min: 0,
        max: 1000000,
      },
      format: {
        to: (v) => v | 0,
        from: (v) => v | 0,
      },
    });

    rangeSlider_2.noUiSlider.on("update", function (values, handle) {
      inputs_2[handle].value = values[handle];
    });

    inputs_2.forEach(function (input, handle) {
      input.addEventListener("change", function () {
        rangeSlider_2.noUiSlider.setHandle(handle, this.value);
      });
    });
    // RangeSlider 2 - end
  });

  $(".drop-menu").on("click", function () {
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(".okey").on("click", function () {
    $(".fixed-block").addClass("hide");
    $("body, html").css({ overflow: "visible" });
  });

  AOS.init();
});
