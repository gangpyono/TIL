from collections import Counter


class Solution:
    # time: O(n)
    # space: O(n)
    def majorityElement1(self, nums: List[int]) -> int:
        flag = len(nums) / 2
        dic = {}

        for num in nums:
            if num in dic:
                dic[num] += 1
            else:
                dic[num] = 1

        for key, val in dic.items():
            if val > flag:
                return key

    # time: O(n)
    # space: O(1)
    def majorityElement2(self, nums: List[int]) -> int:
        ans = -1
        count = 0

        for num in nums:
            if count == 0:
                ans = num

            if ans == num:
                count += 1
            else:
                count -= 1

        return ans
