from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        totalProfit = 0
        i = 0
        lo = 0
        hi = 0
        n = len(prices)

        while i < n-1:
            while i < n-1 and prices[i] >= prices[i+1]:
                    i += 1
            lo = i

            while i < n-1 and prices[i] <= prices[i+1]:
                    i += 1
            hi = i
                    
            totalProfit = totalProfit + (prices[hi] - prices[lo])
        
        return totalProfit  

print(Solution().maxProfit([7,1,5,3,6,4]))
