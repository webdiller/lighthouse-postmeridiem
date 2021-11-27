try {
  const productCardSwiper = null;
  const sizes = document.querySelector(".js-product-card-tabs");

  if (window.innerWidth <= 768) {
    productCardSwiper = new Swiper(".js-product-card-swiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      draggable: false,
    });
  }
} catch (error) {}
