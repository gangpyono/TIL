from typing import List


# 다시 풀것
class Solution:
    def convert(self, s: str, numRows: int) -> str:

        if numRows == 1:
            return s

        arr = [[0 for y in range(1000)] for x in range(numRows)]
        h = len(arr)
        print(len(s), "st")
        n = 0
        i = 0
        j = 0

        while n < len(s):
            while j < h and n < len(s):
                arr[j][i] = s[n]
                n += 1
                j += 1

            j -= 2
            i += 1

            while j >= 0 and n < len(s):
                arr[j][i] = s[n]
                n += 1
                j -= 1
                i += 1
            j += 2
            i -= 1

        result = ""
        for i in range(len(arr)):
            for j in range(len(arr[0])):
                if arr[i][j] != 0:
                    result += arr[i][j]

    def convert2(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        arr = [[""] for x in range(numRows)]

        i = 0
        j = 0
        n = len(s)
        d = "down"  # "up"
        while i < n:
            arr[j].append(s[i])
            i += 1
            if d == "down" and j < len(arr) - 1:
                j += 1
                continue

            if d == "down" and j == len(arr) - 1:
                d = "up"
                j -= 1
                continue

            if d == "up" and j > 0:
                j -= 1
                continue

            if d == "up" and j == 0:
                j += 1
                d = "down"

        result = ""

        for i in range(len(arr)):
            for j in range(len(arr[i])):
                result += arr[i][j]

        return result

    def convert3(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        rows = [[""] for x in range(numRows)]

        d = 1
        i = 0
        for j in range(len(s)):
            rows[i].append(s[j])
            if i == 0:
                d = 1
            elif i == numRows - 1:
                d = -1
            i += d

        result = ""
        for i in range(numRows):
            result += "".join(rows[i])

        return result


print(Solution().convert("PAYPALISHIRING", 3))
