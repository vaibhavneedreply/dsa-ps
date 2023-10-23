// Brute force with two loop:
const subSequenceBruteForce = (s) => {
    const subStringArr = [''];
    for(let i = 0; i < s.length; i++) {
        const currentLength = subStringArr.length;
        for(let j = 0; j < currentLength; j++) {
            subStringArr.push(subStringArr[j] + s[i]);
        }
    }
    subStringArr.shift(0);
    return subStringArr;
};

// Subsequence using dynamic programming:
const subSequenceUsingDP = (s) => {}

console.log(subSequenceBruteForce('abc')); // a ab ac abc b bc c
console.log(subSequenceBruteForce('vaibhav'));

console.log(subSequenceUsingDP('abc')); // a ab ac abc b bc c
console.log(subSequenceUsingDP('vaibhav'));
