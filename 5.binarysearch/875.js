/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * https://leetcode.com/problems/koko-eating-bananas/
 * Time O(N * log(M)) | Space O(1)
 */
var minEatingSpeed = function (piles, h) {
  let left = 1,
    right = Math.max(...piles);
  let res = right;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let hours = 0;
    for (i of piles) {
      hours += Math.ceil(i / mid);
    }
    if (hours <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
};
