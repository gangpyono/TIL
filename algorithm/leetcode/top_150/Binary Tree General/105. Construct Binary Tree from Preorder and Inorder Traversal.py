# 다시 볼것
from typing import Optional, List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def buildTree(self, preOrder: List[int], inOrder: List[int]) -> Optional[TreeNode]:
        if not preOrder or not inOrder:
            return None

        root = TreeNode(preOrder[0])
        mid = inOrder.index(preOrder[0])

        root.left = self.buildTree(preOrder[1 : mid + 1], inOrder[:mid])
        root.right = self.buildTree(preOrder[mid + 1 :], inOrder[mid + 1 :])
        return root


print(Solution().buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
