function sumInput() {
  
  let arrNumber = [];
  let number = prompt ("Input number");
 
  while (!number == "" | !number == null  ) {
    if (Number.isFinite(+number)) {
      arrNumber.push(+number);
      number = prompt ("Input number");
    } else number = "";   
  }

  let sum = 0;

  for ( let a of arrNumber) {
  sum +=a;
  }

  return sum;
}

alert( sumInput() );