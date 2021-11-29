const materialsSlider = new Swiper(".js-materials-swiper", {
  loop: true,
  slidesPerView: 1.4,
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    576: {
      slidesPerView: 2.4,
    },
    768: {
      spaceBetween: 10,
      slidesPerView: 3.4,
    },
    991: {
      spaceBetween: 20,
      slidesPerView: 3,
      centeredSlides: false,
    },
    1200: {
      spaceBetween: 20,
      draggable: false,
      centeredSlides: false,
      slidesPerView: 3,
      loop: false,
    },
  },
});
