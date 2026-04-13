// 07 Simple Calculator with Functions
const prompt = require("prompt-sync")()

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

// let choice = new Input({
// 	name: "choice",
// 	message:
// 		"Please choose an number option:\n 1) Add\n 2) Subtract\n 3) Multiply\n 4) Divide\n 5) Exit",
// })
let choice
let notValid = true

while (notValid) {
	// choice.ask(function (answers) {
	// 	console.log(answers)
	// })
	choice = Number(
		prompt(
			"Please choose an number option:\n 1) Add\n 2) Subtract\n 3) Multiply\n 4) Divide\n 5) Exit\n",
		),
	)

	if (
		choice === 1 ||
		choice === 2 ||
		choice === 3 ||
		choice === 4 ||
		choice === 5
	) {
		notValid = false
	} else {
		console.log("That is not a valid choice, please enter an option number.")
	}
}

if (choice === 5) {
	console.log("Exiting...")
} else {
	let num1 = Number(prompt("Please enter the first number: "))
	let num2 = Number(prompt("Please enter the second number: "))
	switch (choice) {
		case 1:
			console.log(`Result: ${add(num1, num2)}`)
			break
		case 2:
			console.log(`Result: ${subtract(num1, num2)}`)
			break
		case 3:
			console.log(`Result: ${multiply(num1, num2)}`)
			break
		case 4:
			if (num2 === 0) {
				console.log("Error! Division by 0.")
			} else {
				console.log(`Result: ${divide(num1, num2)}`)
			}
	}
}
