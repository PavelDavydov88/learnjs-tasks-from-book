function aclean(arr) {
  let finishArr = [];
  let set = new Set;

  for (let word of arr) {

    let lowWord = word.toLowerCase().split("").sort().join("");

    if ( !set.has(lowWord) ) {
      set.add(lowWord);
      finishArr.push(word);
    }

  }

  return finishArr;
}

let arr = ["Nap", "nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"