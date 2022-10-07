const menuIcons = document.querySelector(".menuIcons");
const backdrop = document.querySelector(".backdrop");
const contact = document.querySelector(".contact");
const closeBtn = document.querySelector(".close");
const modalBox = document.querySelector(".modal");
const ul = document.querySelector("ul");

menuIcons.addEventListener("click", () => toggleModal && toggleMenu());
backdrop.addEventListener("click", () => toggleMenu());
contact.addEventListener("click", () => toggleModal && toggleModal());
closeBtn.addEventListener("click", () => toggleModal && toggleModal());

const toggleModal = () => {
  modalBox.classList.toggle("active");
};

const toggleMenu = () => {
  ul.classList.toggle("active");
  backdrop.classList.toggle("active");
  menuIcons.classList.toggle("active");
};
