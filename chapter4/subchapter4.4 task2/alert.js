let calculator = {
  numberFirst : 0,
  numberSecond : 0,
  read() {
    this.numberFirst = prompt ("Input first nubmber", 0);
    this.numberSecond = prompt ("Input second nubmber", 0);
  },
  sum() {
    return +this.numberFirst + +this.numberSecond;
  },
  mul() {
    return +this.numberFirst * +this.numberSecond;
  },

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );