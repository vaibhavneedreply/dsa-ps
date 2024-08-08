/**
 * Algo:
 */

const BinarySearchIterative = (nums, key) => {
    let l = 0;
    let h = nums.length - 1;
    let mid;
    while(l <= h) {
        mid = Math.floor(h + l / 2);
        if(key === nums[mid]) {
            return mid;
        } else if (key < nums[mid]) {
            h = mid - 1;
        } else {
            l = mid + 1
        }
    }
    return -1;
}

console.log(BinarySearchIterative([3,6,8,12,14,17,25,29,31,36,42,47,53,55,62], 12));
console.log(BinarySearchIterative([3,6,8,12,14,17,25,29,31,36,42,47,53,55,62], 29));
console.log(BinarySearchIterative([3,6,8,12,14,17,25,29,31,36,42,47,53,55,62], 55));
console.log(BinarySearchIterative([3,6,8,12,14,17,25,29,31,36,42,47,53,55,62], 100));