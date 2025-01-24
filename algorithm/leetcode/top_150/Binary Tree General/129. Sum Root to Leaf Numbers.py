class Solution:
    def sumNumbers1(self, root: Optional[TreeNode]) -> int:
        def dfs(node, curSum):
            if not node:
                return 0

            curSum += str(node.val)

            if not node.left and not node.right:
                return int(curSum)

            return dfs(node.left, curSum) + dfs(node.right, curSum)

        return dfs(root, "")

    def sumNumbers2(self, root: Optional[TreeNode]) -> int:
        def dfs(node, curSum):
            if not node:
                return

            curSum += str(node.val)

            if not node.left and not node.right:
                result.append(curSum)
                return

            dfs(node.left, curSum)
            dfs(node.right, curSum)

        dfs(root, "")
        return sum([int(x) for x in result])
