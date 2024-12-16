from typing import List
from collections import deque


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        result = []

        digitsMap = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }

        def dfs(i, curStr):
            if len(curStr) == len(digits):
                result.append(curStr)
                return

            for char in digitsMap[digits[i]]:
                dfs(i + 1, curStr + char)

        if digits:
            dfs(0, "")

        return result


print(Solution().letterCombinations("23"))
