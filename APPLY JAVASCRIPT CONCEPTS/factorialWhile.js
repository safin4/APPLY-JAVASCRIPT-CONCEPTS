function factorial(n) {
    var i = 1;
    var fact = 1;
    while ( i <= 7) {
        fact = fact * i;
        i++;
    }
    return fact;
}

var result = factorial(10);
console.log(result);