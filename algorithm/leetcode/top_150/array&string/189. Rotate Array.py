class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        n = len(nums)
        temp = [0] * n
        k = k % n

        def reverse(arr, start, end):
            while start <= end:
                arr[start], arr[end] = arr[end], arr[start]
                start += 1
                end -= 1

        reverse(nums, 0, len(nums) - 1)
        reverse(nums, 0, k - 1)
        reverse(nums, k, len(nums) - 1)
