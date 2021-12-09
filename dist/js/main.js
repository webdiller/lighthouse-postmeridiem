/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/about/about.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/about/about.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Наши модели
try {
  var aboutModelsArrowRight = document.querySelector(".js-about-models-title-arrow");
  var aboutModelsSwiper = new Swiper(".js-about-models-swiper", {
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
        centerInsufficientSlides: true
      }
    },
    on: {
      init: function init(e) {
        if (window.innerWidth >= 1201) {
          var allSlides = document.querySelectorAll(".swiper-slide.about-models__slide");

          for (var i = 0; i < allSlides.length; i++) {
            if (!allSlides[i].nextElementSibling.classList.contains('swiper-slide-active')) {
              allSlides[i].classList.add('hide');
            } else if (allSlides[i].nextElementSibling.classList.contains('swiper-slide-active')) {
              allSlides[i].classList.add('hide');
              break;
            } else {
              break;
            }
          }
        }
      },
      slideChange: function slideChange(e) {
        try {
          if (window.innerWidth >= 1201) {
            var countSlides = aboutModelsSwiper.slides.length;
            var activeSlide = aboutModelsSwiper.realIndex;
            var allSlides = document.querySelectorAll(".swiper-slide.about-models__slide");
            setTimeout(function () {
              for (var i = 0; i < allSlides.length; i++) {
                if (!allSlides[i].nextElementSibling.classList.contains('swiper-slide-active')) {
                  allSlides[i].classList.add('hide');
                } else if (allSlides[i].nextElementSibling.classList.contains('swiper-slide-active')) {
                  allSlides[i].classList.add('hide');
                  break;
                } else {
                  break;
                }
              }
            }, 10);
          }
        } catch (error) {}
      },
      reachBeginning: function reachBeginning() {
        console.log('reachBeginning');
      }
    }
  });
  aboutModelsArrowRight.addEventListener("click", function (e) {
    aboutModelsSwiper.slideNext();
  });
} catch (error) {} // Отзывы


try {
  var aboutReviewsArrowRight = document.querySelector(".js-about-reviews-title-arrow");
  var aboutReviewsSwiper = new Swiper(".js-about-reviews-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    breakpoints: {
      480: {
        slidesPerView: 1.5
      },
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 43
      }
    }
  });
  aboutReviewsArrowRight.addEventListener("click", function (e) {
    aboutReviewsSwiper.slideNext();
  });
} catch (error) {}

/***/ }),

/***/ "./src/blocks/modules/catalog/catalog.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/catalog/catalog.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/compilations/compilations.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/compilations/compilations.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

try {
  var complectationsArrowRight = document.querySelector(".js-compilations-title-arrow");
  var compilationsSlider = new Swiper(".js-compilations-swiper", {
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 10,
    centeredSlides: true,
    breakpoints: {
      576: {
        slidesPerView: 2.4
      },
      768: {
        spaceBetween: 10,
        slidesPerView: 3.3
      },
      991: {
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlides: false
      },
      1200: {
        spaceBetween: 20,
        centeredSlides: false,
        slidesPerView: 2.8,
        loop: false
      }
    }
  });
  complectationsArrowRight.addEventListener("click", function (e) {
    compilationsSlider.slideNext();
  });
} catch (error) {}

/***/ }),

/***/ "./src/blocks/modules/contacts/contacts.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/contacts/contacts.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/delivery-payment/delivery-payment.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/delivery-payment/delivery-payment.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/exchange/exchange.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/exchange/exchange.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var header = document.querySelector(".js-header");
var headerSearch = document.querySelector(".js-header-search");
var headerMobileSearch = document.querySelector(".js-header-item-search"); // mobile search

var headerContainer = document.querySelector(".js-header-container"); // mobile search

var headerSearchInput = document.querySelector(".js-header-search input");
var headerMenu = document.querySelector(".js-header-menu");
var headerNavigation = document.querySelector(".js-header-navigation");
var headerNavigationContainer = document.querySelector(".js-header-navigation-container");
var headerResultsNavigationContainer = document.querySelector(".js-header-results-container");
var headerResults = document.querySelector(".js-header-results");
var headerCenter = document.querySelector(".js-header-center");
var headerNavigationItemsTitle = document.querySelectorAll(".js-header-navigation-all-items .header__navigation-item_title");

