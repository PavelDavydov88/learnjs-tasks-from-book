let example = {};

function A() {
  return example;
}
function B() {
  return example;
}

let a = new A();
let b = new A();

alert( a == b ); // true