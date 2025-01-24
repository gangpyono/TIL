from collections import deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class BSTIterator1:
    # 큐 사용
    def __init__(self, root: Optional[TreeNode]):
        self.root = root
        self.cur = deque()

        def dfs(node):
            if not node:
                return

            dfs(node.left)
            self.cur.append(node)
            dfs(node.right)

        dfs(root)

    def next(self) -> int:
        popped = self.cur.popleft()
        return popped.val

    def hasNext(self) -> bool:
        return True if self.cur else False


class BSTIterator2:
    # 인덱스로 접근
    def __init__(self, root: Optional[TreeNode]):
        self.root = root
        self.arr = []
        self.curIndex = 0

        def dfs(node):
            if node is None:
                return

            dfs(node.left)
            self.arr.append(node)
            dfs(node.right)

        dfs(root)

    def next(self) -> int:
        node = self.arr[self.curIndex]
        self.curIndex += 1
        return node.val

    def hasNext(self) -> bool:
        return True if self.curIndex < len(self.arr) else False
