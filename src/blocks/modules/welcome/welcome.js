try {
  const welcomeSwiper = new Swiper(".js-welcome-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
} catch (error) {}
