const unsortedArr = [3,1,7,43,22,76,4,2,1];

function insertionSort(unsortedArr) {
    for(let i = 0; i < unsortedArr.length; i++) {
        if(unsortedArr[i] < unsortedArr[0]) {
            unsortedArr.unshift(unsortedArr.splice(i, 1)[0])
        } else {
            for(let j = 1; j < i; j++) {
                if(unsortedArr[i] > unsortedArr[j - 1] && unsortedArr[i] < unsortedArr[j]) {
                    unsortedArr.splice(j, 0, unsortedArr.splice(i, 1)[0])
                }
            }
        }
    }
    return unsortedArr;
}


// Other and simple way for insertion sort
function insertionSort1(unsortedArr) {
    for(let i = 1; i < unsortedArr.length; i++) {
        for(let j = i; j > 0; j--) {
            if(unsortedArr[j] < unsortedArr[j - 1]) {
                // const temp = unsortedArr[j];
                // unsortedArr[j] = unsortedArr[j - 1];
                // unsortedArr[j - 1] = temp;
                // Replace swap logic in single line
                [unsortedArr[j], unsortedArr[j - 1]] = [unsortedArr[j - 1], unsortedArr[j]]
            }
        }
    }
    return unsortedArr;
}

console.log(insertionSort(unsortedArr));
console.log(insertionSort1(unsortedArr));



function insertionSort2(nums) {
    for(let i = 1; i < nums.length; i++) {
        let j = i;
        while(j >= 0) {
            if(nums[j] < nums[j - 1]) {
                [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
            }
            j--
        }
    }
    return nums;
}


console.log(insertionSort2([65,23,4,6,64,65,1]));