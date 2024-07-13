var flat = function (arr, n) {
    if(n === 0) return arr
    let flattenArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            const internalFlatten = flat(arr[i], n -1);
            flattenArr = [...flattenArr, ...internalFlatten]
        } else {
            flattenArr.push(arr[i])
        }
    }
    return flattenArr;
};
console.log(flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]], 1));


var flatWithReduce = (arr, n) => {
    if(n === 0) return arr;
    return arr.reduce((acc, curr) => {
        if(Array.isArray(curr)) {
            acc.push(...flatWithReduce(curr, n - 1))
        } else {
            acc.push(curr);
        }
        return acc;
    }, [])
}
console.log(flatWithReduce([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]], 1));