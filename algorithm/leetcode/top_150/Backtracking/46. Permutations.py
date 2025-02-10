class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        visit = [False] * n
        temp = [0] * n
        ans = []

        def dfs(L):
            if L == n:
                ans.append(temp[:])
            else:
                for i in range(len(nums)):
                    if visit[i] == False:
                        visit[i] = True
                        temp[L] = nums[i]
                        dfs(L + 1)
                        visit[i] = False

        dfs(0)
        return ans
