const burger = document.querySelector('button');
const openMenu = document.querySelector('.fa-caret-square-down');
const closeMenu = document.querySelector('.fa-window-close')
const nav = document.querySelector('nav')

burger.addEventListener("click", function () {
    openMenu.classList.toggle("active");
    closeMenu.classList.toggle("active");
    nav.classList.toggle("active");
})