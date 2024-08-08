/**
 * Array.from: 
 * 1. Creates a new shallow-copied array
 * 2. An iterable or array-like object to convert to an array.
 */
console.log(Array.from('foo')); // ['f', 'o', 'o']
console.log(Array.from([1,2,3], (x) => x + x)); // [2, 4, 6]

// Remove all duplicate and get an array back from set
const set = new Set(["a", "b", "b", "c"]);
console.log(Array.from(set)); // ["a", "b", "c"];

// create array of map values or map keys
const a = new Map([[1,2], ["a", "b"]]);
console.log(Array.from(a.values()));
console.log(Array.from(a.keys()));


/**
 * Array.entries:
 * - Returns a new array object that contains the key/value pairs for each index in the array
 */

console.log(['a', 'b', 'c'].entries()); // [0, 'a'] [1, 'b'] [2, 'c']

/**
 * Array.fill
 * 
 * Syntex: fill(value, start, end)
 */
let array = new Array(5);
console.log(array.fill(0));
console.log(array.fill(1, 1));
console.log(array.fill(2, 1, 2));


/**
 * Array.indexOf
 * returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * 
 * Syntex
 * indexOf(searchElement)
 * indexOf(searchElement, fromIndex)
 */
console.log(array.indexOf(0));
console.log(array.indexOf(1, 3));

/**
 * Array.shift
 * Removes first element from the array and return that value also changes the length of array
 * 
 * Syntex:
 * shift()
 */

/**
 * Array.unshift
 * The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
 */


/**
 * Array.slice
 * The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
 * where start and end represent the index of items in that array. The original array will not be modified.
 * 
 * Syntex:
 * slice()
 * slice(start)
 * slice(start, end)
 */
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // ['camel', 'duck', 'elephant']
console.log(animals.slice(2, 4)); // ['camel', 'duck']
console.log(animals.slice(-2)); // ['duck', 'elephant']

/**
 * Array.splice
 * The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 * To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced().
 * To access part of an array without modifying it, see slice().
 * 
 * Syntex:
 * splice(start)
 * splice(start, deleteCount)
 * splice(start, deleteCount, item1)
 * splice(start, deleteCount, item1, item2)
 * splice(start, deleteCount, item1, item2, ..., itemN)
 */




