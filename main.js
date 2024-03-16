// Current year for copyright in the footer
function updateCopyrightYear() {
  var copyrightElement = document.getElementById('copyright-year');
  var yearObj = new Date();

  copyrightElement.textContent = yearObj.getFullYear();
}
updateCopyrightYear();
