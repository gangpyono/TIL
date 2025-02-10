import heapq


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:

        q = []

        for i in range(len(nums)):
            heapq.heappush(q, -nums[i])

        res = 0
        for i in range(k):
            res = -heapq.heappop(q)

        return res
