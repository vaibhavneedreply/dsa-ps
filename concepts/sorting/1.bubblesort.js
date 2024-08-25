const unsortedArr = [1,5,88,34,45,2,7,6];

function bubbleSort(unsortedArr) {
    for(let i = 0; i < unsortedArr.length; i++) {
        for(let j = 0; j < unsortedArr.length; j++) {
            if(unsortedArr[j] > unsortedArr[j + 1]) {
                const temp = unsortedArr[j];
                unsortedArr[j] = unsortedArr[j + 1];
                unsortedArr[j + 1] = temp;
            }
        }
    }
    return unsortedArr;
};

console.log(bubbleSort(unsortedArr));

function bubbleSort1(nums) {
    let n = nums.length;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if(nums[i] > nums[j]) {
                nums[i][j] = nums[j][i];
            }
        }
    }
    return nums;
}
console.log(bubbleSort1(unsortedArr));
