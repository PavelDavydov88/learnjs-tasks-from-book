function downRange(arr) {
  arr.sort( (a, b) => (b - a) );

}

let arr = [5, 2, 1, -10, 8];

downRange(arr);

alert( arr );