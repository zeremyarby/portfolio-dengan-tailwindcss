const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const scroll = document.querySelector("header");
  const fixedNav = scroll.offsetTop;

  if (window.pageYOffset > fixedNav) {
    scroll.classList.add("navbar-fixed");
  } else {
    scroll.classList.remove("navbar-fixed");
  }
};
