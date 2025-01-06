# 다시 풀것
from typing import List


class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        direction = "right"
        m = len(matrix)
        n = len(matrix[0])
        i = 0
        j = 0

        visited = [[0] * n for _ in range(m)]
        result = []

        while i >= 0 and j >= 0 and i < m and j < n and visited[i][j] == 0:
            if direction == "right":
                visited[i][j] = 1
                result.append(matrix[i][j])
                if j + 1 >= n or visited[i][j + 1] == 1:
                    direction = "bottom"
                    i += 1
                else:
                    j += 1
            elif direction == "bottom":
                visited[i][j] = 1
                result.append(matrix[i][j])
                if i + 1 >= m or visited[i + 1][j] == 1:
                    direction = "left"
                    j -= 1
                else:
                    i += 1

            elif direction == "left":
                visited[i][j] = 1
                result.append(matrix[i][j])
                if j - 1 < 0 or visited[i][j - 1] == 1:
                    direction = "up"
                    i -= 1
                else:
                    j -= 1

            elif direction == "up":
                visited[i][j] = 1
                result.append(matrix[i][j])
                if i - 1 < 0 or visited[i - 1][j] == 1:
                    direction = "right"
                    j += 1
                else:
                    i -= 1
        return result


print(Solution().spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
