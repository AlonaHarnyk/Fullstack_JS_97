/*
 * Типи подій: keydown, keyup
 * - Властивості key та code
 */

/**
 * Обробка комбінацій клавіш
 */

const btn = document.querySelector(".openModal");
const modal = document.querySelector(".modal");

const closeModal = (event) => {
  if (event.code === "Escape") {
    modal.classList.remove("open");
    document.removeEventListener("keydown", closeModal);
  }
};

btn.addEventListener("click", () => {
  modal.classList.add("open");
  document.addEventListener("keydown", closeModal);
});

// document.addEventListener("keydown", closeModal);
