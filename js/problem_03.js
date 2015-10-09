/*
Project Euler: Problem 03
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

function p3_calc() {
	var n = Number(document.getElementById("p3_input").value);
	var i = 2;
	//var factorArray = [];

	//if n < 2 { console.log("Enter a number >= 2")}  --add later?
	if (isNaN(n)) {
		document.getElementById("p3_output").innerHTML = "That's Not a Number!"
	}
	else if (n<0) {
		document.getElementById("p3_output").innerHTML = "Positive Numbers Please!"
	}
	else if (n<2) {
		document.getElementById("p3_output").innerHTML = n+" Has No Prime Factors!"
	}
		else {
		while (i * i <= n) {
			if (n % i === 0) {
				n /= i;
				//factorArray.push(i);
			}
			else {
				i += 1;
			};
		};
		document.getElementById("p3_output").innerHTML = "Answer: "+n;
	};
	// Print all Prime Factors
/*
	var factorList = '';
	factorArray.push(n);

	for (var j=0; j<factorArray.length; j++) {
		factorList = factorList + factorArray[j] + ' ';
	};
	console.log('All Prime Factors: ' + factorList);
*/
};