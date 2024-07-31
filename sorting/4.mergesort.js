const unsortedArr = [99,44,6,2,1,5,63,87,283,4,0];

function mergeSort(unsortedArr) {
    if(unsortedArr.length === 1) return unsortedArr;

    const middle = Math.floor(unsortedArr.length / 2);
    const left = unsortedArr.slice(0, middle);
    const right = unsortedArr.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    console.log(left, right);
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// console.log(mergeSort(unsortedArr));


function mergeSort1(nums) {
    if(nums.length === 1) return nums;
    let mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid)
    const right = nums.slice(mid)

    return merge(mergeSort1(left), mergeSort1(right))
}

console.log(mergeSort1([65,23,5,2,1,4,32]));