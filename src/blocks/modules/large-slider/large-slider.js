try {
  const largeSlider = new Swiper(".js-large-slider-swiper", {
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
      nextEl:
        ".large-slider__swiper-wrapper .large-slider__navigation-item_next",
      prevEl:
        ".large-slider__swiper-wrapper .large-slider__navigation-item_prev",
    },
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
    },
  });
} catch (error) {}
