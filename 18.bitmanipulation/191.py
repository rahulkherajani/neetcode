# https://leetcode.com/problems/number-of-1-bits/
# Time: O(1) ~ O(32) 32 bit integers
# Space: O(1)
class Solution:
    def hammingWeight(self, n: int) -> int:
        out = 0
        while n:
            out += n % 2
            n >>= 1
        return out