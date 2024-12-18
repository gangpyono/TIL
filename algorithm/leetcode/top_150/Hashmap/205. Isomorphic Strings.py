# 다시볼것

from collections import defaultdict


class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        char_map = {}
        n = len(s)

        for i in range(n):
            if s[i] in char_map:
                if char_map[s[i]] != t[i]:
                    return False
            else:
                if t[i] in char_map.values():
                    return False
                else:
                    char_map[s[i]] = t[i]

        return True


print(Solution().isIsomorphic("paper", "title"))


class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        char_index_s = {}
        char_index_t = {}
        n = len(s)

        for i in range(n):
            if s[i] not in char_index_s:
                char_index_s[s[i]] = i

            if t[i] not in char_index_t:
                char_index_t[t[i]] = i

            if char_index_s[s[i]] != char_index_t[t[i]]:
                return False

        return True


print(Solution().isIsomorphic("aa", "bc"))
