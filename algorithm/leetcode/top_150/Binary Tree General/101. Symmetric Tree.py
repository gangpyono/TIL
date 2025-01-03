# 다시 볼것
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSymmetric1(self, root: Optional[TreeNode]) -> bool:
        if not root.left and not root.right:
            return True

        def same(root1, root2):
            if not root1 and not root2:
                return True

            if (not root1 and root2) or (root1 and not root2):
                return False

            if root1.val != root2.val:
                return False

            return same(root1.left, root2.right) and same(root1.right, root2.left)

        return same(root.left, root.right)

    def isSymmetric2(self, root: Optional[TreeNode]) -> bool:
        def same(root1, root2):
            if not root1 and not root2:
                return True

            if (not root1 and root2) or (root1 and not root2):
                return False

            if root1.val != root2.val:
                return False

            return same(root1.left, root2.right) and same(root1.right, root2.left)

        return same(root, root)

        # Time: O(n)
        # space: O(n)


root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(2)
root.left.left = TreeNode(3)
root.left.right = TreeNode(4)
root.right.left = TreeNode(4)
root.right.right = TreeNode(3)


print(Solution().isSymmetric1(root))
print(Solution().isSymmetric2(root))
