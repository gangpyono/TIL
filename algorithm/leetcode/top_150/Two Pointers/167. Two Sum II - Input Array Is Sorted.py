from typing import List


class Solution:
    # two pointer
    def twoSum1(self, numbers: List[int], target: int) -> List[int]:
        n = len(numbers)
        left = 0
        right = n - 1
        while left < right:
            amt = numbers[left] + numbers[right]
            if amt == target:
                return [left + 1, right + 1]
            elif amt > target:
                right -= 1
            else:
                left += 1

    # hash
    def twoSum2(self, numbers: List[int], target: int) -> List[int]:
        numMap = {}
        for i in range(len(numbers)):
            result = target - numbers[i]
            if result in numMap:
                return [numMap[result] + 1, i + 1]
            numMap[numbers[i]] = i


print(Solution().twoSum([2, 7, 11, 15], 9))
