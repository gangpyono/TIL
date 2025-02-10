class Solution:
    def combinationSum1(self, candidates: List[int], target: int) -> List[List[int]]:
        n = len(candidates)
        ans = []
        cur = []

        def dfs(L, amt):
            if amt > target:
                return
            if amt == target:
                for a in ans:
                    if sorted(a) == sorted(cur):
                        return
                ans.append(cur[:])
            else:
                for i in range(n):
                    cur.append(candidates[i])
                    dfs(L + 1, amt + candidates[i])
                    cur.pop()

        dfs(0, 0)
        return ans

    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        n = len(candidates)
        ans = []
        cur = []

        def backtrack(i, curSum):
            if curSum == target:
                ans.append(cur[:])
                return

            if curSum > target or i == n:
                return

            cur.append(candidates[i])
            backtrack(i, curSum + candidates[i])
            cur.pop()
            backtrack(i + 1, curSum)

        backtrack(0, 0)