try {
  headerSearch.addEventListener("click", function (e) {
    if (!e.target.parentElement.classList.contains("active")) {
      e.target.parentElement.classList.toggle("active");
      headerSearchInput.focus();
      headerResults.classList.toggle("active");

      if (window.innerWidth <= 1200) {
        headerCenter.classList.toggle("disabled");
      }
    } else {
      console.log("search");
    }
  });
  headerMenu.addEventListener("click", function (e) {
    e.target.classList.toggle("active");
    document.querySelector("html").classList.toggle("disable-scroll");
    headerNavigation.classList.toggle("active");
  });
  headerNavigationItemsTitle.forEach(function (item) {
    if (window.innerWidth <= 991) {
      try {
        item.addEventListener("click", function (e) {
          item.classList.toggle("active");
        });
      } catch (error) {}
    }
  });
  headerMobileSearch.addEventListener("click", function (e) {
    headerResults.classList.toggle("active");
    document.querySelector("html").classList.toggle("disable-scroll");
  });
} catch (error) {} // Меню адаптивность


try {
  if (window.innerWidth >= 1360) {
    headerNavigationContainer.style.marginLeft = "".concat(headerContainer.offsetLeft, "px");
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1360) {
      var offsetContainer = headerContainer.offsetLeft;
      headerNavigationContainer.style.marginLeft = "".concat(offsetContainer, "px");
    }
  });
} catch (error) {} // Поиск адаптивность


try {
  if (window.innerWidth >= 1360) {
    headerResultsNavigationContainer.style.marginLeft = "".concat(headerContainer.offsetLeft, "px");
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1360) {
      var offsetContainer = headerContainer.offsetLeft;
      headerResultsNavigationContainer.style.marginLeft = "".concat(offsetContainer, "px");
    }
  });
} catch (error) {}

try {
  window.addEventListener("scroll", function (e) {
    var topOffset = document.querySelector("html").getBoundingClientRect().top;

    if (topOffset <= -28) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
} catch (error) {}

try {
  var topOffset = document.querySelector("html").getBoundingClientRect().top;

  if (topOffset <= -28) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
} catch (error) {}

/***/ }),

/***/ "./src/blocks/modules/large-slider/large-slider.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/large-slider/large-slider.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

try {
  var largeSlider = new Swiper(".js-large-slider-swiper", {
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
      nextEl: ".large-slider__swiper-wrapper .large-slider__navigation-item_next",
      prevEl: ".large-slider__swiper-wrapper .large-slider__navigation-item_prev"
    },
    breakpoints: {
      576: {
        slidesPerView: 2.4
      },
      768: {
        spaceBetween: 10,
        slidesPerView: 3.4
      },
      991: {
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlides: false
      }
    }
  });
} catch (error) {}

/***/ }),

/***/ "./src/blocks/modules/materials/materials.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/materials/materials.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var materialsSlider = new Swiper(".js-materials-swiper", {
  loop: true,
  slidesPerView: 1.32,
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    576: {
      slidesPerView: 2.4
    },
    768: {
      spaceBetween: 10,
      slidesPerView: 3.4
    },
    991: {
      spaceBetween: 20,
      slidesPerView: 3,
      centeredSlides: false
    },
    1200: {
      spaceBetween: 20,
      draggable: false,
      centeredSlides: false,
      slidesPerView: 3,
      loop: false
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/modal-get-callback/modal-get-callback.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/modules/modal-get-callback/modal-get-callback.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

try {
  var modalGetCallback = document.querySelector(".js-modal-get-callback");
  var modalGetCallbackCloseButton = document.querySelector(".js-modal-get-callback-close-btn");
  modalGetCallbackCloseButton.addEventListener("click", function (e) {
    modalGetCallback.classList.remove("active");
    console.log(1);
  });
  modalGetCallback.addEventListener("click", function (e) {
    if (e.target === modalGetCallback) {
      modalGetCallback.classList.remove("active");
    }
  });
} catch (error) {
  console.log(error);
}

/***/ }),

