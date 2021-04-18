var burger = document.querySelector(".main-header__hamburger");
var nav = document.querySelector(".main-header__nav");

burger.addEventListener("click", function(){
  nav.classList.toggle('main-header__nav--active');
  burger.classList.toggle('main-header__hamburger--active')
});