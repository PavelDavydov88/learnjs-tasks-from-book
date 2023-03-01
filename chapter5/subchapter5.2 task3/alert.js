function readNumber() {

  while (true) {
  
  let inputNumber = prompt ("Input number");
  
  if (inputNumber == null | inputNumber == "") return null;  
  
  if (Number.isFinite(+inputNumber)) return +inputNumber;
  }
}

alert(readNumber());