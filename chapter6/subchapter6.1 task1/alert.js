function sumTo(n) {
    if (n == 0) return n
    else  return (n + sumTo(n-1))
}

alert(sumTo(100))