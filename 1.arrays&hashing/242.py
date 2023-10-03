# https://leetcode.com/problems/valid-anagram/

# Time: O(n)
# Space: O(n)
class Solution1:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)
        
        if len(s) != len(t):
            return False

        countS, countT = {}, {}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        return countS == countT

# Time: O(nlogn)
# Space: O(1)
class Solution2:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)
