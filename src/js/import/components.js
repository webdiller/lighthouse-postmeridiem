const complectationsSwiper = new Swiper(".js-compilations-swiper", {
  loop: true,
  slidesPerView: 1.4,
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    576: {
      slidesPerView: 2.4,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 3.4,
    },
    991: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    1200: {
      draggable: true,
      centeredSlides: false,
      slidesPerView: 3,
      loop: true,
    },
  },
});
