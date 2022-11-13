$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    rtl: true,
    nav: true,
    autoplay: true,
    margin: 10,
    smartSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});
