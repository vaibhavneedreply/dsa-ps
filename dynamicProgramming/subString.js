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

// Substring using dynamic programming:
const subStringUsingDP = (s) => {}


console.log(subStringBruteForce('abc')); // a ab abc b bc c
console.log(subStringBruteForce('vaibhav'));

console.log(subStringUsingDefault('abc')); // a ab abc b bc c
console.log(subStringUsingDefault('vaibhav'));

console.log(subStringUsingDP('abc')); // a ab abc b bc c
console.log(subStringUsingDP('vaibhav'));

