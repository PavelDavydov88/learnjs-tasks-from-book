function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

let counter = makeCounter();

alert( counter() );
alert( counter.set(5) );
alert( counter.decrease() );
alert( counter.decrease() );
