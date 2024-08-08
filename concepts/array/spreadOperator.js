/**
 * Spread operator (...) in JS is used to expand elements of an iterable.
 * This operator provides the convenience of easily extracting a list of parameters from an array, making our code more versatile and readable
 * Internally when ... runnes following steps occures:
 *  1. Iterable protocol: First checks if the object is iterable. This means it checks whether the object has a method with the key.
 *  2. Iteration: It then iterates over the elements of the iterable object, effectively performing a for...of loop internally.
 *  3. Expansion: As it iterates, it expands each element into the context where the spread operator is used. For example, in an array literal like [...a], it adds each element of a to the new array.
 * 
 * Time Complexity: The time complexity of the spread operation [...] on an array a is O(n), where n is the number of elements in the array a. This is because each element needs to be iterated over and copied into the new array.
 * Space Complexity: The space complexity is also O(n) because a new array is created that has the same length as the original array a. This requires additional memory proportional to the number of elements in a.
 */


/**
 * Example:
 * [...a] => Time Complexity: O(n)  Space Complexity: O(n)
 * [...a, ...b] => Time Complexity: O(n + m)  Space Complexity: O(n + m)
 */