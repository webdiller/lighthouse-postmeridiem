// Наши модели
try {
  const aboutModelsArrowRight = document.querySelector(
    ".js-about-models-title-arrow"
  );

  const aboutModelsSwiper = new Swiper(".js-about-models-swiper", {
    loop: true,
    slidesPerView: 1.3,
    spaceBetween: 10,
    breakpoints: {
      1200: {
        centeredSlides: false,
        draggable: false,
        allowTouchMove: false,
        slidesPerView: "auto",
        spaceBetween: 20,
        centerInsufficientSlides:true,
      },
    },
    on: {
      init: (e) => {
        if (window.innerWidth >= 1201) {
          const allSlides = document.querySelectorAll(".swiper-slide.about-models__slide");
          for (let i = 0; i < allSlides.length; i++) {
            if (!allSlides[i].nextElementSibling.classList.contains('swiper-slide-active')) {
              allSlides[i].classList.add('hide')
            } else if (allSlides[i].nextElementSibling.classList.contains('swiper-slide-active')) {
              allSlides[i].classList.add('hide')
              break
            } else {
              break
            }
          }
        }
      },
      slideChange: (e) => {
        try {
          if (window.innerWidth >= 1201) {
            let countSlides = aboutModelsSwiper.slides.length;
            let activeSlide = aboutModelsSwiper.realIndex;
            const allSlides = document.querySelectorAll(".swiper-slide.about-models__slide");
            setTimeout(() => {
              for (let i = 0; i < allSlides.length; i++) {
                if (!allSlides[i].nextElementSibling.classList.contains('swiper-slide-active')) {
                  allSlides[i].classList.add('hide')
                } else if (allSlides[i].nextElementSibling.classList.contains('swiper-slide-active')) {
                  allSlides[i].classList.add('hide')
                  break
                } else {
                  break
                }
              }
            }, 10);
          }
        } catch (error) {}
      },
      reachBeginning: () => {
        console.log('reachBeginning');
      }
    },
  });
  aboutModelsArrowRight.addEventListener("click", function (e) {
    aboutModelsSwiper.slideNext();
  });
} catch (error) {}

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
