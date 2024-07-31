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
