from typing import List


# 다시 풀것
class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join([x for x in list(reversed(s.strip().split(" "))) if x != ""])

    def reverseWords(self, s: str) -> str:
        return " ".join(reversed(s.split()))

    def reverseWords(self, s: str) -> str:
        return " ".join(s.split()[::-1])


print(Solution().reverseWords("the sky is blue"))
