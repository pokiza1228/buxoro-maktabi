const burger = document.querySelector(".burger");
const nav =document.querySelector(".header__nav");
burger.addEventListener("click", function() {
    burger.classList.toggle("burger--opened");
    nav.classList.toggle("header__nav--opened");
});



