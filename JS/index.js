const nav = document.getElementById("options");
const body = document.querySelector("body");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

const pageWidth = window.matchMedia('(min-width: 768px)')
console.log(pageWidth)

const widthChange = (width) => {
    console.log(width.matches)
    if(width.matches) {
        buttonPressedOpen();
        closeButton.style.display = "none";
        body.style.background = "white"
    } else {
        buttonPressedClose();
    }
}

const buttonPressedOpen = () => {
    openButton.style.display = "none";
    closeButton.style.display = "flex";
    nav.style.display = "initial";
    body.style.background = "hsla(240, 100%, 5%, 0.5)"
}

const buttonPressedClose = () => {
    openButton.style.display = "flex";
    closeButton.style.display = "none";
    nav.style.display = "none";
    body.style.background = "white"
}

openButton.addEventListener("click", buttonPressedOpen)

closeButton.addEventListener("click", buttonPressedClose)

pageWidth.addEventListener("resize", widthChange);

widthChange(pageWidth);