function checkAgeVar1(age) {
	return	(age > 18) ? true : confirm ('Did your parents allow it?')
}

function checkAgeVar2(age) {
	return	(age > 18) || confirm ('Did your parents allow it?')
}


alert (checkAgeVar1(20));
alert (checkAgeVar2(17));