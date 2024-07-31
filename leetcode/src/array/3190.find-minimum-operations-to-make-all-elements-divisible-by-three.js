var minimumOperations = function(nums) {
    let op = 0;
    let value = 0;
    for(let i = 0; i < nums.length; i++) {
        let div = nums[i] % 3;
        if(div !== 0) {
            if(value === 0) {
                while(div > 0) {
                    let div1 = nums[i] + value % 3;
                    let div2 = nums[i] - value % 3;
                    console.log(div1, div2)
                    if(div1 === 0 || div2 === 0) {
                        div = 0;
                    } else {
                        div = div1
                        value++
                    }
                }
                op++
            } else {
                op++
            }
        }
    }
    return op;
};

console.log(minimumOperations[8]);