from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:

        n = len(nums)
        goal = n - 1

        for i in range(n - 1, -1, -1):
            if i + nums[i] >= goal:
                goal = i
        return goal == 0


print(Solution().canJump([2, 3, 1, 0, 4]))
