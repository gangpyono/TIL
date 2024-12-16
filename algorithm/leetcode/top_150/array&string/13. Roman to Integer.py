from typing import List


class Solution:
    def romanToInt(self, s: str) -> int:
        result = 0
        i = 0
        length = len(s)

        m = {
            #
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }

        while i < length:
            cur = s[i]

            if i != length - 1:
                nx = s[i + 1]
                if (
                    (cur == "I" and nx == "V")
                    or (cur == "I" and nx == "X")
                    or (cur == "X" and nx == "L")
                    or (cur == "X" and nx == "C")
                    or (cur == "C" and nx == "D")
                    or (cur == "C" and nx == "M")
                ):
                    result += m[nx] - m[cur]
                    i += 2
                else:
                    result += m[cur]
                    i += 1
            else:
                result += m[cur]
                i += 1

        return result


print(Solution().romanToInt("III"))
