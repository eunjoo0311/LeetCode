/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrices = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        const profit = prices[i] - minPrices

        maxProfit = Math.max(maxProfit, profit)
        minPrices = Math.min(prices[i], minPrices)
    }
    return maxProfit
};