var jump = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let stepCount = 0;
    let max = 0;

    for(let i = 0; i < end; i++) {
        max = Math.max(max, i + nums[i]);
        if (i == start) {
            stepCount++;
            start = max;
        }

        if (start >= end - 1) break;
    }
    return stepCount;
}

console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,0,1,4]));