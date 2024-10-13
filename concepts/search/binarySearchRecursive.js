/**
 * Algo:
 */

const search = (l, h, nums, key) => {
    if(l === h) {
        if(nums[l] === key) {
            return l;
        } else {
            return -1;
        }
    } else {
        let mid = Math.floor((l + h) / 2);
        if(key === nums[mid]) {
            return mid;
        } else if (key < nums[mid]) {
            return search(l, mid - 1, nums, key)
        } else {
            return search(mid + 1, h, nums, key)
        }
    }
}

const BinarySearchRecursive = (nums, key) => {
    let l = 0;
    let h = nums.length - 1;

    return search(l, h, nums, key)
}

console.log(BinarySearchRecursive([3,6,8,12,14,17,25,29,31,36,42,47,53,55,62], 12));
console.log(BinarySearchRecursive([3,6,8,12,14,17,25,29,31,36,42,47,53,55,62], 29));
console.log(BinarySearchRecursive([3,6,8,12,14,17,25,29,31,36,42,47,53,55,62], 55));
console.log(BinarySearchRecursive([3,6,8,12,14,17,25,29,31,36,42,47,53,55,62], 100));