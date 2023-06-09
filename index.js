//list of constants
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const bigText = document.getElementById("page-header")
const paraText = document.querySelector("p")
//using the querySelectorALL function generates
//an array of all the searched for elements
const allOurToasters = document.querySelectorAll(".toaster");

let donutCount = 0
let autoClickerCount = 0
let autoClickerCost = 100

//list of required functions
function addDonutForClick() {
  donutCount++
}

function displayDonutCount() {
  bigText.innerText = "You now have " + donutCount + " donuts!";
  if (donutCount < 200) {
    let donutPixels = `${donutCount}px`
    paraText.style.fontSize = donutPixels
  }
}

function purchaseAutoClicker() {
  if (checkAutoClickerPrice()) {
    donutCount-=autoClickerCost
    increaseAutoClickerCount()
    increaseAutoClickerCost()
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
//Activates the Auto Clicker by applying clicks every second based on the Auto Clicker count
//Resets the game state. This action should reset the game to zero donuts and zero Auto Clickers




button1.addEventListener("click", function () {
  addDonutForClick()
  displayDonutCount()
})

button2.addEventListener("click", function () {
  purchaseAutoClicker()
  displayDonutCount()
})

//Button for testing purposes
button3.addEventListener("click", function () {
  donutCount+=100
  displayDonutCount()
})


allOurToasters.forEach((myToaster) => {
    myToaster.style.color = "royalblue";
    console.log(myToaster)
})

/*
remove text
bigText.remove()
*/


/*
//create a variable to track increments
let counter = 0


function countUp() {
    //this function increments the counter
    counter+=77;
    const bigText = document.getElementById("page-header");
    bigText.innerText = counter
}

const myInterval = setInterval(countUp, 1000)
*/