/***/ "./src/blocks/modules/modal-get-discount/modal-get-discount.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/modules/modal-get-discount/modal-get-discount.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

try {
  var modalGetDiscount = document.querySelector(".js-modal-get-discount");
  var modalGetDiscountCloseButton = document.querySelector(".js-modal-get-discount-close-btn");
  modalGetDiscountCloseButton.addEventListener("click", function (e) {
    modalGetDiscount.classList.remove("active");
  });
  modalGetDiscount.addEventListener("click", function (e) {
    if (e.target === modalGetDiscount) {
      modalGetDiscount.classList.remove("active");
    }
  });
} catch (error) {}

/***/ }),

/***/ "./src/blocks/modules/modal-product-added/modal-product-added.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/modules/modal-product-added/modal-product-added.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

try {
  var addProductToUserCartButtons = document.querySelectorAll("[data-type='addProductToUserCart']");
  var modalProductAdded = document.querySelector(".js-modal-product-added");
  var modalProductAddedCloseButton = document.querySelector(".js-modal-product-added-close-btn");

  if (addProductToUserCartButtons.length > 0) {
    addProductToUserCartButtons.forEach(function (item) {
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

/***/ }),

/***/ "./src/blocks/modules/preorder/preorder.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/preorder/preorder.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/product-card/product-card.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/product-card/product-card.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

try {
  var productCardSwiper = null;
  var sizes = document.querySelector(".js-product-card-tabs");

  if (window.innerWidth <= 768) {
    new Swiper(".js-product-card-swiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      draggable: false,
      pagination: {
        el: '.js-product-card-swiper + .swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    }), _readOnlyError("productCardSwiper");
  }
} catch (error) {}

/***/ }),

/***/ "./src/blocks/modules/product-ordering/product-ordering.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/product-ordering/product-ordering.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Маска телефона
try {
  var element = document.querySelector(".js-imask-phone");
  var maskOptions = {
    mask: "+{7}(000)000-00-00"
  };
  var mask = IMask(element, maskOptions);
} catch (error) {} // Проверка на самовывоз.


var forms = document.querySelectorAll(".js-form-with-validation");

try {
  if (forms.length > 0) {
    forms.forEach(function (form) {
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

/***/ }),

/***/ "./src/blocks/modules/qan/qan.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/qan/qan.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var questionsDesktop = document.querySelectorAll(".js-qan-desktop [data-question]");
var answersDesktop = document.querySelectorAll(".js-qan-desktop [data-answer]");

var resetClasses = function resetClasses(selector) {
  selector.forEach(function (el) {
    return el.classList.remove('active');
  });
};

if (questionsDesktop.length > 0) {
  questionsDesktop.forEach(function (question) {
    question.addEventListener('click', function (e) {
      var questionId = question.dataset.question;
      resetClasses(questionsDesktop);
      resetClasses(answersDesktop);
      e.target.classList.add('active');
      document.querySelector(".js-qan-desktop [data-answer='".concat(questionId, "']")).classList.add('active');
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/show-room/show-room.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/show-room/show-room.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

try {
  var showRoomArrowRight = document.querySelector(".js-show-room-title-arrow");
  var showRoomSwiper = new Swiper(".js-show-room-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        loop: false,
        draggable: false
      }
    }
  });
  showRoomArrowRight.addEventListener("click", function (e) {
    showRoomSwiper.slideNext();
  });
} catch (error) {}

/***/ }),

/***/ "./src/blocks/modules/user-cart/user-cart.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/user-cart/user-cart.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/welcome/welcome.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/welcome/welcome.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

try {
  var welcomeSwiper = new Swiper(".js-welcome-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    }
  });
} catch (error) {}

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_welcome_welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/welcome/welcome */ "./src/blocks/modules/welcome/welcome.js");
/* harmony import */ var _modules_welcome_welcome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_welcome_welcome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_preorder_preorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/preorder/preorder */ "./src/blocks/modules/preorder/preorder.js");
/* harmony import */ var _modules_preorder_preorder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_preorder_preorder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_large_slider_large_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/large-slider/large-slider */ "./src/blocks/modules/large-slider/large-slider.js");
/* harmony import */ var _modules_large_slider_large_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_large_slider_large_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_materials_materials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/materials/materials */ "./src/blocks/modules/materials/materials.js");
/* harmony import */ var _modules_materials_materials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_materials_materials__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_compilations_compilations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/compilations/compilations */ "./src/blocks/modules/compilations/compilations.js");
/* harmony import */ var _modules_compilations_compilations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_compilations_compilations__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_show_room_show_room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/show-room/show-room */ "./src/blocks/modules/show-room/show-room.js");
/* harmony import */ var _modules_show_room_show_room__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_show_room_show_room__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_product_card_product_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/product-card/product-card */ "./src/blocks/modules/product-card/product-card.js");
/* harmony import */ var _modules_product_card_product_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_product_card_product_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_product_ordering_product_ordering__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/product-ordering/product-ordering */ "./src/blocks/modules/product-ordering/product-ordering.js");
/* harmony import */ var _modules_product_ordering_product_ordering__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_product_ordering_product_ordering__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_user_cart_user_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/user-cart/user-cart */ "./src/blocks/modules/user-cart/user-cart.js");
/* harmony import */ var _modules_user_cart_user_cart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_user_cart_user_cart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/catalog/catalog */ "./src/blocks/modules/catalog/catalog.js");
/* harmony import */ var _modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/about/about */ "./src/blocks/modules/about/about.js");
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_about_about__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/contacts/contacts */ "./src/blocks/modules/contacts/contacts.js");
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_qan_qan__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/qan/qan */ "./src/blocks/modules/qan/qan.js");
/* harmony import */ var _modules_qan_qan__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_qan_qan__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_exchange_exchange__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/exchange/exchange */ "./src/blocks/modules/exchange/exchange.js");
/* harmony import */ var _modules_exchange_exchange__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_exchange_exchange__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_delivery_payment_delivery_payment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/delivery-payment/delivery-payment */ "./src/blocks/modules/delivery-payment/delivery-payment.js");
/* harmony import */ var _modules_delivery_payment_delivery_payment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_delivery_payment_delivery_payment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_modal_product_added_modal_product_added__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/modal-product-added/modal-product-added */ "./src/blocks/modules/modal-product-added/modal-product-added.js");
/* harmony import */ var _modules_modal_product_added_modal_product_added__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_product_added_modal_product_added__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modules_modal_get_discount_modal_get_discount__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/modal-get-discount/modal-get-discount */ "./src/blocks/modules/modal-get-discount/modal-get-discount.js");
/* harmony import */ var _modules_modal_get_discount_modal_get_discount__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_get_discount_modal_get_discount__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _modules_modal_get_callback_modal_get_callback__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/modal-get-callback/modal-get-callback */ "./src/blocks/modules/modal-get-callback/modal-get-callback.js");
/* harmony import */ var _modules_modal_get_callback_modal_get_callback__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_get_callback_modal_get_callback__WEBPACK_IMPORTED_MODULE_18__);




















/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);

 // Кастомные инпуты

var uiInputs = document.querySelectorAll(".ui-input3 .ui-input3__input");

try {
  if (uiInputs.length > 0) {
    uiInputs.forEach(function (item) {
      item.addEventListener("input", function (e) {
        if (e.target.value.length > 0) {
          e.target.classList.add("has-value");
        } else {
          e.target.classList.remove("has-value");
        }
      });
    });
  }
} catch (error) {} // Вызвать модалку обратного звонка


var getCallbackButtons = document.querySelectorAll('.js-get-callback-button');

try {
  if (getCallbackButtons.length > 0) {
    getCallbackButtons.forEach(function (item) {
      item.addEventListener("click", function (e) {
        document.querySelector('.js-modal-get-callback').classList.add('active');
      });
    });
  }
} catch (error) {} // Автоматически показать модалку со скидкой


if (window.location.pathname.includes("catalog")) {
  setTimeout(function () {
    document.querySelector(".js-modal-get-discount").classList.add("active");
  }, 2000);
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map