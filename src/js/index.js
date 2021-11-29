import "./import/modules";
import "./import/components";

const uiInputs = document.querySelectorAll(".ui-input3 .ui-input3__input");
if (uiInputs.length > 0) {
  uiInputs.forEach((item) => {
    item.addEventListener("change", function (e) {
      if (e.target.value.length > 0) {
        e.target.classList.add("has-value");
      } else {
        e.target.classList.remove("has-value");
      }
    });
  });
}

try {
  const addProductToUserCartButtons = document.querySelectorAll("[data-type='addProductToUserCart']");
  const modalProductAdded = document.querySelector(".js-modal-product-added");
  const modalProductAddedCloseButton = document.querySelector(".js-modal-product-added-close-btn");

  if (addProductToUserCartButtons.length > 0) {
    addProductToUserCartButtons.forEach((item) => {
      item.addEventListener("click", function (e) {
        modalProductAdded.classList.add("active");
      });
    });
  }

  modalProductAdded.addEventListener("click", function (e) {
    if (e.target === modalProductAdded) {
      modalProductAdded.classList.remove("active");
    } else if (e.target === modalProductAddedCloseButton) {
      modalProductAdded.classList.remove("active");
    }
  });

} catch (error) {}
