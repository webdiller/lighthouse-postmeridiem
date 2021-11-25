const complectationsArrowRight = document.querySelector(".js-compilations-title-arrow");

const compilationsSlider = new Swiper(".js-compilations-swiper", {
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
      slidesPerView: 3.3,
    },
    991: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    1200: {
      centeredSlides: false,
      slidesPerView: 2.8,
      loop: false,
    },
  },
});

complectationsArrowRight.addEventListener('click', function (e) {
  compilationsSlider.slideNext();
})
