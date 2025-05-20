const menuOpened = document.querySelector(".menu-opened")

const openMenuButton = document.querySelector(".open-menu")
openMenuButton.addEventListener("click", () => {
    menuOpened.style.display = "block"
})


const closeMenuButton = document.querySelector(".close-menu")
closeMenuButton.addEventListener("click", () => {
    menuOpened.style.display = "none" 
})


const darkModeOffButton = document.querySelector(".dark-mode-off")
const darkModeOnButton = document.querySelector(".dark-mode-on")
darkModeOffButton.addEventListener("click", () => {

    darkModeOnButton.style.display = "block"
    darkModeOffButton.style.display = "none"

    document.querySelectorAll("*").forEach(element => {
        element.classList.add("dark-mode")
    })
})


darkModeOnButton.addEventListener("click", () => {

    darkModeOffButton.style.display = "block"
    darkModeOnButton.style.display = "none"

    document.querySelectorAll("*").forEach(element => {
        element.classList.remove("dark-mode")
    })
})


