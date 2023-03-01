function shuffle(array) {
  array.sort(function(a, b) { return (-1 + Math.floor(Math.random()*3)) })
}

let arr = [1, 2, 3];

shuffle(arr);
alert (arr);

shuffle(arr);
alert (arr);

shuffle(arr);
alert (arr);