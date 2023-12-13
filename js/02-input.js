/**
 * - Подія input
 * - Подія focus, blur
 * - Подія change
 *
 * Виводь в консоль все що користувач вводить в input
 */

const userName = document.querySelector(".js-user-name");

userName.addEventListener('input', (e) => {
    // console.log(e.target.value)
    console.log(`My name is ${e.target.value}`)
})

userName.addEventListener('change', (e) => {
    console.log(`My name is ${e.target.value}`)
})

userName.addEventListener('blur', (e) => {
    console.log(`My name is ${e.target.value}`)
})
