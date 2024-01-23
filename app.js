alert("Welcome to the Secret Number Game!");

let secretNumber = parseInt(Math.random() * 10) + 1;
let counter = 1;
let number = -1;

console.log(secretNumber);
while (secretNumber != number) {
	number = prompt("Choose a number from 1 to 10");
	if (number == secretNumber)
		break;
	else if (number < secretNumber)
		alert("The secret number is greater than " + number);
	else
		alert("The secret number is less than " + number);
	counter++;
}

alert(`Nice! You discovered the secret number (${secretNumber}) in ${counter} ${(counter > 1)? "tries." : "try."}`);