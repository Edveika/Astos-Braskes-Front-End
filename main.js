// Current year for copyright in the footer
var copyrightElement = document.getElementById("copyright-year");
var yearObj = new Date();
var currYear = yearObj.getFullYear();

copyrightElement.textContent = currYear;
