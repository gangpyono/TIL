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
