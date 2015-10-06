/* 
Project Euler: Problem 01
If we list all the natural numbers below 10 that are multiplers of 3 or 5,
we get 3, 5, 6, 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function p1_calc() {
	var input = Number(document.getElementById("p1_input").value);
	// CHECK FOR STRING??
	var sum = 0;

	for (i=1; i<input; i++) {
		if ( i%3 === 0 || i%5 === 0) {
			sum += i;
			//console.log(i);
		};
	};

document.getElementById("p1_input").value = sum;
}
/*
EXAMPLE
<body>

<input type="number" id="myNumber" value="">
<p>Click the button to change the number of the number field.</p>
<button onclick="myFunction()">Try it</button> <br><br>
<input type="number" id="test" value="2"><br><br>
<div id="output"></div>

<script>
function myFunction() {
    var test = document.getElementById("myNumber").value;
    document.getElementById("test").value = test;
    document.getElementById("output").innerHTML = test;
}
</script>

</body>
</html>
*/