function calculateHr(piles: number[], currentHr: number): number {
    return piles.reduce((acc, pile) => acc + Math.ceil(pile / currentHr), 0);
}

/**
 * Consideration:
 * We know max banana can be eaten by koko would be max of piles in per hr
 * 
 */
function minEatingSpeed(piles: number[], h: number): number {
    let count: number = 0;
    let arrayMax = Math.max(...piles);
    for(let i = 1; i <= arrayMax; i++) {
        count = calculateHr(piles, i);
        if(count <= h) {
            return i;
            break;
        }
        count = 0;
    }
    return count;
};

console.log(minEatingSpeed([1,4,9,11], 5), 'answer'); // This would work because not a big value but think of having 1000 banana this approach will fail with "Time limit exceeded"


/**
 * Binary search
 * Consideration:
 * - Do you see the pattern ?
 * - Do you see the fixed range ?
 * - Oposite polority: (so answer will be low)
 *        low (not possible) ended up with low (possible)
 *        high (possible) ended up with high (not possible)
 */
function minEatingSpeedBinary(piles: number[], h: number): number {
    let low: number = 1;
    let high: number = Math.max(...piles);
    while(low <= high) {
        let mid: number = Math.floor((low + high) / 2);
        const count = calculateHr(piles, mid);
        if(count <= h) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}
console.log(minEatingSpeedBinary([1,4,9,11], 5), 'answer');