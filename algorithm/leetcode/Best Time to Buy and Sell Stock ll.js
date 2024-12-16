/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profits = 0;
  let cur = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (cur > prices[i]) cur = prices[i];
    else {
      profits = profits + (prices[i] - cur);
      cur = prices[i];
    }
  }
  return profits;
};
