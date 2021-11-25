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

/***/ "./src/blocks/modules/compilations/compilations.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/compilations/compilations.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
      spaceBetween: 20,
      slidesPerView: 3.3
    },
    991: {
      slidesPerView: 3,
      centeredSlides: false
    },
    1200: {
      centeredSlides: false,
      slidesPerView: 2.8,
      loop: false
    }
  }
});
complectationsArrowRight.addEventListener('click', function (e) {
  compilationsSlider.slideNext();
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var headerSearch = document.querySelector(".js-header-search");
var headerMobileSearch = document.querySelector(".js-header-item-search"); // mobile search

var headerSearchInput = document.querySelector(".js-header-search input");
var headerMenu = document.querySelector(".js-header-menu");
var headerNavigation = document.querySelector(".js-header-navigation");
var headerResults = document.querySelector(".js-header-results");
var headerCenter = document.querySelector(".js-header-center");
var headerNavigationItemsTitle = document.querySelectorAll(".js-header-navigation-all-items .header__navigation-item_title");
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
  headerNavigation.classList.toggle("active");
});
headerNavigationItemsTitle.forEach(function (item) {
  if (window.innerWidth <= 768) {
    try {
      item.addEventListener("click", function (e) {
        item.classList.toggle("active");
      });
    } catch (error) {}
  }
});
headerMobileSearch.addEventListener("click", function (e) {
  headerResults.classList.toggle("active");
});

/***/ }),

/***/ "./src/blocks/modules/large-slider/large-slider.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/large-slider/large-slider.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
      spaceBetween: 20,
      slidesPerView: 3.4
    },
    991: {
      slidesPerView: 3,
      centeredSlides: false
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/materials/materials.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/materials/materials.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var materialsSlider = new Swiper(".js-materials-swiper", {
  loop: true,
  slidesPerView: 1.4,
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    576: {
      slidesPerView: 2.4
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 3.4
    },
    991: {
      slidesPerView: 3,
      centeredSlides: false
    },
    1200: {
      draggable: false,
      centeredSlides: false,
      slidesPerView: 3,
      loop: false
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/show-room/show-room.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/show-room/show-room.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
showRoomArrowRight.addEventListener('click', function (e) {
  showRoomSwiper.slideNext();
});

/***/ }),

/***/ "./src/blocks/modules/welcome/welcome.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/welcome/welcome.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/* harmony import */ var _modules_large_slider_large_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/large-slider/large-slider */ "./src/blocks/modules/large-slider/large-slider.js");
/* harmony import */ var _modules_large_slider_large_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_large_slider_large_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_materials_materials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/materials/materials */ "./src/blocks/modules/materials/materials.js");
/* harmony import */ var _modules_materials_materials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_materials_materials__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_compilations_compilations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/compilations/compilations */ "./src/blocks/modules/compilations/compilations.js");
/* harmony import */ var _modules_compilations_compilations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_compilations_compilations__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_show_room_show_room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/show-room/show-room */ "./src/blocks/modules/show-room/show-room.js");
/* harmony import */ var _modules_show_room_show_room__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_show_room_show_room__WEBPACK_IMPORTED_MODULE_5__);







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



/***/ })

/******/ });
//# sourceMappingURL=main.js.map