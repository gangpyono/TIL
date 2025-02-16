from collections import deque


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        q = deque()
        q.append(root)
        answer = []
        isEven = True
        while q:
            n = len(q)
            temp = []
            for _ in range(n):
                popped = q.popleft()
                temp.append(popped.val)
                if popped.left:
                    q.append(popped.left)
                if popped.right:
                    q.append(popped.right)

            if isEven:
                answer.append(temp)
            else:
                answer.append(temp[::-1])
            isEven = not isEven

        return answer

    def zigzagLevelOrder2(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        q = deque()
        q.append(root)
        answer = []
        isEven = True
        while q:
            n = len(q)
            level = [0] * n
            for i in range(n):
                popped = q.popleft()
                if popped.left:
                    q.append(popped.left)
                if popped.right:
                    q.append(popped.right)
                if isEven:
                    level[i] = popped.val
                else:
                    level[n - 1 - i] = popped.val

            answer.append(level)
            isEven = not isEven

        return answer
