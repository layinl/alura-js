alert("Welcome to the Secret Number Game!");

const MAX_NUMBER = 100;
let secretNumber = parseInt(Math.random() * MAX_NUMBER) + 1;
let counter = 1;
let number = -1;

console.log(secretNumber);
while (secretNumber != number) {
	number = prompt(`Choose a number from 1 to ${MAX_NUMBER}`);
	if (number == secretNumber)
		break;
	else if (number < secretNumber)
		alert("The secret number is greater than " + number);
	else
		alert("The secret number is less than " + number);
	counter++;
}

alert(`Nice! You discovered the secret number (${secretNumber}) in ${counter} ${(counter > 1)? "tries." : "try."}`);