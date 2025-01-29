class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        n = len(board)
        m = len(board[0])
        dy = [1, 0, -1, 0]
        dx = [0, 1, 0, -1]
        visited = [[False] * m for _ in range(n)]

        def dfs(y, x):
            if board[y][x] == "X" or visited[y][x] == True:
                return

            visited[y][x] = True
            for i in range(4):
                ny = y + dy[i]
                nx = x + dx[i]
                if ny >= n or nx >= m or ny <= -1 or nx <= -1:
                    continue
                dfs(ny, nx)

        for i in range(n):
            for j in range(m):
                if (j == 0 or j == m - 1 or i == 0 or i == n - 1) and board[i][
                    j
                ] == "O":
                    dfs(i, j)

        for i in range(n):
            for j in range(m):
                if visited[i][j] == False and board[i][j] == "O":
                    board[i][j] = "X"

        for i in range(n):
            for j in range(m):
                if visited[i][j] == True:
                    board[i][j] = "O"
