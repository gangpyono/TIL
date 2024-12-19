from collections import Counter


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return (
            True
            if Counter(s) & Counter(t) == Counter(s)
            and Counter(s) & Counter(t) == Counter(t)
            else False
        )


print(Solution().isAnagram("anagram", "nagaram"))


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False

        sorted_s = sorted(s)
        sorted_t = sorted(t)

        for i in range(len(sorted_s)):
            if sorted_s[i] != sorted_t[i]:
                return False

        return True


print(Solution().isAnagram("anagram", "nagaram"))


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False

        for c in set(s):
            if s.count(c) != t.count(c):
                return False

        return True


print(Solution().isAnagram("anagram", "nagaram"))
