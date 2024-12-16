class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        cursor = 1

        for num in nums:
            if num != nums[cursor-1]:
                nums[cursor] = num
                cursor +=1
        return cursor
  
# print(cursor)
            # idx = 1
            # cur_num = nums[0]
            # for i in range(len(nums)):
            #     if cur_num != nums[i]:
            #         nums[idx] = nums[i]
            #         cur_num = nums[i]
            #         idx += 1
            # return idx
            
    
        
        
        
