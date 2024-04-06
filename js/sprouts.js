const navs = document.querySelectorAll(".sprout-option--nav");

navs.forEach((nav) => {
  const button = nav.querySelector(".btn-sprout");
  const sproutContent = nav.nextElementSibling;

  button.addEventListener("click", function () {
    if (sproutContent.classList.contains("hidden")) {
      sproutContent.classList.remove("hidden");
      nav.querySelector("ion-icon").setAttribute("name", "chevron-up-outline");
    } else {
      sproutContent.classList.add("hidden");
      nav
        .querySelector("ion-icon")
        .setAttribute("name", "chevron-down-outline");
    }
  });
});
