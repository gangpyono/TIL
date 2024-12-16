from typing import List
from collections import deque


class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        q = deque([[1, 0]])
        length = len(board)
        visit = set()

        board.reverse()

        def intToPos(square):
            r = (square - 1) // length
            c = (square - 1) % length
            if r % 2 != 0:
                c = length - 1 - c

            return [r, c]

        while q:
            square, moves = q.popleft()
            for i in range(1, 7):
                nextSquare = square + i
                r, c = intToPos(nextSquare)
                if board[r][c] != -1:
                    nextSquare = board[r][c]
                if nextSquare == length * length:
                    return moves + 1
                if nextSquare not in visit:
                    visit.add(nextSquare)
                    q.append([nextSquare, moves + 1])

        return -1


print(
    Solution().snakesAndLadders(
        [
            [-1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, 35, -1, -1, 13, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, 15, -1, -1, -1, -1],
        ]
    )
)
