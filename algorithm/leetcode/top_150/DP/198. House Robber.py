from typing import List


class Solution:
    # bottom-up
    # time: O(n)
    # space: O(n)
    def rob1(self, nums: List[int]) -> int:
        n = len(nums)

        if n == 1:
            return nums[0]

        if n == 2:
            return max(nums[0], nums[1])

        dp = [0] * n
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])

        for i in range(2, n):
            dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

        return dp[n - 1]

    # bottom-up
    # time: O(n)
    # space: O(1)
    def rob1(self, nums: List[int]) -> int:
        n = len(nums)

        if n == 1:
            return nums[0]

        if n == 2:
            return max(nums[0], nums[1])

        prev = nums[0]
        cur = max(nums[0], nums[1])

        for i in range(2, n):
            prev, cur = cur, max(cur, prev + nums[i])

        return cur

    # top-down
    # time: O(n)
    # space: O(n)
    def rob2(self, nums: List[int]) -> int:
        n = len(nums)
        memo = [-1] * n

        def dfs(i):
            if i == 0:
                return nums[0]

            if i == 1:
                return max(nums[0], nums[1])

            if memo[i] != -1:
                return memo[i]

            memo[i] = max(dfs(i - 1), dfs(i - 2) + nums[i])

            return memo[i]

        return dfs(n - 1)


print(Solution().rob1([1, 2, 3, 1]))
print(Solution().rob2([1, 2, 3, 1]))
