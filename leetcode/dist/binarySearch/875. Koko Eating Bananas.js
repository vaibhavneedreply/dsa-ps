"use strict";
function calculateHr(piles, currentHr) {
    return piles.reduce((acc, pile) => acc + Math.ceil(pile / currentHr), 0);
}
function minEatingSpeed(piles, h) {
    let count = 0;
    let arrayMax = Math.max(...piles);
    for (let i = 1; i <= arrayMax; i++) {
        count = calculateHr(piles, i);
        if (count <= h) {
            return i;
            break;
        }
        count = 0;
    }
    return count;
}
;
console.log(minEatingSpeed([1, 4, 9, 11], 5), 'answer');
function minEatingSpeedBinary(piles, h) {
    let low = 1;
    let high = Math.max(...piles);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        const count = calculateHr(piles, mid);
        if (count <= h) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return low;
}
console.log(minEatingSpeedBinary([1, 4, 9, 11], 5), 'answer');
