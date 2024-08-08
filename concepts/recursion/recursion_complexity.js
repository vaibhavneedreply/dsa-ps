/**
 * T(n) = T(n - 1) + 1
 * O(n)
 */
function t(n) {  // T(n)
    if(n > 0) {
        console.log(n); // 1
        t(n - 1) // T(n - 1)
    }
}
t(5);

/**
 * T(n) = T(n - 1) + n
 * O(n^2)
 */
function t1(n) {
    if(n > 0) {
        for(let i = 0; i < n; i++) {
            console.log(n);
        }
        t1(n - 1)
    }
}
t1(5);

/**
 * T(n) = T(n - 1) + log(n)
 * O(n log n)
 */
function t2(n) {
    if(n > 0) {
        for(let i = 0; i < n; i = i + 2) {
            console.log(n);
        }
        t2(n - 1)
    }
}
t2(5);

/**
 * T(n) = 2T(n - 1) + 1
 * O(2 ^ n)
 */
function t3(n) {
    if(n > 0) {
        console.log(n);
        t3(n - 1)
        t3(n - 1)
    }
}
t3(5);

/**
 * T(n) = T(n / 1) + 1
 * O(log n)
 */
function t4(n) {
    if(n > 1) {
        console.log(n);
        t4(n / 2)
    }
}
t4(5);
