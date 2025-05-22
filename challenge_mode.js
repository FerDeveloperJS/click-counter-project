const fifteenSecondsTimerButton = document.getElementById("fifteen-seconds-timer-button")
const thirtySecondsTimerButton = document.getElementById("thirty-seconds-timer-button")
const sixtySecondsTimerButton = document.getElementById("sixty-seconds-timer-button")

const timerOptions = document.querySelector(".timer-options")
const chooseTheTimerh3 = timerOptions.getElementsByTagName("h3")[0]

const timerButtonsContainer = document.querySelector(".timer-buttons")


const timerButtons = timerButtonsContainer.querySelectorAll("button")

console.log(timerButtons)

timerButtons.forEach(timerButton => {

    timerButton.addEventListener("click", () => {

        timerButtons.forEach(timerB => {
            timerB.style.display = "none"
            clickButton.style.display = "block"
        })

        chooseTheTimerh3.style.display = "none"
    })

 
})


fifteenSecondsTimerButton.addEventListener("click", () => {
    let timer = 15
    const timerCountdown = document.getElementById("timer-countdown")
    const timerh3 = document.getElementById("h3-timer")
    
    
    let interval = setInterval(() => {
        timerh3.innerText = "Timer: " + timer
        timer-=1

        if (timer < 0) {
            clickButton.style.display = "none"
            timerCountdown.style.display = "none"
            clearInterval(interval)

            const body = document.getElementsByTagName("body")[0]

            const AchievementContainer = document.createElement("div")
            AchievementContainer.classList.add("achievement")

            const paragraphAchievementContainer = document.createElement("p")
            paragraphAchievementContainer.innerText = `Has logrado hacer ${counter} clicks en 15 segundos, felicidades! 🎉`

            AchievementContainer.appendChild(paragraphAchievementContainer)
            body.appendChild(AchievementContainer)


            const playAgainButton = document.createElement("button")
            playAgainButton.innerText = "Jugar de nuevo"
            playAgainButton.classList.add("play-again-button")
            body.appendChild(playAgainButton)

            playAgainButton.addEventListener("click", () => {
                location.reload()
            })

        }

    }, 1000)
})


thirtySecondsTimerButton.addEventListener("click", () => {
    let timer = 30
    const timerCountdown = document.getElementById("timer-countdown")
    const timerh3 = document.getElementById("h3-timer")
    
    let interval = setInterval(() => {
        timerh3.innerText = "Timer: " + timer
        timer-=1

        if (timer < 0) {
            clickButton.style.display = "none"
            timerCountdown.style.display = "none"
            clearInterval(interval)

            const body = document.getElementsByTagName("body")[0]

            const AchievementContainer = document.createElement("div")
            AchievementContainer.classList.add("achievement")

            const paragraphAchievementContainer = document.createElement("p")
            paragraphAchievementContainer.innerText = `Has logrado hacer ${counter} clicks en 30 segundos, felicidades! 🎉`

            AchievementContainer.appendChild(paragraphAchievementContainer)
            body.appendChild(AchievementContainer)


            const playAgainButton = document.createElement("button")
            playAgainButton.innerText = "Jugar de nuevo"
            playAgainButton.classList.add("play-again-button")
            body.appendChild(playAgainButton)

            playAgainButton.addEventListener("click", () => {
                location.reload()
            })

        }

    }, 1000)
})


sixtySecondsTimerButton.addEventListener("click", () => {
    let timer = 60
    const timerCountdown = document.getElementById("timer-countdown")
    const timerh3 = document.getElementById("h3-timer")
    
    let interval = setInterval(() => {
        timerh3.innerText = "Timer: " + timer
        timer-=1

        if (timer < 0) {
            clickButton.style.display = "none"
            timerCountdown.style.display = "none"
            clearInterval(interval)

            const body = document.getElementsByTagName("body")[0]

            const AchievementContainer = document.createElement("div")
            AchievementContainer.classList.add("achievement")

            const paragraphAchievementContainer = document.createElement("p")
            paragraphAchievementContainer.innerText = `Has logrado hacer ${counter} clicks en 60 segundos, felicidades! 🎉`

            AchievementContainer.appendChild(paragraphAchievementContainer)
            body.appendChild(AchievementContainer)

            const playAgainButton = document.createElement("button")
            playAgainButton.innerText = "Jugar de nuevo"
            playAgainButton.classList.add("play-again-button")
            body.appendChild(playAgainButton)


            playAgainButton.addEventListener("click", () => {
                location.reload()
            })
        }

    }, 1000)
})





