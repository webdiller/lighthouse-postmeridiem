try {
    const modalGetCallback = document.querySelector(".js-modal-get-callback");
    const modalGetCallbackCloseButton = document.querySelector(".js-modal-get-callback-close-btn");
  
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