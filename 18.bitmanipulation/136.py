# https://leetcode.com/problems/single-number
# Time : O(n)
# Space: O(1)
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        out = 0
        for n in nums:
            out = out ^ n
        return out
