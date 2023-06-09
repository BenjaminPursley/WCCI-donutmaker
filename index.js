/*
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    alert("You clicked!")
});
*/


const button1 = document.getElementById("button1")
const bigText = document.getElementById("page-header")
const paraText = document.querySelector("p")
//using the querySelectorALL function generates
//an array of all the searched for elements
const allOurToasters = document.querySelectorAll(".toaster");

let donutTotal = 0

button1.addEventListener("click", function () {
    donutTotal++
    bigText.innerText = "You now have " + donutTotal + " donuts!";
    let donutPixels = `${donutTotal}px`
    paraText.style.fontSize = donutPixels
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