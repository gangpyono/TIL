# 다시 풀것
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def countNodes1(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0

        q = [root]
        result = 0
        while q:
            now = q.pop()
            result += 1
            if now.left:
                q.append(now.left)
            if now.right:
                q.append(now.right)

        return result

    def countNodes2(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        return self.countNodes(root.left) + self.countNodes(root.right) + 1
