const navs = document.querySelectorAll(".sprout-option--nav");

navs.forEach((nav) => {
  const buttons = document.querySelectorAll(".btn-sprout");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const sproutContent =
        this.closest(".sprout-option").querySelector(".sprout-content");
      const icon = this.querySelector("ion-icon");

      if (sproutContent.classList.contains("hidden")) {
        sproutContent.classList.remove("hidden");
        icon.setAttribute("name", "chevron-up-outline");
      } else {
        sproutContent.classList.add("hidden");
        icon.setAttribute("name", "chevron-down-outline");
      }
    });
  });

  nav.addEventListener("click", function () {
    const sproutContent =
      this.closest(".sprout-option").querySelector(".sprout-content");
    const icon = this.querySelector("ion-icon");

    if (sproutContent.classList.contains("hidden")) {
      sproutContent.classList.remove("hidden");
      icon.setAttribute("name", "chevron-up-outline");
    } else {
      sproutContent.classList.add("hidden");
      icon.setAttribute("name", "chevron-down-outline");
    }
  });
});
