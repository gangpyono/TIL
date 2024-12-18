class Solution:
    def strStr(self, haystack: str, needle: str) -> int:

        result = haystack.replace(needle, "A")
        idx = -1

        for i in range(len(result)):
            if result[i] == "A":
                idx = i
                break

        return idx


print(Solution().strStr("sadbutsad", "sad"))
