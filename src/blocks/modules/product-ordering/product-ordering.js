// Маска телефона
try {
  var element = document.querySelector(".js-imask-phone");
  var maskOptions = {
    mask: "+{7}(000)000-00-00",
  };
  var mask = IMask(element, maskOptions);
} catch (error) {}

// Проверка на самовывоз.
const forms = document.querySelectorAll(".js-form-with-validation");

try {
  if (forms.length > 0) {
    forms.forEach((form) => {
      form.addEventListener("change", function (e) {
        if (deliveryPickup.checked) {
          form.querySelector(".js-product-ordering-city").classList.add("disabled");
          form.querySelector(".js-product-ordering-street").classList.add("disabled");
          form.querySelector(".js-product-ordering-address").classList.add("disabled");
        } else if (!deliveryPickup.checked) {
          form.querySelector(".js-product-ordering-city").classList.remove("disabled");
          form.querySelector(".js-product-ordering-street").classList.remove("disabled");
          form.querySelector(".js-product-ordering-address").classList.remove("disabled");
        }
      });
    });
  }
} catch (error) {}
