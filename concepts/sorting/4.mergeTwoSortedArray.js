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
    let a = [[1,4,7,9,11],[1,3,4,5],[5,7],[5,8,13,14]];
    let ans = a[0];
    for(let i = 1; i < a.length; i++) {
        ans = mergeTwoSortedArray(ans, a[i]);   
    }
    return ans;
};

// console.log(mergeMultipleSortedList());

// Iterative way
const iterativeMergeSort = () => {
    let a = [1,4,7,9,11,1,3,4,5,5,7,5,8,13,14,2];
    let ans = [a[0]];
    for(let i = 1; i < a.length; i++) {
        let newArr = [];
        newArr.push(a[i]);
        ans = mergeTwoSortedArray(ans, newArr);
    }
    return ans;
}

console.log(iterativeMergeSort(), 'iterativeMergeSort');

// Recursive way:

const recursiveMergeSort = (arr, l, h) => {
    if(l >= h) return arr.slice(l, h + 1);
    let mid = Math.floor((l + h) / 2);
    let leftMerge = recursiveMergeSort(arr, l, mid);
    let rightMerge = recursiveMergeSort(arr, mid + 1, h);
    return mergeTwoSortedArray(leftMerge, rightMerge)
}
let unsorted = [1,4,7,9,11,1,3,4,5,5,7,5,8,13,14,2];
console.log(recursiveMergeSort(unsorted, 0, unsorted.length - 1), 'recursiveMergeSort');