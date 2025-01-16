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
                    if mutatedGen in bank not in visit:
                        q.append([mutatedGen, cnt + 1])
                        visit.add(mutatedGen)

        return -1

    def minMutation1(self, startGene: str, endGene: str, bank: List[str]) -> int:
        genChars = ["A", "C", "G", "T"]
        q = deque()
        visited = set()
        visited.add(startGene)
        q.append((startGene, 0))

        while q:
            gene, count = q.popleft()
            if gene == endGene:
                return count

            for i in range(8):
                for genChar in genChars:
                    if gene[i] == genChar:
                        continue
                    mutatedGene = gene[:i] + genChar + gene[i + 1 :]
                    if mutatedGene in bank and mutatedGene not in visited:
                        visited.add(mutatedGene)
                        q.append((mutatedGene, count + 1))

        return -1


print(Solution().minMutation("AACCGGTT", "AACCGGTG", ["AACCGGTG"]))
