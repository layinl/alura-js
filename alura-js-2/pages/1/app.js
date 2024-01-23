let title = document.querySelector("h1");
title.innerHTML = "Challenge time.";

function clickLog() {
    console.log("The button was clicked");
}

function loveJS() {
    alert("I ♥ JS");
}

function askCity() {
    let city = prompt("In which city have you been?");
    alert(`I was in ${city} and I remembered you.`);
}

function sum() {
    let one = parseFloat(prompt("Please type a number"));
    let two = parseFloat(prompt("Please type another number"));
    alert(one + two);
}