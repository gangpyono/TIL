class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        n = len(grid)
        m = len(grid[0])
        dy = [1, 0, -1, 0]
        dx = [0, 1, 0, -1]
        count = 0

        def dfs(y, x):
            if grid[y][x] == "0":
                return

            grid[y][x] = "0"

            for i in range(4):
                ny = y + dy[i]
                nx = x + dx[i]
                if ny >= n or nx >= m or ny <= -1 or nx <= -1:
                    continue
                dfs(ny, nx)

        for i in range(n):
            for j in range(m):
                if grid[i][j] == "1":
                    count += 1
                    dfs(i, j)

        return count
