# 다시 볼것
from typing import List
from collections import deque


class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        q = deque([[startGene, 0]])
        visit = set()
        visit.add(startGene)

        while q:
            gen, cnt = q.popleft()
            if gen == endGene:
                return cnt

            for i in range(len(gen)):
                for char in "ACGT":
                    mutatedGen = gen[:i] + char + gen[i + 1 :]
                    if mutatedGen in bank:
                        q.append([mutatedGen, cnt + 1])
                        visit.add(mutatedGen)

        return -1


print(Solution().minMutation("AACCGGTT", "AACCGGTG", ["AACCGGTG"]))
