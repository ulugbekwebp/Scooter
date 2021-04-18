var faqs = document.querySelector(".faqs__title-wrapper");
var desc = document.querySelector(".faqs__button-desc");
var arrow = document.querySelector(".faqs__button-title");

faqs.addEventListener("click", function(){
  desc.classList.toggle("faqs__button-desc--active");
  arrow.classList.toggle('faqs__button-title--active');
});