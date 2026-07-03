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

// Optional: Add click behavior to open LinkedIn when clicking the badge itself
(function () {
  const badgeBox = document.querySelector(".portfolio-badge__box");
  const linkedinLink = document.querySelector(".portfolio-badge__link");

  // Click on badge opens LinkedIn (only if not already clicking the link)
  badgeBox.addEventListener("click", function (e) {
    if (e.target !== linkedinLink && !linkedinLink.contains(e.target)) {
      window.open(
        "https://www.linkedin.com/in/mahdi-amouzegar/",
        "_blank",
        "noopener,noreferrer",
      );
    }
  });
})();
