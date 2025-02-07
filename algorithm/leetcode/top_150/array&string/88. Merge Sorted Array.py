class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        lastIdx = len(nums1) - 1

        while m > 0 and n > 0:
            if nums1[m - 1] > nums2[n - 1]:
                nums1[lastIdx] = nums1[m - 1]
                m -= 1
            else:
                nums1[lastIdx] = nums2[n - 1]
                n -= 1
            lastIdx -= 1

        while n > 0:
            nums1[lastIdx] = nums2[n - 1]
            lastIdx -= 1
            n -= 1
