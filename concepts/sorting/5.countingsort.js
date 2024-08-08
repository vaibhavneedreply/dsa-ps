let unsorted = [2,4,5,9,1,4]

function countingsort(nums) {
    let max = Math.max(...nums);
    let bookKeeping = new Array(max + 1).fill(0);

    for(let i = 0; i < nums.length; i++) {
        bookKeeping[nums[i]]++
    }
    console.log(bookKeeping);
    let sortedArray = [];
    for (let i = 0; i < bookKeeping.length; i++) {
        while(bookKeeping[i] > 0) {
            sortedArray.push(i)
            bookKeeping[i]--
        }
    }

    return sortedArray;
}

console.log(countingsort(unsorted));


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countingSortNegativeNumber = function(unsortedArr) {
    let max = 0;
    let min = Infinity;
    for(let i = 0; i < unsortedArr.length; i++) {
       if(unsortedArr[i] > max) {
            max = unsortedArr[i]
        }
        if(unsortedArr[i] < min) {
            min = unsortedArr[i]
        }
    }

    // Bookkeeping array
    let bookKeeping = [];
    for(let i = min; i < max + 1; i++) {
        bookKeeping[i] = 0
    }
    for(let i = 0; i < unsortedArr.length; i++) {
            bookKeeping[unsortedArr[i]]++
    }

    // Sorting
    let sortedArr = [];
    for(let i = min; i < bookKeeping.length; i++) {
        while(bookKeeping[i] > 0) {
            sortedArr.push(i);
            bookKeeping[i]--
        }
    }

    return sortedArr;
}

console.log(countingSortNegativeNumber([3,-1]));
console.log(countingSortNegativeNumber([-4,0,7,4,9,-5,-1,0,-7,-1]));