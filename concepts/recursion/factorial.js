/* n! => n * (n - 1)!

if n > 0 => n * (n - 1)!
if n == 0 => 1

            return                state
f(4)        4 * f(3) = 24         Pause
f(3)        3 * f(2) = 6          Pause
f(2)        2 * f(1) = 2          Pause
f(1)        1 * f(0) = 1          Pause
f(0)        1
*/


const factorial = (n) => {
    console.log(`calculation fact of f${n}`);
    if(n === 0) return 1
    const fact = n * factorial(n - 1);
    console.log(`done! f${n} = ${fact}`);
    return fact;
};

console.log(factorial(4));