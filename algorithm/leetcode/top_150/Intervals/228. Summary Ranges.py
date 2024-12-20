from typing import List


# 다시 볼것
class Solution:
    def summaryRanges1(self, nums: List[int]) -> List[str]:
        result = []

        start = 0

        for i, num in enumerate(nums):
            if i < len(nums) - 1:
                if nums[i] + 1 != nums[i + 1]:
                    if start != i:
                        result.append(str(nums[start]) + "->" + str(nums[i]))
                    else:
                        result.append(str(nums[start]))
                    start = i + 1

            else:
                if start != i:
                    result.append(str(nums[start]) + "->" + str(nums[i]))
                else:
                    result.append(str(nums[start]))

        return result

    def summaryRanges2(self, nums: List[int]) -> List[str]:
        result = []
        i = 0

        while i < len(nums):
            start = nums[i]

            while i < len(nums) - 1 and nums[i] + 1 == nums[i + 1]:
                i += 1

            if nums[i] != start:
                result.append(str(start) + "->" + str(nums[i]))
            else:
                result.append(str(start))

            i += 1

        return result


print(Solution().summaryRanges2([0, 1, 2, 4, 5, 7]))
