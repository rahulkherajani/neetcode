# https://leetcode.com/problems/word-pattern/
# Time: O()
# Space: O()
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        s = s.split()
        return (len(set(pattern)) ==
                len(set(s)) ==
                len(set(zip_longest(pattern,s))))