from typing import List

class Solution:
        def isPalindrome(self, s: str) -> bool:
            word = [char for char in s.lower() if char.isalnum()]
            
            return word == word[::-1]


print(Solution().isPalindrome("A man, a plan, a canal: Panama"))

# from typing import List

# class Solution:
#          def isPalindrome(self, s: str) -> bool:
#             temp = ""
#             for char in s:
#                 if (ord(char) >= 65 and ord(char) <= 90) or (ord(char) >= 97 and ord(char) <= 122) or ord(char) >= 48 and ord(char) <= 57:
#                     temp += char
#             temp = temp.lower()
#             print(temp)
            
#             flag = True

#             for i in range(len(temp)):
#                 if temp[i] != temp[len(temp)-1-i]:
#                     print(temp[i], temp[len(temp)-1-i])
#                     flag = False

#             return flag


# print(Solution().isPalindrome("A man, a plan, a canal: Panama"))