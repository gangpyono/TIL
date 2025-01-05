from collections import defaultdict
from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = defaultdict(list)
        for idx, word in enumerate(strs):
            result["".join(sorted(word))].append(word)
        return [val for val in result.values()]


print(Solution().groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
