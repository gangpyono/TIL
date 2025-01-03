# 다시 볼것
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSameTree1(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True
        if p and not q:
            return False
        if not p and q:
            return False
        if p.val != q.val:
            return False

        left = self.isSameTree1(p.left, q.left)
        right = self.isSameTree1(p.right, q.right)

        return left == right == True and p.val == q.val

    def isSameTree2(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        def isSame(p, q):
            if not p and not q:
                return True

            if (p and not q) or (not p and q):
                return False

            if p.val != q.val:
                return False

            return isSame(p.left, q.left) and isSame(p.right, q.right)

        return isSame(p, q)


p = TreeNode(1)
p.left = TreeNode(2)
p.right = TreeNode(3)

q = TreeNode(1)
q.left = TreeNode(2)
q.right = TreeNode(3)


print(Solution().isSameTree1(p, q))
print(Solution().isSameTree2(p, q))
