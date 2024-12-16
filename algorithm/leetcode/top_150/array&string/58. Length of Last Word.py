from typing import List


class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return s.strip().split()[-1]


print(Solution().lengthOfLastWord("Hello World"))
