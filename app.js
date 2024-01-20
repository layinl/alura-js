alert("Welcome to the Secret Number Game!");

let secretNumber = 7;
let counter = 1;
let number;

while (counter <= 5) {
	number = prompt("Choose a number from 1 to 10");
	if (number == secretNumber) {
		alert(`Nice! You discovered the secret number (${secretNumber})`);
		break;
	}
	else if (number < secretNumber)
		alert("The secret number is greater than " + number);
	else
		alert("The secret number is less than " + number);
	counter++;
}
