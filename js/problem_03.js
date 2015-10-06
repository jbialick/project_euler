/*
Project Euler: Problem 03
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

var n = 600851475143;
var i = 2;
var factorArray = [];

//if n < 2 { console.log("Enter a number >= 2")}  --add later?

console.log('n = ' + n);

while (i * i <= n) {
	if (n % i === 0) {
		n /= i;
		factorArray.push(i);
	}
	else {
		i += 1;
	};
};
console.log('Largest Prime Factor: ' + n)

// Print all Prime Factors

var factorList = '';

factorArray.push(n);

for (var j=0; j<factorArray.length; j++) {
	factorList = factorList + factorArray[j] + ' ';
};

console.log('All Prime Factors: ' + factorList);