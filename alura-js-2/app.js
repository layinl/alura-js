const MAX_NUM = 3;
let drawnNumbers = [];
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
	showTextOnScreen("p", `Guess the number. Choose between 1 and ${MAX_NUM}`);
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
	let drawnNumber = parseInt(Math.random() * MAX_NUM + 1);
	if(drawnNumbers.length === MAX_NUM) {
		drawnNumbers = [];
		drawnNumbers.push(drawnNumber);
		return drawnNumber;
	}
	if (drawnNumbers.includes(drawnNumber))
		return generateRandomNumber();
	else {
		drawnNumbers.push(drawnNumber);
		return drawnNumber;
	}
}