// Nav Bar
const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger-icon-container");
const navLinks = document.querySelectorAll(".nav-button a");

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("active");
  });
});
