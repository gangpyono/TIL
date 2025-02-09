class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return len(nums)

        i = 2
        for j in range(2, len(nums)):
            if nums[i - 1] == nums[j] and nums[i - 2] == nums[j]:
                continue
            nums[i] = nums[j]
            i += 1

        return i
