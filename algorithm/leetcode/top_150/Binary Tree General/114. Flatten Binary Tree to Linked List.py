# 다시 풀것
def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        prev = [None]

        def dfs(node):
            if not node:
                return

            dfs(node.right)
            dfs(node.left)

            root.right = prev[0]
            root.left = None
            prev[0] = root

        dfs(root)
