// 3. Longest Substring Without Repeating Characters

// Using two pointer
function lengthOfLongestSubstring(s: string): number {
    let p1 = 0;
    let p2 = 0;
    let hashMap: {[keys: string]: number} = {};
    let maxLength = 0;

    while(p2 < s.length) {
        if(s[p2] in hashMap && hashMap[s[p2]] >= p1 ) {
            p1 = hashMap[s[p2]] + 1
        }
        hashMap[s[p2]] = p2;
        maxLength = Math.max(maxLength, p2 - p1 + 1);
        p2++;
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring('abcdabsc')); // 5 (cdabs)

// brute force:
function lengthOfLongestSubstringBF(s: string): number {
    let maxLength = 0;
    
    for(let i = 0; i < s.length; i++) {
        const hashMap: {[keys: string]: number} = {};
        for(let j = i; j < s.length; j++) {
           if(hashMap[s[j]] !== undefined) {
            break;
           }
           hashMap[s[j]] = j;
           maxLength = Math.max(maxLength, j - i + 1)
        }
    }
    return maxLength;
}

console.log(lengthOfLongestSubstringBF('abcdabsc')); // 5 (cdabs)