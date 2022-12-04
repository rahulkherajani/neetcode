"""
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Time complexity :O(n).
n is the length of the input string.
It will iterate n times to get the result.

Space complexity: O(m)
m is the number of unique characters of the input.
We need a dictionary to store unique characters.
"""
"""
If s[r] not in seen, we can keep increasing the window size by moving right pointer

There are two cases if s[r] in seen:
case1: s[r] is inside the current window, we need to change the window by moving left pointer to seen[s[r]] + 1.
case2: s[r] is not inside the current window, we can keep increase the window
"""
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = {}
        l = 0
        output = 0
        for r in range(len(s)):
            if s[r] not in seen:
                output = max(output,r-l+1)
            else:
                if seen[s[r]] < l:
                    output = max(output,r-l+1)
                else:
                    l = seen[s[r]] + 1
            seen[s[r]] = r
        return output
            