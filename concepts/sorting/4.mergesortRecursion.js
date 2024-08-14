const unsortedArr = [99,44,6,2,1,5,63,87,283,4,0];

function mergeSort(unsortedArr, l, h) {
    if (l >= h) return;
    let mid = Math.floor((l + h) / 2);
    mergeSort(unsortedArr, l, mid);
    mergeSort(unsortedArr, mid + 1, h);
    return merge(unsortedArr, l, mid, h);
}

function merge(arr, start, mid, end) {
    let mergeList = [];
    let i = start;
    let j = mid + 1;
    while (i <= mid && j <= end) {
      if (arr[i] < arr[j]) {
        mergeList.push(arr[i++]);
      } else {
        mergeList.push(arr[j++]);
      }
    }
    while (i <= mid) {
      mergeList.push(arr[i++]);
    }
  
    while (j <= end) {
      mergeList.push(arr[j++]);
    }
    for (let k = 0; k < mergeList.length; k++) {
      arr[start + k] = mergeList[k];
    }
  
    return arr;
  }
  
      // const middle = Math.floor(unsortedArr.length / 2);
    // const left = unsortedArr.slice(0, middle);
    // const right = unsortedArr.slice(middle);

    // return merge(unsortedArr, left,  middle, right);

// function merge(left, right) {
//     const result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while(leftIndex < left.length && rightIndex < right.length) {
//         if(left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex])
//             leftIndex++
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++
//         }
//     }
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// }

console.log(mergeSort(unsortedArr, l = 0, h = unsortedArr.length - 1));
