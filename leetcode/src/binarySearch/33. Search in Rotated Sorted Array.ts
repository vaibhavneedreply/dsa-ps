// Simple findIndex way
function search(nums: number[], target: number): number {
    const result = nums.findIndex(n => n === target);
    return result;
};

console.log(search([4,5,6,7,0,1,2], 7)); // Will work as findIndex is mostly usse binary search


// Custom binary search logic
function searchWithBinary(nums: number[], target: number): number {
    let start: number = 0;
    let end: number = nums.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if(nums[start] <= nums[mid]) {
            if(target >= nums[start] && target <= nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if(target >= nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}
console.log(searchWithBinary([4,5,6,7,0,1,2], 7));
