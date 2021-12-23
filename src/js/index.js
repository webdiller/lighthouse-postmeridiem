import "./import/modules";
import "./import/components";

// Кастомные инпуты
const uiInputs = document.querySelectorAll(".ui-input3 .ui-input3__input");
try {
  if (uiInputs.length > 0) {
    uiInputs.forEach((item) => {
      item.addEventListener("input", function (e) {
        if (e.target.value.length > 0) {
          e.target.classList.add("has-value");
        } else {
          e.target.classList.remove("has-value");
        }
      });
    });
  }
} catch (error) {
}

// Вызвать модалку обратного звонка
const getCallbackButtons = document.querySelectorAll('.js-get-callback-button');
try {
  if(getCallbackButtons.length > 0) {
    getCallbackButtons.forEach(item=> {
      item.addEventListener("click", function (e) {
        document.querySelector('.js-modal-get-callback').classList.add('active')
      })
    })
  }
} catch (error) {
  
}

// Автоматически показать модалку со скидкой
if (window.location.pathname.includes("catalog")) {
  setTimeout(() => {
    document.querySelector(".js-modal-get-discount").classList.add("active");
  }, 2000);
}

// Переключение языка
window.selectLang = (lang) => {
  let appendLang = (lang == 'en' ? 'en' : 'ru');
  BX.setCookie('postLang', (appendLang), {
      'path': '/'
  });
  let urlParams = new URLSearchParams(window.location.search);
  urlParams.set('lang', appendLang);
  window.location.search = urlParams.toString();
}
