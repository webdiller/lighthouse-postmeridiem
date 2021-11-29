try {
  const aboutReviewsArrowRight = document.querySelector(
    ".js-about-reviews-title-arrow"
  );
  const aboutReviewsSwiper = new Swiper(".js-about-reviews-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 43,
      },
    },
  });
  aboutReviewsArrowRight.addEventListener("click", function (e) {
    aboutReviewsSwiper.slideNext();
  });
} catch (error) {}
