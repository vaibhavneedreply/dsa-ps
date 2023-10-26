// Recursive method
const fibonacciRecursive = (n) => {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};
console.log(fibonacciRecursive(10));

// DP :: Overlapping Subproblem :: Memorization :: Top Down Approach
// With Object Map
const fibonacciTopDownWithObjMap = () => {
    const memo = {};
    return fibonacci = (n) => {
        if(n in memo) {
            return memo[n];
        } else {
            if(n <= 1) {
                return n;
            }
            memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
        }
        return memo[n]
    }
};
const fib = fibonacciTopDownWithObjMap();
console.log(fib(10));

// With Array
const fibonacciTopDownWithArray = () => {
    const lookup = new Array(1000).fill(-1);
    return fibonacci = (n) => {
        if(lookup[n] === -1) {
            if(n <= 1) {
                lookup[n] = n
            } else {
                lookup[n] = fibonacci(n-1) + fibonacci(n-2);
            }
        }
        return lookup[n];
    }
};
const fib1 = fibonacciTopDownWithArray();
console.log(fib1(10));

// DP :: Overlapping Subproblem :: Memorization :: Bottom Up Approach
const fibonacciBottomUp = (n) => {
    let lookup = new Array(n + 1);
    lookup[0] = 0;
    lookup[1] = 1;

    for(let i = 2; i <= n; i++) {
        lookup[i] = lookup[i - 1] + lookup[i - 2];
    }
    return lookup[n];
};

console.log(fibonacciBottomUp(10));

