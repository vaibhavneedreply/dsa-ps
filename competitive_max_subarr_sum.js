/**
 * There are often several possible algorithms for solving a problem such that their time complexities are different
 * Given an array of n numbers, our task is to calculate the maximum subarray sum
 */

// A straight forward way to solve the problem is to go through all possible subarrays, 
// calculate the sum of values in each subarray and maintain the maximum sum. The following code implements this algorithm:
function maxSubArrSum(arr) {
    let max = 0; // Assuming if empty subarr is allowed
    for(let i = 0; i < arr.length; i++) {  
        for(let j = i; j < arr.length; j++) { 
            let sum = 0;
            for(let k = i; k <= j; k++) {
                sum += arr[k]
            }
            max = Math.max(max, sum);
        }
    }
    return max;
}

console.log(maxSubArrSum([-1, 2, 4, -3, 5, 2, -5, 2])); // O(n3)

// Easy to make algo 1 more efficient by removing one loop from it.
function maxSubArrSum1(arr) {
    let max = 0; // Assuming if empty subarr is allowed
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i; j < arr.length; j++) { 
            sum += arr[j]
            max = Math.max(max, sum);
        }
    }
    return max;
}

console.log(maxSubArrSum1([-1, 2, 4, -3, 5, 2, -5, 2])); // O(n2)

// Surprisingly, it is possible to solve the problem in O(n) time3, which means that just one loop is enough.
// The idea is to calculate, for each array position, the maximum sumof a subarray that ends at that position.
function maxSubArrSum2(arr) {
    let max = 0; // Assuming if empty subarr is allowed
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = Math.max(arr[i], sum + arr[i]);
        max = Math.max(max, sum);
    }
    return max;
}

console.log(maxSubArrSum2([-1, 2, 4, -3, 5, 2, -5, 2])); // O(n)