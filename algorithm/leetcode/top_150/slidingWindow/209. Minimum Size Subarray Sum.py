from typing import List


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:

        n = len(arr)
        min_length = float("inf")
        window_sum = 0
        left = 0

        for right in range(nums):
            window_sum += nums[right]

            while window_sum >= target:
                min_length = min(min_length, right - left + 1)
                window_sum -= nums[left]
                left += 1

        return min_length

        #     while window_sum >= s:
        # min_length = min(min_length, right - left + 1)
        # window_sum -= arr[left]
        # left += 1

        # for i in range(nums):
        #     window_sum += nums[i] -nums[i-window_size]
        #     max_sum = max(max_sum, window_sum)

        return True


print(Solution().minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
