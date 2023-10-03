# https://leetcode.com/problems/two-sum/submissions/
# Time: O(n)
# Space: O(n)
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevNums = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in prevNums:
                return [prevNums[diff], i]
            prevNums[nums[i]] = i
