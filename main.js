const head=document.querySelector(".header__head");
const menu=document.querySelector(".header__menu");
const navbar = document.querySelector(".header__right--img");
const cross=document.querySelector(".header__item--cross");


navbar.addEventListener("click",()=>{
    head.classList.add("header__head--active");
    menu.classList.add("header__menu--active");
})

cross.addEventListener("click",()=>{
    head.classList.remove("header__head--active");
    menu.classList.remove("header__menu--active");
})