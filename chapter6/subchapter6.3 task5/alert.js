function inBetween(a, b) {
    return ( x => ( x >= a && x <= b));
}
function inArray(arg) {
    return ( x => (Array.from(arg).indexOf(x) >= 0));
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) );
alert( arr.filter(inArray([1, 2, 10])) );