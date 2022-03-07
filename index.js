let navMenu;

window.onload=() => {
    const hamburger = document.getElementById("hamburger");
    navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", toggleMenu);
}

toggleMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}