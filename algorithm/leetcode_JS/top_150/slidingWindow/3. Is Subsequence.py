class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_length = float("-inf")
        left = 0

        for right in range(len(s)):
            if s[right] in s[left:right]:
                for i in range(left, right):
                    if s[i] == s[right]:
                        left = i + 1
                        break

            max_length = max(max_length, right - left + 1)

        return max_length


print(Solution().lengthOfLongestSubstring("pwwkew"))
