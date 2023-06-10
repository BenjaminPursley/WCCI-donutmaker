//list of variables
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const buttonTest = document.getElementById("testing-button")

const donutDisplay = document.getElementById("donut-display")
const autoClickerDisplay = document.getElementById("auto-clicker-display")
const autoClickerPriceTag = document.getElementById("auto-clicker-price-tag")
const paraText = document.querySelector("p")

let donutCount = 0
let autoClickerCount = 0
let autoClickerCost = 100

const AutoCounter = setInterval(activateAutoClicker, 1000)


//list of required functions
function addDonutForClick() {
  donutCount++
}

function displayDonutCount() {
  donutDisplay.innerText = "You now have " + donutCount.toFixed(0) + " donuts!";
  if (donutCount < 150) {
    let donutPixels = `${donutCount}px`
    paraText.style.fontSize = donutPixels
  }
}

function purchaseAutoClicker() {
  if (checkAutoClickerPrice()) {
    donutCount-=autoClickerCost
    increaseAutoClickerCount()
    increaseAutoClickerCost()
    updateAutoClickerInfo()
  } else {
    alert("Sorry, you don't have enough donuts.")
  }
}

function checkAutoClickerPrice() {
  if (donutCount >= autoClickerCost) {
    return true
  } else {
    return false
  }
}

function increaseAutoClickerCount() {
  autoClickerCount++
}

function increaseAutoClickerCost() {
  autoClickerCost+=(autoClickerCost/10)
}

function activateAutoClicker() {
  donutCount+=autoClickerCount
  displayDonutCount()
}

//Resets the game state. This action should reset the game to zero donuts and zero Auto Clickers
function resetGameState() {
  donutCount = 0
  autoClickerCount = 0
  autoClickerCost = 100
  displayDonutCount()
  updateAutoClickerInfo()
}

//additional functions to satisfy assignment requirements
function updateAutoClickerInfo() {
  autoClickerDisplay.innerText = "You have " + autoClickerCount.toFixed(0) + " auto-clickers.";
  autoClickerPriceTag.innerText = "An auto-clicker currently costs " + autoClickerCost.toFixed(0) + " donuts.";
}


//button functionality
button1.addEventListener("click", function () {
  addDonutForClick()
  displayDonutCount()
})

button2.addEventListener("click", function () {
  purchaseAutoClicker()
  displayDonutCount()
})

button3.addEventListener("click", function () {
  resetGameState()
})

//Button for testing purposes
buttonTest.addEventListener("click", function () {
  donutCount+=100
  displayDonutCount()
})


