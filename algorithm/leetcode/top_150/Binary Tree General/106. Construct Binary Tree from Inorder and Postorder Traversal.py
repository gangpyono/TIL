# 다시 볼것
from typing import Optional, List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def buildTree(self, inOrder: List[int], postOrder: List[int]) -> Optional[TreeNode]:
        if not inOrder or not postOrder:
            return None

        root = TreeNode(postOrder[-1])
        mid = inOrder.index(postOrder[-1])

        root.left = self.buildTree(inOrder[:mid], postOrder[:mid])
        root.right = self.buildTree(inOrder[mid + 1 :], postOrder[mid:-1])
        return root


print(Solution().buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))
