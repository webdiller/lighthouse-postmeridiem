// Наши модели
try {
  const aboutModelsArrowRight = document.querySelector(
    ".js-about-models-title-arrow"
  );

  let slideState = {
    inited: false,
    firstInit: true,
    prev: null,
    current: null,
    next: null,
  };

  const aboutModelsSwiper = new Swiper(".js-about-models-swiper", {
    loop: true,
    slidesPerView: 1.3,
    spaceBetween: 10,
    centeredSlides: true,
    breakpoints: {
      1200: {
        loop: true,
        centeredSlides: false,
        draggable: false,
        allowTouchMove: false,
        slidesPerView: "auto",
        spaceBetween: 20,
      },
    },
    on: {
      init: (e) => {
        if (window.innerWidth >= 1201) {
          const allSlides = document.querySelectorAll(
            ".swiper-slide.about-models__slide"
          );
          for (let i = 0; i < allSlides.length; i++) {
            if (
              !allSlides[i].nextElementSibling.classList.contains(
                "swiper-slide-active"
              )
            ) {
              allSlides[i].classList.add("hide");
            } else if (
              allSlides[i].nextElementSibling.classList.contains(
                "swiper-slide-active"
              )
            ) {
              allSlides[i].classList.add("hide");
              break;
            } else {
              break;
            }
          }
        }
      },
      slideChange: (e) => {
        try {
          if (window.innerWidth >= 1201) {
            if (aboutModelsSwiper) {
              slideState.inited = true;
            }

            if (slideState.inited) {
              slideState.prev = aboutModelsSwiper.realIndex - 1;
              slideState.current = aboutModelsSwiper.realIndex;
              slideState.next = aboutModelsSwiper.realIndex + 1;
            }

            if (
              slideState.inited &&
              slideState.current >= 2 &&
              slideState.firstInit == true
            ) {
              slideState.firstInit = false;
            }

            if (!slideState.firstInit && slideState.current === 1) {
              document
                .querySelector(
                  ".swiper-slide.about-models__slide.hide.swiper-slide-active"
                )
                .classList.remove("hide");
              document
                .querySelectorAll(
                  ".swiper-slide.about-models__slide.hide:not(.swiper-slide-duplicate):not(.swiper-slide-prev)"
                )
                .forEach((item) => item.classList.remove("hide"));
            }

            const allSlides = document.querySelectorAll(
              ".swiper-slide.about-models__slide"
            );
            setTimeout(() => {
              for (let i = 0; i < allSlides.length; i++) {
                if (
                  !allSlides[i].nextElementSibling.classList.contains(
                    "swiper-slide-active"
                  )
                ) {
                  allSlides[i].classList.add("hide");
                } else if (
                  allSlides[i].nextElementSibling.classList.contains(
                    "swiper-slide-active"
                  )
                ) {
                  allSlides[i].classList.add("hide");
                  break;
                } else {
                  break;
                }
              }
            }, 10);
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
} catch (error) {
  console.log(error);
}

// Отзывы
try {
  const aboutReviewsArrowRight = document.querySelector(
    ".js-about-reviews-title-arrow"
  );
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
