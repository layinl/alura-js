let secretNumber = generateRandomNumber();
let tries = 1;

showInitialMessage();

function showTextOnScreen(tag, text) {
	let field = document.querySelector(tag);
	field.innerHTML = text;
}

function cleanField() {
	guess = document.querySelector("input");
	guess.value = "";
}

function showInitialMessage() {
	showTextOnScreen("h1", "Number Guessing Game");
	showTextOnScreen("p", "Guess the number. Choose between 1 and 100");
}

function verifyGuess() {
	let guess = document.querySelector("input").value;
	if (guess == secretNumber) {
		showTextOnScreen("h1", "You guessed it!");
		showTextOnScreen("p", `You found the secret number in ${tries} ${(tries > 1)? "tries" : "try"}.`);
		document.getElementById("reset").removeAttribute("disabled");
		return;
	} else if (guess > secretNumber)
		showTextOnScreen("p", "The secret number is smaller than " + guess);
	else
		showTextOnScreen("p", "The secret number is greater than " + guess);
	tries++;
	cleanField();
}

function resetGame() {
	secretNumber = generateRandomNumber();
	tries = 1;
	cleanField();
	document.getElementById("reset").setAttribute("disabled", true);
	showInitialMessage();
}

function generateRandomNumber() {
	return parseInt(Math.random() * 100 + 1);
}