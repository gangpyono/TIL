# 다시 풀것
from typing import List


class Solution:
    def productExceptSelf1(self, nums: List[int]) -> List[int]:
        answer = [0 for i in range(len(nums))]
        L = [1 for i in range(len(nums))]
        R = [1 for i in range(len(nums))]

        n = len(nums)
        for idx in range(n):
            if idx == 0:
                L[idx] = 1
                R[n - 1 - idx] = 1
            else:
                L[idx] = nums[idx - 1] * L[idx - 1]
                R[n - 1 - idx] = nums[n - idx] * R[n - idx]

        for idx in range(len(nums)):
            answer[idx] = L[idx] * R[idx]

        return answer

    def productExceptSelf2(self, nums: List[int]) -> List[int]:
        n = len(nums)
        answer = [0] * n
        l_arr = [0] * n
        r_arr = [0] * n
        l_mult = 1
        r_mult = 1

        for i in range(n):
            j = -i - 1
            l_arr[i] = l_mult
            l_mult *= nums[i]
            r_arr[j] = r_mult
            r_mult *= nums[j]

        for i in range(n):
            answer[i] = l_arr[i] * r_arr[i]

        return answer


print(Solution().productExceptSelf2([1, 2, 3, 4]))
