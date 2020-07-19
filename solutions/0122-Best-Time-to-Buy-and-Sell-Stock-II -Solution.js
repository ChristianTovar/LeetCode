/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let acc = 0;
  
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) acc += prices[i + 1] - prices[i];
  }
  return acc;
};


