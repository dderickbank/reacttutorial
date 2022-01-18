// function increment() {
//     // `body of function`

//     console.log("the button was clicked")
// }

// function increment() {
//     // body of the function 

//     console.log("my button was touched")
// }


// function computer() {
    
//     console.log(42)
    
// }

// computer()

// let lap1 = 34
// let lap2 = 12
// let lap = 32

// function logLaptime() {
//     console.log (lap1 + lap2 + lap3)

// }

// let totalTime = lap1 + lap2 + lap3

// console.log(logLaptime)


// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1

// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// document.getElementById("count-el").innerText = 5



// let countEl = document.getElementById("count-el")

// let count = 0
// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }
// console.log(count)

// function save() {
    
//     console.log(count)
// }
// let username = "per"
// let message = "you have tree new not"

// console.log(message + "," + username + "!")

// let messageToUser = username + message

// console.log(messageToUser)

// let name = "Derick"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + name

// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Derick"
// let greeting = "welcome back "

// welcomeEl.innerText = greeting + name

// welcome.innerText += emoji



let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(saveEl)


function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
// innertext or textcontent depends on if you need styling or hidden signs
    
    countEl.textContent = 0
    count = 0
}
