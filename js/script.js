const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const backdropButton = document.querySelector(".backdrop");

backdropButton.addEventListener("click", function () {
  mobileNav.style.display = "none";
  backdropButton.style.display = "none";
});

toggleButton.addEventListener("click", function () {
  mobileNav.style.display = "block";
  backdropButton.style.display = "block";
});
