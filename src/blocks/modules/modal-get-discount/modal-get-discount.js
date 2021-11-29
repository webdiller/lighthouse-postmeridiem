try {
    const modalGetDiscount = document.querySelector(".js-modal-get-discount");
    const modalGetDiscountCloseButton = document.querySelector(".js-modal-get-discount-close-btn");
  
    modalGetDiscountCloseButton.addEventListener("click", function (e) {
        modalGetDiscount.classList.remove("active");
    });

    modalGetDiscount.addEventListener("click", function (e) {
        if (e.target === modalGetDiscount) {
            modalGetDiscount.classList.remove("active");
        }
      });
  
  } catch (error) {}