const isPrime = (num) => {
	"use strict";
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return num;
}

const primeCounter = (min, max) => {
	"use strict";
	let number = min;
	let counter = 0;;
	for (let i = 0; i < max - min; i++) {
		if (isPrime(number)) {
			counter++;
			console.log(number);
		} 
		number++;
	}
	console.log(`There are ${counter} prime numbers between ${min} and ${max}`);	
};

primeCounter(/*min*/,/*max*/);

