const headerSearch = document.querySelector(".js-header-search");
const headerSearchInput = document.querySelector(".js-header-search input");

const headerMenu = document.querySelector(".js-header-menu");
const headerNavigation = document.querySelector(".js-header-navigation");

headerSearch.addEventListener("click", function (e) {
  if (!e.target.parentElement.classList.contains("active")) {
    e.target.parentElement.classList.toggle("active");
    headerSearchInput.focus();
  } else {
    console.log("search");
  }
});

headerMenu.addEventListener("click", function (e) {
  e.target.classList.toggle("active");
  headerNavigation.classList.toggle("active");
});
