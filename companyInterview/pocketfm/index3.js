
// Question 3:

// Given a sorted array of positive integers, rearrange the array alternately i.e first element should be a maximum value, at second position minimum value, 
// at third position second max, at fourth position second min, and so on. 

// Examples: 

// Input: arr[] = {1, 2, 3, 4, 5, 6, 7} 
// Output: arr[] = {7, 1, 6, 2, 5, 3, 4}

// Input: arr[] = {1, 2, 3, 4, 5, 6} 
// Output: arr[] = {6, 1, 5, 2, 4, 3}

const rearragne = (arr) => {
    let p1 = 0;
    let p2 = arr.length - 1;

    while(p1 < p2) {
        let temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p1 + 1] = arr[p1];
        arr[p1] = temp;
        p1++
        p2--
    }

    return arr;
}

console.log(rearragne([1, 2, 3, 4, 5, 6, 7]));