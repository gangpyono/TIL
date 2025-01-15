from typing import List


class Solution:
    # Time: O(n)
    def threeSum1(self, nums: List[int]) -> List[List[int]]:
        result = set()
        nums.sort()
        for i in range(len(nums)):
            left = i + 1
            right = len(nums) - 1
            while left < right:
                summ = nums[left] + nums[i] + nums[right]
                if summ == 0:
                    result.add(tuple([nums[left], nums[i], nums[right]]))
                    left, right = left + 1, right - 1
                elif summ > 0:
                    right -= 1
                else:
                    left += 1

        return [list(triplet) for triplet in list(result)]

    # optimization
    # Time: O(n)
    def threeSum2(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        result = []

        for i in range(len(nums)):
            if nums[i] > 0:
                break
            elif i > 0 and nums[i] == nums[i - 1]:
                continue
            else:
                left = i + 1
                right = len(nums) - 1
                while left < right:
                    summ = nums[left] + nums[i] + nums[right]
                    if summ == 0:
                        result.append([nums[left], nums[i], nums[right]])
                        left, right = left + 1, right - 1
                        while left < right and nums[left] == nums[left - 1]:
                            left += 1
                        while left < right and nums[right] == nums[right + 1]:
                            right -= 1
                    elif summ > 0:
                        right -= 1
                    else:
                        left += 1

        return result


print(Solution().threeSum1([-1, 0, 1, 2, -1, -4]))

print(5.5e1)
print(5.5e2)

arr = [1, 2, 3, 4, 5, 5, 5]
remove_set = {3, 5}

result = [x for x in arr if x not in remove_set]
print(result)


dic = {(1, 2, 3): 123, (1, 2, 4): "ff"}

dic[(1, 2, 3)] = "aa"
print(dic)
