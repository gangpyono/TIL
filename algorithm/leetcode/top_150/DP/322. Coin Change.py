# 다시 풀것
from typing import List


class Solution:
    # Bottom-Up
    # Time: O(coin * amount)
    # space: O(amount)
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [10001] * (amount + 1)
        dp[0] = 0

        for coin in coins:
            for i in range(coin, len(dp)):
                dp[i] = min(dp[i - coin] + 1, dp[i])

        return dp[amount] if dp[amount] != 10001 else -1

    # Top-Down
    # Time: O(coin * amount)
    # space: O(amount)
    def coinChange1(self, coins: List[int], amount: int) -> int:
        coins.sort()
        memo = {0: 0}

        def min_coins(amt):
            if amt in memo:
                return memo[amt]
            else:
                minn = float("inf")
                for coin in coins:
                    diff = amt - coin
                    if diff < 0:
                        break
                    minn = min(minn, 1 + min_coins(diff))

            memo[amt] = minn
            return memo[amt]

        result = min_coins(amount)

        if result == float("inf"):
            return -1
        else:
            return result


print(Solution().coinChange([1, 2, 5], 11))
