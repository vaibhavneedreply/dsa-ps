// Merge given unsorted array
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
function twoWaymergeSort(arr) {
  let n = arr.length;
  let step = 1; // As length is 8 and considering every element is a list
  while (step < n) {
    for (let i = 0; i < n - 1; i += 2 * step) {
        let mid = Math.min(i + step - 1, n - 1);
        let end = Math.min(i + 2 * step - 1, n - 1);
        arr = merge(arr, i, mid, end);
    }
    step *= 2;
  }
  return arr;
}

console.log(twoWaymergeSort([2, 1, 7, 9, 5, 4, 3, 1]));

// Merge two sorted array
// mergeTwoArray()

// mergeTwoArray([2,1,7,9,5,4,3,1]);
