var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var mainText = rootStyles.getPropertyValue('--main-text');
const darkModeToggle = document.querySelector('#dark-theme-btn');
let darkMode = localStorage.getItem('darkMode');

const svgElements = document.querySelectorAll(".vector");

onload = (event) => {
    switchTheme();
    switchTheme();
};

enableDarkMode = () => {
    localStorage.setItem('darkMode', "enabled");

    root.style.setProperty('--main-text', '#ffffff');
    root.style.setProperty('--alt-text', '#ffffff');
    root.style.setProperty('--main-background', '#000000');
    root.style.setProperty('--alt-background', '#141414');

    svgElements.forEach((el) => {el.classList.add('svg-white')});

    darkModeToggle.textContent = "Dark theme";
}

disableDarkMode = () => {
    localStorage.setItem('darkMode', "disabled");

    root.style.setProperty('--main-text', '#000000');
    root.style.setProperty('--alt-text', '#ffffff');
    root.style.setProperty('--main-background', '#ffffff');
    root.style.setProperty('--alt-background', '#000000');

    svgElements.forEach((el) => {el.classList.remove('svg-white')});
    darkModeToggle.textContent = "Light theme";
}

darkModeToggle.addEventListener('click', () => switchTheme());

function switchTheme(){
    darkMode = localStorage.getItem('darkMode');

    if(darkMode === "enabled"){
        disableDarkMode();
    } else{
        enableDarkMode();
    }
}