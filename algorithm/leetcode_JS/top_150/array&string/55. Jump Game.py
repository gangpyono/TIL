from typing import List

class Solution:
     def canJump(self, nums: List[int]) -> bool:

        n = len(nums)
        goal = n -1

        for i in range(n-2, -1,-1):
            if i + nums[i] >= goal:
                goal = i
        return True if goal == 0 else False

print(Solution().canJump([2,3,1,0,4]))