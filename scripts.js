var header = document.getElementById("myHeader");
var section = document.getElementById("about");
var menuicon = document.getElementById("menuicon");
var sticky = header.offsetTop; // get offset from top

// ensures that the menu icon is not visible on page load
window.onload = function() {
  menuicon.classList.remove("icon");
}

// When the user scrolls the page, the headerFunction is called
window.onscroll = function() {headerFunction()};

// Adds and removes sticky class - also implements fix for jerky movement.
// also added menuicon on scroll.
function headerFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    section.classList.add("stickyfix");
    menuicon.classList.add("icon");
  } else {
    header.classList.remove("sticky");
    section.classList.remove("stickyfix");
    menuicon.classList.remove("icon");
  }
}

