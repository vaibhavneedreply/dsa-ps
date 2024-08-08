const unsortedArr = [1,4,2,44,32,56,8,65,3,2,1];

function selectionsSort(unsortedArr) {
    for(let i = 0; i < unsortedArr.length; i++) {
        let min = i;
        let temp = unsortedArr[i];
        for(let j = i + 1; j < unsortedArr.length; j++) {
            if(unsortedArr[j] < unsortedArr[min]) {
                min = j
            }
        }
        unsortedArr[i] = unsortedArr[min]
        unsortedArr[min] = temp;
    }
    return unsortedArr;
};

console.log(selectionsSort(unsortedArr));

function selectionsSort1(nums) {
    for(let i = 0; i < nums.length; i++) {
        let minIndex = i;
        let currMin = nums[i]
        for(let j = i + 1; j < nums.length; j++) {
            if(currMin > nums[j]) {
                currMin = nums[j]
                minIndex = j;
            }
        }
        [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
    }
    return nums;
}

console.log(selectionsSort1(unsortedArr));