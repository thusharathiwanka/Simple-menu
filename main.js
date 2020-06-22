const nav = document.querySelector(".nav-links");
const links = nav.querySelectorAll("a");
const menuOpen = document.querySelector(".menu");

menuOpen.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
});
