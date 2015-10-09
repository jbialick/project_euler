/* 
Project Euler: Problem 01
If we list all the natural numbers below 10 that are multiplers of 3 or 5,
we get 3, 5, 6, 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function p1_calc() {
	var input = Number(document.getElementById("p1_input").value);
	var sum = 0;

	if (isNaN(input)) {
		document.getElementById("p1_output").innerHTML = "That's not a number!";
	}
	else if (input < 0) {
		document.getElementById("p1_output").innerHTML = "Positive numbers please!"
	}
	else {
		for (i=1; i<input; i++) {
			if ( i%3 === 0 || i%5 === 0) {
				sum += i;
			};
		};
	document.getElementById("p1_output").innerHTML = "Answer: "+sum;
	};
};