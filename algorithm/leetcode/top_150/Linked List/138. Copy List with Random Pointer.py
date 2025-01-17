# 다시 볼것
from typing import Optional


class Node:
    def __init__(self, x: int, next: "Node" = None, random: "Node" = None):
        self.val = int(x)
        self.next = next
        self.random = random


class Solution:
    def copyRandomList(self, head: "Optional[Node]") -> "Optional[Node]":
        if not head:
            return None

        curr = head
        oldToNew = {}
        while curr:
            node = Node(curr.val)
            oldToNew[curr] = node
            curr = curr.next

        curr = head

        while curr:
            node = oldToNew[curr]
            nextNode = oldToNew[curr.next] if curr.next else None
            randomNode = oldToNew[curr.random] if curr.random else None

            newNode = node
            newNode.next = nextNode
            newNode.random = randomNode

            curr = curr.next

        return oldToNew[head]


head = Node(7)
node2 = Node(13)
node3 = Node(11)
node4 = Node(10)
node5 = Node(1)
head.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
head.random = None
node2.random = head
node3.random = node5
node4.random = node3
node5.random = head

print(Solution().copyRandomList(head))
