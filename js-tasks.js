// 01 Variable Practice
const forename = "Mitali"
let age = 24
age += 1
console.log(`Hello, my name is ${forename}, and I am now ${age} years old!`)

// 02 Array Manipulation
const fruits = ["mango", "cherry", "orange", "peach", "blackberry"]
console.log(`First: ${fruits[0]}; Last: ${fruits[fruits.length - 1]}`)

fruits.push("banana")
fruits.splice(1, 1)
console.log(fruits)

// 03 Sum of an Array
const sumArray = (arr) => {
	let total = 0
	for (let i = 0; i < arr.length; i++) {
		total += arr[i]
	}
	return total
}
console.log(sumArray([1, 2, 3, 4, 5]))
console.log(sumArray([10, 20, 30]))

// 04 Build an Object
const book1 = {
	title: "Lord of the Rings",
	author: "J. R. R. Tolkien",
	pages: 425,
	isRead: false,
}

const book2 = {
	title: "Northern Lights",
	author: "Philip Pullman",
	pages: 400,
	isRead: true,
}

const describeBook = (book) => {
	console.log(
		`The book ${book.title} by ${book.author} has ${book.pages} pages and ${book.isRead ? "has" : "has not"} been read.`,
	)
}
describeBook(book1)
describeBook(book2)

// 05 Palindrome Checker
const isPalindrome = (str) => {
	str = str.toLowerCase()
	rev = str.split("").reverse().join("").toLowerCase()
	if (str === rev) {
		return true
	}
	return false
}

console.log(isPalindrome("RaceCar"))
console.log(isPalindrome("level"))
console.log(isPalindrome("heLLo"))

// 06 FizzBuzz Challenge
for (let i = 1; i < 101; i++) {
	let str = ""
	if (i % 3 === 0) {
		str = "Fizz"
	}
	if (i % 5 === 0) {
		str += "Buzz"
	}
	if (str) {
		console.log(str)
		continue
	}
	console.log(i)
}

// 09 Calculate Factorial
const factorial = (n) => {
	if (n === 0 || n === 1) {
		return 1
	}
	let result = 1
	for (let i = 1; i < n + 1; i++) {
		result *= i
	}
	return result
}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(7))
console.log(factorial(10))

// 10 Sort Names Alphabetically
let names = ["Charlie", "Alice", "Bob"]
const sortNames = (names) => names.sort()
console.log(sortNames(names))
console.log(sortNames(["G", "W", "A", "C"]))
