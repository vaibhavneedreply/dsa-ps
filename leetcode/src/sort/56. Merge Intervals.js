var merge = function(intervals) {
    let nonOverLapping = [intervals[0]];
    for(let i = 1; i < intervals.length; i++) {
            for(let j = 0; j < nonOverLapping.length; j++) {
                console.log(nonOverLapping,nonOverLapping.length, 'nonOverLapping');
            if(intervals[i][0] >= nonOverLapping[j][0] && intervals[i][0] <= nonOverLapping[j][1]) {
                let sortArr = [...intervals[i], ...nonOverLapping[j]].sort((a, b) => a - b);
                let min = Math.min(...sortArr);
                let max = Math.max(...sortArr);
                nonOverLapping[j] = [min, max]
            } else {
                nonOverLapping.push(intervals[i])
                break;
            }
        }
    }
    return nonOverLapping;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[0,4]]));