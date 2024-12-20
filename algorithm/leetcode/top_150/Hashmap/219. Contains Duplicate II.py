from typing import List


class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:

        d = {}

        for idx, num in enumerate(nums):
            if num in d and abs(d[num] - idx) <= k:
                return True
            d[num] = idx

        return False


print(Solution().containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
