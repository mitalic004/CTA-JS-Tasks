// 08 Random Number Guessing Game
const prompt = require("prompt-sync")()

const ranNum = Math.floor(Math.random() * 19) + 1

let guess

while (guess != ranNum) {
	guess = Number(prompt("Please guess a number between 1 and 20: "))

	if (guess === ranNum) {
		console.log("You guessed the right number!")
	} else if (guess < ranNum) {
		console.log("Too low")
	} else {
		console.log("Too high")
	}
}
