
Question: 1

Given an array prices[] of size N denoting the cost of stock on each day, the task is to find the maximum total profit if we can buy and sell the stocks any number of times.

Note: We can only sell a stock which we have bought earlier and we cannot hold multiple stocks on any day.

Operations can be performed: sell, buy, let go

Examples:

Input: prices[] = {100, 180, 260, 310, 40, 535, 695}
Output: 865
Explanation: Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210
             Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655
             Maximum Profit  = 210 + 655 = 865

Input: prices[] = {4, 2, 2, 2, 4}
Output: 2
Explanation: Buy the stock on day 4 and sell it on day 5 => 4 – 2 = 2
             Maximum Profit  = 2


firmin 40
fistmax = 695 => 695 - 40 655
100 310 = 210

2 4

// const getMaxProfit = (prices) => {
//     const currProfit = 0;
//     // if(currProfit < 0) {
//     //     return 0;
//     // }
//     let max = 0;
//    for(let i = 0; i < prices.length; i++) {
//     max = Math.max(max, getMaxProfit(prices[i + 1] - currProfit))
//    }
//    return currProfit
// }

// console.log(getMaxProfit[100, 180, 260, 310, 40, 535, 695]);

