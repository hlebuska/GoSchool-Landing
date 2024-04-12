const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");

let menuOn = false;

menuButton.addEventListener("click", () => {
    if(menuOn){
        menu.classList.add("menu-hidden");
    } else{
        menu.classList.remove("menu-hidden");
    }
    menuOn = !menuOn;
});