const menuOpened = document.querySelector(".menu-opened")

const openMenuButton = document.querySelector(".open-menu")
openMenuButton.addEventListener("click", () => {
    menuOpened.style.display = "block"
})



const closeMenuButton = document.querySelector(".close-menu")
closeMenuButton.addEventListener("click", () => {
    menuOpened.style.display = "none" 
})