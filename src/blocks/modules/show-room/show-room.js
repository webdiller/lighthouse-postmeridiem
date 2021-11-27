try {
  const showRoomArrowRight = document.querySelector(
    ".js-show-room-title-arrow"
  );

  const showRoomSwiper = new Swiper(".js-show-room-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        loop: false,
        draggable: false,
      },
    },
  });

  showRoomArrowRight.addEventListener("click", function (e) {
    showRoomSwiper.slideNext();
  });
} catch (error) {}
