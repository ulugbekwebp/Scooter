var burger = document.querySelector(".header__hamburger");
var nav = document.querySelector(".header__nav");
var scotin = document.querySelector(".header__scootin-link")

burger.addEventListener("click", function(){
  nav.classList.toggle('header__nav--active');
  scotin.classList.toggle('header__scootin-link--active');
  burger.classList.toggle('header__hamburger--active')
})