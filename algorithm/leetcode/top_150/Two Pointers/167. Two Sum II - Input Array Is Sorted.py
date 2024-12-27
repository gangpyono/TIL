from typing import List


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1

        while True:
            if numbers[left] + numbers[right] < target:
                left += 1
                continue
            elif numbers[left] + numbers[right] > target:
                right -= 1
                continue
            else:
                return [left, right]


print(Solution().twoSum([2, 7, 11, 15], 9))
