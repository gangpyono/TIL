from typing import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        result = min(strs, key=len)

        for i in range(1, len(strs)):
            for j in range(min(len(strs[i]), len(result))):
                if strs[i][j] != result[j]:
                    result = result[:j]
                    break

        return result


print(Solution().longestCommonPrefix(["ab", "a"]))


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix = strs[0]
        n = len(prefix)

        for i in range(1, len(strs)):
            while prefix[:n] != strs[i][:n]:
                n -= 1
                if strs[i][:n] == prefix[:n]:
                    prefix = prefix[:n]
                    break
        return prefix


print(Solution().longestCommonPrefix(["flower", "flow", "flight"]))
