// Маска телефона
try {
  var element = document.querySelector(".js-imask-phone");
  var maskOptions = {
    mask: "+{7}(000)000-00-00",
  };
  var mask = IMask(element, maskOptions);
} catch (error) { }
