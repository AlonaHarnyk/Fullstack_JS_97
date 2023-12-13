/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector(".js-form");
const btn = document.querySelector(".form-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const elems = e.target.elements
  const data = {
    email: elems.email.value,
    password: elems.password.value,
    comment: elems.comment.value,
  }

  console.log(data);
});

