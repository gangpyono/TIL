# 다시 볼것
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:

        def DFS(root, cur_sum):
            if not root:
                return False

            cur_sum += root.val

            if not root.left and not root.right:
                return cur_sum == targetSum

            return DFS(root.left, cur_sum) or DFS(root.right, cur_sum)

        return DFS(root, 0)


root = TreeNode(1)
root.left = TreeNode(2)


print(Solution().hasPathSum(root, 1))
