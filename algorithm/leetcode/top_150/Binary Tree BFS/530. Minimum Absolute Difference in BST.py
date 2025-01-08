# 다시 볼것
from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def getMinimumDifference1(self, root: Optional[TreeNode]) -> int:
        result = [float("inf")]
        prev = [None]

        def diff(root):
            if not root:
                return

            diff(root.left)
            if prev[0] == None:
                prev[0] = root
            else:
                result[0] = min(result[0], abs(root.val - prev[0].val))
                prev[0] = root
            diff(root.right)

        diff(root)
        return result[0]

    def getMinimumDifference2(self, root: Optional[TreeNode]) -> int:
        result = [float("inf")]
        prev = [None]

        def dfs(root):
            if node is None:
                return

            dfs(root.left)

            if prev[0] is not None:
                result[0] = min(result[0], root.val - prev[0])

            prev[0] = root.val

            dfs(root.right)

        dfs(root)
        return result[0]


# Time: O(n)
# space: O(n)

root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(6)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)


print(Solution().getMinimumDifference1(root))
# print(Solution().getMinimumDifference2(root))
