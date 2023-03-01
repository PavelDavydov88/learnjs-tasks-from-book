let inputNumber = prompt("Input a number", 2);
	for (let i = 2; i <= inputNumber; i++) {
		let countSimple = 0;
		for (let j = 2; j <= i; j++) {	
			if (i % j ==0 ) countSimple++;
		}
		if (countSimple == 1) alert(i);
	}