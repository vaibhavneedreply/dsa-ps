const a = [1,4,7,9,11];
const b = [1,3,4,5];

const mergeTwoSortedArray = (a, b) => {
    let i = 0;
    let j = 0;
    let sortedList = [];

    while(i <= a.length - 1 && j <= b.length - 1) {
        if(a[i] < b[j]) {
            sortedList.push(a[i])
            i++
        } else {
            sortedList.push(b[j])
            j++
        }
    }
    
    for(; i < a.length; i++) {
        sortedList.push(a[i])   
    }

    for(; j < b.length; j++) {
        sortedList.push(b[j]);
    }
    return sortedList;
};


// console.log(mergeTwoSortedArray(a, b));


const mergeMultipleSortedList = () => {
    let a = [[1,4,7,9,11],[1,3,4,5],[5,7],[8,13,14,5]];
    let step = 1;
    while(step < a.length) {
        for(let i = 0; i < a.length - 1; i += 2 * step) {
            a = mergeTwoSortedArray(a[i], a[i+1]);   
        }
        step *= 2;
    }
    return a;
};

console.log(mergeMultipleSortedList());