const containers = document.querySelectorAll(".sprout-option");
containers.forEach((container, i) => {
  const navs = document.querySelectorAll(".sprout-option--nav");
  const sproutContent = document.querySelectorAll(".sprout-content");

  container.addEventListener("click", function () {
    if (sproutContent[i].classList.contains("hidden")) {
      sproutContent[i].classList.remove("hidden");
      navs[i]
        .querySelector("ion-icon")
        .setAttribute("name", "chevron-up-outline");
    } else {
      sproutContent[i].classList.add("hidden");
      navs[i]
        .querySelector("ion-icon")
        .setAttribute("name", "chevron-down-outline");
    }
  });
});
