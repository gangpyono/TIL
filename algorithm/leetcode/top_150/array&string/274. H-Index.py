from typing import List

# 다시 풀것


class Solution:
    # Time: O(n2)
    def hIndex1(self, citations: List[int]) -> int:
        hIndex = 0

        citations.sort()
        for i in range(len(citations)):
            if citations[i] == 0:
                continue
            count = 0
            for j in range(len(citations)):
                if citations[j] == 0:
                    continue
                if citations[j] >= citations[i]:
                    count += 1

            res = min(count, citations[i])
            hIndex = max(hIndex, res)

        return hIndex

    # Time: O(n2)
    def hIndex2(self, citations: List[int]) -> int:
        hIndex = 0

        n = len(citations)
        for h in range(n + 1):
            count = 0
            for citation in citations:
                if citation >= h:
                    count += 1

            if h <= count:
                hIndex = h
        return hIndex

    # Time: O(n)
    def hIndex3(self, citations: List[int]) -> int:
        n = len(citations)
        paper_counts = [0 for _ in range(len(citations) + 1)]

        for i in range(n):
            paper_counts[min(n, citations[i])] += 1

        h = n
        papers = paper_counts[n]

        while papers < h:
            h -= 1
            papers += paper_counts[h]

        return h


print(Solution().hIndex3([3, 0, 6, 1, 5]))
