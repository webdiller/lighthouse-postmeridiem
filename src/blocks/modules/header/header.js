try {
  const headerSearch = document.querySelector(".js-header-search");
  const headerMobileSearch = document.querySelector(".js-header-item-search"); // mobile search

  const headerSearchInput = document.querySelector(".js-header-search input");

  const headerMenu = document.querySelector(".js-header-menu");
  const headerNavigation = document.querySelector(".js-header-navigation");

  const headerResults = document.querySelector(".js-header-results");

  const headerCenter = document.querySelector(".js-header-center");
  const headerNavigationItemsTitle = document.querySelectorAll(
    ".js-header-navigation-all-items .header__navigation-item_title"
  );

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

  headerNavigationItemsTitle.forEach((item) => {
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
} catch (error) {}
