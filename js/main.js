// Current year for copyright in the footer
function updateCopyrightYear() {
  var copyrightElement = document.getElementById("copyright-year");
  var yearObj = new Date();

  copyrightElement.textContent = yearObj.getFullYear();
}
updateCopyrightYear();

document
  .getElementById("btn-mobile-nav")
  .addEventListener("click", function () {});

document
  .getElementById("sprout-varieties")
  .addEventListener("click", function () {
    const sproutOptions = document.getElementById("sprout-var-window");

    if (sproutOptions.classList.contains("hidden"))
      sproutOptions.classList.remove("hidden");
  });

document
  .getElementById("sprout-var-window-close")
  .addEventListener("click", function () {
    const sproutOptions = document.getElementById("sprout-var-window");

    if (!sproutOptions.classList.contains("hidden"))
      sproutOptions.classList.add("hidden");
  });
