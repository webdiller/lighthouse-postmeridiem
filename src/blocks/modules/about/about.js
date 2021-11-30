// Наши модели
try {
  const aboutModelsArrowRight = document.querySelector( ".js-about-models-title-arrow");

  const aboutModelsSwiper = new Swiper(".js-about-models-swiper", {
    loop: true,
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 10,
    breakpoints: {
      1200: {
        centeredSlides: false,
        loop: false,
        draggable: false,
        allowTouchMove: false,
        slidesPerView: "auto",
        spaceBetween: 20,
      },
    },
    on: {
      slideChange: (e) => {
        try {
          if (window.innerWidth >= 1201) {
            let countSlides = aboutModelsSwiper.slides.length;
            let activeSlide = aboutModelsSwiper.realIndex;
            const allSlides = document.querySelectorAll(".swiper-slide.about-models__slide");
            allSlides.forEach((el) => {
              const labelIndex = parseInt( el.getAttribute("aria-label").split("/")[0]);
              if (labelIndex - 1 < activeSlide) {
                el.classList.add("hide");
              } else {
                el.classList.remove("hide");
              }

              if (activeSlide + 2 == countSlides) {
                aboutModelsSwiper.slideTo(0);
                allSlides.forEach(slide=>slide.classList.remove('hide'))
              }
            });
          }
        } catch (error) {}

        try {
          if (window.innerWidth <= 1200) {
            setTimeout(() => {
              document
                .querySelectorAll(".swiper-slide.about-models__slide")
                .forEach((el) => el.classList.remove("to-lift"));
              document
                .querySelector(
                  ".swiper-slide.about-models__slide.swiper-slide-prev"
                )
                .classList.add("to-lift");
              document
                .querySelector(
                  ".swiper-slide.about-models__slide.swiper-slide-next"
                )
                .classList.add("to-lift");
            }, 100);
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  });
  aboutModelsArrowRight.addEventListener("click", function (e) {
    aboutModelsSwiper.slideNext();
  });
} catch (error) {}

// Отзывы
try {
  const aboutReviewsArrowRight = document.querySelector(".js-about-reviews-title-arrow");
  const aboutReviewsSwiper = new Swiper(".js-about-reviews-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    breakpoints: {
      480: {
        slidesPerView: 1.5,
      },
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
