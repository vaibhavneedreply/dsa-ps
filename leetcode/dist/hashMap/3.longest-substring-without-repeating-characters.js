"use strict";
function lengthOfLongestSubstring(s) {
    let p1 = 0;
    let p2 = 0;
    let hashMap = {};
    let maxLength = 0;
    while (p2 < s.length) {
        if (s[p2] in hashMap && hashMap[s[p2]] >= p1) {
            p1 = hashMap[s[p2]] + 1;
        }
        hashMap[s[p2]] = p2;
        maxLength = Math.max(maxLength, p2 - p1 + 1);
        p2++;
    }
    return maxLength;
}
console.log(lengthOfLongestSubstring('abcdabsc'));
function lengthOfLongestSubstringBF(s) {
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        const hashMap = {};
        for (let j = i; j < s.length; j++) {
            if (hashMap[s[j]] !== undefined) {
                break;
            }
            hashMap[s[j]] = j;
            maxLength = Math.max(maxLength, j - i + 1);
        }
    }
    return maxLength;
}
console.log(lengthOfLongestSubstringBF('abcdabsc'));
