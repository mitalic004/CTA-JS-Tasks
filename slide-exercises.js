// Activity 1
const films = [
	"Everything, Everywhere, All At Once",
	"Iron Man",
	"Wallace and Gromit",
	"Knives Out",
]

const filmCheck = (filmArr) => {
	if (filmArr[2] === "Wallace and Gromit") {
		return "Everybody knows the moon is made of cheese."
	} else {
		return "Crackers Gromit, we forgot the crackers!"
	}
}

console.log(filmCheck(films))
films.unshift("New Film")
console.log(filmCheck(films))

// Activity 2
const getRandomNum6 = () => {
	let numDiv7 = []
	for (let i = 0; i < 6; i++) {
		let num = Math.floor(Math.random() * 29) + 1
		console.log(num)
		div7 = num % 7

		numDiv7.push(`Number: ${num}, Divisible by 7: ${div7 === 0 ? true : false}`)
	}
	return numDiv7
}
console.log(getRandomNum6())

// Activity 3
const checkPrimes = (max) => {
	let checkPrimeNums = []
	for (let num = 1; num < max + 1; num++) {
		if (num === 2) {
			checkPrimeNums.push(`${num}: Prime`)
			continue
		}

		if (num <= 1 || num % 2 === 0) {
			checkPrimeNums.push(`${num}: Not Prime`)
			continue
		}

		let isPrime = true
		for (let i = 3; i <= Math.sqrt(num); i += 2) {
			if (num % i === 0) {
				isPrime = false
				break
			}
		}
		if (isPrime) {
			checkPrimeNums.push(`${num}: Prime`)
			continue
		} else {
			checkPrimeNums.push(`${num}: Not Prime`)
			continue
		}
	}
	return checkPrimeNums
}
console.log(checkPrimes(20))
