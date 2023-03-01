function unique(arr) {
  let finishArr = [];

  for (let i = 0; i < arr.length; i++) {
    if ( !finishArr.includes(arr[i]) ) finishArr.push(arr[i]);
  }

  return finishArr;

}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O