/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    for(let i = 1; i < pref.length; i++) {
        let j = 0;
        let xor = pref[0];
        while(j < i) {
            xor = xor ^ pref[j + 1];
            j++
        }
        pref[i] = xor
    }
    return pref;
};


console.log(findArray([5,2,0,3,1])); // [ 5, 7, 2, 3, 2 ]




var findArrayUsingRecursionMemo = function(pref) {
    function xorRecursion(i, perf, memo) {
        if(i >= perf.length) {
            return perf;
        }

        if(memo[i] !== undefined) {
            perf[i] = memo[i]
        } else {
            let xor = perf[0];
            let j = 0;
            while(j < i) {
                xor ^= pref[j + 1]
                j++
            }
            pref[i] = xor;
            memo[i] = xor;
        }
        return xorRecursion(i + 1, pref, memo);
    }
    return xorRecursion(1, pref, {});
};


console.log(findArrayUsingRecursionMemo([5,2,0,3,1])); // [ 5, 7, 2, 3, 2 ]

// With new variable
var findArrayWithVar = function (pref) {
    let s = [];
    for(let i = 0; i < pref.length; i++) {
        s.push(pref[i] ^ pref[i - 1]);
    }
    return s;
}
console.log(findArrayWithVar([5,2,0,3,1]));

// without having new variable
var findArrayOptimized = function(pref) {
    for (let i = pref.length - 1; i > 0; i--) {
        pref[i] = pref[i] ^ pref[i - 1];
    }
    return pref;
};
console.log(findArrayOptimized([5,2,0,3,1]));