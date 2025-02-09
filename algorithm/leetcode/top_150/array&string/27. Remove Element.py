class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0
        temp = []
        for num in nums:
            if num != val:
                temp.append(num)
                k += 1

        for i in range(len(temp)):
            nums[i] = temp[i]

        return k
