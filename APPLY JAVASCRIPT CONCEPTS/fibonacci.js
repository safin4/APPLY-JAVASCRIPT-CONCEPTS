//fibo[2] = fibo[2-1] + [2-2]
//fibo[3] = fibo[3-1] + [3-2]
//fibo[4] = fibo[4-1] + [4-2]
//fibo[5] = fibo[5-1] + [5-2]
//fibo[n] = fibo[n-1] + [n-2]
//fibo[i] = fibo[i-1] + [i-2]

function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= 12; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

var result = fibonacci(12);
console.log(result);