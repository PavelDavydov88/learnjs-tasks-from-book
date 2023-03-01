let inputNumber = 0;
while (inputNumber <= 100) {
	inputNumber = prompt("Input a number", 0);
	if (!inputNumber) {
	alert("You hit ESC");
	break;	
	};
}
