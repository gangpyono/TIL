from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = float("-inf")
        min_value = prices[0]

        for price in prices:
            if price < min_value:
                min_value = price
            else:
                max_profit = max(max_profit, price - min_value)

        return max_profit


print(Solution().maxProfit([7,1,5,3,6,4]))