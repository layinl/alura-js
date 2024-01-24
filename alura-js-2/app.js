let secretNumber = generateRandomNumber();

function showTextOnScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

showTextOnScreen("h1", "Number Guessing Game");
showTextOnScreen("p", "Guess the number. Choose between 1 and 100");

function verifyGuess() {
    let guess = document.querySelector("input").value;
    console.log(guess == secretNumber);
}

function generateRandomNumber() {
    return parseInt(Math.random() * 100 + 1);
}