# 다시풀것


class Solution:
    def intToRoman1(self, num: int) -> str:
        roman = {
            "I": 1,
            "IV": 4,  #
            "V": 5,
            "IX": 9,  #
            "X": 10,
            "XL": 40,  #
            "L": 50,
            "XC": 90,  #
            "C": 100,
            "CD": 400,  #
            "D": 500,
            "CM": 900,
            "M": 1000,
        }
        result = []

        while num != 0:
            if num >= 1000:
                count = num // roman["M"]
                for i in range(0, count):
                    result.append("M")
                num -= count * roman["M"]
                continue

            if num >= 900 and num <= 999:
                result.append("CM")
                num -= roman["CM"]
                continue

            if num < 900 and num >= 500:
                result.append("D")
                num -= roman["D"]
                continue

            if num < 500 and num >= 400:
                result.append("CD")
                num -= roman["CD"]
                continue

            if num < 400 and num >= 100:
                count = num // roman["C"]
                for i in range(0, count):
                    result.append("C")
                num -= count * roman["C"]
                continue

            if num < 100 and num >= 90:
                result.append("XC")
                num -= roman["XC"]
                continue

            if num < 90 and num >= 50:
                result.append("L")
                num -= roman["L"]
                continue

            if num < 50 and num >= 40:
                result.append("XL")
                num -= roman["XL"]
                continue

            if num < 40 and num >= 10:
                count = num // roman["X"]
                for i in range(0, count):
                    result.append("X")
                num -= count * roman["X"]
                continue

            if num == 9:
                result.append("IX")
                num -= roman["IX"]
                continue

            if num < 9 and num >= 5:
                result.append("V")
                num -= roman["V"]
                continue

            if num == 4:
                result.append("IV")
                num -= roman["IV"]
                continue

            if num < 4:
                count = num // roman["I"]
                for i in range(0, count):
                    result.append("I")
                num -= count * roman["I"]
                continue

        return "".join(result)

    def intToRoman2(sef, num: int) -> str:
        symbolList = [
            [1000, "M"],
            [900, "CM"],
            [500, "D"],
            [400, "CD"],
            [100, "C"],
            [90, "XC"],
            [50, "L"],
            [40, "XL"],
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"],
            [1, "I"],
        ]

        result = ""

        for val, sym in symbolList:
            if num // val:
                count = num // val
                result += count * sym
                num = num % val

        return result


print(Solution().intToRoman2(3749))
