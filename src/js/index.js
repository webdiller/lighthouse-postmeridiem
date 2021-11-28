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

