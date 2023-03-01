function Calculator() {

  this.numberFirst = 0;
  this.numberSecond = 0;

  this.read = function() {
    this.numberFirst = prompt ("Input first nubmber", 0);
    this.numberSecond = prompt ("Input second nubmber", 0);
  };
  
  this.sum = function() {
    return +this.numberFirst + +this.numberSecond;
  };

  this.mul = function() {
    return +this.numberFirst * +this.numberSecond;
  };

};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );