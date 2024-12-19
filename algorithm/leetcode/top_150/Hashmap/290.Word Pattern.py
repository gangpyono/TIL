from collections import defaultdict


class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        match_map = {}

        words = s.split()
        if len(pattern) != len(words):
            return False

        n = min(len(pattern), len(words))

        for i in range(n):
            if pattern[i] in match_map:
                if match_map[pattern[i]] != words[i]:
                    return False
            elif words[i] in match_map.values():
                return False
            match_map[pattern[i]] = words[i]

        return True


print(Solution().wordPattern("aaa", "aa aa aa aa"))


from itertools import zip_longest


# solution
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:

        s = s.split()

        return len(set(pattern)) == len(set(s)) == len(set(zip_longest(pattern, s)))


print(Solution().wordPattern("aaa", "aa aa aa aa"))
