from typing import List
from collections import deque


class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        result = []

        def dfs(L, cur):
            if len(cur) == k:
                result.append(cur)
                return

            for i in range(L + 1, n + 1):
                dfs(i, cur + [i])

        dfs(0, [])

        return result


print(Solution().combine(4, 2))


#  for i in range(1, len(arr) + 1):
#             for j in range(i + 1, len(arr) + 1):
#                 print(i, j)
