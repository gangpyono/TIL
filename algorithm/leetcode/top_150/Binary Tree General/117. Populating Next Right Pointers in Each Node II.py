from collections import deque


# Definition for a Node.
class Node:
    def __init__(
        self,
        val: int = 0,
        left: "Node" = None,
        right: "Node" = None,
        next: "Node" = None,
    ):
        self.val = val
        self.left = left
        self.right = right
        self.next = next


class Solution:
    def connect(self, root: "Node") -> "Node":
        if not root:
            return root

        q = deque()

        q.append(root)

        while q:
            n = len(q)

            for i in range(n - 1):
                q[i].next = q[i + 1]

            for _ in range(n):
                now = q.popleft()
                if now.left:
                    q.append(now.left)
                if now.right:
                    q.append(now.right)

        return root
