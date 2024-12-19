from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]


print(Solution().twoSum([3, 3], 6))


# 다시볼것
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        numMap = {}

        for i in range(len(nums)):
            if target - nums[i] in numMap:
                return [numMap[target - nums[i]], i]
            else:
                numMap[nums[i]] = i


print(Solution().twoSum([2, 7, 11, 15], 9))
