function printNumbers(from, to) {
    let tmp = from;

    setTimeout(function go() {
        alert(tmp);
        if (tmp < to) {
            setTimeout(go, 1000)
        }
        tmp++;
    }, 1000);

}

printNumbers(2, 8);