const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const toggleBtn = document.querySelector(".header__toggle_btn");
const navMenu = document.querySelector(".header__nav-menu");

// Active mobile menu
function activeToggleMenu() {
  navMenu.classList.toggle("active");
  toggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
}
toggleBtn.addEventListener("click", activeToggleMenu);
overlay.addEventListener("click", activeToggleMenu);

// Show header background in scrolling window
function toggleHeaderBackground() {
  header.classList.toggle("sticky", window.scrollY > 50);
}

window.addEventListener("scroll", toggleHeaderBackground);

toggleHeaderBackground();
