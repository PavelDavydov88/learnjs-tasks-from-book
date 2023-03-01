let x = prompt("Input a number - x");
let n = prompt("Input a degree - b");

function pow(x, n) {
	if (n % 1 != 0 || n <1 ) return "n is wrong"
	else return x**n
}

alert (pow(x, n));