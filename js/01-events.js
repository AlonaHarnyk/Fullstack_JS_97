// /**
//  * Подія сlick
//  */

const clickMe = document.querySelector(".js-click");
const box = document.querySelector(".js-box");

let step = 50;

clickMe.addEventListener("click", (event) => {
  //   console.log(event);
  //   console.log(event.target);
  //   box.style.backgroundColor = "red";
  box.style.marginTop = `${step}px`;
  box.style.marginLeft = `${step}px`;
  step += 50;
});


