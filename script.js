const menuIcons = document.querySelector(".menuIcons");
const backdrop = document.querySelector(".backdrop");
const ul = document.querySelector("ul");

menuIcons.addEventListener("click", () => toggleMenu());
backdrop.addEventListener("click", () => toggleMenu());

const toggleMenu = () => {
  ul.classList.toggle("active");
  backdrop.classList.toggle("active");
  menuIcons.classList.toggle("active");
};
