let navMenu;
let hamburger;

toggleMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

window.onload = () => {
    hamburger = document.getElementById("hamburger");
    navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", toggleMenu);
}