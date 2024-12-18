from collections import Counter


# 다시볼것
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ransomNoteCounter = Counter(ransomNote)
        magazineCounter = Counter(magazine)
        ransomNoteCounter.subtract(magazineCounter)

        flag = True

        for key, value in ransomNoteCounter.items():
            if value > 0:
                flag = False
                break

        return flag


print(Solution().canConstruct("aa", "aab"))


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        magazineCounter = Counter(magazine)

        for char in ransomNote:
            magazineCounter.subtract(char)
            if magazineCounter[char] < 0:
                return False

        return True


print(Solution().canConstruct("aa", "aab"))


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ransomNoteCounter = Counter(ransomNote)
        magazineCounter = Counter(magazine)

        if ransomNoteCounter & magazineCounter == ransomNoteCounter:
            return True
        else:
            return False


print(Solution().canConstruct("a", "b"))
