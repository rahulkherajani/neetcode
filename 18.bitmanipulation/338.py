# https://leetcode.com/problems/counting-bits/
# Time: O(n)
# Space: O(1)
# Watch: https://www.youtube.com/watch?v=RyBM56RIWrM&t=787s&ab_channel=NeetCode
class Solution:
    def countBits(self, n: int) -> List[int]:
        # O(nlogn) approach
        # ans = []
        # for i in range(n+1):
        #     out = 0
        #     while i:
        #         out += i % 2
        #         i >>= 1
        #     ans.append(out)
        # return ans

        dp = [0] * (n+1)
        offset = 1
        for i in range(1, n+1):
            if i == offset * 2:
                offset = i
            dp[i] = 1 + dp[ i - offset]
        return dp