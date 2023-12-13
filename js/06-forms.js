const form = document.querySelector(".js-form");

const object = {
  // name: '',
  // age: '',
  // email: '',
  // password: ''
};

const inputs = document.querySelectorAll("input");

inputs.forEach((input) =>
  input.addEventListener("input", (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)

    object[event.target.name] = event.target.value;
    // console.log(object)
  })
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(object);
});
