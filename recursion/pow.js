/*
x ^ n => x * x * x ...... x

x ^ n => x * x ^ n - 1     if n > 0
      => 1                 if n = 0

*/

const powWithRecursion = (x, n) => {
    if(n === 0) return 1

    return x * powWithRecursion(x, n - 1);
} 