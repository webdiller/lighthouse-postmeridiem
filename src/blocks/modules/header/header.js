const header = document.querySelector(".js-header");
const headerMessage = document.querySelector(".js-header-message");
const headerSearch = document.querySelector(".js-header-search");
const headerMobileSearch = document.querySelector(".js-header-item-search"); // mobile search
const headerContainer = document.querySelector(".js-header-container"); // mobile search

const headerSearchInput = document.querySelector(".js-header-search input");

const headerMenu = document.querySelector(".js-header-menu");
const headerNavigation = document.querySelector(".js-header-navigation");
const headerNavigationContainer = document.querySelector(
  ".js-header-navigation-container"
);
const headerResultsNavigationContainer = document.querySelector(
  ".js-header-results-container"
);

const headerResults = document.querySelector(".js-header-results");

const headerCenter = document.querySelector(".js-header-center");
const headerNavigationItemsTitle = document.querySelectorAll(
  ".js-header-navigation-all-items .header__navigation-item_title"
);

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

  headerNavigationItemsTitle.forEach((item) => {
    try {
      item.addEventListener("click", function (e) {
        if (window.innerWidth <= 991) {
          item.classList.toggle("active");
        }
      });
    } catch (error) {}
    
  });

  headerMobileSearch.addEventListener("click", function (e) {
    headerResults.classList.toggle("active");
    document.querySelector("html").classList.toggle("disable-scroll");
  });
} catch (error) {}

// ???????? ????????????????????????
try {
  if (window.innerWidth >= 1360) {
    headerNavigationContainer.style.marginLeft = `${headerContainer.offsetLeft}px`;
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1360) {
      let offsetContainer = headerContainer.offsetLeft;
      headerNavigationContainer.style.marginLeft = `${offsetContainer}px`;
    }
  });
} catch (error) {}

// ?????????? ????????????????????????
try {
  if (window.innerWidth >= 1360) {
    headerResultsNavigationContainer.style.marginLeft = `${headerContainer.offsetLeft}px`;
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1360) {
      let offsetContainer = headerContainer.offsetLeft;
      headerResultsNavigationContainer.style.marginLeft = `${offsetContainer}px`;
    }
  });
} catch (error) {}

try {
  window.addEventListener("scroll", function (e) {
    let topOffset = document.querySelector("html").getBoundingClientRect().top;
    if (topOffset <= -28) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
} catch (error) { }

try {
  window.addEventListener("scroll", function (e) {
    let topOffset = document.querySelector("html").getBoundingClientRect().top;
    if (topOffset <= -28) {
      headerMessage.classList.add("fixed");
    } else {
      headerMessage.classList.remove("fixed");
    }
  });
} catch (error) { }

try {
  let topOffset = document.querySelector("html").getBoundingClientRect().top;
  if (topOffset <= -28) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
} catch (error) {}
