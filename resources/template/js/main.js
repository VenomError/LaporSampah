document.addEventListener("DOMContentLoaded", function () {
  /* ========= Reusable Functions Start =========== */
  //  modal toggle function
  function modalToggle(modalName, modalBox, open, close) {
    modalName.addEventListener("click", () => {
      if (modalBox.classList.contains(open)) {
        modalBox.classList.remove(open);
        modalBox.classList.add(close);
        document.removeEventListener("click", closeDropdownOutside);
      } else {
        modalBox.classList.add(open);
        modalBox.classList.remove(close);
        document.addEventListener("click", closeDropdownOutside);
      }

      function closeDropdownOutside(event) {
        const isClickedInsideDropdown = modalBox.contains(event.target);
        const isClickedOnDropdownBtn = modalName.contains(event.target);

        if (!isClickedInsideDropdown && !isClickedOnDropdownBtn) {
          modalBox.classList.add(close);
          modalBox.classList.remove(open);
          document.removeEventListener("click", closeDropdownOutside);
        }
      }
    });
  }

  //create tab resubale function
  function createTab(tabName, activeButtonClassList, inactiveButtonClassList) {
    const tabButtons = tabName?.querySelectorAll(".tab-item");

    if (tabButtons) {
      tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const tabNameText = button.innerText
            .toLowerCase()
            .replace(/\s+/g, "-")
            .trim();
          tabButtons.forEach((otherButton) => {
            const otherTabName = otherButton.innerText
              .toLowerCase()
              .replace(/\s+/g, "-")
              .trim();

            activeButtonClassList.forEach((className) => {
              otherButton.classList.toggle(
                className,
                tabNameText === otherTabName
              );
            });

            inactiveButtonClassList.forEach((className) => {
              otherButton.classList.toggle(
                className,
                tabNameText !== otherTabName
              );
            });

            const otherTabContent = tabName.querySelector(`#${otherTabName}`);

            otherTabContent.classList.toggle(
              "animationOne",
              tabNameText === otherTabName
            );
            otherTabContent.classList.toggle(
              "hidden",
              tabNameText !== otherTabName
            );
            otherTabContent.classList.toggle(
              "animationTwo",
              tabNameText !== otherTabName
            );
          });
        });
      });
    }
  }

  //create dropdown resubale function and select item
  function dropdownModalAndSelect(
    dropDown,
    dropDownModal,
    openDropDownClasses,
    closeDropDownClasses
  ) {
    if (dropDown) {
      dropDown.addEventListener("click", () => {
        if (dropDownModal.classList.contains("visible")) {
          dropDownModal.classList.add(...closeDropDownClasses);
          dropDownModal.classList.remove(...openDropDownClasses);
        } else {
          dropDownModal.classList.remove(...closeDropDownClasses);
          dropDownModal.classList.add(...openDropDownClasses);
        }
      });

      const itemList = dropDownModal.querySelectorAll(".item");

      const selectedItem = dropDown.querySelector(".selectedItem");
      itemList.forEach((item) => {
        item.addEventListener("click", () => {
          selectedItem.textContent = item.textContent;
          dropDownModal.classList.add(...closeDropDownClasses);
          dropDownModal.classList.remove(...openDropDownClasses);
        });
      });

      document.addEventListener("click", (e) => {
        if (!dropDown.contains(e.target) && !dropDownModal.contains(e.target)) {
          dropDownModal.classList.add(...closeDropDownClasses);
          dropDownModal.classList.remove(...openDropDownClasses);
        }
      });
    }
  }

  function showPasswordFunc(item, passField) {
    item.addEventListener("click", () => {
      if (item.classList.contains("ph-eye-slash")) {
        item.classList.add("ph-eye");
        item.classList.remove("ph-eye-slash");
        passField.setAttribute("type", "text");
      } else {
        item.classList.remove("ph-eye");
        item.classList.add("ph-eye-slash");
        passField.setAttribute("type", "password");
      }
    });
  }

  /* ========= Reusable Functions End =========== */

  //preloader
  const preloader = document.querySelector(".preloader");

  if (preloader) {
    preloader.classList.add("fixed");
    preloader.classList.remove("hidden");

    setTimeout(() => {
      preloader.classList.add("hidden");
      preloader.classList.remove("fixed");
    }, 1000);
  }

  //check local storage
  const localStorageMode = localStorage.getItem("mode");
  const chooseModeButton = document.querySelector(".choose-mode");

  function changeMode(mode) {
    const icon = chooseModeButton?.querySelector(".ph");
    if (mode === "dark") {
      document.querySelector("body").classList?.remove("white");
      document.querySelector("body").classList.add("dark");
      icon?.classList.remove("ph-sun");
      icon?.classList.add("ph-moon");
    } else {
      document.querySelector("body").classList?.remove("dark");
      document.querySelector("body").classList.add("white");
    }
  }

  if (localStorageMode === "dark") {
    changeMode(localStorageMode);

    if (chooseModeButton) {
      const icon = chooseModeButton.querySelector(".ph");
      chooseModeButton.classList.add("active");
      icon.classList.remove("ph-sun");
      icon.classList.add("ph-moon");
    }
  }

  // Light Mode Dark Mode

  chooseModeButton?.addEventListener("click", () => {
    const icon = chooseModeButton.querySelector(".ph");
    if (localStorage.getItem("mode") === "dark") {
      localStorage.setItem("mode", "white");
      changeMode("white");
      icon.classList.add("ph-sun");
      icon.classList.remove("ph-moon");
    } else {
      localStorage.setItem("mode", "dark");
      changeMode("dark");
      chooseModeButton.classList.add("active");
      icon.classList.remove("ph-sun");
      icon.classList.add("ph-moon");
    }
  });

  //show password
  const passowordShow = document.querySelector(".passowordShow");
  const passwordField = document.querySelector(".passwordField");
  if (passowordShow) {
    showPasswordFunc(passowordShow, passwordField);
  }
  const confirmPasswordShow = document.querySelector(".confirmPasswordShow");
  const confirmPasswordField = document.querySelector(".confirmPasswordField");
  if (confirmPasswordShow) {
    showPasswordFunc(confirmPasswordShow, confirmPasswordField);
  }

  //contacts tab
  const contactsTab = document.querySelector(".contact-tab");
  createTab(contactsTab, ["border-g300", "text-g300"], ["border-n40"]);

  //select payment methods
  const paymentMethodItems = document.querySelectorAll(
    ".payment-methods .item"
  );

  paymentMethodItems.forEach((item) => {
    const radioButton = item.querySelector(".radioButton");

    item.addEventListener("click", () => {
      paymentMethodItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherRadioButton = otherItem.querySelector(".radioButton");
          otherItem.classList.remove("border-g300");
          otherItem.classList.add("border-n40", "dark:border-darkN40");

          otherRadioButton.classList.remove("ph-fill", "text-g300");
          otherRadioButton.classList.add("ph", "text-n70");
        }
      });

      item.classList.remove("border-n40", "dark:border-darkN40");
      item.classList.add("border-g300");

      radioButton.classList.remove("ph", "text-n70");
      radioButton.classList.add("ph-fill", "text-g300");
    });
  });

  const notificationsSettings = document.querySelector(
    ".notificationsSettings"
  );

  if (notificationsSettings) {
    const items = notificationsSettings.querySelectorAll(".item");

    items.forEach((item) => {
      const checkBox = item.querySelector(".checkBox");
      const checkBoxCircle = item.querySelector(".checkBoxCircle");
      item.addEventListener("click", () => {
        checkBox.classList.toggle("bg-n40");
        checkBox.classList.toggle("bg-g300");
        checkBoxCircle.classList.toggle("left-0.5");
        checkBoxCircle.classList.toggle("left-[22px]");
        checkBox.classList.toggle("dark:bg-darkN40");
        checkBox.classList.toggle("dark:bg-g300");
      });
    });
  }

  // suggested Languaes
  const suggestedLanguageItems = document.querySelectorAll(
    ".suggested-languages .item"
  );

  suggestedLanguageItems.forEach((item) => {
    const radioButton = item.querySelector(".radioButton");

    item.addEventListener("click", () => {
      suggestedLanguageItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherRadioButton = otherItem.querySelector(".radioButton");

          otherRadioButton.classList.remove("ph-fill", "text-g300");
          otherRadioButton.classList.add("ph", "text-n70");
        }
      });

      radioButton.classList.remove("ph", "text-n70");
      radioButton.classList.add("ph-fill", "text-g300");
    });
  });

  // suggested Languaes
  const otherLanguageItems = document.querySelectorAll(
    ".other-languages .item"
  );

  otherLanguageItems.forEach((item) => {
    const radioButton = item.querySelector(".radioButton");

    item.addEventListener("click", () => {
      otherLanguageItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherRadioButton = otherItem.querySelector(".radioButton");

          otherRadioButton.classList.remove("ph-fill", "text-g300");
          otherRadioButton.classList.add("ph", "text-n70");
        }
      });

      radioButton.classList.remove("ph", "text-n70");
      radioButton.classList.add("ph-fill", "text-g300");
    });
  });

  //faq
  let accordion = document.querySelectorAll(".faq-accordion");

  accordion.forEach((item, index) => {
    accordion[index].addEventListener("click", function () {
      let faqAnswer = this.nextElementSibling;
      let parent = accordion[index].parentElement;

      // Close all other accordions
      accordion.forEach((otherAccordion, otherIndex) => {
        if (otherIndex !== index) {
          let otherFaqAnswer = otherAccordion.nextElementSibling;
          otherFaqAnswer.style.height = null;
          otherAccordion.querySelector("i").classList.remove("text-g300");
          otherAccordion.parentElement.classList.remove(
            "!border-g300",
            "!text-g300"
          );
        }
      });

      // Toggle open/close for the clicked accordion
      if (faqAnswer.style.height) {
        faqAnswer.style.height = null;
      } else {
        faqAnswer.style.height = faqAnswer.scrollHeight + "px";
      }

      accordion[index].parentElement.classList.add(
        "!border-g300",
        "!text-g300"
      );

      // Toggle classes for the clicked accordion
      accordion[index].querySelector("i").classList.toggle("ph-caret-down");
      accordion[index].querySelector("i").classList.toggle("ph-caret-up");
      accordion[index].querySelector("i").classList.add("text-g300");
    });
  });

  //help center tab
  const helpCenterTab = document.querySelector(".help-center-tab");
  createTab(helpCenterTab, ["border-g300", "text-g300"], ["border-n40"]);

  // card delete confirmation modal
  const cardDeleteConfirmationModal = document.querySelector(
    ".cardDeleteConfirmationModal"
  );
  const cardDeleteConfirmationModalOpenButtons = document.querySelectorAll(
    ".cardDeleteConfirmationModalOpenButton"
  );
  const cardDeleteConfirmationModalCloseButtons = document.querySelectorAll(
    ".cardDeleteConfirmationModalCloseButton"
  );

  if (cardDeleteConfirmationModal) {
    cardDeleteConfirmationModalOpenButtons.forEach(
      (cardDeleteConfirmationModalOpenButton) => {
        cardDeleteConfirmationModalOpenButton.addEventListener("click", () => {
          cardDeleteConfirmationModal.classList.add("active");
        });
      }
    );

    cardDeleteConfirmationModalCloseButtons.forEach(
      (cardDeleteConfirmationModalCloseButton) => {
        cardDeleteConfirmationModalCloseButton.addEventListener("click", () => {
          cardDeleteConfirmationModal.classList.remove("active");
        });
      }
    );
  }

  //notification sort modal
  const selectSortBy = document.querySelector(".selectSortBy");
  const selectSortByModal = document.querySelector(".selectSortByModal");
  const activeModalClasses = ["visible", "opacity-100", "z-20", "scale-100"];
  const inactiveClasses = ["invisible", "opacity-0", "scale-75"];
  dropdownModalAndSelect(
    selectSortBy,
    selectSortByModal,
    activeModalClasses,
    inactiveClasses
  );

  //transection category select
  const transactionCategory = document.querySelector(".transactionCategory");

  if (transactionCategory) {
    const items = transactionCategory.querySelectorAll(".item");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((otherItem) => {
          const activeClass = ["bg-g300", "text-white", "border-g300"];
          const inactiveClass = [
            "bg-n20",
            "border-n40",
            "dark:bg-darkN20",
            "dark:border-darkN40",
          ];

          activeClass.forEach((className) => {
            otherItem.classList.toggle(className, otherItem === item);
          });

          inactiveClass.forEach((className) => {
            otherItem.classList.toggle(className, otherItem !== item);
          });
        });
      });
    });
  }

  //select country modal
  const selectCountry = document.querySelector(".selectCountry");
  const selectCountryModal = document.querySelector(".selectCountryModal");
  const openSelectModalClasses = [
    "visible",
    "opacity-100",
    "z-20",
    "scale-100",
  ];
  const closeSelectModalClasses = ["invisible", "opacity-0", "scale-75"];
  dropdownModalAndSelect(
    selectCountry,
    selectCountryModal,
    openSelectModalClasses,
    closeSelectModalClasses
  );

  // Accept incoming request modal
  const contactModal = document.querySelector(".contactModal");
  const contactModalOpenButton = document.querySelector(
    ".contactModalOpenButton"
  );
  const contactModalCloseButton = document.querySelector(
    ".contactModalCloseButton"
  );

  if (contactModal) {
    contactModalOpenButton.addEventListener("click", () => {
      contactModal.classList.add("active");
    });

    contactModalCloseButton.addEventListener("click", () => {
      contactModal.classList.remove("active");
    });
  }

  // Decline Modal
  const declineModal = document.querySelector(".declineModal");
  const declineModalOpenButton = document.querySelector(
    ".declineModalOpenButton"
  );
  const declineModalCloseButton = document.querySelector(
    ".declineModalCloseButton"
  );

  if (declineModal) {
    declineModalOpenButton.addEventListener("click", () => {
      declineModal.classList.add("active");
    });

    declineModalCloseButton.addEventListener("click", () => {
      declineModal.classList.remove("active");
    });
  }

  // Delete Contact Modal
  const deleteContactModal = document.querySelector(".deleteContactModal");
  const deleteContactModalOpenButton = document.querySelector(
    ".deleteContactModalOpenButton"
  );
  const deleteContactModalCloseButton = document.querySelector(
    ".deleteContactModalCloseButton"
  );

  if (deleteContactModal) {
    deleteContactModalOpenButton.addEventListener("click", () => {
      deleteContactModal.classList.add("active");
    });

    deleteContactModalCloseButton.addEventListener("click", () => {
      deleteContactModal.classList.remove("active");
    });
  }

  // Contact Deleted Confirmation Modal
  const contactDeletedConfirmationModal = document.querySelector(
    ".contactDeletedConfirmationModal"
  );
  const contactDeletedConfirmationModalOpenButton = document.querySelector(
    ".contactDeletedConfirmationModalOpenButton"
  );
  const contactDeletedConfirmationModalCloseButton = document.querySelector(
    ".contactDeletedConfirmationModalCloseButton"
  );

  if (contactDeletedConfirmationModal) {
    contactDeletedConfirmationModalOpenButton.addEventListener("click", () => {
      deleteContactModal.classList.remove("active");
      contactDeletedConfirmationModal.classList.add("active");
    });

    contactDeletedConfirmationModalCloseButton.addEventListener("click", () => {
      contactDeletedConfirmationModal.classList.remove("active");
    });
  }

  // Contact Saved Confirmation Modal
  const contactSavedConfirmationModal = document.querySelector(
    ".contactSavedConfirmationModal"
  );
  const contactSavedConfirmationModalOpenButton = document.querySelector(
    ".contactSavedConfirmationModalOpenButton"
  );
  const contactSavedConfirmationModalCloseButton = document.querySelector(
    ".contactSavedConfirmationModalCloseButton"
  );

  if (contactSavedConfirmationModal) {
    contactSavedConfirmationModalOpenButton.addEventListener("click", () => {
      contactSavedConfirmationModal.classList.add("active");
    });

    contactSavedConfirmationModalCloseButton.addEventListener("click", () => {
      contactSavedConfirmationModal.classList.remove("active");
    });
  }

  // Logout Modal
  const logoutModal = document.querySelector(".logoutModal");
  const logoutModalOpenButton = document.querySelector(
    ".logoutModalOpenButton"
  );
  const logoutModalCloseButton = document.querySelector(
    ".logoutModalCloseButton"
  );

  if (logoutModal) {
    logoutModalOpenButton.addEventListener("click", () => {
      logoutModal.classList.add("active");
    });

    logoutModalCloseButton.addEventListener("click", () => {
      logoutModal.classList.remove("active");
    });
  }

  // My QR Code Modal
  const myQrCodeModal = document.querySelector(".myQrCodeModal");
  const myQrCodeModalOpenButton = document.querySelector(
    ".myQrCodeModalOpenButton"
  );
  const myQrCodeModalCloseButton = document.querySelector(
    ".myQrCodeModalCloseButton"
  );

  if (myQrCodeModal) {
    myQrCodeModalOpenButton.addEventListener("click", () => {
      myQrCodeModal.classList.add("active");
    });

    myQrCodeModalCloseButton.addEventListener("click", () => {
      myQrCodeModal.classList.remove("active");
    });
  }
});
