// Question 2

// Given two sorted arrays, the arrays may have some common elements. Find the sum of the maximum sum path to reach 
// from the beginning of any array to the end of any of the two arrays. We can switch from one array to another array only at common elements. 

// Note: The common elements do not have to be at the same indexes.

// Examples: 
// Input: ar1[] = {2, 3, 7, 10, 12}, ar2[] = {1, 5, 7, 8}
// Output: 35

// Input: ar1[] = {10, 12}, ar2 = {5, 7, 9}
// Output: 22

// Input: ar1[] = {2, 3, 7, 10, 12, 15, 30, 34}, ar2[] = {1, 5, 7, 8, 10, 15, 16, 19}
// Output: 122


const maxSumPath = (arr1, arr2) => {
    let p1 = 0;
    let p2 = 0;

    let startPoint = arr1[p1] > arr2[p2] ? p1 : p2;

    let count = 0;
    while(startPoint < arr1.length) {

    }



}

console.log(maxSumPath[2, 3, 7, 10, 12], [1, 5, 7, 8]);