# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def mergeSort(head):
            if head is None or head.next is None:
                return head

            fast = head.next
            slow = head

            while fast and fast.next:
                fast = fast.next.next
                slow = slow.next

            mid = slow.next
            slow.next = None

            left = mergeSort(head)
            right = mergeSort(mid)

            return merge(left, right)

        def merge(leftHead, rightHead):
            dummy = ListNode()
            result = dummy

            while leftHead and rightHead:
                if leftHead.val < rightHead.val:
                    result.next = leftHead
                    leftHead = leftHead.next
                else:
                    result.next = rightHead
                    rightHead = rightHead.next
                result = result.next

            result.next = leftHead if leftHead else rightHead
            return dummy.next

        return mergeSort(head)
