// Fibonacci With Recursion O(n ^ 2)

const fibonacciWithRecursion = (n) => {
    if(n <= 1) return n;

    return fibonacciWithRecursion(n - 1) + fibonacciWithRecursion(n - 2)
}

// console.log(fibonacciWithRecursion(40));

// Fibonacci with Array Memoization
const fibonacciWithArrayMemoRecursion = (n) => {
    const memo = new Array(n + 1).fill(-1);
    return fibonacci = (n) => {
        if(memo[n] === -1) {
            memo[n] = n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
        }
        return memo[n];
    }
}
const fib1 = fibonacciWithArrayMemoRecursion(150);
console.log(fib1(150));