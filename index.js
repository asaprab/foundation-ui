//index.js

// Mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
    burgerIcon.classList.toggle('is-active');
});

//TODO

// var i = 0;
// const txt = 'Lorem ipsum typing effect!'; /* The text */
// const speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// const priceCard = document.querySelector('#card-2');
// const discCard = document.querySelector('#disc-card');
// priceCard.addEventListener('mouseenter', () => {
//     discCard.classList.toggle('show-card');    
// });
// priceCard.addEventListener('mouseleave', () => {
//     discCard.classList.toggle('show-card');    
// });
