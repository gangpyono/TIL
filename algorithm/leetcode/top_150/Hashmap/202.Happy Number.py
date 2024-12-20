from typing import List


# 다시 볼것
class Solution:
    def isHappy1(self, n: int) -> bool:

        temp = set()
        while True:
            if n == 1:
                return True

            result = 0
            for char in str(n):
                square = pow(int(char), 2)
                result += square
            n = result
            if n in temp:
                return False
            else:
                temp.add(n)

    def isHappy2(self, n: int) -> bool:
        visit = set()
        while n not in visit:
            visit.add(n)
            n = self.sumOfSquares(n)
            if n == 1:
                return True
        return False

    def sumOfSquares(self, n: int) -> int:
        result = 0
        while n != 0:
            digit = n % 10
            result += pow(digit, 2)
            n = n // 10

        return result


print(Solution().isHappy(2))
