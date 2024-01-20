alert("Welcome to the Secret Number Game!");

let secretNumber = 2;
let number = prompt("Choose a number from 1 to 10");

if (number == secretNumber) alert(`Nice! You discovered the secret number (${secretNumber})`);
else alert("Too bad. You missed...");