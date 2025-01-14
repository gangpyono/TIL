from typing import List


class Solution:
    def searchInsert_recursive(self, nums: List[int], target: int) -> int:
        def binarySearch(nums, target, start, end):
            if start > end:
                return end + 1
            mid = (start + end) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                return binarySearch(nums, target, mid + 1, end)
            else:
                return binarySearch(nums, target, start, mid - 1)

            return None

        return binarySearch(nums, target, 0, len(nums) - 1)

    def searchInsert_loop(self, nums: List[int], target: int) -> int:
        def binarySearch(nums, target, start, end):
            start = 0
            end = len(nums) - 1

            while start <= end:
                mid = (start + end) // 2
                if nums[mid] == target:
                    return mid
                elif nums[mid] < target:
                    start = mid + 1
                else:
                    end = mid - 1

            return end + 1


print(Solution().searchInsert_recursive([1, 3, 5, 6], 5))
