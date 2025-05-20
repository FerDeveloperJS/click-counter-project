const clickButton = document.getElementById("click-button")
let counterh2 = document.getElementsByTagName("h2")[0]
let counter = 0

clickButton.addEventListener("click", () => {
    counter += 1
    counterh2.innerText = "Contador: " + counter
})

const resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", () => {
    counter = 0
    counterh2.innerText = "Contador: "
})