// Brute force:
const subStringBruteForce = (s) => {
    const subStringArr = [];
    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < s.length; j++) {
            let subStr = '';
            for(let k = i; k <= j; k++) {
                subStr += s[k]
            }
            subStringArr.push(subStr);
        }
    }
    return subStringArr;
};

// Brute force substring function:
const subStringUsingDefault = (s) => {
    const subStringArr = [];
    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            subStringArr.push(s.substring(i, j));
        }
    }
    return subStringArr;
}

// Substring using recursion:
// const subStringUsingRecursion = (s) => {
//     let subString = [];
//     const generateSubString = (subString, index) => {
//         if (index === s.length) {
//             return;
//         }
//         for(let i = index; i < s.length; i++) {
//             const newSubstring = s.substring(index, i + 1);
//             subString.push(newSubstring);
//             generateSubString(newSubstring, i + 1);
//         }
//         generateSubString(subString, index + 1);
//     }
//     generateSubString('', 0);
//     return subString;
// }


console.log(subStringBruteForce('abc')); // a ab abc b bc c
console.log(subStringBruteForce('vaibhav'));

console.log(subStringUsingDefault('abc')); // a ab abc b bc c
console.log(subStringUsingDefault('vaibhav'));

// const allSubstrings = subStringUsingRecursion('abc');
// console.log(allSubstrings); // a ab abc b bc c


