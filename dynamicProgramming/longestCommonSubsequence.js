// LCS [Longest Common Subsequence]

// 1. Using Recursion

const lcsRecursion = (s1, s2, l1, l2) => {
    if(l1 === 0 || l2 === 0) return 0;
    if(s1[l1] === s2[l2]) {
        return 1 + lcsRecursion(s1, s2, l1 - 1, l2 - 1);
    } else {
        return Math.max(lcsRecursion(s1, s2, l1 - 1, l2), lcsRecursion(s1, s2, l1, l2 - 1))
    }
};

const main = (s1, s2) => {
    let l1 = s1.length;
    let l2 = s2.length;
    return lcsRecursion(s1, s2, l1, l2);
}


console.log(main('FISH', 'FOSH')); // FSH

// 2. Using Memoization
const lcsMemoization = (s1, s2, l1, l2, dp) => {
    if(l1 === 0 || l2 === 0) return 0;
    
    if(s1[l1] === s2[l2]) return dp[l1][l2] = 1 + lcsMemoization(s1, s2, l1 - 1, l2 - 1, dp);

    if (dp[l1][l2] != -1) {
        return dp[l1][l2];
    }

    return dp[l1][l2] = Math.max(lcsMemoization(s1, s2, l1 - 1, l2, dp), lcsMemoization(s1, s2, l1, l2 - 1, dp))
}

const main1 = (s1, s2) => {
    let l1 = s1.length;
    let l2 = s2.length;
    let dp = new Array(l1 + 1);
    for(let i = 0; i < l1 + 1; i++) {
        dp[i] = new Array(l2 + 1).fill(-1);
    }
    return lcsMemoization(s1, s2, l1, l2, dp);
}
console.log(main1('FISH', 'FOSH')); // FSH


