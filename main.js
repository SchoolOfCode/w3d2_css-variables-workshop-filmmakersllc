let darkMode = document.querySelector("dark-mode-button");

function changeDarkMode(){
    var element = document.body;
 element.classList.toggle("dark-mode-theme");
    
}

document.addEventListener("click", changeDarkMode);