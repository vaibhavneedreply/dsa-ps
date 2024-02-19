function findMatrix(nums) {
    const mapObj = {};
    for(let i = 0; i < nums.length; i++) {
        if(mapObj[nums[i]]) {
            mapObj[nums[i]]++
        } else {
            mapObj[nums[i]] = 1
        }
    }
    
    // Create 2d array with max number;
    let max = 0;
    for(let i in mapObj) {
        if(mapObj[i] > max) {
            max = mapObj[i]
        }
    }
    
    const new2dArr = Array(max).fill(Array(0));
    
    for(let i in mapObj) {
        for(let j = 0; j < mapObj[i]; j++) {
            for(let k = 0; k < new2dArr.length; k++) {
                new2dArr[k].push(i)
            }
        }
    }

    console.log(new2dArr, 'new2dArr');
    return new2dArr;
};

const nums = [1,3,4,1,2,3,1];
console.log(findMatrix(nums))



// Get count:

// {
//     1: 3
//     3: 2
//     4: 1
//     2: 1
// }

// Get max count and create 2d array with that count