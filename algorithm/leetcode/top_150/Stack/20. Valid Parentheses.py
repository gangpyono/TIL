class Solution:
    def isValid1(self, s: str) -> bool:
        stack = []

        for char in s:
            if (
                char == ")"
                and len(stack) != 0
                and stack[len(stack) - 1] == "("
                or char == "]"
                and len(stack) != 0
                and stack[len(stack) - 1] == "["
                or char == "}"
                and len(stack) != 0
                and stack[len(stack) - 1] == "{"
            ):
                stack.pop()
            else:
                stack.append(char)

        return len(stack) == 0

    def isValid2(self, s: str) -> bool:
        hashmap = {")": "(", "]": "[", "}": "{"}
        stack = []

        for char in s:
            if char not in hashmap:
                stack.append(char)
            elif not stack:
                return False
            else:
                popped = stack.pop()
                if popped != hashmap[char]:
                    return False

        return not stack


print(Solution().isValid("()[]{}"))
