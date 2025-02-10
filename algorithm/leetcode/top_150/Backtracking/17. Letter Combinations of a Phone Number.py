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

    def letterCombinations2(self, digits: str) -> List[str]:
        dic = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }

        n = len(digits)
        temp = [""] * n
        ans = []

        def dfs(L):
            if L == n:
                ans.append("".join(temp[:]))
            else:
                for i in dic[digits[L]]:
                    temp[L] = i
                    dfs(L + 1)

        if len(digits) != 0:
            dfs(0)

        return ans


print(Solution().letterCombinations("23"))
