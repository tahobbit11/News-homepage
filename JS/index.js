const menuOpen = document.getElementById("menu-open");
const nav = document.getElementById("options");


if(window.innerWidth >= 768) {
    menuOpen.style.display = "none";
    nav.style.display = "flex";
}