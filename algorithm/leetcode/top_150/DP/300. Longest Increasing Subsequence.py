class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        dp = [0] * (len(nums))
        dp[0] = 1
        for i in range(1, len(dp)):
            temp = 0
            for j in range(i - 1, -1, -1):
                if nums[j] < nums[i]:
                    temp = max(temp, dp[j])
            dp[i] = temp + 1
        return max(dp)
