from typing import List


class Solution:
    # for loop
    def twoSum1(self, nums: List[int], target: int) -> List[int]:

        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]

    # dict
    def twoSum2(self, nums: List[int], target: int) -> List[int]:

        d = {}

        for i in range(len(nums)):
            if target - nums[i] in d:
                return [d[target - nums[i]], i]
            else:
                d[nums[i]] = i

    # backtracking
    def twoSum3(self, nums: List[int], target: int) -> List[int]:

        result = []

        def dfs(i, total, indices):
            if len(indices) == 2 and total == target:
                result.extend(indices)
                return

            if len(indices) == 2:
                return

            for j in range(i, len(nums)):
                indices.append(j)
                dfs(j + 1, total + nums[j], indices)
                indices.pop()

        dfs(0, 0, [])
        return result


print(Solution().twoSum1([3, 2, 4], 6))
print(Solution().twoSum2([3, 2, 4], 6))
print(Solution().twoSum3([3, 2, 4], 6))
